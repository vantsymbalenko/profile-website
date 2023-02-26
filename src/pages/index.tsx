import { Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { Resume } from './Resume';
import { Contacts } from './Contacts';

export const Router = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/resume" element={<Resume />} />
		<Route path="/contacts" element={<Contacts />} />
	</Routes>
);
