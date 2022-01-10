import React, { useEffect, useState  } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { getEntrys, deleteEntry } from "./EntryManager.js";
import { EntryRow } from "./EntryRow";
import { EditEntry } from "./EditEntry";
import "./EntryList.css";

//write funtion that 1.does put request 2. does get request on entrys.

export const EntryList = (props) => {

    const history =useHistory()
    useEffect(() => {
        getEntrys().then(data => setEntrys(data))
    }, [])

    

    const [ entrys, setEntrys ] = useState([])
    const [addFormData, setAddFormData] = useState({
        Title: "",
        Date: "",
        Duration: "",
        Party: "",
        Location: "",
        Gear: "",
        Highlights: "",
      });
      const [editFormData, setEditFormData] = useState({
        Title: "",
        Date: "",
        Location: "",
      });

     


      const [editEntryId, setEditEntryId] = useState(null);

      const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };
    const handleEditFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("title");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newEntry = {
          Title: addFormData.title,
          Date: addFormData.entry_date,
          Location: addFormData.location,
          Duration: addFormData.duration,
          Party: addFormData.party,
          Gear: addFormData.gear,
          Highlights: addFormData.hunt_highlights,

        };

    const newEntrys = [...entrys, newEntry];
    setEntrys(newEntrys);
        };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
    
        const editedEntry = {
            id: editEntryId,
            Title: editFormData.Title,
            Date: editFormData.Date,
            Location: editFormData.location,
        };
    const newEntrys = [...entrys];

    const index = entrys.findIndex((entry) => entry.id === editEntryId);

    newEntrys[index] = editedEntry;

    setEntrys(newEntrys);
    setEditEntryId(null);
    };

    const handleEditClick = (event, entry) => {
        event.preventDefault();
        setEditEntryId(entry.id);
    
        const formValues = {
            title: addFormData.title,
            date: addFormData.date,
            location: addFormData.location,
        };
        setEditFormData(formValues);
    };
    const handleCancelClick = () => {
        setEditEntryId(null);
        
        
        
      };
    
      const handleDeleteClick = (entryId) => {
          
        deleteEntry(entryId).then(()=> getEntrys().then(entrys=>setEntrys(entrys)))

      };
      
    

    return ( 
        
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <h1>Your Journal Entrys</h1>
                    <Link to={`/createentry`}>Create New Entry</Link>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                        {entrys.map((entry) => (
                            <>
                                {editEntryId === entry.id ? (
                                    <EditEntry
                                   
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                                ) : (
                                    <EntryRow
                                    entry={entry}
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
        </div>
    
    
    );
};

                export default EntryList;

                // <button className="button  " type="submit" onClick={() => {
                //     createPost(buildObject()).then( history.push("/new_entrys"))
                // }
                // }>Submit</button>