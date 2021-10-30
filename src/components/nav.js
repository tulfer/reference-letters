import {Link} from 'react-router-dom'


function Nav(props) {
    return (
        <nav className="bg-black flex justify-center">
          <ul className="flex w-3/4">
            <li className="px-2 py-1 m-1 bg-white rounded-md">
              <Link to="/">Cartas</Link>
            </li>
            <li className="px-2 py-1 m-1 bg-white rounded-md">
              <Link to="/login">Perfil</Link>
            </li>
            <li className="px-2 py-1 m-1 bg-white rounded-md">
              <Link to="/create-letter">Crear cartas</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav;