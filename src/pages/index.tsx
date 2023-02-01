import { createBrowserRouter } from 'react-router-dom';

import { Home } from './Home';
import { Resume } from './Resume';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/resume',
		element: <Resume />,
	},
]);
