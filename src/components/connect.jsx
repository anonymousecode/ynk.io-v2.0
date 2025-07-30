import Navbar from "./navbar";
import { SiInstagram, SiFacebook, SiGithub, SiLinkedin, SiLeetcode, SiBehance, SiGmail } from "react-icons/si"; 
import {Link} from 'react-router-dom';

export default function Connect() {
    return (
        <div>
            <Navbar />
            
            <div className="container space-grotesk" style={{marginTop:"80px"}}>
                <h1 className="title fw-bold pb-4">Connect me</h1>

                <div className="pt-3 pb-4">
                    <h4 className="pb-3"><span style={{color:"#f47216"}}>Warm hellos! </span> Let's talk—drop me a message anytime.</h4>
                    <Link to="mailto:yathunadh010@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" ,color:"#f47216" }}
                    >
                        yathunadh010@gmail.com
                    </Link>
                </div>

                {/* Social Links */}
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <Link
                        to="https://www.linkedin.com/in/yathunadh-krishnan-p-u-280883233"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiLinkedin />
                    </Link>

                    <Link
                        to="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiFacebook />
                    </Link>

                    <Link
                        to="https://github.com/anonymousecode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiGithub />
                    </Link>

                    <Link
                        to="https://www.instagram.com/_yn_k_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn "
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiInstagram />
                    </Link>

                    <Link
                        to="https://leetcode.com/u/anonymousecode01/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiLeetcode />
                    </Link>
                    <Link
                        to="https://www.behance.net/anonymousecode/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{ fontSize: "1.5rem" }}
                    >
                        <SiBehance />
                    </Link> 
                </div>
            </div>
        </div>
    );
}