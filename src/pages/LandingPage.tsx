import bg from '@/assets/dento_bg.jpg'

function LandingPage() {
    return (
        <div
            className="h-screen bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container mx-auto flex h-full flex-col items-center justify-center">
                <h1>Zahnärztliche Experten aus aller Welt</h1>
                <h2>
                    Wir bringen qualifizierte Fachkräfte und motivierte
                    Quereinsteiger mit deutschen Zahnarztpraxen zusammen.
                </h2>
                <button>Mehr erfahren</button>
            </div>
        </div>
    )
}

export default LandingPage
