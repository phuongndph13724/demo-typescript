import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Item from './components/ShowInfo/Item'

function App() {
  const [count, setCount] = useState(0);
const [products, setProducts] = useState([
    {id: 1, name : "Product A"},
    {id: 2, name : "Product B"},
    {id: 3, name : "Product A"},
  ]);
  const removeItem = (id) => {
    const newsProducts = products.filter(item => item.id !== id);
    setProducts(newsProducts);
  }
  


  return (
    <div className='App'>
      Count : {count} <button onClick={() => setCount(count +1)}>Click</button>
      {products.map((item,index) => <Item key={index} data={item} />)}
        <ShowInfo name="Phương" age={21}/>
      </div>
  )
}

export default App
