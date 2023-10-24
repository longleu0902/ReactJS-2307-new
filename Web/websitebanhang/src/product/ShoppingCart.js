import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Container } from 'reactstrap';
function ShoppingCart({ Cart, setCart,removeProduct }) {
    const CartList = [...Cart];
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
    useEffect(() => {
        tinhtongtien();
    })
    console.log(TongTien)
    const items = [
        {
            label: 'S',
            key: '1',
        },
        {
            label: 'L',
            key: '1',
        },
        {
            label: 'XL',
            key: '1',
        },
        {
            label: 'XXl',
            key: '1',
        },
    ];
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((state) => {
            const newLoadings = [...state];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((state) => {
                const newLoadings = [...state];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };
    return (
        <div className="shoppingcart">
            <div style={{ width: "100%", height: 50 }} />
            <div className="shoppingcart-title">
                <h1
                    style={{
                        fontFamily: '"Your-Custom-Font", sans-serif',
                        fontWeight: "bold"
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
                                <h3>{product.title}</h3>
                                <span style={{ color: "#eb6e6e" }}>{product.price},000đ</span>
                                <div className="dropdown-cart">
                                    <Space direction="vertical">
                                        <Dropdown.Button
                                            icon={<DownOutlined />}
                                            loading={loadings[1]}
                                            menu={{
                                                items,
                                            }}
                                            onClick={() => enterLoading(1)}
                                        >
                                            Size
                                        </Dropdown.Button>
                                    </Space>
                                    <div className="amout">
                                        <button onClick={()=>thaydoisoluong(product,1)} className="btn-amout">+</button>
                                        <input style={{ width: 30 }} type="text" value={product.amount} readOnly={true}/>
                                        <button onClick={()=>thaydoisoluong(product,-1)} className="btn-amout">-</button>
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
                            <span>{TongTien},000đ</span>
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
                            <span>{TongTien},000đ</span>
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