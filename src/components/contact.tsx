import Header from './Header';
import './custom.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {

    useEffect(() => {
        window.onload = () => {
          AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
          });
        };
    }, []);

    return(
        <>
            <Header Link={'contact'}/>
            <div className='container' style={{paddingTop: '70px'}}>
                
                <div data-aos="zoom-in" className='row custom-background2 custom-text-aling-center customborder '>
                    <p className=' ' style={{color: 'white', fontSize: '50px', fontWeight: 'bold'}}>Coming Soon!</p>
                </div>
                
            </div>
        </>
    );
}

export default Contact;

