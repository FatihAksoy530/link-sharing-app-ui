import "./Content.css";
import AddLink from "./AddLink";
import SocialLogin from "./SocialLogin";

export default function Content() {
    return (
        <>
            <div className="content">
                <div className="social-content">
                    <SocialLogin />
                </div>
                <div className="links-content">
                    <h2 className="links-content-header">Customize your links</h2>
                    <p className="links-content-description">Add/edit/remove links below then share all your profiles with the world!</p>
                    <button className="new-links">+ Add new link</button>
                    <AddLink />
                    <AddLink />
                    <AddLink />
                </div>
            </div>
        </>
    )
}