import Admission from "../assets/talent.png"
import Screening from "../assets/connection.png"
import Siwes from "../assets/technology.png"
import Portal from "../assets/laptop.png"
import { useState } from "react"
function HomePage() {
    const [schoolActive, isSchoolActive] = useState(null);

    return (
        <div className="home">
            <header className="welcome">
                <h1>Providing the best education for a brighter future.</h1>
                <p>
                    We are a licensed private polytechnic fully equipped with world-class learning facilities to offer next-generation learning experiences in technical education. Our aim is to build up experts who will positively impact the lives of millions around the globe.
                </p>
                <button>join us today</button>
            </header>
            <main>
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
            <div className="about-us">
                <section className="about-image">
                </section>
                <section className="about-info">
                    <h1>About Us</h1>
                    <p>
                        Best Solution Polytechnic, Akure is a fully licensed and accredited private polytechnic. Established in the year 2014, our aim is to achieve academic and technological excellence by revamping the educational system of Nigeria and proffering substantial solution to the technological needs of the nation.
                    </p>
                </section>
                <section>
                <div className="stats">
                    <div className="stats-box">
                        <div className="bar-info">
                            <h1>Practical knowledge</h1>
                            <p>95%</p>
                        </div>
                        <div className="bar">
                            <div className="width"></div>
                        </div>
                    </div>
                    <div className="stats-box">
                        <div className="bar-info">
                            <h1>Pass percentage</h1>
                            <p>90%</p>
                        </div>
                        <div className="bar">
                            <div className="js"></div>
                        </div>
                    </div>
                    <div className="stats-box">
                        <div className="bar-info">
                            <h1>happy students</h1>
                            <p>98%</p>
                        </div>
                        <div className="bar">
                            <div className="ts"></div>
                        </div>
                    </div>
                </div>
                </section>
                <h1 className="limitless">Limitless learning! Limitless opportunities!</h1>
            </div>
            <div className="our-schools">
                <h1>Our schools</h1>
                <p>
                    Across all our three (3) schools and six (6) departments, we remain ever committed to your growth and development.
                </p>
                <div className="schools">
                    <div className = {`science ${schoolActive === 0 ? "active" : ""}`} onClick={() => isSchoolActive(0)}>
                        <section className="school-overlay"></section>
                        <h2 className="school-head">Applied science and technology</h2>
                        <button className="learn-btn">learn more</button>
                    </div>
                    <div className = {`business ${schoolActive === 1 ? "active" : ""}`} onClick={() => isSchoolActive(1)}>
                        <section className="school-overlay"></section>
                        <h2 className="school-head">business and management studies</h2>
                        <button className="learn-btn">learn more</button>
                    </div>
                    <div className = {`engineering ${schoolActive === 2 ? "active" : ""}`} onClick={() => isSchoolActive(2)}>
                        <section className="school-overlay"></section>
                        <h2 className="school-head">engineering technology</h2>
                        <button className="learn-btn">learn more</button>
                    </div>
                </div>
            </div>
            </main>
        </div>
    )
}

export default HomePage;
// bethanylilyapril