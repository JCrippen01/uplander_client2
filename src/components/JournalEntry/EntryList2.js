import React, { useEffect, useContext  } from "react";
import { EntryContext } from "./EntryProvider"
import { Link, useHistory } from "react-router-dom"

import "./EntryList.css"

export const MyEntryList = () => {
    const {myEntrys, fetchMyEntry} = useContext(EntryContext)
    
    const history =useHistory()
    useEffect(() => {

        fetchMyEntry()
    },[])

    
    return(<>
        <div className="add-entry">
        <span>
        <Link to="/createentry"><button type="button">Create New Entry</button>                    
        </Link>
        </span>
        </div>
        
     
        <div className="app-container">
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
                        
                        {myEntrys?.map((entry) => (
                            <tr>
                                <td>{entry.title}</td>
                                <td>{entry.entry_date}</td>
                                <td>{entry.location}</td>
                                <td><Link to={`/editentry/${entry.id}`}>
                                    <button type="button">Edit</button></Link>
                                    <button type="submit">Save</button>
                                    <button type="button">Delete</button>
                                    <button type="button">Cancel</button>
                                </td>
                                
                            </tr>    
                                
                            
                        ))}
                    </tbody>
                </table>
    
            </div>
        </>
    )


 }

