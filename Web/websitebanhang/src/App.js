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
import {  message } from 'antd';
function App() {
  const [List, setList] = useState([
    {
      id: 1,
      img: 'https://i.pinimg.com/564x/14/e1/43/14e1436f0221827d1e8510b47f901c36.jpg',
      title: 'Áo dài tay trắng mùa đông lạnh',
      price: 300000,
      amount: 1,
      size: '',
    },
    {
      id: 2,
      img: 'https://i.pinimg.com/564x/a1/48/f9/a148f93e63b4ad204630ba40820ffa02.jpg',
      title: 'Áo thiết kế sơ mi nữ',
      price: 200000,
      amount: 1,
      size : ''
    },
    {
      id: 3,
      img: 'https://i.pinimg.com/564x/fb/2c/8b/fb2c8b4795bb325e0e84aac2d929c62e.jpg',
      title: 'Set quần áo nữ mùa thu',
      price: 400000,
      amount: 1,
      size:''
    },
    {
      id: 4,
      img: 'https://i.pinimg.com/564x/6d/2e/e9/6d2ee90cd364043df8a94590d51c1de5.jpg',
      title: 'Quần áo trẻ em',
      price: 350000,
      amount: 1,
      size: ''
    },
    {
      id: 5,
      img: 'https://i.pinimg.com/564x/c5/4e/7f/c54e7fedf905bfee1956b3f28c206b0d.jpg',
      title: 'Set quần áo nam mặc đẹp ,màu trắng ,đầy đủ các loại size,',
      price: 520000,
      amount: 1,
      size: ''
    },
    {
      id: 6,
      img: 'https://i.pinimg.com/564x/59/51/33/59513349517f513de90443f463ddc0b4.jpg',
      title: 'Set đồ thể thao unisex',
      price: 200000,
      amount: 1,
      size : ''
    },
    {
      id: 7,
      img: 'https://i.pinimg.com/564x/a0/2e/da/a02eda77a0d5be7cb6976df078fc0cd8.jpg',
      title: 'Quần Jean Nữ Ống Rộng - Quần Jean Nữ Suông',
      price: 129000,
      amount: 1,
      size : ''
    },
    {
      id: 8,
      img: 'https://i.pinimg.com/564x/66/8d/b0/668db06be3a1695fe8875ecfcd3c4fc2.jpg',
      title: 'Set đồ thể thao nỉ nam mùa đông ',
      price: 378000,
      amount: 1,
      size: ''

    }
  ]);
  const [Cart, setCart] = useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const [size, setSize] = useState([]) //đây là state để lưu size 
  const handleClickSize = (type) => {
    const arr = [...size]
      setSize(type)
      console.log(arr)
  }
  const HandleAddProduct = (product) => {
    const tempCart = [...Cart] 
    const proIdx = tempCart.findIndex(it => it.id === product.id) 
    if(proIdx === -1){
      tempCart.push(product) // đây là trường hợp chưa có sp đó trong cart thì sẽ thêm nó vào
    }else{
      tempCart[proIdx] = {...tempCart[proIdx],amount: tempCart[proIdx].amount + 1}//đây là khi đã tồn tài thì sẽ tăng số lượng sp lên 1
    }
    setCart([...tempCart]);
    messageApi.open({
      type: 'success',
      content: 'Đã thêm sản phẩm vào giỏ hàng',
    });

  }
  const removeProduct = (sanpham) => {
    const arr = Cart.filter(sp => sp.id !== sanpham.id);
    console.log(arr)
    setCart([...arr])
  }
  const removeAllProdcut = () => {
    const arr = ''
    setCart([...arr])
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="App">
      {contextHolder}
      {/* <Footer /> */}
      <BrowserRouter>
        <div>
          <Nav soluong={Cart.length} Cart={Cart} setCart={setCart} removeProduct={removeProduct} numberWithCommas={numberWithCommas} size={size} setSize={setSize} />
          {/* <Header/> */}
          <Routes>
            <Route path="/trangchu" element={<Header />} />
          </Routes>
          <Routes>
            <Route path="/trangchu" element={<CartProduct List={List} HandleAddProduct={HandleAddProduct} numberWithCommas={numberWithCommas} handleClickSize={handleClickSize} size={size} setSize={setSize}/>} />
            <Route path='/product/:id' element={<ShowCartProduct List={List} setList={setList} Cart={Cart} setCart={setCart} HandleAddProduct={HandleAddProduct} numberWithCommas={numberWithCommas}/>} />
            <Route path="/giohang" element={<ShoppingCart Cart={Cart} setCart={setCart} removeProduct={removeProduct} numberWithCommas={numberWithCommas} removeAllProdcut={removeAllProdcut}  />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
