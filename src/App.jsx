import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Cursor from './components/ui/Cursor';
import ScrollProgress from './components/ui/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Circles from './pages/Circles';
import Board from './pages/Board';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/board" element={<Board />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}
