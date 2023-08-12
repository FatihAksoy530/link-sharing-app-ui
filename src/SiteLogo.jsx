import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Link } from "react-router-dom";
import "./SiteLogo.css";

export default function SiteLogo(props) {
    return (
        <>
                <Link id='logo-link' to={props.to}>
                    <InsertLinkIcon fontSize="medium" />
                    <p id='logo-text'>devlinks</p>
                </Link>
        </>
    )
}