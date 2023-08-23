import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './assets/css/style.css';
import Home from './home';
import HandleError404 from './controllers/handleError404';
import Navbar from './controllers/Navbar';
import SigninPage from './controllers/signin'; // Import the SigninPage component

function App() {

  // Internet connection check
  const handleNetworkStatusChange = (isOnline) => {
    toast.dismiss();

    const message = isOnline ? 'Internet connection restored 🚀' : 'No/Bad internet connection 😭';
    const theme = isOnline ? 'info' : 'danger';
    const close = isOnline ? 1500 : 3000;

    toast(message, {
      toastId: 'netwrkstatus',
      position: 'bottom-left',
      autoClose: close,
      transition: Slide,
      hideProgressBar: true,
      theme: theme,
    });
  };

  useEffect(() => {
    const onlineHandler = () => handleNetworkStatusChange(true);
    const offlineHandler = () => handleNetworkStatusChange(false);

    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<HandleError404 />} />
            <Route path="/signin" element={<SigninPage />} />
            {/* Use `element` prop instead of `component` */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
