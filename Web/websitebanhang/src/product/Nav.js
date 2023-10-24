import react from 'react'
import { Route, Routes, NavLink, BrowserRouter, useNavigate } from 'react-router-dom';
function Nav({ Cart, setCart, soluong , removeProduct , removeAllProdcut }) {
  const CartList = [...Cart];
  // setCart([...Cart,CartList])
  console.log(CartList)
  const navigate = useNavigate();
  const hanldeShowCart = () => {
    navigate('/giohang')
  }

  return (
    <div className="Nav">
      <div className="nav-logo"></div>
      <div className="nav-item">
      <NavLink to='/trangchu'>
       <a href="/#">Home</a>
      </NavLink>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">More</a>
        <i style={{ margin: 10 }} className="fas fa-shopping-cart cart">
          <ul style={{ paddingLeft: 0 }} className="cart-item">
            <div>
              <h5 style={{ color: "#000", fontFamily: "Times New Roman", padding: '12px 12px' }}>Đơn hàng đã chọn</h5>
              <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
            </div>
            <div style={{height:"370px",overflowY:'scroll'}}>
            {CartList.map((product) => (
              <li onClick={hanldeShowCart} >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    style={{
                      fontSize: 12,
                      padding: "0 12px",
                      color: '#000',
                      border: 'none',
                      backgroundColor: "#fff",
                      margin: '0px 6px',
                    }}
                    onClick={()=>removeProduct(product)}
                  >
                    X
                  </button>
                </div>
                <a href="#">
                  <div className="cart-list">
                    <div
                      className="cart-product-img"
                      style={{
                        backgroundImage:
                          `url(${product.img})`,
                        height: 40,
                        width: "10%",
                        backgroundSize: "cover"
                      }}
                    ></div>
                    <span style={{ width: "300px",marginBottom:"26px",fontSize:"15px" }}>{product.title}</span>
                    <span style={{ color: "#eb6e6e" }}>{product.price},000đ</span>
                  </div>
                </a>
                <hr style={{ borderStyle: "dashed ", margin: '6px 0px' }}></hr>
              </li>
            ))}
            </div>
              <div style={{display: "flex", justifyContent: "space-between" }}>
                <button onClick={hanldeShowCart} style={{color: "#000", fontFamily: "Times New Roman", borderRadius: '5px', border: '1px solid #000', fontSize: '16px', margin: '12px 6px' }}>
                  Chi tiết giỏ hàng
                </button>
                <button onClick={removeAllProdcut} style={{color: "#000", fontFamily: "Times New Roman", borderRadius: '5px', border: '1px solid #000', fontSize: '16px', margin: '12px 6px' }}>
                  Xoá tất cả
                </button>
              </div>
          </ul>
          <span className="Soluong">{soluong}</span>
        </i>
      </div>
    </div>

  )
}
export default Nav;