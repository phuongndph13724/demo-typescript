import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo'
import { ProductType } from './types/product'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await axios.get('http://localhost:3001/products');
      setProducts(data);
    }
    getProducts();
  },[])
  return (
    <div className="App">
      <hr></hr>
       <div>
        <table border="1">
          <thead>
            <th>Stt</th>
          <th>Name</th>
          <th>Price</th>
          <th>Title</th>
          </thead>
          {products.map((item,index) =><tbody>
            <th>{index+1}</th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.title}</td>
          </tbody>)}
          
        </table>
      </div>
    </div>
  )
}



export default App
