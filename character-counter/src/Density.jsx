function Density({ text }){
    
    const letterFrequency = text
    .toLowerCase()
    .split("")
    .filter(char => char
    .match(/[a-z]/))
    .reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    const letterDensityDisplay = Object.entries(letterFrequency)
    .map(([letter, count])=> `${letter.toUpperCase()} ${count}`).join(", ");
    

    return(
     <>
     <p>{letterDensityDisplay || "No Letters"}</p>
     </>  
    );
};

export default Density;

 // <div className="details">
        //     <h1>Letter Density</h1>
        //     <div className="density">
        //     <p>M</p><div className="outer"><div className="inner"></div></div>
        //     </div>
        //     <div className="density">
        //     <p>D</p><div className="outer"><div className="inner"></div></div>
        //     </div>
        //     <div className="density">
        //     <p>G</p><div className="outer"><div className="inner"></div></div>
        //     </div> <div className="density">
        //     <p>G</p><div className="outer"><div className="inner"></div></div>
        //     </div> <div className="density">
        //     <p>P</p><div className="outer"><div className="inner"></div></div>
        //     </div>
        // </div>