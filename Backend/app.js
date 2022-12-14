let express = require('express');
let cors = require('cors');
let app = express();
app.use(cors());

app.use(express.json())

let count = 0;
const resumeId = () => {
    return count++;
}
let resume = [{
    id: "121",
    name: "raman",
    skill: "mca",
    position: "soft-Devloper"
}]

app.get('/', (req, res) => {
    res.status(200).send("hello resume app")
})

//http://localhost:8000/addresume
app.post('/addresume', (req, res) => {
    const data = req.body;
    data.id = resumeId();
    resume.push(data)
    res.status(200).send({ msg: "submited resume", body: data })
})

//http://localhost:8000/resumelist
app.get('/resumelist', (req, res) => {
    res.status(200).send(resume)
})

//http://localhost:8000/resumelogin
app.post('/resumelogin', (req, res) => {
    const password = "111"
    const username = "aaa";
    if (password == req.body.password && username == req.body.username) {
        res.status(200).send({ msg:"login successful", });
    }
    else {
        res.status(200).send({ msg:"unsuccessful login" });
    }
})
//http://localhost:8000/deleteresume
app.delete('/deleteresume', (req, res) => {
    const {id} = req.query;
    const deleteData = resume.filter((e) => e.id != id);
    console.log(deleteData);
    resume = deleteData;
    res.status(200).send({ msg:"deleted" })
})

//http://localhost:8000/editresume
app.patch('/editresume', (req, res) => {
    console.log("******",req.body)
    const editIndex = resume.findIndex((a) =>  a.id == req.body.id);
    console.log("######",editIndex)
    resume[editIndex] = req.body;
    res.status(200).send({ msg: "updated", body: resume[editIndex] })
})
//http://localhost:8000/foundresume
app.get('/foundresume', (req, res) => {
    const {id} = req.query;
    const found = resume.find((f) => f.id == id)
    res.status(200).send(found)
    console.log(found)
})

app.listen(8000, () => {
    console.log("hello my fear 8000")
})