import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './context/AuthContext/AuthContext';
import { LocalizationProvider } from './context/LocalizationContext/LocalizationContext';
import styles from './App.module.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorBoundaryFallback from './pages/ErrorBoundaryFallback/ErrorBoundaryFallback';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <LocalizationProvider>
      <AuthProvider>
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
          <div className={styles.app}>
            <Header />
            <main className={styles.main}>
              <Outlet />
            </main>
            <Footer />
            <ToastContainer className={'toast'} />
          </div>
        </ErrorBoundary>
      </AuthProvider>
    </LocalizationProvider>
  );
};

export default App;
