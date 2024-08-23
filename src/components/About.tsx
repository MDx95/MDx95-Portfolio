import DivBox, {DivImgTex, Image, DivHeading} from './DivBox';
import PersonProfile2 from '/src/assets/PersonProfile2.png'
import IconGetStarted from '/src/assets/icon2.png'
import Sing from '/src/assets/sign2.png'

import {Social} from './Home';
import Header from './Header';
import './custom.css'
import styled from 'styled-components';

import star from '/src/assets/star.png';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const About = () => {
    // {nameTitel: '', desp: '', updateText: ''}, {nameTitel: '', desp: '', updateText: ''}
    const Row2Col2 = [
        { nameTitel: 'Education', desp: 'null', updateText: 'null' },
        { nameTitel: 'Bachelor Degree in Computer Science', desp: '2021 - 2025 (Under Graduate)', updateText: 'IMS' },
        { nameTitel: 'Masters --- Panding', desp: 'After Graduation', updateText: '. . . .' }
    ];
    const Row2Col1 = [
        { nameTitel: 'Experience', desp: 'null', updateText: 'null' },
        { nameTitel: 'React Developer', desp: '2020 - TillNow', updateText: 'JS and TS' },
        { nameTitel: 'Wordpress & Shopify Developer', desp: '2020 - 2023', updateText: '@RF Studio' }
    ];

    const DynamicText = styled.div`
        color: white;
        @media (min-width: 1300px) {
        font-size: 70px; /* Default font size for larger screens */
        }
        @media (max-width: 1300px) {
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 30px; /* Font size for screens with a max width of 1500px or smaller */
        }
    
        font-weight: bold;
    `;

    useEffect(() => {
        // window.onload = () => {
            AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            });
        // };
    }, []);


    return(
        <>

            <Header Link='about'/>

            <div className='container' style={{ paddingTop: '70px' }}   >
{/* Row 1........................................................................ */}
                <div className='row custom-vertical-Mobile mb-3'>
                    <div data-aos="zoom-in" className='col-4 custom-col-3 custom-Streach-Grid '>
                        <div className='customborder custom-background2 p-4 '>
                            <Image ImgClass='card-img-top  customborder customImgback' imgSrc={PersonProfile2} altText=''/>
                        </div>
                    </div>
                    <div className='col custom-text-aling-center custom-Streach-Grid'>


                        <DynamicText data-aos="zoom-in" className=' '><img src={star}/> SELF-SUMMARY <img src={star}/></DynamicText>
                        
                        
                        <div data-aos="zoom-in" className='customborder mb-3 p-3 custom-background2 custom-text-aling-left ' >
                            <DivImgTex nameTitel={'Muhammad Danish'} titelText={'null'}altText={'null'} imgSrc={IconGetStarted} herf='n'
                            desp={'I am a Lahore-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.'} ImgClass={''}/>
                        </div>
                    </div>
                </div>

{/* Row 2........................................................................ */}

                <div className='row custom-vertical-Mobile'>
                    <div className='col custom-Streach-Grid'><DivHeading array={Row2Col1} herf='n'/>
                    </div>
                    <div className='col custom-Streach-Grid'><DivHeading array={Row2Col2} herf='n'/>
                    </div>
                </div>

{/* Row 3........................................................................ */}
                <div className='row'>
                    <Social />

                    <div data-aos="zoom-in" className='col custom-Streach-Grid '>
                        <div className='customborder mb-3 p-3 custom-background2 custom-text-heading CustomHoverImg' >
                            <DivImgTex nameTitel={'Let\'s'} titelText={'null'}altText={'null'} herf='y' imgSrc={IconGetStarted} desp={'Get started'} ImgClass={''}/>
                        </div>
                    </div>

                    <div className='col-3 custom-col-3 custom-row-paddig custom-Streach-Grid'><DivBox 
                        nameTitel={'Credentials'}
                        titelText={'More About Me'}
                        altText={'sing'} 
                        imgSrc={Sing}
                        desp={'null'}
                        herf='y'
                        updateText={'null'}
                        classTaglineDiv={'card-body'}
                        classTagline={'card-text'}/>
                    </div>

                </div>
                

            </div>
        </>
    );
}

export default About