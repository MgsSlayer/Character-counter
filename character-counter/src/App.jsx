import Card from './card.jsx';
import Input from './input.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
function App() {
 
 return(
  <>
  <Header/>
  <Hero/>
  <Input/>
  <Card count={278} value="Total Characters"/>
  <Card count={39} value="Word Count"/>
  <Card count={4} value="Sentence Count"/>
  </>
 )
}

export default App
