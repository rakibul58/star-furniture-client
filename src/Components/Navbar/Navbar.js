import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';



const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);

	const handleLogout = () => {
		logOut()
			.then(result => { })
			.catch(error => console.error(error));
	}

	const navItems = <>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/'>Home</NavLink></li>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/contact'>Contact</NavLink></li>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/banner'>Banner</NavLink></li>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/info'>Info</NavLink></li>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/faq'>FAQ</NavLink></li>
		<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/services'>Services</NavLink></li>

		{
			user ?
				<>
					<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/addservices'>Add Services</NavLink></li>
					<li><button onClick={handleLogout} className='btn btn-primary rounded-full'>Logout</button></li>
				</>
				:
				<>
					<li><NavLink className={({ isActive }) => (isActive ? 'text-secondary' : '')} to='/login'>Login</NavLink></li>
				</>
		}
	</>

	return (
		<div className="navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
						{navItems}
					</ul>
				</div>
				<Link to='/' className="text-2xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Star Furniture</Link>
			</div>
			<div className="navbar-end hidden lg:flex font-semibold">
				<ul className="menu menu-horizontal p-0">
					{navItems}
				</ul>
			</div>

		</div>
	);
};

export default Navbar;


