import React from "react";

function Input({ text, setText}) {

   
return(
    <>
    <div className="input-section">
        <textarea value={text}
        onChange={(e) => {
            setText(e.target.value)
        }}
        ></textarea>
        <div className="extra">
            <div className="settings">
                <label>   
                <input type="checkbox"></input>
                Exclude Spaces
                </label>
                <label>   
                <input type="checkbox"></input>
                Set Character Limit
                </label>
            </div>
            <p>Approx. reading time: 1min</p>
        </div>
    </div>
    </>
)
}

export default Input;
