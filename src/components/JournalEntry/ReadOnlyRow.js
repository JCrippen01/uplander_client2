import React, {  useEffect, useState } from "react"
import { Link, useHistory,  useParams  } from "react-router-dom"
import { getEntryId } from "./EntryManager";



const ReadOnlyRow = ({ entry, handleEditClick, handleDeleteClick }) => {
    const deleteEntry = handleDeleteClick
    const history = useHistory()
    const entryId = useParams()
    const [editFormData, setEditFormData] = useState({})

   

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
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, entry)}
        >
          Quick Edit
        </button> */}
        
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

export default ReadOnlyRow;
