import React, { useEffect, useState  } from "react";
import { useHistory } from "react-router";
import { nanoid } from "nanoid";
import { getEntrys } from "./EntryManager.js";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
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
          id: nanoid(),
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
            Title: editFormData.title,
            Date: editFormData.date,
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
            Title: addFormData.title,
            Date: addFormData.date,
            Location: addFormData.location,
        };
        setEditFormData(formValues);
    };
    const handleCancelClick = () => {
        setEditEntryId(null);
      };
    
      const handleDeleteClick = (entryId) => {
        const newEntrys = [...entrys];
    
        const index = entrys.findIndex((entry) => entry.id === entryId);
    
        newEntrys.splice(index, 1);
    
        setEntrys(newEntrys);
      };
    

    return ( 
        
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
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
                                    <EditableRow
                                    entry={entry}
                                    editFormData={editFormData}
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}
                                />
                                ) : (
                                    <ReadOnlyRow
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
            {/*Add Entry */}
                <h2>Add an Entry</h2>
                <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter a Title..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="date"
                    required="required"
                    placeholder="Date..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="location"
                    required="required"
                    placeholder="Enter Location..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="duration"
                    required="required"
                    placeholder="How long were you in field..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="party"
                    required="required"
                    placeholder="Who did you go with?..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="gear"
                    required="required"
                    placeholder="What gear did you use?..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="hunt_highlights"
                    required="required"
                    placeholder="Trips Highlights..."
                    onChange={handleAddFormChange}
                />
                
                <button className="btn btn-1  " type="submit"
                    
                    >Submit</button>
            </form>
        </div>
    
    
    );
};

                export default EntryList;

                // <button className="btn btn-1  " type="submit" onClick={() => {
                //     createPost(buildObject()).then( history.push("/new_entrys"))
                // }
                // }>Submit</button>