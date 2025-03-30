import React, {useState} from 'react';
import Cards from './Cards.jsx';
import Input from './input.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Density from './Density.jsx';


function App() {
    const [text, setText] = useState("");
    const [ignoreSpaes, setIgnoreSpaces] = useState(false);
    const [limit, setLimit] = useState(false);
    const characterLimit = 150;
    // const [characterLimit, SetcharacterLimit] = useState(150);
   
 
    const charCount = ignoreSpaes ? text.replace(/\s/g, "").length : text.length;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    // const letterFrequency =  

    const limited = charCount > characterLimit? "limit exceeded" : charCount;
   
 return(
  <>
  <Header/>
  <Hero/>
  <Input text={text} setText={setText} ignoreSpaces={ignoreSpaes} setIgnoreSpaces={setIgnoreSpaces} characterLimit={characterLimit} limit={limit} setLimit={setLimit}/>
  <div className='card-div'>
  <Cards colorClass="purple" count={limit ? limited : charCount} value="Total Characters"/>
  <Cards colorClass="yellow" count={words} value="Word Count"/>
  <Cards colorClass="orange" count={sentences} value="Sentence Count"/>
  </div>
  <Density text={text}/>
  </>
 )
} 

export default App
