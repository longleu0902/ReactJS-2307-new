import React, { useState } from 'react';
import { Row, Col, Pagination } from 'antd';
import { Container } from 'reactstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, message, Empty } from 'antd';
import ReactPaginate from 'react-paginate';
import CartChild from './Cart';
function CartProduct({ List, HandleAddProduct, numberWithCommas, size, setSize, handleClickSize, keywords }) {
      //test pagination
  const [itemOffset, setItemOffset] = useState(0);
  const currentPage = 1 // Trang hiện tại
  const itemsPerPage = 12; // Số mục dữ liệu trên mỗi trang
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = List.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(List.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % List.length;
    setItemOffset(newOffset);
  };
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
                {currentItems && currentItems.map((product) => (
                    <CartChild product={product} HandleAddProduct={HandleAddProduct} numberWithCommas={numberWithCommas} handleClickSize={handleClickSize} size={size} />

                ))}
            </Row>
            {/* </Col> */}
            {/* </Row> */}
            <div className='Pagination'>
                <ReactPaginate className='pagination-style'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    activeClassName = "pagination-active"
                    pageLinkClassName = "pagination-a"
                    previousClassName = "pagination-next-pre"
                    nextClassName = "pagination-next-pre"
                    previousLinkClassName = "pagination-next-pre"
                    nextLinkClassName = "pagination-next-pre"
                />
            </div>
        </div>
    )
}
export default CartProduct;