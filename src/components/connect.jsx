import Navbar from "./navbar";
import { SiInstagram, SiFacebook, SiGithub, SiLinkedin, SiLeetcode, SiBehance } from "react-icons/si"; 

export default function Connect() {
    return (
        <div>
            <Navbar />

            <div className="container space-grotesk" style={{ marginTop: "80px" }}>
                {/* Page Title */}
                <h1 className="title fw-bold pb-4 text-center">Connect me</h1>

                {/* Intro Text + Email */}
                <div className="pt-3 pb-4 text-center">
                    <h4 className="pb-3">
                        <span style={{ color: "#f47216" }}>Warm hellos! </span>
                        Let's talk—drop me a message anytime.
                    </h4>
                    <div className="text-center">
                    <a
                        href="mailto:yathunadh010@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn email-link"
                        style={{ fontSize: "1.2rem", color: "#f47216" }}
                    >
                        yathunadh010@gmail.com
                    </a>
                    </div>

                </div>

                {/* Social Links */}
                <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                    <a
                        href="https://www.linkedin.com/in/yathunadh-krishnan-p-u-280883233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiLinkedin />
                    </a>

                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiFacebook />
                    </a>

                    <a
                        href="https://github.com/anonymousecode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiGithub />
                    </a>

                    <a
                        href="https://www.instagram.com/_yn_k_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiInstagram />
                    </a>

                    <a
                        href="https://leetcode.com/u/anonymousecode01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiLeetcode />
                    </a>

                    <a
                        href="https://www.behance.net/anonymousecode/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiBehance />
                    </a>
                </div>
            </div>
        </div>
    );
}
