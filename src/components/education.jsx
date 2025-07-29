import Navbar from "./navbar";
import "../style.css";

export default function Education() {
    const journey = [
        {
            year: "2019 - 2022",
            title: "Bachelor's Degree",
            description: "Graduated with a Bachelor's degree in Computer Science.",
            CGPA: "8.76",
            college: "Union Christian College, Aluva"
        },
        {
            year: "2023 - 2025",
            title: "Master's Degree",
            description: "Graduated with a Master's degree in Computer Applications.",
            CGPA: "9.53",
            college: "Cochin University of Science and Technology, Kochi"
        }
    ];

    // Reverse to show latest first
    const sortedJourney = [...journey].reverse();

    return (
        <div>
            <Navbar />
            <div className="space-grotesk academic-section">
                <h1 className="title fw-bold pb-4">Academic Journey</h1>
                <div className="card-container vertical">
                    {sortedJourney.map((item, index) => (
                        <div key={index} className="card">
                            <div className="card-header">
                                <h2>{item.year}</h2>
                                <span className="cgpa">CGPA: {item.CGPA}</span>
                            </div>
                            <h3 className="mt-2">{item.title}</h3>
                            <p><strong>{item.college}</strong></p>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
