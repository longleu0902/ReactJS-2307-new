import React, { useState } from 'react';
import { Carousel } from 'antd';
import { useParams } from 'react-router-dom';
function ShowCartProduct({List,setList,Cart, setCart,HandleAddProduct,numberWithCommas}) {
    const contentStyle = {
        // margin: '24px 12px',
        height: '700px',
        color: '#fff',
        background: '#ccc'
    };
    const params = useParams();
    const [productDetail,setProductDetail] = useState(null);
    if(params.id){
        const product = List.find(
            (element) => element.id == params.id
        )
        if(product !== undefined && productDetail==null){
            setProductDetail({...product});
        }
    }
    return (
        <div className="BTN">
            <div className="showprodcut">
                <div className="showproduct-img">
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>
                            <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src={productDetail?.img}></img>      
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                            <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src='https://ressmedia.com/wp-content/uploads/2021/07/LVN_5569-768x768.jpg '></img>      
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                            <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src='https://cf.shopee.vn/file/da9692b78e73e57c0ade2b3237074791'></img>      
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                            <img style={{width:'100%',height:'100%',backgroundSize:'cover'}} src='https://xuconcept.com/wp-content/uploads/2020/12/xu-huong-chup-quan-ao.jpg'></img>      
                            </h3>
                        </div>
                    </Carousel>

                </div>
                <div className="showproduct-info">
                    <div style={{whiteSpace:"pre-wrap", textOverflow: "ellipsis",with:'50px' }}>
                    <h1 className='square-font' style={{ margin: "24px 0 40px 0", }}>{productDetail?.title}</h1>
                    </div>
                    <span style={{ fontSize: 30, color: "#eb6e6e" }}>{productDetail!==null?numberWithCommas(productDetail.price):''}đ</span>
                    <div className="showproduct-info-color">
                        <p>Màu sắc</p>
                        <button style={{outline:'none'}} className="showproduct-btn">Đen</button>
                        <button style={{outline:'none'}} className="showproduct-btn">Trắng</button>
                        <button style={{outline:'none'}} className="showproduct-btn">Be</button>
                    </div>
                    <div className="showproduct-info-size">
                        <p>Kích cỡ</p>
                        <button style={{outline:'none'}} className="showproduct-btn">S</button>
                        <button style={{outline:'none'}} className="showproduct-btn">L</button>
                        <button style={{outline:'none'}} className="showproduct-btn">XL</button>
                        <button style={{outline:'none'}} className="showproduct-btn">XXl</button>
                    </div>
                    <div className="showproduct-info-guide">
                        <span style={{ fontSize: 12, textDecoration: "underline" }}>
                            Hướng dẫn chọn kích cỡ
                        </span>
                        <div className="guide">
                            <div className="guide-title">
                                <span>Gợi ý kích cỡ</span>
                            </div>
                            <div className="guid-item">
                                <img
                                    className="guid-item-img"
                                    src="https://lamphongchina.com/wp-content/uploads/2016/04/size-quan-ao-1.jpg?fbclid=IwAR2dTs51fxWD87TIqoXWW0ZB3QGwGvwka0luP0Jk_WdakP3q-LuD-xEwL5s"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <button className='btn-pay' style={{ padding: '16px 24px', margin: '0' }}>Thêm vào giỏ hàng</button>
                    <div style={{ margin: '24px 0px', color: '#ccc' }} >
                        Lưu ý: <br></br>
                        <br></br>
                        Giá sản phẩm đã bao gồm VAT, không bao gồm phí giao hàng.<br></br>Thời gian giao
                        hàng dự kiến 3-7 ngày làm việc. Mọi thắc mắc<br></br>vui lòng xem thêm tại trang
                        Dịch vụ khách hàng.
                    </div>
                </div>
            </div>


        </div>
    )
}
export default ShowCartProduct;