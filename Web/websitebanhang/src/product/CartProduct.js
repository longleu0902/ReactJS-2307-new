import React, { useState } from 'react';
import { Row, Col ,Pagination } from 'antd';
import { Container } from 'reactstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, message, Empty } from 'antd';
import CartChild from './Cart';
function CartProduct({ List, HandleAddProduct, numberWithCommas, size, setSize, handleClickSize,keywords }) {
    const [optionPage,setOptionPage] = useState({
        page:1,
        pageSize: 8,
        total:List.length
    })
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
                {List.filter((product)=>product.title.toLowerCase().includes(keywords)).map((product) => (
                    <CartChild product={product} HandleAddProduct={HandleAddProduct} numberWithCommas={numberWithCommas} handleClickSize={handleClickSize} size={size}/>

                ))}
            </Row>
            <div className='Pagination'></div>
                <Pagination defaultCurrent={1} total={List.length} defaultPageSize={optionPage.pageSize} onChange={(page)=>{setOptionPage({...optionPage,page})}}/>
            {/* </Col> */}
            {/* </Row> */}
        </div>
    )
}
export default CartProduct;