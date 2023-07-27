import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Shirt from './assets/image/Blue_Tshirt.jpg'
import ProductList from './Component/Productlist'
import Imge6 from './assets/image/pg6.jpg'
import Imge5 from './assets/image/pg5.jpg'
function App() {
  const data = [
    {
      img1: Imge6,
      img2: Imge5,
      title: 'My product is the best'
    }
  ]
  return (
    <>
    <Header />  

  
    <section className="carousel"></section>

    
    <ProductList />

    
    </>
  )
}

export default App
