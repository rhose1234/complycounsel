import logo from '/logo.svg';



const signin = () => {


  return (
    <div>

<div className="form w-100 d-block justify-content-center">
<a href="./" className="w-50 "><img src={logo} alt="logo" /></a> 

<form>
<div className="form-heading">
<h4>Create Your Account</h4>
<p>Phone verification might be needed for signup; number used solely for security.</p>
</div>

<input type='email' placeholder='Email Address' className='email'></input>

<input type='password' placeholder='Password' className='password'></input>

<input type='number' placeholder='Phone number' className='phone'>

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
  
   
  );
};

export default signin ;