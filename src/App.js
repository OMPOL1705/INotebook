import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteContext from './context/notes/NotesContext';
import Alert from './components/Alert';


function App() {

  return (
    <>
    <NoteState>
    <Router>
      <Navbar />
      <NoteContext.Consumer>
                {context => {
                  const { alert } = context || {}; // Set default value for context if it's undefined
                  return (
                    <>
                      <Alert alert={alert} />
                      <div className="container">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/signup" element={<Signup />} />
                        </Routes>
                      </div>
                    </>
                  );
                }}
      </NoteContext.Consumer>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
