import Navbar from "./navbar";
import "../style.css";

export default function Experience() {
    const journey = [        
        {
            year: "May 2022 - Jun 2023",
            company: "Tata Consultancy Services",
            location: "Chennai, India",
            role: "Graduate Trainee",
            type: "Full Time",
            image: "/images/tcs.png"
        },
        {
            year: "Dec 2024 - May 2025",
            company: "CSIS, CUSAT",
            location: "Kochi, India",
            role: "Full Stack Developer",
            type: "Internship",
            image: "/images/csis-logo.jpeg"
        },
        {
            year: "Dec 2023 - Jun 2025",
            company: "Mind Empowered",
            location: "Kochi, India",
            role: "Frontend Developer",
            type: "Internship",
            image: "/images/mindempowered.png"
        },
        {
            year: "Aug 2025 - Present",
            company: "Gescis Technologies",
            location: "Trivandrum, India",
            role: "Software Developer",
            type: "Full Time",
            image: "/images/gescis.png"
        }
    ];

    const sortedJourney = [...journey].reverse();

    return (
        <div>
            <Navbar />
            <div className="space-grotesk academic-section">
                <h1 className="title fw-bold pb-4">Work Experience</h1>
                <div className="experience-horizontal-timeline">
                    {sortedJourney.map((item, index) => (
                        <div key={index} className="experience-timeline-card">
                            <div className="experience-card p-3">
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={`${item.company} logo`}
                                        className="experience-company-logo"
                                    />
                                )}
                                <div className="experience-card-header p-0">
                                    <h3 className="experience-role">{item.role}</h3>
                                </div>
                                <span className="experience-type">{item.type}</span>
                                <p className="experience-company"><strong>{item.company}</strong></p>
                                <p className="experience-location">{item.location}</p>
                            </div>
                            <div className="experience-timeline-year">{item.year}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
