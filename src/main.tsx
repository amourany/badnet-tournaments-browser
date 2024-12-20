import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import {MantineProvider} from "@mantine/core";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {theme} from "./theme.ts";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <App/>
                <ReactQueryDevtools
                    buttonPosition="bottom-left"
                    initialIsOpen={false}
                />
            </QueryClientProvider>
        </MantineProvider>
    </StrictMode>,
)
