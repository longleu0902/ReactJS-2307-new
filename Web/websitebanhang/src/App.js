import logo from './logo.svg';
import './App.css';
import Nav from './product/Nav';
import Header from './product/Header';
import CartProduct from './product/CartProduct';
import Footer from './product/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <CartProduct/>
      <Footer/>
    </div>
  );
}

export default App;
