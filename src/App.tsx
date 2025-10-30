import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import Dashboard from "./pages/weather-dashboard";
import City from "./pages/city-page";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 5 * 60 * 1000, //5 min
      gcTime: 10 * 60 * 1000, //10 min
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <ThemeProvider defaultTheme="system">
 <Layout >
        <Routes>
          <Route path = '/' element={<Dashboard/>}/>
          <Route path = '/city/:cityName' element={<City/>}/>
        </Routes>
        </Layout>

    </ThemeProvider>
     
    </BrowserRouter>
       <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
