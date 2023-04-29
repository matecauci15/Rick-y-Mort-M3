import SearchBar from "../SearchBar";
import React from "react";
import { Link } from "react-router-dom";

const Nav = ({onSearch, setAccess}) => {
  const handleLogOut = () => {
    setAccess(false);
}
//     return (
//       <nav>
//         <SearchBar onSearch={onSearch} />
//         <button>
//           <Link to="/about">About</Link>
//         </button>
//         <button>
//           <Link to="/home">Home</Link>
//         </button>
//       </nav>
//     );
// }
return (
  <nav>

      <div >
          <Link to='/about'> ABOUT </Link> <br /> <br />
          <Link to='/home'> HOME </Link> <br /><br />
          <Link to='/favorites'> Favorites </Link>   
      </div>

      <br />
      <button onClick={handleLogOut}>LOG OUT</button>
      <SearchBar onSearch={onSearch}/>
  </nav>
)
}

export default Nav;

    
