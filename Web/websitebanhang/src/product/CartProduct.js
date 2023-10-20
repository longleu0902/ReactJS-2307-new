import React, { useState } from 'react';
import { Row, Col } from 'antd';
import ProductItem from './ProductItem';
import {Container} from 'reactstrap'
function CartProduct() {
    return (
        <div className="CTN">
            <Row>
                <Col
                    xl={4}
                    style={{ padding: '8px' }}
                >
                    <div className="category">
                        <h5 style={{ paddingLeft: '3px' }} >Danh mục sản phẩm</h5>
                        <a href="#" className="category-link">
                            Tất cả sản phẩm
                        </a>
                        <a href="#" className="category-link">
                            Áo thun
                        </a>
                        <a href="#" className="category-link">
                            Áo sơ mi
                        </a>
                        <a href="#" className="category-link">
                            Áo Khoác
                        </a>
                        <a href="#" className="category-link">
                            Áo Hoodie,Áo Len
                        </a>
                        <a href="#" className="category-link">
                            Quần Dài,Quần Âu
                        </a>
                        <a href="#" className="category-link">
                            Set quần áo thể thao
                        </a>
                    </div>
                </Col>
                <Col
                    xl={20}
                >
                    <ProductItem />
                </Col>
            </Row>
        </div>







    )
}
export default CartProduct;