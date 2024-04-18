import { useState } from "react"
import './Generator.css';
export default function Generator()
{
    const[text,setText]=useState("");
    const[promt,setPromt]=useState("")
    const[showqr,setShowQr]=useState(false);
    const[generate,setGenerate]=useState(false);
    const[scan,setScan]=useState(false);
    const[but,setBut]=useState(true);
    function handleGenerate()
    {
        setGenerate(true);
        setBut(false);
    }
    function handleScan()
    {
        setScan(true);
        setBut(false)
    }
    function handleChange(event)
    {
        setText(event.target.value);
        
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        setPromt(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
        setShowQr(true);
    }
    return(
      
           <div className="center-div">
                <h2>QR Code Generator</h2>
                <p>Paste a url or enter text to create QR code</p>
                <div className="form">
                    <form action="" onSubmit={handleSubmit} >
                        <input type="text" name="text" placeholder="Entet text or url" onChange={handleChange} required/>
                        <button type="submit">Generate QR Code</button>
                    </form>
                </div>
                {showqr&&<div className="qr">
                    <img src={promt} alt="nothing" />
                </div>}
            </div>

        
    )
}