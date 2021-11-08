import React, {useState, createRef} from 'react';
import axios from 'axios';

const UploadFileComponent = () => {
    const [file,setFile] = useState();
    const nameRef = createRef();
    const dobRef = createRef();
    const onFileChange = (event) => {
        console.log("file ",event.target.files[0])
        setFile(event.target.files[0])
    }
    const uploadForm = () => {
        const formData = new FormData();
        formData.append("name",nameRef.current.value);
        formData.append("dobRef",dobRef.current.value);
        formData.append("file",file,file.name);
        console.log("Form Data",formData);
        axios.post("api/uploadfile", formData);
    }
    return (
    <div>
        File Upload
        <form onSubmit={uploadForm} id="myForm">
            <input type="text" placeholder="Input Name" ref={nameRef}/>
            <input type="date" placeholder="Input DOB" ref={dobRef}/>
            <input type="file" onChange={onFileChange}/>
            <button type="Submit">Submit</button>
        </form>
    </div>);
}

export default UploadFileComponent;

