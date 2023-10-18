import { useState } from "react"
import InputExpense from "./InputExpense"

function ProductList({List}){

    return (
      List.map((product)=>
      {
        const convertDate = product?.date?.split("-")
        console.log(convertDate)

     return (
        <div className="product-list">
        <div className="product-list-item">
          <div className="product-list-item-daymonyear">
            <p>{convertDate[1]}</p>
            <p>{convertDate[0]}</p>
            <p style={{ fontWeight: 800, fontSize: 20 }}>{convertDate[2]}</p>
          </div>
          <span className="product-list-item-name">{product.name}</span>
        </div>
        <div
          style={{ fontSize: 20 }}
          className="product-list-price product-list-item-name"
        >
          <button style={{ border: "1px solid #fff" }} className="btn-expense">
           ${product.price}
          </button>
        </div>
      </div>

      )}
      
      )

    )
}
export default ProductList