import menuList from "@/data/menu.json";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {menuList.map(({ id, name, linkTo }) => (
            <li key={id}>
              <NavLink to={linkTo}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
