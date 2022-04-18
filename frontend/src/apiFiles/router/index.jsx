import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes';
import Header from '../components/widgets/Header';
import Footer from '../components/widgets/Footer';

export default function Router() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    }
    setTimeout(() => {
      const id = hash.replace('#', '');

      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }, [pathname, hash, key]);

  return (
    <React.Fragment>
      <Header />
      <div id="content">
        <Routes>
          {ROUTES.map((route) => {
            const { path, element } = route;
            return <Route path={path} element={element} />;
          })}
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}
