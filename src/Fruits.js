
import './App.css';
import React, {useEffect, useState} from 'react';



const Fruits = () =>{
const[fruits, setFruits] = useState();
const[loading, setLoading] = useState(false);
    useEffect(() => {fetchFruitData()},[])


   const fetchFruitData = () => {
    fetch("http://localhost:5000/products/fruits")
    .then(res => res.json())
    .then((data) =>{
        setFruits(data)
        setLoading(true)})
    .catch(e =>{throw new Error(e.message)})
}
if(!loading){
console.log(`loading, ${loading}`)
return <div>loading...........</div>
}
return (<div >
    <h3 className='Goods'> FRUITS </h3>
    {fruits.map(fruit=>(
        <div key={fruit.id}>
    <p>{fruit.name}</p>
            </div>
    ))}
    </div>
        )}
  export default Fruits;
