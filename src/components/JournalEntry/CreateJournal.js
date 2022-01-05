import React, { useContext, useRef } from "react"
import { useHistory } from "react-router"
import { EntryContext } from "./EntryProvider"
export const CreateJournal = () =>{
    const {createEntry} = useContext(EntryContext)
    const content= useRef()
    const title = useRef()
    const party = useRef()
    const date = Date.now()
    const location = useRef()
    const gear = useRef()
    const duration = useRef()
    const huntHighLights = useRef()
    const history = useHistory()
    const buildObject = () => {
        return {
                "user_id" : parseInt(localStorage.getItem("journal_user_id")),
                "title" : title.current.value,
                "entry_date" : date,
                "duration" : duration.current.value,
                "party" : party.current.value,
                "location" : location,
                "gear" : gear.current.value,
                "hunt_highlights" : huntHighLights.current.value
        }
    }
    return(
        <form className="" >
                <h1 className="h3 mb-3 font-weight-normal">New Journal</h1>
                <fieldset>
                    <label htmlFor="title"> Title </label>
                    <input  type="text" name="title" ref={title} className="form-control" placeholder="Title" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="iamgeurl"> Image URL </label>
                    <input type="text" name="iamgeurl" className="form-control" placeholder="URL" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="article"> Article Content  </label>
                    <textarea rows="10" ref={content}cols="20"name="article" className="form-control" placeholder="Article Content" required />
                </fieldset>
                <fieldset>
                    <select>
                        <option>Select a Category</option>
                    </select>
                </fieldset>
                <fieldset>
                    <input type="checkbox"/>Tag
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1  " type="submit" onClick={() => {
                        createEntry(buildObject()).then( history.push("/createentry"))
                    }
                    }>Submit</button>
                </fieldset>
            </form>
    )
}
//Changes for git hubs bullshit.
//another comment