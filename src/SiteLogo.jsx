import InsertLinkIcon from '@mui/icons-material/InsertLink';
import "./SiteLogo.css";

export default function SiteLogo() {
    return (
        <>
                <a id='logo-link' href="/">
                    <InsertLinkIcon fontSize="medium" />
                    <p id='logo-text'>devlinks</p>
                </a>
        </>
    )
}