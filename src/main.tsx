import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={new QueryClient()}>
			<MantineProvider
				withNormalizeCSS
				withGlobalStyles
				theme={{ colorScheme: 'dark' }}
			>
				<App />
			</MantineProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
