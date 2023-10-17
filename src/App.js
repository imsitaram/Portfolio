import React ,{ useRef } from "react";
import "./App.css"; 
function App() {
  const bioRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="header">
      
        <h1>Sitaram Nattava</h1>
        <p>Web Developer</p>
      </header>

      <section className="bio">
        <h2>Bio</h2>
        <p>Date of Birth: June 12,2004</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>School</h3>
          <p>Dr. KKR'S Gowtham School, Tenali</p>
        </div>

        <div className="intermediate">
          <h3>Intermediate</h3>
          <p>NRI Junior College, Tenali</p>
        </div>

        <div className="btech">
          <h3>BTech</h3>
          <p>VIT-AP</p>
        </div>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Playing Cricket</li>
          <li>Listening Music</li>
          <li>Watching Movies</li>
          {/* Add more hobbies */}
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form><div className="social-icons">
        <a href="https://www.linkedin.com/in/sitaram-nattava-0b4436258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/nsra1264?t=s6Wb4VC9_jE4ymc5RlTPtg&s=08" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/sitxram.i/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      </section>
      
    </div>
  );
}

export default App;