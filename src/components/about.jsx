import Navbar  from "./navbar";
export default function About() {
    return (
        <div>
            <Navbar />
            
            <h2 className="text-center mt-5">About Me</h2>
            <p className="text-center">This is where I share my background and interests.</p>
        </div>
    );
}