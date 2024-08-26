import { NavLink } from 'react-router-dom'
import logo from '@/assets/logo_white.png'

function Navbar() {
    return (
        <div className="absolute flex h-36 w-screen flex-row items-center justify-between px-32">
            <div className="w-48">
                <img src={logo} alt="logo" />
            </div>

            <NavLink
                to={'/fuer-Fachkraefte'}
                className="text-white text-lg font-light"
            >
                Für Fachkräfte
            </NavLink>
            <NavLink
                to={'/fuer-Arbeitgeber'}
                className="text-white text-lg font-light"
            >
                Für Arbeitgeber
            </NavLink>
            <NavLink
                to={'/ueber-uns'}
                className="text-white text-lg font-light"
            >
                Über uns
            </NavLink>
            <button className="text-black bg-white rounded-full px-12 py-2.5 text-lg font-medium">
                Kontakt
            </button>
        </div>
    )
}

export default Navbar
