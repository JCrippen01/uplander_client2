import React, {  useEffect, useState } from "react"
import { Link, useParams  } from "react-router-dom"



export const EntryRow = ({ entry, handleDeleteClick }) => {
    const deleteEntry = handleDeleteClick
    
    

   

    return (
    <tr>
      <td>{entry?.title}</td>
      <td>{entry?.entry_date}</td>
      <td>{entry?.location}</td>
      <td>
      <Link to={`/editentry/${entry?.id}`}>
      <button
          type="button"
        >
          Edit Journal
        </button>
        </Link>
        <button 
        type="button"
        className="delete button"
        onClick={() => {
          const confirmBox = window.confirm(
                      "Do you really want to delete this Journal Entry?"
          )
          if (confirmBox === true)  {handleDeleteClick(entry.id)}}}>Delete</button>
        
      </td>
    </tr>
  );
};


