import logo from '/logo.svg';
import google from '../assets/img/google.png';



const signin = () => {


  return (
    <div>

<div className="form  d-flex align-items-center justify-content-center mt-5">

    <div className="box text-center">
 <img src={logo} alt="logo" className='mb-4 mt-3' /> 

<form>
<div className="form-heading">
<h2 className='text-center mb-1'>Create Your Account</h2>
<p className='text-center'>Phone verification might be needed for signup; number used solely for security.</p>
</div>

<input type='email' placeholder='Email Address' className='email w-100 mb-2'></input>

<input type='password' placeholder='Password' className='password w-100 mb-2'></input>

<input type='number' placeholder='Phone number' className='phone w-100 mb-2'>

</input>

<a type='submit' className='signin-btn btn mt-4' href="/otp" >Continue</a>

<div className="login mt-3">
    <h6 className='mb-3'>Already have an account? <a>login</a></h6>
    <a className='btn'>
        <div className='d-flex justify-content-around'>
        <div>
        <img src={google} alt="" className='' />
        </div>

        <div>
        <h5>Sign up with google</h5>
        </div>
        </div>
    </a>
    </div>
    </form>
</div>
</div>

</div>
  
   
  );
};

export default signin ;