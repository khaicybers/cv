import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const cardStyle = {
    background: "#282c34",
    color: "white",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.2s",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
  };

  const purpleTextStyle = {
    color: "#6c63ff",
  };

  const blockquoteStyle = {
    margin: "0",
  };

  const blockquotePStyle = {
    fontSize: "1.2em",
  };

  const aboutActivityStyle = {
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    fontSize: "1.1em",
  };

  const iconStyle = {
    marginRight: "10px",
  };

  const footerStyle = {
    marginTop: "10px",
    fontSize: "0.9em",
    color: "#999",
  };

  const responsiveStyle = {
    '@media (max-width: 768px)': {
      cardStyle: {
        padding: "15px",
      },
      blockquotePStyle: {
        fontSize: "1em",
      },
      aboutActivityStyle: {
        fontSize: "1em",
      },
    },
  };

  return (
    <Card className="quote-card-view" style={cardStyle}>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={blockquoteStyle}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple" style={purpleTextStyle}>Phan Duy khải </span>
            from <span className="purple" style={purpleTextStyle}>Khaicybersec, Vietnam.</span>
            <br />
            I am currently employed as a software developer in Vietnam.
            <br />
            I have completed an Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={aboutActivityStyle}>
              <ImPointRight style={iconStyle} /> Playing Games
            </li>
            <li className="about-activity" style={aboutActivityStyle}>
              <ImPointRight style={iconStyle} /> Writing Tech Blogs
            </li>
            <li className="about-activity" style={aboutActivityStyle}>
              <ImPointRight style={iconStyle} /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer" style={footerStyle}>Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
