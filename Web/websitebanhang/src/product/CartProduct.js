import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Container } from 'reactstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';
function CartProduct({ List, HandleAddProduct, numberWithCommas, size, setSize, handleClickSize }) {
    const navigate = useNavigate();
    const handleRedirectPage = (idProduct, type = 'product') => {
        navigate(`/${type}/${idProduct}`);
    }
    return (
        <div className="CTN">
            {/* <Row> */}
            {/* <Col
                    xl={4}
                    style={{ padding: '8px' }}
                >
                    <div className="category">
                        <h5 style={{ paddingLeft: '12px' }} >Danh mục sản phẩm</h5>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Tất cả sản phẩm
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Áo thun
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Áo sơ mi
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Áo Khoác
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Áo Hoodie,Áo Len
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Quần Dài,Quần Âu
                        </a>
                        <hr style={{ borderStyle: "dashed ", margin: '6px 12px' }}></hr>
                        <a href="#" className="category-link">
                            Set quần áo thể thao
                        </a>
                    </div>
                </Col> */}
            {/* <Col xl={24} > */}
            <Row>
                {List.map((product) => (
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
export default CartProduct;