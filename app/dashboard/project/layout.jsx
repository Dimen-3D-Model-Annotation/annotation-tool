"use client";

import LeftSidePanel from "@components/project_workspace/left_side_panel/LeftSidePanel";
import RightSidePanel from "@components/project_workspace/right_side_panel/RightSidePanel";
import Toolbar from "@components/project_workspace/toolbar/Toolbar";
import { CommentProvider } from "@contexts/CommentContext";

import { FileProvider } from "@contexts/FileContext";

const ProjectLayout = ({ children }) => {
  return (
    <FileProvider>
      <CommentProvider>
        <div>
          <Toolbar />
          <LeftSidePanel />
          <RightSidePanel />
          {children}
        </div>
      </CommentProvider>
    </FileProvider>
  );
};

export default ProjectLayout;
