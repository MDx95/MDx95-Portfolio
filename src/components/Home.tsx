import DivBox, {DivBox2, DivImgTex, Image} from './DivBox'
import { useEffect} from 'react';

import InternetIcon from '/src/assets/internet.png'
import InstaIcon from '/src/assets/insta.svg'
import Camera from '/src/assets/Camera.png'
import Pencil from '/src/assets/Pencil.png'
import Navigation from '/src/assets/Navigation.png'
import Circles from '/src/assets/3Circles.png'
import Code from '/src/assets/Code.png'
import MyWork from '/src/assets/my-works.png'
import PersonProfile from '/src/assets/PernoProfile.png'
import Gfonts from '/src/assets/gfonts.png'
import IconGetStarted from '/src/assets/icon2.png'
import Sing from '/src/assets/sign2.png'

import Header from './Header';
import './custom.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Social(){
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
            <div className='col-3 custom-col-3 custom-padding custom-Streach-Grid' style={{}}>
                <div data-aos="zoom-in" className='customborder p-3 custom-background2 CustomHoverSideImg'>
                    <div className='customborder p-3 custom-background2 custom-horizontal-center '>
                        <DivImgTex 
                            nameTitel={'null'}
                            titelText={'null'}
                            altText={'Site'} 
                            imgSrc={InternetIcon} 
                            desp={'null'}
                            herf='n'
                            ImgClass={'card-img-top custom-roundborder p-3 custom-background2 CustomHoverImg'}
                        />
                        <DivImgTex 
                            nameTitel={'null'}
                            titelText={'null'}
                            altText={'Insta'}
                            imgSrc={InstaIcon} 
                            desp={'null'}
                            herf='n'
                            ImgClass={'card-img-top custom-roundborder p-3 custom-background2 CustomHoverImg'}
                        />
                    </div>
                    <DivImgTex 
                        nameTitel={'Profiles'}
                        titelText={'Stay With Me'}
                        altText={'null'} 
                        imgSrc={'nullll'} 
                        desp={'null'}
                        ImgClass={'null'}
                        herf='y'
                    />
                </div>
            </div>
        </>
    );
}

interface stacts{
    stactsTitel: string;
    stactsDesp: string;
}

const Stacts = (props: stacts) => {
    const stactsTitel = props.stactsTitel, stactsDesp = props.stactsDesp;

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
        <div data-aos="zoom-in" className='customborder p-4 custom-background2 col CustomHoverImg  ' >
            <h3>{stactsTitel}</h3>
            <p className='custom-muted-text'>{stactsDesp}</p>
        </div>
    )
}


export default function Home(){

    useEffect(() => {
        // window.onload = () => {
            AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            });
        // };
    }, []);

    const despDiv2 = 'This is me, MDx95! No one its me from NoWhere...';
    const nameTitelDiv2 = 'Muhammad Danish';
    const imgSrcDiv2 = PersonProfile;
    const altTextDiv2 = 'MDx95';
    const titelTextDiv2 = 'A Web Desinger';

    const images = [
        Camera,
        Pencil,
        Navigation,
        Circles,
        Code
    ]
    
    

    return (
        <>

            <Header Link=''/>

            <div className="container" style={{ paddingTop: '70px' }}   >
                <div className="row p-2 ">
                    <div className='col custom-Streach-Grid'>
                        <Link to="/about" style={{textDecoration: 'none'}}>
                            <DivBox2 
                                nameTitel={nameTitelDiv2}
                                titelText={titelTextDiv2}
                                altText={altTextDiv2} 
                                imgSrc={imgSrcDiv2} 
                                desp={despDiv2}
                                herf='y'
                            />
                        </Link>
                    </div>

                    <div className='row col custom-row-paddig custom-Streach-Grid'>
                        <div className='custom-row-paddig'><DivBox 
                            nameTitel={'null'}
                            titelText={'null'}
                            altText={'null'} 
                            imgSrc={'null'} 
                            desp={despDiv2}
                            herf='n'
                            updateText={'null'}
                            classTaglineDiv={'card-body custom-tagline-container'}
                            classTagline={'card-text custom-tagline'}/>
                        </div>
                        <div className='col custom-row-paddig custom-Streach-Grid'><DivBox 
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
                        <div className='col custom-row-paddig custom-Streach-Grid'><DivBox 
                            nameTitel={'Projects'}
                            titelText={'Show Case'}
                            altText={'my-works'} 
                            imgSrc={MyWork}
                            desp={'null'}
                            herf='y'
                            updateText={'null'}
                            classTaglineDiv={'card-body'}
                            classTagline={'card-text'}/>
                        </div>
                    </div>
                </div>
{/* ROW 2............................................................. */}
                <div className="row">
                    <div className='col-3 custom-col-3 custom-Streach-Grid'><DivBox 
                            nameTitel={'Blog'}
                            titelText={'My Blogs'}
                            altText={'Blog'} 
                            imgSrc={Gfonts}
                            desp={'null'}
                            herf='y'
                            updateText={'null'}
                            classTaglineDiv={'card-body'}
                            classTagline={'card-text'}/>
                            </div>


                    <div data-aos="zoom-in" className='col custom-Streach-Grid '>
                        <div className='customborder p-4 mb-3 custom-background2 CustomHoverSideImg CustomHoverImg'>
                            
                            <div className='custom-horizontal-center p-3'>
                                {images.map(img => <Image imgSrc={img} ImgClass='custom-image  p-1' altText='CustomHoverImg' />)}
                            </div>

                            <DivImgTex nameTitel={'Service Offering'}titelText={'Specialization'} altText={'Site'} imgSrc={'nullll'} herf='y' desp={'null'} ImgClass={'card-img-top p-3'}/>
                        </div>
                    </div>

                    <Social />

                </div>
{/* ROW 3............................................................. */}
                <div className='row custom-vertical-Mobile'>
                    <div className='col custom-Streach-Grid'>
                        <div data-aos="zoom-in" className='customborder mb-3 p-4 custom-background2 custom-horizontal-center custom-vertical-Mobile custom-text-aling-center ' >
                            {/* Its Created in Same File/Page... Stacts Function */}
                            <Stacts stactsTitel={'+03'} stactsDesp={'Years OF Experience'} />
                            <Stacts stactsTitel={'+15'} stactsDesp={'Clients World WIde'} />
                            <Stacts stactsTitel={'+25'} stactsDesp={'Projects in Total'} />
                        </div>
                    </div>

                    <div data-aos="zoom-in" className='col custom-Streach-Grid'>
                        <div className='customborder mb-3 p-3 custom-background2 custom-text-heading CustomHoverImg ' >
                            <DivImgTex nameTitel={'Let\'s'} titelText={'null'}altText={'null'} herf='y' imgSrc={IconGetStarted} desp={'Get started'} ImgClass={''}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}