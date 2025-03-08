function Input() {
return(
    <>
    <div className="input-section">
        <textarea></textarea>
        <div>
        <label>   
        <input type="checkbox"></input>
        Exclude Spaces
        </label>
        <label>   
        <input type="checkbox"></input>
        Set Character Limit
        </label>
        </div>
        <p></p>
    </div>
    </>
)
}

export default Input;
