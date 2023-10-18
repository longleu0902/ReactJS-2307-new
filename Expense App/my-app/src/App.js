import logo from './logo.svg';
import './App.css';
import InputExpense from './InputExpense';
import ProductList from './ProductList';
import {useState} from 'react'


function App() {
  const [List , setList] = useState([

])
 const [value,setValue] = useState()

  const handleChange = (key,data) =>{
    setValue({...value,
    [key]:data
    })
  }
  const handleAddProduct = () =>{
    if (value && value.name && value.date && value.price){
    setList([...List,value])
    } else {
      alert('Phải nhập đủ thông tin')
    }
  } 
  console.log(value)
  const [isOpenForm,setIsOpenForm] = useState(false);
  const handleOpen = () => {
    setIsOpenForm(prev => !prev)
  }
  return (
<div className="body">
  <div className="container ">
    <div style={{ width: "100%", height: 30 }} className="fix" />
    <div className="add">
  <button onClick={handleOpen} className="add-expense">Add new Expense</button>
</div>
      {isOpenForm&&<InputExpense handleChange={handleChange} handleAddProduct={handleAddProduct} handleCancel={()=>setIsOpenForm(false)} />}
    <div className="product">
      <div className="product-filter">
        <span style={{ color: "#fff", margin: "12px 24px" }}>
          Filter by year
        </span>
        <select style={{ margin: "12px 24px" }}>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
      </div>
      <div className="product-chart">
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column bar-column-Jan" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jan
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Feb
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Mar
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Apr
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column bar-column-may" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            May
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jun
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jul
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Aug
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Sep
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Oct
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Nov
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column bar-column-october" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jan
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jan
          </div>
        </div>
        <div className="bar">
          <div style={{ width: "100%", height: 6 }} className="fix" />
          <div className="bar-column" />
          <div style={{ color: "#000", marginLeft: 5 }} className="bar-month">
            Jan
          </div>
        </div>
      </div>
      {/* product-list  */}
      <ProductList List={List}/>
    </div>
  </div>
</div>

  );
}


export default App;
