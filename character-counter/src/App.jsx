import Cards from './Cards.jsx';
import Input from './Input.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Density from './Density.jsx';

function App() {
 

 return(
  <>
  <Header/>
  <Hero/>
  <Input/>
  <div className='card-div'>
  <Cards colorClass="purple"count={278} value="Total Characters"/>
  <Cards colorClass="yellow" count={39} value="Word Count"/>
  <Cards colorClass="orange" count={4} value="Sentence Count"/>
  </div>
  <Density/>
  </>
 )
}

export default App
