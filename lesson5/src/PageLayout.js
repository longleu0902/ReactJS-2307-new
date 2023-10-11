import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Navigation from "./Navigation";
const PageLayout = (props) => {
    return (
        <div>
            <Navigation/>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default PageLayout;