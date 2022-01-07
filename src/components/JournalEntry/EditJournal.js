import React, { useContext, useEffect, useRef, useState } from "react"

import { useHistory, useParams } from "react-router"
import { EntryContext } from "./EntryProvider"
export const EditEntry = () =>{
    const {getEntry, editEntry} = useContext(EntryContext)
    const {entryId} = useParams()
    const [entry, setEntry] = useState({})
    const [title, setTitle] = useState("")
    const [party, setParty] = useState("")
    const [location, setLocation] = useState("")
    const [gear, setGear] = useState("")
    const [huntHighLights, SetHuntHighLights] = useState("")


    const history = useHistory()
    const buildObject = () => {
        return {
                "user_id" : parseInt(localStorage.getItem("journal_user_id")),
                "title" : title,
                "date" : entry.entry_date,
                "duration" : entry.duration,
                "party" : party,
                "location" : location,
                "gear" : gear,
                "hunt_highlights" : huntHighLights
                
        }
    }
    useEffect(() => {
        console.log(entryId)
        getEntry(entryId).then((data) => setEntry(data))
    },[])

    useEffect(() => {
        setTitle(entry.title)
        setParty(entry.party)
        setLocation(entry.location)
        setGear(entry.gear)
        SetHuntHighLights(entry.hunt_highlights)
       
    },[entry])
    return(
        
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">Edit Entry</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  type="text" name="title"  className="form-control" placeholder="Title" value={title}required autoFocus onChange={(event)=>{
                        setTitle(event.target.value)
                    }}/>
                </fieldset>
                <div className = "form-box">
                <fieldset>
                    <label htmlFor="party"> Who did you go with </label>
                    <input  type="text" name="party"  className="form-control" placeholder="party" value={party}required autoFocus onChange={(event)=>{
                        setParty(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="location"> Where did you go</label>
                    <input  type="text" name="location"  className="form-control" placeholder="location" value={location}required autoFocus onChange={(event)=>{
                        setLocation(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="gear"> Who did you go with </label>
                    <input  type="text" name="gear"  className="form-control" placeholder="gear" value={gear}required autoFocus onChange={(event)=>{
                        setGear(event.target.value)
                    }}/>
                </fieldset>
                <fieldset>
                    <label htmlFor="highlights">Trip Highlights </label>
                    <input  type="text" name="hunt_highlights"  className="form-control" placeholder="highlights" value={huntHighLights}required autoFocus onChange={(event)=>{
                        setParty(event.target.value)
                    }}/>
                    
                </fieldset>
                </div>
                    <button className="button  " type="submit" onClick={()=>{
                        editEntry(entry.id, buildObject()).then(history.push("/myentry"))
                    }}
                    >Save Edits</button>
                
        </form>
        
    )
}