import "./AddLink.css";

export default function AddLink(props) {
    return (
        <div className="add-link-container">
            <div className="add-link-header">
                <h3>Test header</h3>
                <button className="add-link-remove-btn">Remove</button>
            </div>
            <div className="add-link-content">
                <label htmlFor="platforms">Platform</label>
                <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                </select>
            
                <label htmlFor="link">Link</label>
                <input type="text" />
            </div>
        </div>
    )
}