import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ReservationPage } from "./pages/ReservationPage";
import { ThankYouPage } from "./pages/ThankYouPage";
import { Nav } from "./components/global/Nav";
import { Footer } from "./components/global/Footer";
import './App.scss'

export default function App() {
  return (
    <div className="min-h-screen secondary-backgroundcolor-2 flex flex-col">
      <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reserve" element={<ReservationPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
      <Footer />
   
    </div>
  );
}
