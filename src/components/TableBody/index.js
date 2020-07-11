import React from "react";
import "./style.css";
import TableRow from "../TableRow"

function TableBody({projects}) {
  
  return (
    <tbody>
      {projects.map(project => (
        <TableRow 
          key={project.id}
          project={project} />
      ))}
    </tbody>
  );
}

export default TableBody;
