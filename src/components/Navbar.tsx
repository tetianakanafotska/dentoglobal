import logo from '@/assets/logo_white.png'
import CustomNavLink from './CustomNavLink'
import CustomButton from './CustomButton'
import { Menu09Icon } from 'hugeicons-react'
import { Dialog, DialogContent, DialogTrigger, DialogClose } from './ui/dialog'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    const MobileNav = () => {
        return (
            <nav className="absolute flex h-36 w-screen items-center justify-between px-32 lg:hidden">
                <div className="w-48">
                    <img src={logo} alt="logo" />
                </div>
                <Dialog>
                    <DialogTrigger>
                        <Menu09Icon size={40} color="#fff" />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogClose>
                            <div className="flex flex-col items-center gap-6 text-2xl font-light text-white">
                                <button
                                    onClick={() =>
                                        navigate('/fuer-Fachkraefte')
                                    }
                                >
                                    Für Fachkräfte
                                </button>

                                <button
                                    onClick={() =>
                                        navigate('/fuer-Arbeitgeber')
                                    }
                                >
                                    Für Arbeitgeber
                                </button>

                                <button onClick={() => navigate('/ueber-uns')}>
                                    Über uns
                                </button>
                            </div>
                        </DialogClose>
                    </DialogContent>
                </Dialog>
            </nav>
        )
    }
    const DesktopNav = () => {
        return (
            <nav className="absolute hidden h-36 w-screen items-center justify-between px-32 lg:flex">
                <div className="w-48">
                    <img src={logo} alt="logo" />
                </div>

                <CustomNavLink
                    route="/fuer-Fachkraefte"
                    name="Für Fachkräfte"
                />
                <CustomNavLink
                    route="/fuer-Arbeitgeber"
                    name="Für Arbeitgeber"
                />
                <CustomNavLink route="/ueber-uns" name=" Über uns" />
                <CustomButton name="Kontakt" styling="bg-white text-black" />
            </nav>
        )
    }

    return (
        <>
            <DesktopNav />
            <MobileNav />
        </>
    )
}

export default Navbar
