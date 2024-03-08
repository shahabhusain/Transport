import React from "react";
import ProjectSengle from "../components/Projects/ProjectSengle";
import { useParams } from "react-router-dom";

const ProjectSingle = () => {
  const id = useParams().projectId;
  console.log("id ", id);
  return (
    <div>
      <ProjectSengle id={id} />
    </div>
  );
};

export default ProjectSingle;
