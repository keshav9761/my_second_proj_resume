import React from 'react'
import image from './image/img1.jpg'
import axiox from 'axios';

export function Resume() {
    const [data,setData]=React.useState([])

const resumeSubmit=async(e)=>{
e.preventDefault();
const fetchData= await axiox.post('http://localhost:8000/addresume',data)
console.log(fetchData)
}
    const handleInputs=(e)=>{
        setData((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    return (
        <div style={{
            backgroundColor: "skyblue",
            display: "grid", placeContent: "center",
            margin: "3rem 33rem 1rem 33rem",
            padding: "1rem", borderBlockStyle: "grooves"
        }}>
            <b><u>Resume</u></b>
            <form>
                <div style={{ borderRadius: "2rem", marginRight: "7.5rem" }}>
                    <img src={image} width={50} alt="no-img" />
                </div>
                <div>
                    <input type="text" placeholder='name' 
                    name="name"
                    value={data.name}
                    onChange={handleInputs}
                    /> <br />
                    <input type="text" placeholder='skill' 
                    name="skill"
                    value={data.skill}
                    onChange={handleInputs}
                    /> <br />
                    <input type="text" placeholder='position'
                    name="position"
                    value={data.position}
                    onChange={handleInputs} /> <br />
                    <div style={{ marginLeft: '5rem' }}>
                        <button type='submit' onClick={resumeSubmit}>save</button>
                        <button type='submit'>cancel</button>
                    </div>
                </div>
            </form>

        </div>
    )
}



