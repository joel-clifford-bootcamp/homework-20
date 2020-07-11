import React from "react"
import style from "./style.css"

function TableRow( { project }){
    return <tr >
            <td >{project.name}</td>
            <td >{project.uses}</td>
            <td className="link-col">
                <a href={project.repoUrl}>Repo</a>
                {project.siteUrl ? <a className="app-link" href={project.siteUrl}>App</a> : null }
            </td> 
        </tr>
}

export default TableRow