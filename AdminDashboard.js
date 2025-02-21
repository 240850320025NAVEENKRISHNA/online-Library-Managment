// AdminDashboard Component
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/AdminDashboard.css";

const AdminDashboard = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ name: "", author: "", imageUrl: "", pdfUrl: "", youtubeUrl: "", description: "" });

    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/psychology");
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddBook = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/psychology", form);
            fetchBooks();
            setForm({ name: "", author: "", imageUrl: "", pdfUrl: "", youtubeUrl: "", description: "" });
        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/psychology/${id}`);
            fetchBooks();
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

    const handleEditBook = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/psychology/${id}`, form);
            fetchBooks();
            setForm({ name: "", author: "", imageUrl: "", pdfUrl: "", youtubeUrl: "", description: "" });
        } catch (error) {
            console.error("Error editing book:", error);
        }
    };

    return (
        <div className="admin-dashboard-container">
            <h2>Admin Dashboard</h2>

            <form onSubmit={handleAddBook}>
                <input type="text" name="name" placeholder="Book Name" value={form.name} onChange={handleInputChange} required />
                <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleInputChange} required />
                <input type="text" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleInputChange} required />
                <input type="text" name="pdfUrl" placeholder="PDF URL" value={form.pdfUrl} onChange={handleInputChange} required />
                <input type="text" name="youtubeUrl" placeholder="YouTube URL" value={form.youtubeUrl} onChange={handleInputChange} required />
                <textarea name="description" placeholder="Description" value={form.description} onChange={handleInputChange} required />
                <button type="submit">Add Book</button>
            </form>

            <h3>Existing Books</h3>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.name} by {book.author}
                        <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                        <button onClick={() => handleEditBook(book.id)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
