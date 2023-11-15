/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import '../css/Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
    <div className="container-fluid">
      <a  href="/" className="navbar-brand d-block d-lg-none" >
        <img src="https://media.istockphoto.com/id/1088265584/vector/bookstore-logo-template-design-logo-open-book.jpg?s=612x612&w=0&k=20&c=uW0YdEB6adTa8xUG6ENhrZg-DXTVNr-ORY5frTyGXAo=" height="80" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
  
      <div className=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto ">
          <li className="nav-item">
            <a  href="/" className="nav-link mx-2 active" aria-current="page" >Home</a>
          </li>
          <li className="nav-item">
            <a  href="/Books" className="nav-link mx-2" >Books</a>
          </li>
          <li className="nav-item d-none d-lg-block">
            <a  href="/" className="nav-link mx-2" >
              <img src="/static_files/images/logos/logo_2_white.png" height="80" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/AddBook" className="nav-link mx-2" >Add Book</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
