
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import companies from './Data/data.json';

function App() {
  const [clubs, setClubs] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    setClubs(companies);
  },[])
  const handleAddCourses = (club) => {
     const newCart = [...cart, club];
     setCart(newCart);
  }
  return (
    <div>
      <h1 className="App">Top Courses of Web Development</h1>
      <br/>
      <div className="main-content">
        
        <div className="product">
          
            {
              clubs.map(club => <Product club={club} key={club.id} handleAddCourses={handleAddCourses}></Product>)
            }
        </div>
        <div className="product-cart">
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
