import logo from '/logo.svg';
import google from '../assets/img/google.png';



const signin = () => {


  return (
    <div>

<div className="form vh-100 d-flex align-items-center justify-content-center mt-5">

    <div className="box text-center">
 <img src={logo} alt="logo" className='mb-4 mt-3' /> 

<form>
<div className="form-heading">
<h2 className='text-center mb-1'>Verification</h2>
<p className='text-center'>Enter the code sent to counselComply@gmail.com</p>
</div>

<div className='d-flex justify-content-evenly otp-icon mt-5 pt-4'>
<div className="div">
<i className="fas fa-minus"></i>

</div>

<div className="div">
<i className="fas fa-minus"></i>

</div>

<div className="div">
<i className="fas fa-minus"></i>

</div>

<div className="div">
<i className="fas fa-minus"></i>

</div>
</div>




<a type='submit' className='signin-btn btn mt-5 '>Continue</a>



    </form>
</div>
</div>

</div>
  
   
  );
};

export default signin ;