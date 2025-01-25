import Admission from "../assets/talent.png"
import Screening from "../assets/connection.png"
import Siwes from "../assets/technology.png"
import Portal from "../assets/laptop.png"
function HomePage() {
    return (
        <div className="home">
            <header className="welcome">
                <h1>Providing the best education for a brighter future.</h1>
                <p>
                    We are a licensed private polytechnic fully equipped with world-class learning facilities to offer next-generation learning experiences in technical education. Our aim is to build up experts who will positively impact the lives of millions around the globe.
                </p>
                <button>join us today</button>
            </header>
            <div className="featured-links">
                <h1>Featured Links</h1>
                <ul className="links">
                    <li>
                        <img src={Admission} alt="image" />
                        <a>check admission status</a>
                    </li>
                    <li>
                        <img src={Screening} alt="image" />
                        <a>online screening</a>
                    </li>
                    <li>
                        <img src={Siwes} alt="image" />
                        <a>SIWES portal</a>
                    </li>
                    <li>
                        <img src={Portal} alt="image" />
                        <a>student portal</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;
// bethanylilyapril