import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Container } from 'reactstrap'
import { Navigate, useNavigate,useParams } from 'react-router-dom';
import { Button, message, Empty } from 'antd';
function CartProductFilter({ List, HandleAddProduct, numberWithCommas, size, setSize, handleClickSize }) {
    const navigate = useNavigate();
    const handleRedirectPage = (idProduct, type = 'product') => {
        navigate(`/${type}/${idProduct}`);
    }
    const params = useParams();
    console.log("param", params)
    const samples = params.sample
    const CartList = [...List];
    const CartListFilter = CartList.filter((product)=> product.sample == samples)
    // console.log(CartListFilter)
    return (
        <div className="CTN">
            <Row>
                {CartListFilter.map((product) => (
                    <Col
                        xl={6}
                        lg={8}
                        md={12}
                        sm={24}
                        style={{ padding: '8px' }}
                        key={product.id}
                    >
                        <div onDoubleClick={() => handleRedirectPage(product.id)} className="product">
                            {/* <div > */}
                            <img
                                className="product-img"
                                src={product.img}
                            />
                            <div className="product-name_price">
                                <div style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    cursor: "pointer",
                                    fontFamily: 'Poppins',
                                    width: '265px',
                                    textAlign: 'center'

                                }}>
                                    <h5 style={{
                                        fontSize: '16px',
                                        color: "#595656",
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        cursor: "pointer",
                                        fontFamily: 'Poppins',
                                    }}
                                    >{product.title}</h5>
                                </div>

                                <span style={{ color: "#000" }}>{numberWithCommas(product.price)}đ</span>
                            </div>
                            {/* </div> */}

                            <div className='product-hover'>
                                <img
                                    className="product-img"
                                    src={product.img}
                                />
                                <div className="product-name_price">
                                <div className='product-btn-color'>
                                        <button style={{outline:'none',backgroundColor:'rgb(81 79 79)'}}  className='btn-color'></button>
                                        <button style={{outline:'none', backgroundColor:'#ccc'}}  className='btn-color'></button>
                                        <button style={{outline:'none',backgroundColor:'rgb(252 252 247)'}}  className='btn-color'></button>
                                    </div>
                                    <div className='Size'>
                                        <button onClick={() => handleClickSize("s")} style={{ backgroundColor: "s" === size ? 'rgb(240 240 240)' : '#fff', outline: 'none' }} className='size-item'>S</button>
                                        <button onClick={() => handleClickSize("l")} style={{ backgroundColor: "l" === size ? 'rgb(240 240 240)' : '#fff', outline: 'none' }} className='size-item'>L</button>
                                        <button onClick={() => handleClickSize("xl")} style={{ backgroundColor: "xl" === size ? 'rgb(240 240 240)' : '#fff', outline: 'none' }} className='size-item'>XL</button>
                                        <button onClick={() => handleClickSize("xxl")} style={{ backgroundColor: "xxl" === size ? 'rgb(240 240 240)' : '#fff', outline: 'none' }} className='size-item'>XXL</button>
                                    </div>
                                    <span style={{ color: "#000" }}>{numberWithCommas(product.price)}đ</span>
                                </div>
                                <div className="product-buy">
                                    <button
                                        style={{ width: '100%', backgroundColor: '#000' }}
                                        onClick={() => HandleAddProduct(product)}
                                        type="button"
                                        className="btn btn-secondary">
                                        Add to cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* </Col> */}
            {/* </Row> */}
        </div>







    )
}
export default CartProductFilter;