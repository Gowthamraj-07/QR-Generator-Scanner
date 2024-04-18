import { useState } from 'react';
import './Generator.css'
export default function Scan()
{
    const[visible,setVisible]=useState(false);
    const[file,setFile]=useState('')
    const[text,setText]=useState('');
    const[err,setError]=useState(true);
    function handleSubmit(e)
    {
        e.preventDefault()
        setVisible(true);
    }
    function handleImage(e)
    {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }
  
    function handleSubmit(e)
    {
        e.preventDefault();
        const formData=new FormData();
        formData.append('file',file)
        fetch("http://api.qrserver.com/v1/read-qr-code/",{
            method: 'POST',body: formData
        }).then(res=>res.json()).then(result=>{result=result[0].symbol[0].data;setText(result);
            if(result==null)setError(false)
            else{setError(true)}})
        setVisible(true);
        
    }
    return(
        <div className="center-div">
                <h2>Scan QR Code</h2>
                <p>Upload a QR Code</p>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <input name='file' className="file-input" type="file" required onChange={handleImage}/>
                        <button type="submit">Scan QR</button>
                    </form>
                </div>
                {!err&&<p className='error'>Upload a valid QR code</p>}
                {visible&&text&&<div className='textarea-wrapper'>
                 <textarea className='text-area' value={text} disabled name="" id="" cols="35" rows="6">

                  </textarea>
                  </div>}
            </div>
    )
}