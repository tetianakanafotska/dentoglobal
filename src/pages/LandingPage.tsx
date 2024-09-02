import bg from '@/assets/dento_bg.jpg'
import { CustomButton } from '../components'

function LandingPage() {
    return (
        <>
            <header
                className="h-screen bg-cover bg-left-bottom"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="container mx-auto flex h-full flex-col items-start justify-end pb-24">
                    <h1 className="mb-5 text-6xl font-bold leading-[1.3] text-white">
                        Zahnärztliche <br /> Experten aus aller Welt
                    </h1>
                    <h2 className="w-2/4 text-xl font-light leading-8 text-white">
                        Wir bringen qualifizierte Fachkräfte und motivierte
                        Quereinsteiger mit deutschen Zahnarztpraxen zusammen.
                    </h2>
                    <CustomButton
                        name="Mehr erfahren"
                        styling="bg-white text-black mt-10"
                    />
                </div>
            </header>
            <div className="h-screen">
                <div className="mx-auto flex w-5/12 flex-col pt-16 leading-normal text-black">
                    <h3 className="mb-7 text-[2.4rem] font-bold">
                        Von Zahnärzten – für Zahnärzte.
                    </h3>
                    <p className="text-lg font-extralight">
                        Als Experten aus der Dentalbranche verstehen wir die
                        spezifischen Bedürfnisse von Zahnarztpraxen genau. Wir
                        wissen, dass der Erfolg Ihrer Praxis von der Kompetenz
                        Ihres Teams abhängt. Unser Ziel ist es, präzise die
                        richtigen Fachkräfte mit den passenden Praxen zu
                        verbinden.
                    </p>
                </div>
            </div>
        </>
    )
}

export default LandingPage
