import React, { useEffect, useState } from 'react';
import { Empty,message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Container } from 'reactstrap';
function ShoppingCart({ Cart, setCart, removeProduct, removeAllProdcut,numberWithCommas }) {
    const CartList = [...Cart];
    const [messageApi, contextHolder] = message.useMessage();
    const [TongTien, setTongTien] = useState(0);
    // truyền hàm này qua props
    const thaydoisoluong = (sanpham, sl) => {
        const idx = CartList.indexOf(sanpham);
        const arr = [...CartList];
        arr[idx].amount = Number(arr[idx].amount) + Number(sl);
        if (arr[idx].amount === 0) {
            arr[idx].amount = 1;
        }     
        setCart([...arr])
    }
    const tinhtongtien = () => {
        let tong = CartList.reduce(function (a, b) {
            return Number(a) + Number(b.price) * Number(b.amount)
        }, 0)
        setTongTien(tong)
    }

    useEffect(() => {
        tinhtongtien();
    })
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: 'Vui lòng đăng nhập để thanh toán',
        });
      };


    return (
        <div className="shoppingcart">
             {contextHolder}
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
                    {CartList == '' ? (<Empty description={false} />) : ''}
                    {CartList.map((product) => (
                        // truyền từng thằng product xuống thằng cart con
                        <CartComponent
                            product={product}
                            thaydoisoluong={thaydoisoluong}
                            removeProduct={removeProduct}
                            numberWithCommas={numberWithCommas}
                        />
                    ))}
                    {CartList == '' ? ''
                     
                    :(
                        <button className='btn-xoa' onClick={removeAllProdcut} style={{ color: "#000", fontFamily: "Times New Roman", borderRadius: '2px', border: '1px solid #ccc', fontSize: '16px', margin: '12px 6px', backgroundColor: "#fff", outline: 'none' }}>
                        Xoá tất cả
                    </button>
                    )}
              
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
                        <button onClick={warning} className="btn-pay">Thanh toán</button>
                    </div>
                    <span style={{ color: "#ccc", fontSize: 12, margin: "12px 24px" }}>
                        Miễn phí đổi trả trong 30 ngày,trả hàng và hoàn tiền
                    </span>
                </div>
            </div>
        </div>

    )
}

//CartComponent
const CartComponent = ({ product, thaydoisoluong, removeProduct, numberWithCommas }) => {
    const [size, setSize] = useState("") //đây là state để lưu size 
    const handleClickSize = (type) => {
        setSize(type)
    }
    return (
        <div className="shoppingcart-list-item">
            <div className="shoppingcart-list-item-img">
                <img
                    style={{ maxWidth: "100%", maxHeight: 200 }}
                    src={product.img}
                    alt=""
                />
            </div>
            <div className="shopping-list-item-information">
                <h4 style={{ marginLeft: "2px" }}>{product.title}</h4>
                <span style={{ color: "#eb6e6e", marginLeft: "3px" }}>{numberWithCommas(product.price)}đ</span>
                <div className="dropdown-cart">
                    <div className='Size'>
                        <span>Size: {product.size}</span>
                    </div>
                    <div><span>Màu: {product.color}</span></div>
                    <div className="amout">
                        <button style={{ backgroundColor: '#fff' }} onClick={() => thaydoisoluong(product, -1)} className="btn-amout">-</button>
                        <input style={{ width: 30, border: '1px solid #ccc' }} type="text" value={product.amount} readOnly={true} />
                        <button style={{ backgroundColor: '#fff' }} onClick={() => thaydoisoluong(product, 1)} className="btn-amout">+</button>
                    </div>

                </div>
            </div>
            <div className="shopping-list-item-remove">
                <button className='btn-xoa'
                    style={{
                        border: "none",
                        padding: "12px 12px",
                        borderRadius: 6,
                        backgroundColor: "#fff",
                        outline: 'none'
                    }}
                    onClick={() => { removeProduct(product) }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}


export default ShoppingCart;