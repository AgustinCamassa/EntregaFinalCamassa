import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgT = "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/703/452/themes/common/logo-950362530-1627996450-c9fe07a0baed6b8302bd3b758f8a185b1627996450.png?0";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgT" src={imgT} alt="" />
        </Link>

        <nav className="fondoNav">
            <ul>
                <li>
                  <NavLink to={"/categoria/0"} className={"texto"}> Nvidia </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/1"}className={"texto"}> AMD </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/2"}className={"texto"}> Intel </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar