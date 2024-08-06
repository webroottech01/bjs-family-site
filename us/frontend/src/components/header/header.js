import React, { useState } from "react";
import "./header.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

// import NavDropdown from 'react-bootstrap';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredImages, setHoveredImages] = useState({
    "About BJS": process.env.PUBLIC_URL + "/images/about-default.webp",
    Us: process.env.PUBLIC_URL + "/images/us-default.png",
  });

  const menuItems = [
    {
      name: "Our Services",
      link: "/services",
    },
    {
      name: "About BJS",
      subMenu: [
        {
          name: "Our Values",
          link: "/our-values",
          image: process.env.PUBLIC_URL + "/images/about-values.webp",
        },
        {
          name: "what makes bjs different",
          link: "/our-difference",
          image: process.env.PUBLIC_URL + "/images/about-different.webp",
        },
        {
          name: "Our Technology",
          link: "/technology",
          image: process.env.PUBLIC_URL + "/images/about-technology.webp",
        },
        {
          name: "charity & community",
          link: "/charity-community",
          image: process.env.PUBLIC_URL + "/images/about-charity.webp",
        },
        {
          name: "training academy",
          link: "/training-academy",
          image: process.env.PUBLIC_URL + "/images/about-training.webp",
        },
        {
          name: "our story",
          link: "/our-story",
          image: process.env.PUBLIC_URL + "/images/about-story.webp",
        },
      ],
      defaultImage: process.env.PUBLIC_URL + "/images/about-default.webp",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Careers",
      link: "/careers",
    },
  ];

  // const usMenuItems = [
  //   { name: 'Uk', link: '/our-values', image: process.env.PUBLIC_URL + 'images/about-delivery.png' },
  //   { name: 'Us', link: '/our-values', image: process.env.PUBLIC_URL + 'images/angle-right.png' },
  // ];

  const handleMouseEnter = (dropdownName, image) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [dropdownName]: image,
    }));
  };

  const handleMouseLeave = (dropdownName, defaultImage) => {
    setHoveredImages((prevState) => ({
      ...prevState,
      [dropdownName]: defaultImage,
    }));
  };

  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  return (
    <div className="header sticky-top">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand>
            <LinkContainer to="/">
              <img
                src={process.env.PUBLIC_URL + "/FamilyLogo.png"}
                alt="Family Logo"
              />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mainNavigation">
              {menuItems.map((item, index) => {
                const sanitizedClassName = item.name.replace(/\s+/g, "-");
                return item.subMenu ? (
                  <NavDropdown
                    title={item.name}
                    id={`nav-dropdown-${index}`}
                    key={index}
                    className={`custom-dropdown ${sanitizedClassName}`}
                  >
                    <div className="dropdown-menu-container">
                      <div className="dropdown-items">
                        {item.subMenu.map((subItem, subIndex) => (
                          <LinkContainer to={subItem.link} key={subIndex}>
                            <NavDropdown.Item
                              onMouseEnter={() =>
                                handleMouseEnter(item.name, subItem.image)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave(item.name, item.defaultImage)
                              }
                            >
                              {subItem.name}
                            </NavDropdown.Item>
                          </LinkContainer>
                        ))}
                      </div>
                      <div className="dropdown-image">
                        <img
                          src={hoveredImages[item.name] || item.defaultImage}
                          alt="Hovered"
                        />
                      </div>
                    </div>
                  </NavDropdown>

              //     <NavDropdown title="Dropdown" id="basic-nav-dropdown" alignRight>
              //     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              //     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              //     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              //     <NavDropdown.Divider />
              //     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              // </NavDropdown>


                ) : (
                  <LinkContainer to={item.link} key={index}>
                    <Nav.Link>{item.name}</Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Nav className="me-auto navbarsecond">
            <Nav.Link href="#home">
              <button className="talktous">Talk to us</button>
            </Nav.Link>
            <NavDropdown
              title="Us"
              id="basic-nav-dropdown"
              className="flags"
              show={showDropdown}
              onToggle={handleToggle}
            >
              <h5>Choose your region</h5>
              <div className="regional-drop">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/uslogo.png"}
                    alt=""
                  />
                  <p className="region-title">United States</p>
                  <p>
                    Proident kale chips vegan, succulents shaman ennui unicorn
                    bespoke forage jean shorts blackbird spyplane helvetica
                    edison bulb eiusmod scenester.
                  </p>
                  <button className="currentregion" disabled>
                    Currently viewing
                  </button>
                </div>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/uklogo.png"}
                    alt=""
                  />
                  <p className="region-title">United Kingdom</p>
                  <p>
                    Proident kale chips vegan, succulents shaman ennui unicorn
                    bespoke forage jean shorts blackbird spyplane helvetica
                    edison bulb eiusmod scenester.
                  </p>
                  <a href="https://bjsfamily.com/" className="otherregion">
                    Switch to UK Site
                  </a>
                </div>
              </div>
              <button onClick={handleClose}>Close this window</button>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
