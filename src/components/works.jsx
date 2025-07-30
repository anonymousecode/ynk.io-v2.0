import Navbar from "./navbar";
import { SiGithub, SiBehance } from "react-icons/si";
import { VscVmRunning } from "react-icons/vsc";
import "../style.css";

export default function Works() {
    const webWorks = [
        { title: "NoteVault", description: "A modern, secure, and user-friendly notes app", repo: "https://github.com/anonymousecode/note-vault", link: "https://note-vault-335l.onrender.com/", image: "/images/notevault.png" },
        { title: "CookaVel", description: "Recipe search application that fetches meals from TheMealDB API and displays detailed cooking instructions, ingredients, and YouTube tutorials.", repo: "https://github.com/anonymousecode/cookavel", link: "https://cookavel.onrender.com/", image: "/images/cookavel.png" },
        { title: "Quizet", description: "A sleek and interactive web app for taking quizzes on a variety of topics.", repo: "https://github.com/anonymousecode/quizet", link: "https://quizet-eq8v.onrender.com/", image: "/images/quizet.png" },
        { title: "Flood.p", description: "Personal digital diary to record daily thoughts, experiences, and reflections in a secure, organized space", repo: "https://github.com/anonymousecode/flood.p", link: "https://floodp.netlify.app/", image: "/images/flood.p.png" },
        { title: "DayLog", description: "Personal digital diary to record daily thoughts, experiences, and reflections in a secure, organized space", repo: "https://github.com/anonymousecode/daylog", link: "https://daylog.onrender.com/", image: "/images/daylog.png" },
        { title: "Hot-o-Cold", description: "A fun number guessing game", repo: "https://github.com/anonymousecode/hot-or-cold", link: "https://hot-o-cold.netlify.app/", image: "/images/hotocold.png" },
        { title: "Paper Flight", description: "A minimal and creative paper plane game inspired by Flappy Bird", repo: "https://github.com/anonymousecode/paper-flight", link: "https://anonymousecode.github.io/paper-flight/", image: "/images/paper-flight.png" },
        { title: "ShakesLingo", description: "Playful Shakespearean English phrase translator.", repo: "https://github.com/anonymousecode/shakeslingo", link: "https://shakeslingo.netlify.app/", image: "/images/shakeslingo.png" }


    ];

    const uiWorks = [
        { title: "Volunteer Management System", description: "Description of UI project one.",  link: "https://www.behance.net/gallery/227229493/Volunteer-Management-System", image: "/images/vms.png" },
        { title: "Spotify", description: "Description of UI project two.",  link: "https://www.behance.net/gallery/227219897/Spotify-Redesign", image: "/images/spotify.png" },
        { title: "Wikipedia", description: "Description of UI project three.",  link: "https://www.behance.net/gallery/227219495/Wikipedia-Redesign", image: "/images/wikipedia.png" },
        { title: "SnapSnack", description: "Description of UI project four.",link: "https://www.behance.net/gallery/227230781/SnackSnap", image: "/images/snapsnack.png" },
        { title: "Melodia", description: "Description of UI project five.",  link: "https://www.behance.net/gallery/227228837/Melodia", image: "/images/melodia.png" },
        { title: "Mantra", description: "Description of UI project five.",  link: "https://www.behance.net/gallery/227230123/Mantra-Yoga-app", image: "/images/mantra.png" }

    ];

    return (
        <div>
            <Navbar />

            <div className="container  space-grotesk" style={{marginTop:"80px"}}>
                {/* Main Heading */}
                <h1 className="title fw-bold text-center pb-4">Works</h1>

                {/* Web Development Section */}
                <h3 className="fw-bold mb-5">Web Development</h3>
                <div className="row g-4 mb-5">
                    {webWorks.map((work, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="work-card h-100">
                                <img src={work.image} alt={work.title} className="work-image" />
                                <h3>{work.title}</h3>
                                <p >{work.description}</p>
                                <div className="card-links">
                                    <a href={work.repo} target="_blank" rel="noopener noreferrer" className="text-dark"><SiGithub/></a>
                                    {work.link && (
                                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-dark"><VscVmRunning/></a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* UI Development Section */}
                <h3 className="fw-bold mb-5">UI Development</h3>
                <div className="row g-4">
                    {uiWorks.map((work, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                            <div className="work-card h-100">
                                <img src={work.image} alt={work.title} className="work-image" />
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="card-links">                          
                                    {work.link && (                                        
                                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-dark"><SiBehance/></a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
