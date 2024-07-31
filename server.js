const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://postgres:root@localhost:5432/dimen' });
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3501;

const corsOptions = {
    origin: 'http://localhost:3001', // Allow only this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  };

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));


// Insert project into the database
app.post('/api/projects', async (req, res) => {
    const { name, userId } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Project name is required' });
  }

  try {
    const result = await pool.query(
        'INSERT INTO dimen.projects (name, userid) VALUES ($1, $2) RETURNING id',
        [name, userId]
      );
    res.status(201).json({ id: result.rows[0].id, name });
  } catch (error) {
    console.error('Error inserting project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/folders', async (req, res) => {
    const { name, userId } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Project name is required' });
  }

  try {
    const result = await pool.query(
        'INSERT INTO dimen.folders (name, userid) VALUES ($1, $2) RETURNING id',
        [name, userId]
      );
    res.status(201).json({ id: result.rows[0].id, name });
  } catch (error) {
    console.error('Error inserting project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//fetch projects
app.get('/api/projects', async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameter
  
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
  
    try {
      const result = await pool.query(
        'SELECT id, name FROM dimen.projects WHERE userid = $1 ORDER BY id DESC',
        [userId]
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // fetch folders
app.get('/api/folders', async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameter
  
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
  
    try {
      const result = await pool.query(
        'SELECT id, name FROM dimen.folders WHERE userid = $1 ORDER BY id DESC',
        [userId]
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching folders:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // server.js
app.get('/api/teams', async (req, res) => {
    const userId = req.query.userId; // Get userId from query parameter
  
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }
  
    try {
      const result = await pool.query(
        'SELECT id, name FROM dimen.teams WHERE userid = $1 ORDER BY id DESC',
        [userId]
      );
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching teams:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.get('/api/user/:id', async (req, res) => {
    const userId = req.params.id;
    try {
      // Replace with your database query logic
      const user = await pool.query('SELECT email FROM dimen.users WHERE id = $1', [userId]);
      if (user.rows.length > 0) {
        res.json({ email: user.rows[0].email });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/dashboard/team/:id', async (req, res) => {
    const teamId = req.params.id;
  
    try {
      // Query to fetch projects with the same team ID
      const result = await pool.query('SELECT * FROM dimen.projects WHERE team_id = $1', [teamId]);
  
      // Check if any projects were found
      if (result.rows.length > 0) {
        res.json(result.rows);
      } else {
        res.status(404).json({ message: 'No projects found for this team ID.' });
      }
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



  app.post('/api/teams', async (req, res) => {
    const { name, userId, emails } = req.body;
  
    if (!name || !userId) {
      return res.status(400).json({ error: 'Team name and user ID are required' });
    }
  
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
  
      // Insert team with userId
      const result = await client.query(
        'INSERT INTO dimen.teams (name, userid) VALUES ($1, $2) RETURNING id',
        [name, userId]
      );
      const teamId = result.rows[0].id;
  
      // If emails are provided, insert users
      if (emails) {
        const emailList = emails.split(',').map(email => email.trim());
        for (const email of emailList) {
          // Find or create the user in the users table
          const userResult = await client.query(
            'SELECT id FROM dimen.users WHERE email = $1',
            [email]
          );
          const user = userResult.rows[0];
  
          if (user) {
            await client.query(
              'INSERT INTO dimen.team_users (team_id, userid, invitation_sts) VALUES ($1, $2, $3)',
              [teamId, user.id, 'SENT']
            );
          } else {
            // Optionally, create a new user if not found
            // await client.query(
            //   'INSERT INTO dimen.users (email) VALUES ($1) RETURNING id',
            //   [email]
            // );
            // ... then insert into team_users
          }
        }
      }
  
      await client.query('COMMIT');
      res.status(201).json({ message: 'Team created and users invited' });
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error creating team and inviting users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } finally {
      client.release();
    }
  });
  
  
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
