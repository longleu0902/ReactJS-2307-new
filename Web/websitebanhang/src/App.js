import logo from './logo.svg';
import './App.css';
import Nav from './product/Nav';
import Header from './product/Header';
import CartProduct from './product/CartProduct';
import Footer from './product/Footer';
import ShowCartProduct from './product/ShowCartProduct';
import ShoppingCart from './product/ShoppingCart';
import React, { useState, useEffect } from 'react';
import { Route, Routes, NavLink, BrowserRouter } from 'react-router-dom';
function App() {
  const [List, setList] = useState([
    {
      id: 1,
      img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
      title: 'Áo dài tay trắng mùa đông lạnh',
      price: 300000,
      amount: 1,
    },
    {
      id: 2,
      img: 'https://lh6.googleusercontent.com/AO_yMMaWSOM5qA-lC4AjlJ6AVE_QQglN5JycfxoRUffTCqfRjJr_K--UrhtHXAjKo6Bts_vTIbupvZgfuRp0XhAql6wSMWjOL3P6cgjJv6KFuKp7uTZMn-3nysHJjQOmQmkVPueH',
      title: 'Áo thiết kế sơ mi nữ',
      price: 200000,
      amount: 1,
    }, 
    { 
      id: 3,
      img: 'https://lh6.googleusercontent.com/xr1tWQ0zigU8mFvMGfMmW2oiX9yinGbn8LaRLMHnPXvsh7Bg1ABs2Tk8ZfAoQMv6mPw9Id-iaSB1zuU5UTJmCcnTybFvdiaC-EHxrdTbRmNJT22y1tmSb5rE1--xKXg3TrmwO2z3',
      title: 'Set quần áo nữ mùa thu',
      price: 400000,
      amount: 1,
    },
    { 
      id: 4,
      img: 'https://ressmedia.com/wp-content/uploads/2021/07/LVN_5569-768x768.jpg',
      title: 'Quần áo trẻ em',
      price: 350000,
      amount: 1,
    }, 
    { 
      id: 5,
      img: 'https://xuconcept.com/wp-content/uploads/2020/12/xu-huong-chup-quan-ao.jpg',
      title: 'Set quần áo nam mặc đẹp ,màu trắng ,đầy đủ các loại size',
      price: 520000,
      amount: 1,
    }, 
    {
      id: 6,
      img: 'https://thoitrangteenthienphuc.vn/upload/hinhthem/set-do-bo-the-thao-unisex-3-soc5-9859.jpg',
      title: 'Set đồ thể thao unisex',
      price: 200000,
      amount: 1,
    }, 
    {
      id: 7,
      img: 'https://cf.shopee.vn/file/da9692b78e73e57c0ade2b3237074791',
      title: 'Quần Jean Nữ Ống Rộng - Quần Jean Nữ Suông',
      price: 129000,
      amount: 1,
    }, 
    {
      id: 8,
      img: 'https://product.hstatic.net/1000321597/product/set-do-bo-the-thao-adidas1_e323ee2e1d7549e19770d809712a5c0b_grande.jpg',
      title: 'Set đồ thể thao nỉ nam mùa đông ',
      price: 378000,
      amount: 1,

    }
  ]);
  const [Cart, setCart] = useState([])
  const HandleAddProduct = (product) => {
    if (Cart.indexOf(product) !== -1) return null;
    const arr = [...Cart];
    product.amout = 1;
    arr.push(product);
    setCart([...arr]);
    console.log(arr)
  }
  const removeProduct = (sanpham) => {
    const arr = Cart.filter(sp => sp.id !== sanpham.id);
    setCart([...arr])
  }
  const removeAllProdcut = () => {
    const arr =''
    setCart([...arr])
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


  return (
    <div className="App">
      <Footer />
      <BrowserRouter>
        <div>
          <Nav soluong={Cart.length} Cart={Cart} setCart={setCart} removeProduct={removeProduct} removeAllProdcut={removeAllProdcut} numberWithCommas={numberWithCommas} />
          <Routes>
            <Route path="/trangchu" element={<Header />} />
          </Routes>
          <Routes>
            <Route path="/trangchu" element={<CartProduct List={List} HandleAddProduct={HandleAddProduct} numberWithCommas={numberWithCommas} />} />
            <Route path='/product/:id'element={<ShowCartProduct/>} />
            <Route path="/giohang" element={<ShoppingCart Cart={Cart} setCart={setCart} removeProduct={removeProduct} numberWithCommas={numberWithCommas}/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
