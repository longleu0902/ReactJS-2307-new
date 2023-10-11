import React from "react";
import PropTypes from 'prop-types';
function CardProduct(Props){
  const {nameProduct,isSale,isRate,price1,price2} = Props;
  const renderPrice = () => {
		if (isSale) {
			return (
				<>
					<span className='text-muted text-decoration-line-through'>
						${`${price1}.00`}
					</span>
					${`${price2}.00`}
				</>
			);
		} else {
			if (price1 && price2) {
				return (
					<>
						${`${price1}.00`} - ${`${price2}.00`}
					</>
				);
			} else {
				return <>${`${price1}.00`}</>;
			}
		}
	};
    return  (
        <div className="col mb-5">
  <div className="card h-100">
    {/* Sale badge*/}
    {isSale==true ? (
      <div
      className="badge bg-dark text-white position-absolute"
      style={{ top: "0.5rem", right: "0.5rem" }}
    >
      Sale
    </div>

    ) : (
      ''
    )}
   
    {/* Product image*/}
    <img
      className="card-img-top"
      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
      alt="..."
    />
    {/* Product details*/}
    <div className="card-body p-4">
      <div className="text-center">
        {/* Product name*/}
        <h5 className="fw-bolder">{nameProduct}</h5>
        {/* Product reviews*/}
        {isRate && (
							<div className='d-flex justify-content-center small text-warning mb-2'>
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
								<div className='bi-star-fill' />
							</div>
						)}
        {/* Product price*/}
        {renderPrice()}
      </div>
    </div>
    {/* Product actions*/}
    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a className="btn btn-outline-dark mt-auto" href="#">
          Add to cart
        </a>
      </div>
    </div>
  </div>
</div>

    )
}
CardProduct.propTypes = {
	nameProduct: PropTypes.string.isRequired,
	isSale: PropTypes.bool,
	isRate: PropTypes.bool,
};

CardProduct.defaultProps = {
	isSale: true,
	isRate: true,
};
export default CardProduct;