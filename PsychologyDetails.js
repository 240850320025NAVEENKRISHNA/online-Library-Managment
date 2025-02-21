import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../css/PsychologyDetails.css";

const PsychologyDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    // Fetch Book Details and Comments
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookResponse = await axios.get(`http://localhost:8080/api/psychology/${id}`);
                setBook(bookResponse.data);

                const commentsResponse = await axios.get(`http://localhost:8080/api/psychology/${id}/comments`);
                setComments(commentsResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    // Handle New Comment Submission
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const response = await axios.post(`http://localhost:8080/api/psychology/${id}/comments`, {
                content: newComment,
            });

            setComments([...comments, response.data]); // Update comment list
            setNewComment(""); // Clear input
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    if (!book) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="psychology-details-container">
            <img src={book.imageUrl} alt={book.name} className="book-detail-image" />
            <h1>{book.name}</h1>
            <h3>By {book.author}</h3>
            <p>{book.description}</p>

            <div className="links">
                <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer" className="download-link">Download PDF</a>
                <a href={book.youtubeUrl} target="_blank" rel="noopener noreferrer" className="video-link">Watch Video</a>
            </div>

            <Link to="/psychology" className="back-link">Back to List</Link>

            {/* Comment Section */}
            <div className="comments-section">
                <h2>Comments</h2>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.content}</li>
                    ))}
                </ul>

                <form onSubmit={handleCommentSubmit}>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Leave a comment..."
                        required
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        </div>
    );
};

export default PsychologyDetails;
