import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: 'dark', fontFamily: 'Nanum Brush Script' }}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</MantineProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
