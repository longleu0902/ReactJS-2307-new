import logo from './logo.svg';
import './App.css';
import CardProduct from './cardProduct';
import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';
import PageLayout from './PageLayout';
function App() {
  const objred = {
    color : 'red' 
  }
  return (
    // <div className="App">
    //   <h1 style={objred} >ReactJS2307</h1>
    //   <p>Test</p>
    //   <CardProduct></CardProduct>
    //   <CardProduct></CardProduct>
    // </div>
   <>
  <PageLayout>
    <Content/>
  </PageLayout>
   </>


  );
}

export default App;
