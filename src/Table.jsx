import axios, { Axios } from 'axios'
import React from 'react'
import Model from './Model'

export function Table() {
const [tabData,setTabData]=React.useState([])
const [editableData,setEditableData]=React.useState(null)

React.useEffect(()=>{
  getData();
},[])
const getData=async()=>{
const tabDetail= await axios.get('http://localhost:8000/resumelist')
setTabData(tabDetail.data)
}
const deleteData=async(id)=>{
const del= await axios.delete(`http://localhost:8000/deleteresume?id=${id}`);
console.log("#######",del)
getData();//refreah
}

const handleEditData = async(id) => {
  const found=await axios.get(`http://localhost:8000/foundresume?id=${id}`);
  console.log(found)
  setEditableData(found.data);
  
  
}
  return (
    <>
    <div style={{placeContent:"center",display:"grid",margin:"4rem",backgroundColor:""}}>
    <table>
        <thead>
            <th>id</th>
            <th>Name</th>
            <th>Skill</th>
            <th>Position</th>
            <th>Edit</th>
            <th>Delete</th>
        </thead>
        <tbody>
          {tabData.map((obj)=>{
          // const[id,name,skill,position]=obj;
         return <tr>
          <td>{obj.id}</td>
          <td>{obj.name}</td>
          <td>{obj.skill}</td>
          <td>{obj.position}</td>
          <td onClick={()=>handleEditData(obj.id)}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-down-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M9.636 2.5a.5.5 0 0 0-.5-.5H2.5A1.5 1.5 0 0 0 1 3.5v10A1.5 1.5 0 0 0 2.5 15h10a1.5 1.5 0 0 0 1.5-1.5V6.864a.5.5 0 0 0-1 0V13.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
<path fill-rule="evenodd" d="M5 10.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1H6.707l8.147-8.146a.5.5 0 0 0-.708-.708L6 9.293V5.5a.5.5 0 0 0-1 0v5z"/>
</svg>
</td>
<td onClick={()=>deleteData(obj.id)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg></td>
</tr>
          })}
           
        </tbody>
    </table>
    </div>
    <Model editableData={editableData} refreshTable={getData} />
    </> )
}


