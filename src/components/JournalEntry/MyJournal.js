import React, {useState, useEffect, forwardRef} from "react";
import { useParams } from "react-router-dom";
import MaterialTable from "material-table"
import { updateEntry, getEntryId, getEntrys,createEntry, deleteEntry } from "./EntryManager"
import GetAppIcon from '@material-ui/icons/GetApp';
import { Modal } from "./Modal";
import "./List.css"

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    AddDog: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
const EntryList2 = () =>{
    
    const columns = [
        {title: "title", field: "title"},
        {title: "Entry Date",field: "entry_date"},
        // {title: "Duration",field: "duration"},
        {title: "Party",field: "party"},
        {title: "Location",field: "location"},
        {title: "Gear",field: "gear"},
        {title: "Hunt Highlights",field: "hunt_highlights"},
        {title: "Dogs",field: "name"}
    ]
  const [data, setData]=useState([])
  const [iserror, setIserror] = useState(false)
  const [errorMessages, setErrorMessages] = useState([])
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const { id } = useParams()
    useEffect(() => {
        getEntrys()
        .then((data) => {setData(data)})
        
    }, [])
    
    // useEffect(() => {
    //     getEntryId(id)
    //     .then((data) => {setData(data)})
        
    // }, [])


    
    const handleRowUpdate =(newData, oldData, resolve) => {
        debugger
        updateEntry(newData, id)
        .then(() => {
          const dataUpdate = [...data];
          const index = oldData.tableData.id;
          dataUpdate[index] = newData;
          setData([...dataUpdate]);
          resolve()
    })
}
    
 const handleRowAdd = (newData, resolve) => {
    createEntry(newData)
      .then(() => {
        const dataToAdd = [...data];
        dataToAdd.push(newData);
        setData(dataToAdd);
        resolve()
    
      })
  }

  const handleRowDelete = (oldData, resolve) => {
    
    deleteEntry(oldData.id)
      .then(() => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
  }
   
    
    return(
       
        <div className="dogList">
            <h1 align="center">UPLANDR</h1>

            <MaterialTable columns={columns} data={data} icons={tableIcons}
            editable={{
                onRowUpdate: (newData, oldData) => 
                new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve);
                }),
                onRowAdd: (newData) =>
                new Promise((resolve) => {
                  handleRowAdd(newData, resolve)
                }),
                
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  handleRowDelete(oldData, resolve)
                }),
              }}
              
              options={{
                actionsColumnIndex: -1
            }}
              
              actions={[
                {
                  icon: () => <AddBox />,
                  tooltip: "Add Dog",
                  onClick: {openModal}>
                  <Modal showModal={showModal} setShowModal={setShowModal} />
              }
              ]}
              title="My Journal Entry's"
            
             />
              
          </div>
      );
      }
       
 export default EntryList2;       
    
    