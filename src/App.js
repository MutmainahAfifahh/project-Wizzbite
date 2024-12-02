import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router
import Opening from './pages/Opening';
import Login from './pages/Login';
import BuatAkun from './pages/BuatAkun';
import MasukAkun from './pages/MasukAkun';
import AkunBerhasilMasuk from './pages/AkunBerhasilMasuk';
import Home from './pages/Home';
import AkunBerhasilDibuat from './pages/AkunBerhasilDibuat';
import Wizzmie from './pages/Wizzmie';
import GenkSushi from './pages/GenkSushi';
import GenkDimsum from './pages/GenkDimsum';
import Minuman from './pages/Minuman';
import MieGoyang from './pages/MieGoyang';
import MieManja from './pages/MieManja';
import MieDisko from './pages/MieDisko';
import Pesanan from './pages/Pesanan';
import Ulasan from './pages/Ulasan';
import TransferBank from './pages/TransferBank';
import Profil from './pages/Profil';
import UbahProfil from './pages/UbahProfil';
import UbahNomor from './pages/UbahNomor';
import BuktiTransfer from './pages/BuktiTransfer';
import Keluar from './pages/Keluar';
import NotifikasiTransfer from './pages/NotifikasiTransfer';
import RincianPesanan from './pages/RincianPesanan';
import PesananSelesai from './pages/PesananSelesai';
import BeriUlasan from './pages/BeriUlasan'
import LihatPenilaian from './pages/LihatPenilaian'
import OpeningAdmin from './PagesAdmin/OpeningAdmin';
import AdminLogin from './PagesAdmin/AdminLogin';
import MasukAkunAdmin from './PagesAdmin/MasukAkunAdmin';
import BuatAkunAdmin from './PagesAdmin/BuatAkunAdmin';
import AkunBerhasilDibuatAdmin from './PagesAdmin/AkunBerhasilDibuatAdmin';
import AkunBerhasilMasukAdmin from './PagesAdmin/AkunBerhasilMasukAdmin';
import HomeAdmin from './PagesAdmin/HomeAdmin';

function App() {
  return (
    <Router> {/* Wrap your routes with Router */}
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/BuatAkun" element={<BuatAkun />} />
        <Route path="/MasukAkun" element={<MasukAkun />} />
        <Route path="/AkunBerhasilMasuk" element={<AkunBerhasilMasuk />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AkunBerhasilDibuat" element={<AkunBerhasilDibuat />} />
        <Route path="/Wizzmie" element={<Wizzmie />} />
        <Route path="/GenkSushi" element={<GenkSushi />} />
        <Route path="/GenkDimsum" element={<GenkDimsum />} />
        <Route path="/Minuman" element={<Minuman />} />
        <Route path="/MieGoyang" element={<MieGoyang />} />
        <Route path="/MieManja" element={<MieManja />} />
        <Route path="/MieDisko" element={<MieDisko />} />
        <Route path="/Pesanan" element={<Pesanan />} />
        <Route path="/Ulasan" element={<Ulasan />} />
        <Route path="/TransferBank" element={<TransferBank />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/UbahProfil" element={<UbahProfil />} />
        <Route path="/UbahNomor" element={<UbahNomor />} />
        <Route path="/BuktiTransfer" element={<BuktiTransfer />} />
        <Route path="/Keluar" element={<Keluar />} />
        <Route path="/NotifikasiTransfer" element={<NotifikasiTransfer />} />
        <Route path="/RincianPesanan" element={<RincianPesanan />} />
        <Route path="/PesananSelesai" element={<PesananSelesai />} />
        <Route path="/BeriUlasan" element={<BeriUlasan />} />
        <Route path="/LihatPenilaian" element={<LihatPenilaian />} />  
        <Route path="/OpeningAdmin" element={<OpeningAdmin />} />  
        <Route path="/AdminLogin" element={<AdminLogin />} />   
        <Route path="/MasukAkunAdmin" element={<MasukAkunAdmin />} />
        <Route path="/BuatAkunAdmin" element={<BuatAkunAdmin />} />
        <Route path="/AkunBerhasilDibuatAdmin" element={<AkunBerhasilDibuatAdmin />} />
        <Route path="/AkunBerhasilMasukAdmin" element={<AkunBerhasilMasukAdmin />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
       

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;