import react from 'react'
function Nav(){
    return(
        <div className="Nav">
  <div className="nav-logo"></div>
  <div className="nav-item">
    <a href="#">Home</a>
    <a href="#">About Us</a>
    <a href="#">Contact</a>
    <a href="#">More</a>
    <i style={{ margin: 10 }} className="fas fa-shopping-cart cart">
      <ul style={{ paddingLeft: 0 }} className="cart-item">
        <li>
          <a href="#">
            <div className="cart-list">
              <div
                className="cart-product-img"
                style={{
                  backgroundImage:
                    "url(https://naidecor.vn/wp-content/uploads/2020/01/ct00192-549k.jpg)",
                  height: 40,
                  width: "10%",
                  backgroundSize: "cover"
                }}
              ></div>
              <span>Áo dài tay trắng mùa đông lạnh</span>
              <span style={{ color: "#eb6e6e" }}>300.000vnd</span>
            </div>
          </a>
          <hr></hr>
        </li>
        <li>
          <button
            style={{
              border: "1px solid #000",
              fontSize: 16,
              // width: "100%",
              padding: "6px 12px",
            }}
          >
            DELETE
          </button>
        </li>
      </ul>
    </i>
  </div>
</div>

    )
}
export default Nav;