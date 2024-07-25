import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home2.css"; 

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            md={8}
            className="home-about-description"
            style={{
              border: "1px solid #e0e0e0",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              
              
              
              
            }}
          >
            <h1 style={{ fontSize: "2.6em" }}>
              Tôi Xin <span className="purple"> Giới Thiệu </span> Bản Thân Tôi
            </h1>
            <p className="home-about-body">
              Tôi yêu lập trình và ít nhất tôi đã học được điều gì đó, tôi nghĩ… 🤷‍♂️
              <br />
              <br />Tôi thông thạo các tác phẩm kinh điển như
              <i>
                <b className="purple"> Python,PHP Laravel, MySQL, Javascript and Go. </b>
              </i>
              <br />
              <br />
              Lĩnh vực quan tâm của tôi đang xây dựng mới &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> và cũng trong các lĩnh vực liên quan đến{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Bất cứ khi nào có thể, tôi cũng áp dụng niềm đam mê của mình vào việc phát triển sản phẩm
với <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khaicybers"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Dykhai.coi.69"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pd_khainee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
