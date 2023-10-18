import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductList from './ProductList';
import moment from 'moment'
function InputExpense({handleChange,handleAddProduct,handleCancel}){

    
    return(
        <div className="input-expense">
  <div className="input-expense-item">
    <span style={{ color: "#fff", paddingTop: 2 }}>Name</span>
    <input
      style={{ width: "65%" }}
      type="text"
      className="input-item"
      placeholder="Enter name here..."
      onChange={(e)=> {handleChange('name',e.target.value)}}
    />
  </div>
  <div className="input-expense-item">
    <span style={{ color: "#fff", paddingTop: 2 }}>Amount</span>
    <input
      style={{ width: "65%" }}
      type="text"
      className="input-item"
      placeholder="Enter amount here..."
      onChange={(e)=> {handleChange('price',e.target.value)}}

    />
  </div>
  <div className="input-expense-item">
    <span style={{ color: "#fff", paddingTop: 2 }}>Date</span>
    <input
      style={{ width: "65%" }}
      type="date"
      className="input-item"
      placeholder="dd/mm/yy"
      onChange={(e)=> {handleChange('date',moment(e.target.value).format('MMMM-YYYY-DD'))}}

    />
  </div>
  <div className="btn-input">
    <button
      style={{ marginRight: 24, marginBottom: 12 }}
      type="button"
      className="btn-expense"
      onClick={handleAddProduct}
    >
      Add
    </button>
    <button
      style={{ border: "1px solid #000", marginRight: 24, marginBottom: 12 }}
      type="button"
      className="btn btn-secondary"
      onClick={handleCancel}
    >
      Cancel
    </button>
  </div>
</div>


    )
}
export default InputExpense;