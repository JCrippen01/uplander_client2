
import React,{ createContext, useState } from "react";
const api = "http://localhost:8000"
export const EntryContext = createContext()

export const EntryProvider = (props) => {
    const currentUser = localStorage.getItem("journal_user_id")
    const [myEntrys, setMyEntry] = useState([])
    const getEntry = (id) => {
        return fetch(`${api}/entrys/${id}`, {
        headers:{
            "Authorization": `Token ${currentUser}`
            }
        })
            .then(res => res.json())
          
          
    }
    const fetchMyEntry = () => {
        return fetch(`${api}/entrys`, {
            headers:{
                "Authorization": `Token ${currentUser}`
            }
        })
            .then(response => response.json())
            .then((data) => {
                setMyEntry(data)
            })
    }
    const createEntry = (object) => {
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
        
        return fetch(`${api}/entrys`, fetchOption)
            
    }
    const deleteEntry = (id) =>{
        return (fetch(`${api}/entrys/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: null
    }))
    }
    const editEntry = (id, object) => {
        const dataToSend = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${currentUser}`
                
            },
            body: JSON.stringify(object)

        }
        return fetch(`${api}/entrys/${id}`, dataToSend)
    }
    return (<EntryContext.Provider value={{
        fetchMyEntry, myEntrys, createEntry, deleteEntry, getEntry, editEntry
    }}>{props.children}</EntryContext.Provider>)
}