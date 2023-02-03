import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { Resume } from './Resume';

export const Router = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/resume" element={<Resume />} />
	</Routes>
);
