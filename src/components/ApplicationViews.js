import React from "react"
import { Route } from "react-router-dom"
// import { EntryList } from "./JournalEntry/EntryList"
import { EditEntry } from "./JournalEntry/EditEntry"
import { EntryProvider } from "./JournalEntry/EntryProvider"
import { CreateEntry } from "./JournalEntry/CreateEntry"
import DogList from "./JournalEntry/DogList"
import EntryList2 from "./JournalEntry/MyJournal"


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
                <EntryList2 />
            </Route>
            <Route exact path="/createentry">
                <CreateEntry />
            </Route>
            <Route exact path="/mydogs">
                <DogList />
            </Route>
            <Route exact path="/editentry/:entryId(\d+)">
                <EditEntry />
            </Route>
        </EntryProvider>
           
           
        </main>
    </>
}