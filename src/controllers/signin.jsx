import logo from '/logo.svg';



const signin = () => {


  return (
    <div>

<div className="form w-100 vh-100 d-flex align-items-center justify-content-center mt-5">

    <div className="box text-center">
 <img src={logo} alt="logo" className='mb-4 mt-3' /> 

<form>
<div className="form-heading">
<h2 className='text-center mb-1'>Create Your Account</h2>
<p className='text-center'>Phone verification might be needed for signup; number used solely for security.</p>
</div>

<input type='email' placeholder='Email Address' className='email w-100 mb-3'></input>

<input type='password' placeholder='Password' className='password w-100 mb-3'></input>

<input type='number' placeholder='Phone number' className='phone w-100 mb-3'>

</input>

<button type='submit' className='signin-btn'>Continue</button>

<div className="login">
    <h6>Already have an account? <a>login</a></h6>
    <button>
        <div className='d-flex justify-content-around'>
        <div>
        <img src="" alt="" />
        </div>

        <div>
        <h5>Sign up with google</h5>
        </div>
        </div>
    </button>
    </div>
    </form>
</div>
</div>

</div>
  
   
  );
};

export default signin ;