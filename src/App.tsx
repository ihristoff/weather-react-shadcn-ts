import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import Dashboard from "./pages/weather-dashboard";
import City from "./pages/city-page";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'



const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <ThemeProvider defaultTheme="white">
 <Layout >
        <Routes>
          <Route path = '/' element={<Dashboard/>}/>
          <Route path = '/city/:cityName' element={<City/>}/>
        </Routes>
        </Layout>

    </ThemeProvider>
     
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
