import "./SocialLogin.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialLogin() {
    return (
        <>
            <div className="social-login">
                <div className="social-login-content">
                    <button className="social-login-btn-github">
                        <GitHubIcon />
                        <span>Github</span>
                        <span>&rarr;</span>
                    </button>
                    <button className="social-login-btn-youtube">
                        <YouTubeIcon />
                        <span>Youtube</span>
                        <span>&rarr;</span>
                    </button>
                    <button className="social-login-btn-linkedin">
                        <LinkedInIcon />
                        <span>Linkedin</span>
                        <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </>
    )

}