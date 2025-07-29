import Navbar from "./navbar";
import {SiFigma,  SiJavascript, SiPython, SiReact, SiHtml5, SiCss3, SiRender, SiNetlify, SiMysql, SiMongodb, SiPhp, SiLaravel, SiFrappe, SiGit, SiGithub, SiVsco } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "../style.css";

export default function Skills() {
  const skills = {
    "Programming Languages": [
      { name: "Python", icon: SiPython }
    ],
    "Web Development": [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },  
      { name: "React", icon: SiReact },
      { name: "PHP", icon: SiPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "Frappe", icon: SiFrappe }

    ],
    "Database": [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ],
    "UI/UX Tools": [
      { name: "Figma", icon: SiFigma },
    ],
    "Cloud Platforms": [
      { name: "Render", icon: SiRender },
      { name: "Netlify", icon: SiNetlify }
    ],
    "Tools":[
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Visual Studio Code", icon: VscVscode }
    ]

  };

  return (
    <div>
      <Navbar />
      <div className="skills-section space-grotesk">
        <h1 className="title fw-bold pb-4">Skills</h1>
        {Object.keys(skills).map((category) => (
          <div key={category} className="skills-section-category ">
            <h4 className="skills-category-title">{category}</h4>
            <div className="skills-items">
              {skills[category].map((skill, index) => (
                <div key={index} className="skills-item">
                    <skill.icon className="skills-icon" />
                  <span className="skills-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
