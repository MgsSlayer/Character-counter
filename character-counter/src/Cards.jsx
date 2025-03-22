function Cards({colorClass, count, value}){

   

return(
   <div className={`card ${colorClass}`}>
    <h1>{count}</h1>
    <h4>{value}</h4>
   </div>
)
}

export default Cards;