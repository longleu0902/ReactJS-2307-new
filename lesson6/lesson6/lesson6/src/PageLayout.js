import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';
import Postpreview from './Postpreview';
const PageLayout = (props) => {
    return  (
        <div>
        <Navigation/>
        <Header/>
        {props.children}
        <Footer/>
        </div>


    )
} 
export default PageLayout;