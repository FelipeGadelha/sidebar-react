import { BrowserRouter, Routes ,Route } from "react-router-dom";
import usePersistedState from "./hooks/usePersistedState";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import GlobalStyle from "./styles/global";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light"
import dark from "./styles/themes/dark";
import Profile from "./pages/Perfil";
import Register from "./pages/Register";
import Pet from "./pages/Pet";

function App() {

  const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: minmax(8rem, max-content) auto;
    grid-auto-rows: minmax(10rem, max-content) auto;
    /* grid-template-columns: auto auto auto auto auto;
    grid-template-rows: 10vh 30vh 30vh 30vh; */
    grid-template-areas: "sideMenu header header header header"
                          "sideMenu main main main main"
                          "sideMenu main main main main"
                          "sideMenu main main main main";
  `;

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

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
            <Route path="proprietor" element={ <h1>Proprietario</h1> }/>
          </Route>
          <Route path="profile" element={ <Profile/> }/>
        </Routes>
        </BrowserRouter>
      </Grid>
    </ThemeProvider>
  )
}

export default App
