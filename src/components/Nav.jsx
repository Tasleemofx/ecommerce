
import "../css/Nav.css"
const Nav = ({className, extra}) => {
    return (
      <nav className={className}>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>{extra}</div>
      </nav>
       );
}
 
export default Nav;