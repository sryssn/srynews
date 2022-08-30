import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Hiburan from './pages/Hiburan';
import Bisnis from './pages/Bisnis';
import Home from './pages/Home';
import Kesehatan from './pages/Kesehatan';
import Olahraga from './pages/Olahraga';
import Tekno from './pages/Tekno';
import Sains from './pages/Sains';
import CariBerita from './pages/CariBerita';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top container">
        <div className="container-fluid">
          <a className="navbar-brand text-info fw-bold fs-1 ms-3" href="/">SRYNews</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className='link-info text-decoration-none p-3' to="/">Home</Link>
              <Link className='link-info text-decoration-none p-3' to="bisnis">Bisnis</Link>
              <Link className='link-info text-decoration-none p-3' to="hiburan">Hiburan</Link>
              <Link className='link-info text-decoration-none p-3' to="kesehatan">Kesehatan</Link>
              <Link className='link-info text-decoration-none p-3' to="olahraga">Olahraga</Link>
              <Link className='link-info text-decoration-none p-3' to="sains">Sains</Link>
              <Link className='link-info text-decoration-none p-3' to="tekno">Tekno</Link>
              <Link className='link-info text-decoration-none p-3' to="cari-berita">Cari Berita</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bisnis" element={<Bisnis />} />
        <Route path="hiburan" element={<Hiburan />} />
        <Route path="kesehatan" element={<Kesehatan />} />
        <Route path="olahraga" element={<Olahraga />} />
        <Route path="tekno" element={<Tekno />} />
        <Route path="sains" element={<Sains />} />
        <Route path="cari-berita" element={<CariBerita />} />
      </Routes>
      <div className='text-center text-white p-3 bg-dark mx-auto mt-4 container'>
        <p className='text-muted'>© 2022 SRYNews. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
