import React, { useEffect, useState } from 'react';
import './AppList.scss';
import { AppService } from './AppService';
import { App } from './Types';
import { NavLink } from 'react-router-dom';

function AppList() {
	const [apps, setApps] = useState<App[]>([]);

	useEffect(() => {
		async function fetchApps() {
			const test = await AppService.GetAll();
			setApps(test);
		}
		fetchApps();
	}, []);

	function getApps() {
		return apps.map((a) => {
			return (
				<div className="col">
					<NavLink to={`./${a.ID}`} className="text-reset text-decoration-none">
						<div className="AppCard card">
							<div className="card-body">
								<h5 className="card-title">{a.Name}</h5>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</NavLink>
				</div>
			);
		});
	}

	return (
		<div className="container">
			<h1 className="mb-4">Apps</h1>
			<div className="row row-cols-3 gy-4">
				<div className="col">
					<NavLink to="./create" className="text-reset text-decoration-none">
						<div className="AddCard card d-flex align-items-center justify-content-center">
							<i
								className="AddCardIcon bi bi-plus-lg"
								style={{ fontSize: 100 }}
							></i>
						</div>
					</NavLink>
				</div>

				{getApps()}
			</div>
		</div>
	);
}

export default AppList;
