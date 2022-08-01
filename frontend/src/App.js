import "./App.css";
import Header from "./components/Header";
import Notelist from "./pages/NoteList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Notelist />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
