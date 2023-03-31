import { BrowserRouter, Routes ,Route } from "react-router-dom";
import usePersistedState from "./hooks/usePersistedState";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import GlobalStyle, { Grid } from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light"
import dark from "./styles/themes/dark";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Pet from "./pages/Pet";
import Proprietor from "./pages/Proprietor";

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? light : dark)

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <GlobalStyle/>
        <BrowserRouter>
          <Sidebar/>
          <Header toggleTheme={ toggleTheme }/>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="dash" element={ <Dashboard/> }/>
            <Route path="register" element={ <Register/> }>
              <Route path="pet" element={ <Pet/> }/>
              <Route path="enterprise" element={ <h1>Empresa</h1> }/>
              <Route path="veterinary" element={ <h1>Veterinário</h1> }/>
              <Route path="proprietor" element={ <Proprietor/> }/>
            </Route>
            <Route path="profile" element={ <Profile/> }/>
          </Routes>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  )
}

export default App
