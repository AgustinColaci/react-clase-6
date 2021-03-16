import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="App">
      <nav>
          <ul>
              <li><a href="#index">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li>  <CartWidget /> </li>
          </ul>
      </nav>
    </div>
  );
}

export default NavBar;
