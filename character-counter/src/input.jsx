import React from "react";

function Input({ text, setText, ignoreSpaces, setIgnoreSpaces, limit, setLimit}) {

   
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
                <input type="checkbox" checked={ignoreSpaces} onChange={()=> {setIgnoreSpaces(!ignoreSpaces)}}></input>
                Exclude Spaces
                </label>
                <label>   
                <input type="checkbox" checked={limit} onChange={()=>{setLimit(!limit)}}></input>
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
