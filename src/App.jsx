import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

import './assets/css/style.css';
import Home from './home';
import HandleError404 from './controllers/handleError404';
import Navbar from './controllers/Navbar';
import signin from './controllers/signin';
// import Footer from './controllers/footer';

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
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/*' element={<HandleError404/>} />
            </Routes>
            
          {/* <Footer/> */}
          <signin/>
        <ToastContainer />
      </div>
     </Router>
     <ToastContainer/>
    </>
  )
}

export default App