const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const pool = new Pool({ connectionString: 'postgresql://postgres:root@localhost:5432/dimen' });
const cors = require('cors');
const cookieParser = require('cookie-parser');
const axios = require("axios");


const app = express();
const port = 3501;

const corsOptions = {
    origin: 'http://localhost:3001', 
    credentials: true, 
  };


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));


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



app.get('/api/projects', async (req, res) => {
    const userId = req.query.userId;
  
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


app.get('/api/folders', async (req, res) => {
    const userId = req.query.userId; 
  
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



app.get('/api/teams', async (req, res) => {
    const userId = req.query.userId; 
  
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
     
      const result = await pool.query('SELECT * FROM dimen.projects WHERE team_id = $1', [teamId]);
  
    
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
  



  app.post("/api/teams", async (req, res) => {
    const { name, userId, emails } = req.body;

    const client = await pool.connect();

    try {
      await client.query("BEGIN"); 

      
      const teamResult = await client.query(
        "INSERT INTO dimen.teams (name, userid) VALUES ($1, $2) RETURNING id",
        [name, userId]
      );
      const teamId = teamResult.rows[0].id;

      // Split emails and insert them into 'team_users' table
      const emailList = emails.split(",").map((email) => email.trim());

      const insertTeamUsersQuery = `
      INSERT INTO dimen.team_users (team_id, email, invitation_sts)
      VALUES
      ${emailList.map((_, idx) => `($1, $${idx + 2}, 'SENT')`).join(", ")}
    `;
      const emailParams = [teamId, ...emailList];

      await client.query(insertTeamUsersQuery, emailParams);

      await client.query("COMMIT"); 
      res.status(201).json({ message: "Team created successfully" });
    } catch (err) {
      await client.query("ROLLBACK"); 
      console.error("Error creating team:", err);
      res.status(500).json({ error: "Failed to create team" });
    } finally {
      client.release();
    }
  });

app.get("/api/notifications", async (req, res) => {
  const  userId  = req.query.userId;
  if (!userId) return res.status(400).json({ error: "User ID is required" });

  try {
    //userId = parseInt(userId, 10);
    const notifications = await db.query(
      "SELECT * FROM dimen.team_users WHERE userid = $1 AND invitation_sts = 'SENT'",
      [userId]
    );

    res.json(notifications.rows);
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



  const merchantSecret = "NDA3OTE4Nzk2MzExNTk2Nzg5ODIzOTU0OTQxNjcyODI0ODE1Mjcw"; 

 
  app.post("/api/payment-notify", (req, res) => {
    const {
      merchant_id,
      order_id,
      payment_id,
      payhere_amount,
      payhere_currency,
      status_code,
      md5sig,
    } = req.body;

   
    const generatedHash = crypto
      .createHash("md5")
      .update(
        `${merchant_id}${order_id}${payment_id}${payhere_amount}${payhere_currency}${status_code}${merchantSecret}`
      )
      .digest("hex")
      .toUpperCase();

    
    if (generatedHash === md5sig && status_code === "2") {
      console.log("Payment verified successfully:", req.body);
      res.sendStatus(200);
    } else {
      console.error("Invalid payment notification:", req.body);
      res.sendStatus(400);
    }
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
