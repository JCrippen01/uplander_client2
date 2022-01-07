import React from "react"
import { Route } from "react-router-dom"
import { EntryList } from "./JournalEntry/EntryList"
import { EditEntry } from "./JournalEntry/EditJournal"
import { EntryProvider } from "./JournalEntry/EntryProvider"
import { CreateEntry } from "./JournalEntry/CreateEntry"


// import { SpeciesList } from "./species/SpeciesList"
// import { DogList } from "./dogs/DogList"
// import { JournalEntryForm } from "./journalentry/JournalEntryForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            
        <EntryProvider>
            <Route exact path="/myentrys">
                <EntryList />
            </Route>
            <Route exact path="/createentry">
                <CreateEntry />
            </Route>
            
            <Route path="/editentry/:entryId(\d+)">
                <EditEntry />
            </Route>
        </EntryProvider>
           
           
        </main>
    </>
}