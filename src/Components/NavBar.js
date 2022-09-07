import {NavLink} from 'react-router-dom';
import CartWidget from "./Cartwidget/Cartwidget";
const NavBar=()=>{
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink class="navbar-brand" to='/'>Home</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to='/'>Categorias</NavLink>
        </li>
        <li class="nav-item">
          <a><CartWidget></CartWidget> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};
export default NavBar;