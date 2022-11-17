import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/pages/Home';
import AdminArea from './components/pages/AdminArea';
import Cadastro from './components/pages/Cadastro';
import LivrosInt from './components/pages/LivrosInt';
import QuemSomos from './components/pages/QuemSomos';
import TrocaLivros from './components/pages/TrocaLivros';
import Login from "./Views/login";
import LoginCreate from "./Views/login/Create.jsx";
import LoginUpdate from "./Views/login/Create.jsx";
import Li from "./Views/li";
import LiCreate from "./Views/li/Create.jsx";
import LiUpdate from "./Views/li/Create.jsx";
import Usuario from "./Views/usuario";
import UsuarioCreate from "./Views/usuario/Create.jsx";
import UsuarioUpdate from "./Views/usuario/Create.jsx";
import Livro from "./Views/livro";
import LivroCreate from "./Views/livro/Create.jsx";
import LivroUpdate from "./Views/livro/Create.jsx";

import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Cadastro" element={<Cadastro />} exact />
          <Route path="/TrocaLivros" element={<TrocaLivros />} exact />
          <Route path="/LivrosInt" element={<LivrosInt />} exact />
          <Route path="/AdminArea" element={<AdminArea />} exact />
          <Route path="/QuemSomos" element={<QuemSomos />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/login-cadastrar" element={<LoginCreate />} />
          <Route path="/login-editar/:id" element={<LoginUpdate />} />
          <Route path="/livros-interativos" element={<Li />} />
          <Route path="/livro-interativo-cadastrar" element={<LiCreate />} />
          <Route path="/livro-interativo-editar/:id" element={<LiUpdate />} />
          <Route path="/usuarios" element={<Usuario />} />
          <Route path="/usuario-cadastrar" element={<UsuarioCreate />} />
          <Route path="/usuario-editar/:id" element={<UsuarioUpdate />} />
          <Route path="/livros" element={<Livro />} />
          <Route path="/livro-cadastrar" element={<LivroCreate />} />
          <Route path="/livro-editar/:id" element={<LivroUpdate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
