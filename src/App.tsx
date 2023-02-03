import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './components/app/components/GlobalStyles';
import { PageWrapper } from './components/app/components/wrappers/PageWrapper';
import { ThemeProvider } from './components/library/components';
import { Router } from './pages';

const App = () => (
	<ThemeProvider>
		<GlobalStyles />
		<BrowserRouter>
			<PageWrapper>
				<Router />
			</PageWrapper>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
