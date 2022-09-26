import React,{props} from 'react';
import Footer from './Footer';
import {useLocation} from 'react-router-dom';
import Menu from './Menu';

const Layout = ({
    title = "title",
    description = "description",
    className,
    children}) => {

    var history = useLocation();
  return (
    <div>
        <Menu history={history}/>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={className}>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout