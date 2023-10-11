import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './MainContent';
import Footer from './Footer';
import Postpreview from './Postpreview';
import PageLayout from './PageLayout';
function App() {
  return (
  //  <>
  //  <Navigation/>
  //  <Header/>
  //  <MainContent/>
  //  <Footer/>
  //  </>
  <PageLayout>
    <MainContent/>
  </PageLayout>
  );
}

export default App;
