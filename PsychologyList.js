import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/PsychologyList.css";

const PsychologyList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/psychology")
            .then(response => setBooks(response.data))
            .catch(error => console.error("Error fetching psychology books:", error));
    }, []);

    return (
        <div className="psychology-list-container">
            <h1>Psychology Books</h1>
            <button onClick={() => navigate("/main")} className="back-to-main">Back to Main Page</button>
            <div className="book-grid">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.imageUrl} alt={book.name} className="book-image" />
                        <h2>{book.name}</h2>
                        <p>By {book.author}</p>
                        <Link to={`/psychology/${book.id}`} className="details-link">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PsychologyList;
