import React from "react";
import "./style.css";
import TableHeader from "../TableHeader"
import TableBody from "../TableBody"

function Table( { projects } ){
    return (    
      <table className="table">
        <TableHeader columnNames={["Title", "Technologies Used", "Links"]} />
        <TableBody projects={projects} />
      </table>
    )
}

export default Table;
