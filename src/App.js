
//32-12 Load dynamic data, API call useEffect integrate state

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
     
      <Users></Users>
      
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users{users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li> )
          
        }
      </ul>
    </div>
  )
}


export default App;





// 30.11 Component state hook and set state method

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
 
  return (
    <div className="App">
      <header className="App-header">
     
      <Counter></Counter>
      
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10)
  const handleIncrease = () => {
    const newCount = count + 1;
    // setCount(newCount);
    setCount(count + 1);
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}

export default App;

// 32-8 Pass object to components and access object

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illatator 11', price: '$100.99'},
    {name: 'PDF Reader', price: '$33.99'}
] 
  return (
    <div className="App">
      <header className="App-header">
      <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product>
     
      
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    margin: '10px',
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    weight: '550px',
    float: 'left',
    padding: '10px',
    color: 'green'
  }
  return (
    <div style={productStyle}>
      <h1>{props.name}</h1>
       <h2>{props.price}</h2>
      <button>Buy Now</button>
    </div>
  )
}


export default App;



//32-7 Pass dynamic data to components, props in react


import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const foods = ['Tea', 'Drink Water', 'Sea Food']
  return (
    <div className="App">
      <header className="App-header">
      
      <First name="Ali" food={foods[2]}></First>
      <First name="Faisal" food={foods[1]}></First>
      <First name="Robin" food={foods[0]}></First>
      
      
      </header>
    </div>
  );
}

function First(props){
  const personStyle={
    border:'10px solid red',
    color:'green',
    padding: '10px',
    margin: '50px'
  }
  return (
  <div style={personStyle}>
 
  <h1> Name: {props.name}</h1>
  <h2> Eat: {props.food}</h2>
 </div>
 )
}

export default App;
