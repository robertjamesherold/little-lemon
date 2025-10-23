import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ReservationPage } from "./pages/ReservationPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";
import picture from './assets/bg.jpeg'
import './App.scss'

export default function App() {
  return (<>
  <img className='fixed z-0 h-screen w-screen inset-0 object-cover opacity-33  ' src={picture}/>
    <div className='bg-red-950/80 z-10'>
      <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={<ReservationPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
      <Footer />
   </div>
  </>
  );
}
