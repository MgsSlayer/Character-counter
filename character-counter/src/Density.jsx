function Density({ text, totalLetters }) {
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
            <h1 className="density_header">Letter Density</h1>
            {Object.keys(letterFrequency).length > 0 ? (
                <ul className="density_list">
                    {Object.entries(letterFrequency).map(([letter, count]) => {
                        
                        const percentage = ((count / totalLetters) * 100).toFixed(2);

                        const densityStyle = {
                            width: `${percentage}%`
                        }

                        return(

                        <li key={letter}>
                            <span className="span1">{letter.toUpperCase()}</span><div className="outer"><div className="inner" style={densityStyle}></div></div><span className="span2"><div>{count}</div>({percentage})</span>
                        </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No Letters</p>
            )}
        </div>
    );
}

export default Density;