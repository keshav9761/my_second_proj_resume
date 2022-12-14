import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function Model(props) {
    const [modal, setModal] = useState(false);                                      
const[dataSource,setDataSource]=useState(null)

    React.useEffect(() => {
        if (!props?.editableData) return;
        setModal(true)
        setDataSource(props?.editableData)
    }, [props?.editableData])
        

    const toggle = () => {
        setModal(!modal)
    };

   
    const save = async (id) => {
        const update = await axios.patch(`http://localhost:8000/editresume`, dataSource)
        toggle();
    props?.refreshTable();
    }
    const inputHandle=(e)=>{
        setDataSource((pre)=>({...pre,[e.target.name]:e.target.value}))
    }

    return (
        <div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder='name'
                    name='name'
                    value={dataSource?.name} 
                    onChange={inputHandle}/><br />
                    <Input type="text" placeholder='skill'
                    name="skill" 
                    value={dataSource?.skill}
                    onChange={inputHandle}/><br />
                    <Input type="text" placeholder='position' 
                    name="position"
                    value={dataSource?.position}
                    onChange={inputHandle}
                    /><br />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={save}>
                        save
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Model;