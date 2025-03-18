import Card from './card.jsx';
import Input from './input.jsx';
function App() {
 
 return(
  <>
  <Input/>
  <Card count={15} value="Characters"/>
  <Card count={10} value="Words"/>
  <Card count={2} value="Sentences"/>
  </>
 )
}

export default App
