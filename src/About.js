import './components.sass/About.sass'
import bgImg from './bannner-van.png'
export default function About() {
    return(
        <div className="about-container">
            <img src={bgImg} className="about-image" alt = "van"/>
            <div className="about-middle">
                <p> <strong>Don’t squeeze in a sedan when you could relax in a van.</strong></p>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                   (Hitch costs extra 😉)

                   Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className="about-bottom">
                <p className="about-bottom-txt">Your destination is waiting. <br/>
                    Your van is ready.</p>
                <button className="about-bottom-btn">Explore our vans</button>
            </div>
        </div>
    )
}