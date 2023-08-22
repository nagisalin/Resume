import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import ScrollToTop from './scrollToTop';
import Resume from 'containers/Resume/Resume';
import LoginPage from 'containers/LoginPage/LoginPage';
import ChartPage from 'containers/ChartPage/ChartPage';
import ListPage from 'containers/ListPage/ListPage';
import OtherPage from 'containers/OtherPage/OtherPage';

import XuemiIndex from 'containers/XuemiProject/XuemiIndex';

import './index.css';

// import reportWebVitals from './reportWebVitals';

const HeaderItems = [
	{ path: '/login', element: <LoginPage />, title: 'LoginPage' },
	{ path: '/chart', element: <ChartPage />, title: 'ChartPage' },
	{ path: '/list', element: <ListPage />, title: 'ListPage' },
	{ path: '/other', element: <OtherPage />, title: 'Other' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App HeaderItems={HeaderItems} />}>
				<Route index element={<Resume />} />
				{HeaderItems.map((item) => {
					return <Route path={item.path} element={item.element} key={item.path} />;
				})}
				<Route path="/xuemi_project/*" element={<XuemiIndex />} />
				<Route path="*" element={<Resume />} />
			</Route>
		</Routes>
		<ScrollToTop />
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
