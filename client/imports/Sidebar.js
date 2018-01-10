import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

const Sidebar = () => (
  <div>
    <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin">Dashboard <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin/departments">Departments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin/positions">Positions</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin/staff">Staff</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin/users">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/admin/clients">Clients</NavLink>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">Nav item again</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">One more nav</a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              Meteor.logout();
            }}
          >Log out
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
