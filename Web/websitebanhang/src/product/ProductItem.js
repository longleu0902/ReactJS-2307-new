import { Row, Col } from 'antd';
import React, { useState } from 'react';
function ProductItem(){
    const [List, setList] = useState([
        {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        },
        {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }, {
            img: 'https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg',
            title: 'Áo dài tay trắng mùa đông lạnh',
            price: '300.000',
        }
    ])
return (
    <Row>
    {List.map((product) => (
        <Col
            xl={6}
            lg={8}
            md={12}
            sm={24}
            style={{ padding: '8px' }}
        >
            <div className="product">
                <img
                    className="product-img"
                    src={product.img}
                />
                <div className="product-name_price">
                    <h5 style={{ color: "#595656" }}>{product.title}</h5>
                    <span style={{ color: "#eb6e6e" }}>{product.price}VNĐ</span>
                </div>
                <div className="product-buy">
                    <button type="button" className="btn btn-secondary">
                        Add to cart
                    </button>
                </div>
            </div>
        </Col>
    ))}
</Row>
)
}
export default ProductItem;