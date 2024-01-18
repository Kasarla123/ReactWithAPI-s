import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css';
import logo from './images/logo.jpg'
import About from './About';
import Contact from './Contact';
import CheckBMI from './CheckBMI';
import CityWeather from './CityWeather';
import LatestNews from './LatestNews';
import FoodRecipe from './FoodRecipe';
const App = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <BrowserRouter>
          <Navbar className="bg-dark  sticky-top" expand="lg">
            <Navbar.Brand><img src={logo}></img></Navbar.Brand>
            <Navbar.Toggle className='bg-light' aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/CheckBMI">
                  Check BMI
                </Nav.Link>
                <NavDropdown
                  title="API"
                  id="nav-dropdown"
                  show={isDropdownOpen}
                  onMouseEnter={handleDropdownToggle}
                  onMouseLeave={handleDropdownClose}
                >
                  <NavDropdown.Item as={Link} to="/CityWeather">
                    City Weather
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/LatestNews">
                    Latest News
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/FoodRecipe">
                    Food Recipe
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CheckBMI" element={<CheckBMI />} />
            <Route path="/CityWeather" element={<CityWeather />} />
            <Route path="/LatestNews" element={<LatestNews />} />
            <Route path="/FoodRecipe" element={<FoodRecipe />} />
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;