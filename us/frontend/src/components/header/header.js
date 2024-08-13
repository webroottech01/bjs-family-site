import React, { useState } from "react";
import "./header.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import CounteriesSwitcher from "../countries-switcher/counteries";
import Talktous from "../talktous/talktous";

// import NavDropdown from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

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


  const navToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <div className="header sticky-top">
      <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded} onToggle={navToggle}>
          <Navbar.Brand> 
            <LinkContainer to="/">
              <img
                src={process.env.PUBLIC_URL + "/FamilyLogo.svg"}
                alt="Family Logo"
              />
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mainNavigation" >
              {menuItems.map((item, index) => {
                const sanitizedClassName = item.name.replace(/\s+/g, "-");
                return item.subMenu ? (
                  <NavDropdown
                    title={item.name}
                    id={`nav-dropdown-${index}`}
                    key={index}
                    className={`custom-dropdown ${sanitizedClassName}`}
                    renderMenuOnMount={true}
                  >
                    <div className="dropdown-menu-container">
                      <div className="dropdown-items">
                        {item.subMenu.map((subItem, subIndex) => (
                          <LinkContainer to={subItem.link} key={subIndex} onClick={closeNavbar}>
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
                  <LinkContainer to={item.link} key={index} onClick={closeNavbar}>
                    <Nav.Link>{item.name}</Nav.Link>
                  </LinkContainer>
                );
              })}
            </Nav>
          </Navbar.Collapse>
          <Talktous />
          <CounteriesSwitcher />
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
