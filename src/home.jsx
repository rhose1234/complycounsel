import hero from './assets/img/hero.svg';

const Home = () => {
    
  return (

    <div>


 <section className="homelanding vh-100 mt-5 pt-3">


            <div className="container d-flex align-items-center vh-100">
                <div className="col-lg-6 col-12 mt-5 pt-3 px-3 px-lg-2 me-1">
                    <h1 className="display-4 mt-4 pt-2">Empower Your Business Compliance: AI-Powered Guidance for  SMEs</h1>
                    <p className="">ConselComply is an advanced AI chatbot that is designedto help you navigate through the regulatory compliance for your business in your country whether you are a startup or an established SME.</p>
                
                    
                </div>

                <div className='col-12 col-lg-6 d-none d-lg-block'>
                    <img src={hero} alt="" className='img-fluid h-100' width="980"/>
                </div>
            </div>
        </section>


        <section className='container mt-5 px-4 px-lg-0 about'>
            
                <div className='pt-3'>
                    <h4 className='display-6 col-lg-9 col-12 mb-5'>Across five countries , our dedicated team has proudly managed a diverse portfolio of over <CountUp end={200}/> domains and <CountUp end={430}/> hosting accounts, serving the unique needs of more than <CountUp end={310}/> valued clients.</h4>
                </div>

                <div className='text-center justify-content-center mt-4'>
                    <img src="" alt="" className='img-fluid' width="900"/>
                </div>

        </section>




    </div>

  )
}

export default Home