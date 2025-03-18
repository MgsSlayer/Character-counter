function Card(props){
return(
   <div>
    <h1>{props.count}</h1>
    <h4>{props.value}</h4>
   </div>
)
}

export default Card;