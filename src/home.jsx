import hero from './assets/img/hero.svg';

const Home = () => {
    
  return (

    <div>


 <section className="homelanding vh-100 mt-5 pt-3 ">


            <div className="container vh-100 px-1 mt-5 pt-3">
                <div className="row">
                <div className="col-lg-6 col-md-12  ">
                    <h1 className="display-6 mt-4 pt-2 fw-bold mb-4">Empower Your <span>Business Compliance </span>: <span> AI-Powered </span>Guidance for <span>SMEs </span></h1>
                    <p className="mb-4">ConselComply is an advanced AI chatbot that is designedto help you navigate through the regulatory compliance for your business in your country whether you are a startup or an established SME.</p>
               <a href="" className='btn '>Get Started </a>
                    
                </div>

                <div className='col-md-12 col-lg-6'>
                    <img src={hero} alt="" className='' />
                </div>
                </div>
            </div>
        </section>


        <section className='container mt-5 px-4 px-lg-0 about'>
            
                <div className='pt-3 col-lg-6 col-12'>
                    <h4 className='display-6  mb-5'>About us</h4>
                    <p>Meet ConselComply, the cutting-edge AI chatbot poised to revolutionize your business's regulatory compliance. Designed for startups and SMEs alike, it's your ultimate guide through the intricate landscape of country-specific regulations. Whether you're newly established or already thriving, ConselComply streamlines the complex process, allowing you to navigate with confidence. Stay up-to-date and informed while focusing on what truly matters – the growth and success of your business. Let ConselComply handle the regulatory maze, so you can dedicate more energy to innovation and expansion. Embrace compliance effortlessly and elevate your entrepreneurial journey with ConselComply by your side.</p>
                </div>

                <div className='text-center justify-content-center mt-4 col-lg-6 col-12'>
                    <img src={hero} alt="" className='img-fluid' width="900"/>
                </div>

        </section>




    </div>

  )
}

export default Home