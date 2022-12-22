import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const navItems = <>
<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary-content' : '')} to='/'>Home</NavLink></li>
<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary-content' : '')} to='/contact'>Contact</NavLink></li>
<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary-content' : '')} to='/services'>Services</NavLink></li>
<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary-content' : '')} to='/banner'>Banner</NavLink></li>
<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary-content' : '')} to='/login'>Login</NavLink></li>
</>


const Navbar = () => {
	return (
		<div className="navbar bg-slate-300">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						{navItems}
					</ul>
				</div>
				<a href='/' className="btn btn-ghost normal-case text-xl color: inherit">Star Furniture</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal p-0">
					{navItems}
				</ul>
			</div>
			
		</div>
	);
};

export default Navbar;