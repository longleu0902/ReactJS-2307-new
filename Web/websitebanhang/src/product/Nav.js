import react from 'react'
import { Route, Routes, NavLink, BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import { Empty, Input, Space } from 'antd';
import AuthFormLogin from './AuthForm';
import AuthFormSignUp from './AuthFormSignUp';
import { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
function Nav({ Cart, setCart, soluong, removeProduct, removeAllProdcut, numberWithCommas, size, setSize, getKeywords }) {
  const CartList = [...Cart];
  // setCart([...Cart,CartList])
  const navigate = useNavigate();
  const location = useLocation();
  const hanldeShowCart = () => {
    navigate('/giohang')
  }
  const hanldeShowProductFilter = (type) => {
    navigate(`/filter/${type}`)
  }

  // console.log('location: ', location)
  const styleNava = {
    color: location.pathname.includes('/product') || location.pathname.includes('/giohang') ? '#fff' : '#000'
  }
  const styleNavaicon = {
    color: location.pathname.includes('/product') || location.pathname.includes('/giohang') ? '#fff' : '#000',
    margin: 10,
    fontSize: '25px'

  }
  const [isOpenForm, setIsOpenForm] = useState(false)
  const hanldeOpenForm = () => {
    setIsOpenForm(prev => !prev)
  }
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

  return (
    <div className="Nav" style={{
      position: location.pathname.includes('/product') || location.pathname.includes('/giohang') ? 'static' : 'fixed',
      background: location.pathname.includes('/product') || location.pathname.includes('/giohang') ? '#000' : '',
    }}>
      <div className="nav-logo">
        <div style={{
          display: location.pathname.includes('/giohang') ? 'block' : 'none'
        }} className='nav-login'>
          <svg style={styleNavaicon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
          </svg>
          <span style={styleNava} onClick={hanldeOpenForm}>Login</span>
          {isOpenForm && <AuthFormSignUp hanldeOpenForm={hanldeOpenForm} />}
        </div>
        <div style={{
          display: location.pathname.includes('/filter') || location.pathname.includes('/product') || location.pathname.includes('/giohang') ? 'none' : 'block'
        }} className='nav-input-search'>
          <div className='search-hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <div className='search-show'>
              <Space  direction="vertical">
                <Search 
                  placeholder=" Search "
                  onChange={getKeywords}
                  style={{
                    width: 200,
                  }}
                />
              </Space>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <NavLink to='/trangchu'>
          <a className='nav-active' style={styleNava} href="/#">Home</a>
        </NavLink>
        <a className='nav-active' style={styleNava} href="#">About Us</a>
        <a className='nav-active' style={styleNava} href="#">Contact</a>
        <a className='nav-more' style={styleNava} href="#">
          <div className='nav-more-item'>
            <div onClick={() => hanldeShowProductFilter('váy')} className='nav-more-item-option'>Váy thời trang</div>
            <div onClick={() => hanldeShowProductFilter('đầm')} className='nav-more-item-option' >Đầm thời trang</div>
            <div onClick={() => hanldeShowProductFilter('set')} className='nav-more-item-option' >Các set thời trang</div>
            <div className='nav-more-item-option' >More 4</div>
          </div>
          More
        </a>
        <i style={styleNavaicon} className="fas fa-shopping-bag cart">
          <ul style={{ paddingLeft: 0 }} className="cart-item">
            <div style={{ textAlign: 'center' }}>
              <a style={{ color: "#000", fontFamily: 'Poppins', padding: '12px 12px' }}>Đơn hàng đã chọn</a>
              <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
            </div>
            <div style={{ height: "370px", overflowY: 'scroll' }}>
              {CartList == '' ? (<Empty description={false} />) : ''}
              {CartList.map((product) => (
                <li>
                  <a href="#">
                    <div className="cart-list">
                      <div
                        className="cart-product-img"
                        style={{
                          backgroundImage:
                            `url(${product.img})`,
                          height: '150px',
                          width: "30%",
                          backgroundSize: "cover",
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      <div onClick={hanldeShowCart} className='cart-list-info'>
                        <span style={{ width: "300px", fontSize: "15px", height: '25px', margin: '0px 0px', fontFamily: 'Poppins' }}>
                          {product.title}
                        </span>
                        <div><span style={{ fontSize: '12px' }}>Size: {product?.size}</span></div>  
                        <div><span style={{ fontSize: '12px' }}>Màu: {product?.color}</span></div>                        
                        <div><span style={{ fontSize: '12px' }} >Số lượng: {product.amount}</span> </div>
                        <span style={{ color: "#000", fontSize: '15px' }}>{numberWithCommas(product.price)}đ</span>
                      </div>
                      <button className='btn-xoa'
                        style={{
                          fontSize: 12,
                          padding: "0 12px",
                          color: '#000',
                          border: 'none',
                          backgroundColor: "#fff",
                          margin: '0px 6px',
                          outline: 'none'
                        }}
                        onClick={() => removeProduct(product)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                        </svg>
                      </button>
                    </div>
                  </a>
                  <hr style={{ borderStyle: "dashed ", margin: '6px 0px' }}></hr>
                </li>
              ))}
            </div>
            <div style={{ display: "flex", height: '80px' }}>
              <button className='btn-xoa' onClick={hanldeShowCart} style={{ color: "#000", fontFamily: "Times New Roman", borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', margin: '24px 24px 16px 24px', backgroundColor: "#000", color: '#fff', outline: 'none', width: '100%' }}>
                Chi tiết giỏ hàng
              </button>
            </div>
          </ul>
          <span style={{
            color: location.pathname.includes('/product') || location.pathname.includes('/giohang') ? '#000' : '#fff'
          }}
            className="Soluong">{soluong}</span>
        </i>
      </div>
    </div>

  )
}
export default Nav;