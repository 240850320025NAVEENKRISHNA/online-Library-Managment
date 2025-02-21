

import React from "react";
import { Link } from "react-router-dom";
import "../css/MainPage.css";


const categories = [
    
    { id: 1, name: "Psychology", image: "https://c8.alamy.com/comp/R0TYP9/psychology-concept-3d-illustration-R0TYP9.jpg", link: "/psychology" }, // Added Psychology
];

const MainPage = () => {
    return (
        <div className="main-container">
            <nav className="navbar">
                
                <Link to="/contact" aria-label="Contact">Contact</Link>
                <Link to="/suggestions" aria-label="Suggestion Form">Suggestion Form</Link>
                <Link to="/terms" aria-label="Terms & Conditions">Terms & Conditions</Link>
            </nav>

            <header>
                <h1>Online Library</h1>
            </header>

            <div className="category-grid">
                {categories.map((category) => (
                    <Link 
                        to={category.link ? category.link : `/books/category/${category.id}`} 
                        key={category.id} 
                        className="category-card"
                        aria-label={`View books in ${category.name}`}
                    >
                        <img 
                            src={category.image} 
                            alt={category.name} 
                            className="category-image" 
                        />
                        <h2>{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MainPage;