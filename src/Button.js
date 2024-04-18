import { Link } from "react-router-dom";
import './Generator.css'
export default function Button()
{
    return(
        <div className="btn-wrapper">
            <Link to='/generate'><button className="opt">Generate QR</button></Link>
            <Link to='/scan'><button className="opt">Scan QR</button></Link>
        </div>
    )
}