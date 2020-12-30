import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Product.css';
const Product = (props) => {
    
    const club = props.club;
    const {img, title, price,name} = club;
    const handleAddCourses = props.handleAddCourses;
    return (
        <div className="main-container"> 
            <div>
                <img className="imgStyle" src={img} alt=""/>
            </div>
            <div className="text-container">
                <h3>{title}</h3>
                <p><small>{name}</small></p>
                <p>Price : $ {price}</p>
                <button className="btn btn-warning" onClick={ () => handleAddCourses(props.club)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Product;