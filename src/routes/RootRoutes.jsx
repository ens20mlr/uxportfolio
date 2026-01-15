import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';

export const routes = {
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Project: '/project/:id',
  Resume: '/resume',
};

const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  About: lazy(() => import('../scenes/About/About')),
  Projects: lazy(() => import('../scenes/Projects/Projects')),
  Resume: lazy(() => import('../scenes/Resume/Resume')),
  ProjectDetails: lazy(() =>
    import('../scenes/Projects/ProjectDetails/ProjectDetails')
  ),
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}

function RootRoutes() {
  return (
    <Routes>
      <Route path={routes.Home} element={<LazyScene name="Home" />} />
      <Route path={routes.About} element={<LazyScene name="About" />} />
      <Route path={routes.Projects} element={<LazyScene name="Projects" />} />
      <Route path={routes.Resume} element={<LazyScene name="Resume" />} />

      {/* NY SIDA för project */}
      <Route path={routes.Project} element={<LazyScene name="ProjectDetails" />} />
    </Routes>
  );
}

export default RootRoutes;
