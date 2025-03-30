function Density({ text }) {
    const letterFrequency = text
        .toLowerCase()
        .split("")
        .filter(char => char.match(/[a-z]/))
        .reduce((acc, char) => {
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

    return (
        <div>
            <h1>Letter Density</h1>
            {Object.keys(letterFrequency).length > 0 ? (
                <ul className="densityList">
                    {Object.entries(letterFrequency).map(([letter, count]) => (
                        <li key={letter}>
                            {letter.toUpperCase()}: {count}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Letters</p>
            )}
        </div>
    );
}

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

    //     Object.entries(letterFrequency)
    // .map(([letter, count])=> `${letter.toUpperCase()} ${count}`).join(", ");