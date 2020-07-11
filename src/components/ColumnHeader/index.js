import React, {useState} from "react"

function ColumnHeader(props){

    return <th scope="col"  className={ props.columnName === "Links" ? "text-center" : "text-left" }>
        <span>
            {props.columnName}
        </span>
    </th>
}

export default ColumnHeader