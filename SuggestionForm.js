import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/SuggestionForm.css";

const SuggestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/suggestions/submit", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("error");
      console.error("Error submitting:", error);
    }
  };

  return (
    <div className="suggestion-container">
      <h2>Submit Your Suggestion</h2>
      {status === "success" && <p className="success">Submitted Successfully!</p>}
      {status === "error" && <p className="error">Submission Failed!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={() => navigate("/main")} className="navigate-button">Go to Main Page</button>
    </div>
  );
};

export default SuggestionForm;
