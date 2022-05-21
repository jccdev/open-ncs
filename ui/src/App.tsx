import React from 'react';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
	return (
		<div>
			<header className="p-3 mb-3 border-bottom">
				<div className="container">
					<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
						<NavLink
							to="/"
							className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-2"
						>
							<span className="fs-4 fw-bold">OpenNCS</span>
						</NavLink>

						<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
							<li>
								<NavLink
									to="apps"
									className={({ isActive }) => {
										return (
											'nav-link px-2 ' +
											(isActive ? 'link-secondary' : 'link-dark')
										);
									}}
								>
									Apps
								</NavLink>
							</li>
							<li>
								<NavLink
									to="flows"
									className={({ isActive }) => {
										return (
											'nav-link px-2 ' +
											(isActive ? 'link-secondary' : 'link-dark')
										);
									}}
								>
									Flows
								</NavLink>
							</li>
							<li>
								<NavLink
									to="users"
									className={({ isActive }) => {
										return (
											'nav-link px-2 ' +
											(isActive ? 'link-secondary' : 'link-dark')
										);
									}}
								>
									Users
								</NavLink>
							</li>
						</ul>

						<ul className="nav">
							<li className="nav-item">
								<a href="/ui/public" className="nav-link link-dark px-2">
									Account
								</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
