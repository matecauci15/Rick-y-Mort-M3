import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
// import SearchBar from './components/SearchBar.jsx';
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/favorites';


// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
// const APY_KEY = "96170c782b97.602e828731d7f91baba9"
// ${URL_BASE}/${id}?key=${APY_KEY}

// const email = "matno@gmail.com";
// const password = "matt1234";

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;

         setAccess(access);
         access && navigate('/home');
         
      } catch (error) {
         console.log(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         };

      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   };


   // const onClose = (id) => {
   //    setCharacters(characters.filter((char) => char.id !== id));
   // };
   const onClose = (id) => {
      const characterFilter = characters.filter(character => character.id !== id)
      setCharacters(characterFilter)
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
        
      </div>
   );
}

export default App;
