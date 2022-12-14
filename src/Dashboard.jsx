import React from 'react'
import {Link,Outlet} from 'react-router-dom'
export  function Dashboard() {

  return (
    <>
    <div>
        <h1>Dasboard</h1>
    <div>
        <Link to="/dash/resume">Resume</Link> <br/>
        <Link to="/dash/resumelist">ResumeList</Link> 
    
    
      <Outlet/>
    </div>
    </div>
    </> )
}
