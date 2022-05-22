import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './manage/home/Home';
import AppList from './manage/apps/AppList';
import Flows from './manage/flows/Flows';
import Users from './manage/users/Users';
import AppDetail from './manage/apps/AppDetail';
import AppCreate from './manage/apps/AppCreate';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
				<Route path="apps" element={<AppList />} />
				<Route path="apps/create" element={<AppCreate />} />
				<Route path="apps/:id" element={<AppDetail />} />
				<Route path="flows" element={<Flows />} />
				<Route path="users" element={<Users />} />
			</Route>
		</Routes>
	</BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
