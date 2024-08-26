import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage, ForApplicants, ForEmployers, About } from '../src/pages'
import { Navbar } from '../src/components'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/fuer-Fachkraefte"
                        element={<ForApplicants />}
                    />
                    <Route
                        path="/fuer-Arbeitgeber"
                        element={<ForEmployers />}
                    />
                    <Route path="/ueber-uns" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
