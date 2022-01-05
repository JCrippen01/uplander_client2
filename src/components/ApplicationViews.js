import React from "react"
import { Route } from "react-router-dom"
import { MyEntryList } from "./JournalEntry/EntryList2"
import { EditEntry } from "./JournalEntry/EditJournal"
import { EntryProvider } from "./JournalEntry/EntryProvider"
import { CreateJournal } from "./JournalEntry/CreateJournal"


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
                <MyEntryList />
            <Route path="/createjournal">
                <CreateJournal />
            </Route>
            </Route>
            <Route path="/editentry/:entryId(\d+)">
                <EditEntry />
            </Route>
        </EntryProvider>
           
           
        </main>
    </>
}