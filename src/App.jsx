import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollProgress from './components/ui/ScrollProgress';
import Deferred from './components/ui/Deferred';

const Cursor = lazy(() => import('./components/ui/Cursor'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Circles = lazy(() => import('./pages/Circles'));
const Board = lazy(() => import('./pages/Board'));
const Projects = lazy(() => import('./pages/Projects'));
const Gallery = lazy(() => import('./pages/Gallery'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Deferred>
        <Cursor />
      </Deferred>
      <ScrollProgress />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </>
  );
}
