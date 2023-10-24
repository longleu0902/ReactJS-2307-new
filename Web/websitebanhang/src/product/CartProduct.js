import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Container } from 'reactstrap'
import { Navigate, useNavigate } from 'react-router-dom';
function CartProduct({ List,HandleAddProduct}) {
    const navigate = useNavigate();
    const handleRedirectPage = (idProduct,type = 'product') => {
        navigate(`/${type}/${idProduct}`);
    }

    return (
        <div className="CTN">
            <Row>
                <Col
                    xl={4}
                    style={{ padding: '8px' }}
                >
                    <div className="category">
                        <h5 style={{ paddingLeft: '12px' }} >Danh mục sản phẩm</h5>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Tất cả sản phẩm
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Áo thun
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Áo sơ mi
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Áo Khoác
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Áo Hoodie,Áo Len
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>     
                        <a href="#" className="category-link">
                            Quần Dài,Quần Âu
                        </a>
                        <hr style={{borderStyle:"dashed " ,margin:'6px 12px'}}></hr>
                        <a href="#" className="category-link">
                            Set quần áo thể thao
                        </a>
                    </div>
                </Col>
                <Col xl={20} >
                    <Row>
                        {List.map((product) => (
                            <Col
                                xl={6}
                                lg={8}
                                md={12}
                                sm={24}
                                style={{ padding: '8px' }}
                                key = {product.id}
                            >
                                <div className="product">
                                    <img
                                        className="product-img"
                                        src={product.img}
                                    />
                                    <div className="product-name_price">
                                        <h5 style={{ 
                                            fontSize:'12px',
                                            color: "#595656" ,
                                            whiteSpace: "nowrap", 
                                            overflow: "hidden", 
                                            textOverflow: "ellipsis",
                                            cursor : "pointer",
                                        }}onClick={()=>handleRedirectPage(product.id)}
                                        >{product.title}</h5>
                                        <span style={{ color: "#eb6e6e" }}>{product.price},000đ</span>
                                    </div>
                                    <div className="product-buy">
                                        <button 
                                        onClick={()=>HandleAddProduct(product)} 
                                        type="button" 
                                        className="btn btn-secondary">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>







    )
}
export default CartProduct;