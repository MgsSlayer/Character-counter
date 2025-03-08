import Cards from './Cards.jsx';
import Input from './Input.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Density from './Density.jsx';


function App({text, ignoreSpaes}) {
 
    const charCount = ignoreSpaes ? text.replace(/\s/g, "").length : text.length;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

 return(
  <>
  <Header/>
  <Hero/>
  <Input/>
  <div className='card-div'>
  <Cards colorClass="purple"count={charCount} value="Total Characters"/>
  <Cards colorClass="yellow" count={words} value="Word Count"/>
  <Cards colorClass="orange" count={sentences} value="Sentence Count"/>
  </div>
  <Density/>
  </>
 )
}

export default App
