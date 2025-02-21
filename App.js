import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MainPage from "./components/MainPage";
import ContactPage from "./components/ContactPage";
import TermsConditions from "./components/TermsConditions";
import SuggestionForm from "./components/SuggestionForm";
import PsychologyList from "./components/PsychologyList";
import PsychologyDetails from "./components/PsychologyDetails";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Register from './components/Register';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/suggestions" element={<SuggestionForm />} />
                <Route path="/psychology" element={<PsychologyList />} />
                <Route path="/psychology/:id" element={<PsychologyDetails />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/register" element={<Register />} />
                
            </Routes>
        </Router>
    );
}

export default App;
