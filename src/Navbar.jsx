import "./Navbar.css";
import SiteLogo from "./SiteLogo.jsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-navigation">
                    <li className="nav-logo">
                        <SiteLogo to={`/`} />
                    </li>
                    <li className="nav-links">
                        <a className="links-btn" href="#"><AttachFileIcon/><span className="link-text">Links</span></a>
                    </li>
                    <li className="nav-profile-details">
                        <Link className="profile-btn" to={`profile-details`}><AccountCircleIcon/><span className="link-text">Profile Details</span></Link>
                    </li>
                    <li className="nav-preview">
                        <a className="preview-btn" href="#"><VisibilityIcon/><span className="link-text">Preview</span></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
