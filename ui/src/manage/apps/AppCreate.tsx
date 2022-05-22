import React, { useState } from 'react';
import './AppCreate.scss';
import { AppService } from './AppService';
import { useNavigate } from 'react-router-dom';

function AppCreate() {
	const [name, setName] = useState<string>('');
	const [owner, setOwner] = useState<string>('');
	const navigate = useNavigate();

	async function saveApp() {
		await AppService.Create({
			ID: null,
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

	return (
		<div className="container">
			<h1>Create App</h1>
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
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => saveApp()}
			>
				Save
			</button>
		</div>
	);
}

export default AppCreate;
