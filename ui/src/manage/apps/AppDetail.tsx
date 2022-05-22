import React, { useEffect, useState } from 'react';
import './AppDetail.scss';
import { App } from './Types';
import { AppService } from './AppService';
import { useNavigate, useParams } from 'react-router-dom';

function AppDetail() {
	const params = useParams<{ id: string }>();
	const [app, setApp] = useState<App>(null);
	const [name, setName] = useState<string>('');
	const [owner, setOwner] = useState<string>('');
	const navigate = useNavigate();

	async function saveApp() {
		await AppService.Update({
			ID: +params.id,
			Name: name,
			Definition: {
				Owner: owner,
			},
			CreatedAt: null,
			UpdatedAt: null,
			Deleted: false,
		});
		navigate('../apps');
	}

	async function deleteApp() {
		await AppService.Delete(+params.id);
		navigate('../apps');
	}

	useEffect(() => {
		async function fetchApp() {
			const test = await AppService.Get(+params.id);
			setApp(test);
			setName(test.Name);
			setOwner(test.Definition.Owner);
		}
		fetchApp();
	}, []);

	function showApp() {
		if (app != null) {
			return (
				<div>
					<h1>{app.Name}</h1>
					<div>Owner: {app.Definition?.Owner}</div>
					<div className="mb-3">
						<label htmlFor="nameInput" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="nameInput"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="ownerInput" className="form-label">
							Owner
						</label>
						<input
							type="text"
							className="form-control"
							id="ownerInput"
							value={owner}
							onChange={(e) => setOwner(e.target.value)}
						/>
					</div>
					<div>CreatedAt: {app.CreatedAt}</div>
					<div>UpdatedAt: {app.UpdatedAt}</div>
					<button
						type="button"
						className="btn btn-primary"
						onClick={() => saveApp()}
					>
						Save
					</button>
					<button
						type="button"
						className="btn btn-danger ms-1"
						onClick={() => deleteApp()}
					>
						Delete
					</button>
				</div>
			);
		} else {
			return <div>Loading...</div>;
		}
	}

	return (
		<div className="container">
			<div className="text-center"></div>
			{showApp()}
		</div>
	);
}

export default AppDetail;
