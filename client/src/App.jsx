import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UserSurvey from './pages/Survey';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/survey' element={<UserSurvey />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path="/recipe/:recipeGUID" element={<Recipe />} exact />
          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;