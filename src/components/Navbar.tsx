import logo from '@/assets/logo_white.png'
import CustomNavLink from './CustomNavLink'

function Navbar() {
    return (
        <div className="absolute flex h-36 w-screen flex-row items-center justify-between px-32">
            <div className="w-48">
                <img src={logo} alt="logo" />
            </div>

            <CustomNavLink route="'/fuer-Fachkraefte'" name="Für Fachkräfte" />
            <CustomNavLink route="'/fuer-Arbeitgeber'" name="Für Arbeitgeber" />
            <CustomNavLink route="'/ueber-uns'" name=" Über uns" />

            <button className="rounded-full bg-white px-12 py-2.5 text-lg font-medium text-black">
                Kontakt
            </button>
        </div>
    )
}

export default Navbar
