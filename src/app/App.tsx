import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../page/Home';
import Course from '../page/course/Course';
import Footer from '../section/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}