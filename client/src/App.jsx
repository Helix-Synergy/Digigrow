import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Loader from './components/Loader';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CollaborationPage = lazy(() => import('./pages/CollaborationPage'));
const AboutFeaturePage = lazy(() => import('./pages/AboutFeaturePage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Start loading
    setLoading(true);

    // Scroll to top instantly when page changes
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Stop loading after delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 0.8s for faster transitions

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on path change only

  return (
    <>
      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/:featureId" element={<AboutFeaturePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/collaboration" element={<CollaborationPage />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
