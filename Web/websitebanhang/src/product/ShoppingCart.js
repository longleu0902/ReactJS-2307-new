import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Container } from 'reactstrap';
function ShoppingCart({ Cart, setCart,removeProduct,numberWithCommas }) {
    const CartList = [...Cart];
    const [buttonColors, setButtonColors] = useState({ 
        button1: 'white',
        button2: 'white',
        button3: 'white',
        button4: 'white',

    });
    const [TongTien, setTongTien] = useState(0);
    const thaydoisoluong = (sanpham,sl) => {
        const idx = CartList.indexOf(sanpham);
        const arr = [...CartList];
        arr[idx].amount += sl;
        if(arr[idx].amount===0){
            arr[idx].amount=1;
        }
        setCart([...arr])
    }
    const tinhtongtien = () => {
        let tong = CartList.reduce(function (a, b) {
            return a + b.price*b.amount
        }, 0)
        setTongTien(tong)
    }
    const handleButtonClick = (buttonId) => {
        // Tạo một bản sao mới của trạng thái
        const newButtonColors = { ...buttonColors };
        // Thay đổi màu nền của nút được bấm
        newButtonColors[buttonId] = '#ccc'
        // Cập nhật trạng thái với màu nền mới
        setButtonColors(newButtonColors);
      };
    useEffect(() => {
        tinhtongtien();
    })
    return (
        <div className="shoppingcart">
            <div style={{ width: "100%", height: 50 }} />
            <div className="shoppingcart-title">
                <h1
                    style={{
                        fontFamily: '"Your-Custom-Font", sans-serif',
                        fontWeight: "bold",
                    }}
                >
                    Giỏ hàng
                </h1>
            </div>
            <div className="shoppingcart-list">
                <div className='shoppongcart-list-all'>
                    {CartList.map((product) => (
                        <div className="shoppingcart-list-item">
                            <div className="shoppingcart-list-item-img">
                                <img
                                    style={{ maxWidth: "100%", maxHeight: 200 }}
                                    src={product.img}
                                    alt=""
                                />
                            </div>
                            <div className="shopping-list-item-information">
                                <h4 style={{marginLeft:"2px"}}>{product.title}</h4>
                                <span style={{ color: "#eb6e6e",marginLeft:"3px" }}>{numberWithCommas(product.price)}đ</span>
                                <div className="dropdown-cart">
                                    <div className='Size'>
                                        <button onClick={()=>handleButtonClick('button1')} style={{ backgroundColor: buttonColors.button1 }} className='size-item'>S</button>
                                        <button onClick={()=>handleButtonClick('button2')} style={{ backgroundColor: buttonColors.button2 }} className='size-item'>L</button>
                                        <button onClick={()=>handleButtonClick('button3')} style={{ backgroundColor: buttonColors.button3 }} className='size-item'>XL</button>
                                        <button onClick={()=>handleButtonClick('button4')} style={{ backgroundColor: buttonColors.button4 }} className='size-item'>XXL</button>
                                    </div>
                                    <div className="amout">
                                        <button style={{backgroundColor:'#fff'}} onClick={()=>thaydoisoluong(product,-1)} className="btn-amout">-</button>
                                        <input style={{ width: 30 , border:'1px solid #ccc' }} type="text" value={product.amount} readOnly={true}/>
                                        <button style={{backgroundColor:'#fff'}} onClick={()=>thaydoisoluong(product,1)} className="btn-amout">+</button>
                                    </div>

                                </div>
                            </div>
                            <div className="shopping-list-item-remove">
                                <button
                                    style={{
                                        border: "none",
                                        padding: "12px 12px",
                                        borderRadius: 6,
                                        backgroundColor: "#fff"
                                    }}
                                    onClick={()=>{removeProduct(product)}}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="Pay">
                    <div className="shoppingcart-list-pay">
                        <div className="shoppingcart-list-pay-item">
                            <span>Giá trị đơn hàng</span>
                            <span>Khuyến mãi</span>
                            <span>Phí giao hàng</span>
                        </div>
                        <div className="shoppingcart-list-pay-item">
                            <span>{numberWithCommas(TongTien)}đ</span>
                            <span>0</span>
                            <span>Miễn phí</span>
                        </div>
                    </div>
                    <hr style={{ border: "1px solid #000", margin: "12px 24px" }} />
                    <div className="shoppingcart-list-pay">
                        <div className="shoppingcart-list-pay-item">
                            <span>Tổng</span>
                        </div>
                        <div className="shoppingcart-list-pay-item">
                            <span>{numberWithCommas(TongTien)}đ</span>
                        </div>
                    </div>
                    <div
                        style={{ height: 50, margin: "24px 0px" }}
                        className="shoppingcart-title"
                    >
                        <button className="btn-pay">Thanh toán</button>
                    </div>
                    <span style={{ color: "#ccc", fontSize: 12, margin: "12px 24px" }}>
                        Miễn phí đổi trả trong 30 ngày,trả hàng và hoàn tiền
                    </span>
                </div>
            </div>
        </div>

    )
}
export default ShoppingCart;