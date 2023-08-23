
import logo from '../assets/img/logo.svg';



const Navbar = () => {


  return (
    <div>

  <nav className="navbar navbar-expand-xl  h-md-100 fixed-top p-3">
  <div className="container">
 
  <a href="./" className="navbar-brand fw-bold "><img src={logo} alt="logo" /></a> 

  <a className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false">
  <span className="toggler-icon top-bar"></span>
  <span className="toggler-icon middle-bar"></span>
  <span className="toggler-icon bottom-bar"></span>
</a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav  mx-auto mb-2 mb-lg-0 ">
      <a className=" fw-bold nav-item nav-link active " aria-current="page" href="./">Home</a>
        <a className=" fw-bold nav-item nav-link " href="#support">About Us</a>
        <a className=" fw-bold nav-item nav-link " href="#support">Login</a>

                
<div className='d-flex ms-lg-5 clientarea'>
<a className=" btn  fw-bold nav-item nav-link  text-center clientarea" href="./signin.jsx">Create Free Account</a>
</div>
</ul>

  </div>
  </div>
  </nav> 
  


 
    </div>
   
  );
};

export default Navbar;