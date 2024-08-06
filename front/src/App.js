import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./context/userContext";
import { BodyRoutes } from "./styles";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home/home";
import Library from "./pages/library/library";
import Login from "./pages/login";
import History from "./pages/history/history";
import Cadastro from "./pages/cadastro/cadastro";
import CadastroVideo from "./pages/cadastrar video/cadVideo";
import Search from "./pages/search/search";

function App() {
  const [openMenu, setOpenMenu] = useState(true)
  const [dropDown, setDropDown] = useState(false)

  return (
    <UserStorage>
      <BrowserRouter>
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu} dropDown={dropDown} setDropDown={setDropDown} />
        <div style={{ width: '100%', display: 'flex'}} >
          <Menu openMenu={openMenu} />
          <BodyRoutes openMenu={openMenu}>
            <Routes>
              <Route path="/" element={<Home openMenu={openMenu}/>} />
              <Route path="/library" element={<Library openMenu={openMenu}/>} />
              <Route path="/history" element={<History openMenu={openMenu}/>} />
              <Route path="/login" element={<Login openMenu={openMenu}/>} />
              <Route path="/cadastro" element={<Cadastro openMenu={openMenu}/>} />
              <Route path="/cadastrar-video" element={<CadastroVideo openMenu={openMenu}/>} />
              <Route path="/search" element={<Search openMenu={openMenu}/>} />
            </Routes>
          </BodyRoutes>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
