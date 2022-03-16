import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import { list, remove } from './api/product';
import { ProductType } from './types/product'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])
  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
      <hr></hr>
       <div>
        {/* <table className='App' border="1">
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
            <td>
              <button onClick={() => removeItem(item._id)}>Remove</button>
            </td>
          </tbody>)}
          
        </table> */}
        <header>
          <ul>
            <li><a href="/">Home Page</a></li>
            <li><a href="/product">Product Page</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </header>
        <main>
          <Routes>
              <Route path="/" element={<h1>Home page</h1>} />
              <Route path="product" element={<h1>Product page</h1>} />
              <Route path="/about" element={<h1>About page</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}



export default App
