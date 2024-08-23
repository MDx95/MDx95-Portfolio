import RightSvg from '/src/assets/Right.svg';
import './custom.css'
import { Link } from 'react-router-dom';

// on Screen Animation
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// useEffect(() => {
//     window.onload = () => {
//         AOS.init({
//         duration: 800,
//         easing: 'ease-in-out',
//         once: true,
//         });
//     };
// }, []);


interface p {
    nameTitel: string;
    imgSrc: string;
    desp: string;
    altText: string;
    titelText: string;
    updateText: string;
    classTaglineDiv: string;    
    classTagline: string;
    herf: string;
}
interface k {
    nameTitel: string;
    imgSrc: string;
    desp: string;
    altText: string;
    titelText: string;
    herf: string;
}
interface L {
    nameTitel: string;
    imgSrc: string;
    desp: string;
    altText: string;
    titelText: string;
    ImgClass: string;
    herf: string;
}
interface M {
    imgSrc: string;
    altText: string;
    ImgClass: string;
}

// Div 1 ............................................................................ 
export default function DivBox(props : p){
    const nameTitel = props.nameTitel;
    const desp = props.desp;
    const updateText = props.updateText;
    const titelText = props.titelText;
    const altText = props.altText;
    const imgSrc = props.imgSrc;
    const classTaglineDiv = props.classTaglineDiv;
    const classTagline = props.classTagline;
    const herf = props.herf

    const selectedShade = herf === 'y' ? 'CustomHoverImg' : '';
    const selectedShade2 = herf === 'yImg' ? 'CustomHoverImg' : '';

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
            <div data-aos="zoom-in" className={"mb-3 custom-p-3 custom-background2 customborder CustomHoverSideImg  " + selectedShade}
             style={{}}>
                
                { imgSrc !== "null" ? (<img data-aos="zoom-in" className={'card-img-top  customborder_2 ' + selectedShade2} src={imgSrc} alt={altText} />) : "" }
                <div className='custom-horizontal-center'>

                    <div className={classTaglineDiv + ""}>
                        { titelText !== "null" ? (<small className="custom-muted-text ">{titelText}</small>) : "" }
                        { nameTitel !== "null" ? (<h5 className="card-title ">{nameTitel}</h5>) : "" }
                        { desp !== "null" ? (<p className={classTagline}>{desp}</p>) : "" }
                        { updateText !== "null" ? (<p className="card-text "><small className="">{updateText}</small></p>) : "" }
                    </div>
                    {/* Side Herf Img .............. Div 1 ...............*/}
                    { imgSrc !== "null" && (herf === 'y' || herf === 'yImg') ? (<div data-aos="zoom-in" className='custom-text-aling-right '>
                            <img className='herfeImg' src={RightSvg} alt={props.altText} />
                    </div>) : '' }

                </div>
            </div>
        </>
    );
}

// Div 2 ............................................................................ 
export function DivBox2(props: k){
    const nameTitel = props.nameTitel;
    const desp = props.desp;
    const altText = props.altText;
    const imgSrc = props.imgSrc;
    const titelText = props.titelText;
    const herf = props.herf

    const selectedShade = herf === 'y' ? 'CustomHoverImg' : '';

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
            <div data-aos="zoom-in" className={"customborder row mb-3 p-5 custom-background2 CustomHoverSideImg  " + selectedShade}>
                <div data-aos="zoom-in" className="col-5 custom-col-5 ">
                    <img className="card-img-top custom-borderImg customImgback" src={imgSrc} alt={altText} />
                </div>

                <div data-aos="zoom-in" className="custom-vertical-center col ">
                    <small className="custom-muted-text ">{titelText}</small>
                    <h3 className="card-title ">{nameTitel}</h3>
                    <p className="card-text custom-muted-text ">{desp}</p>
                    {/* Side Herf Img .............. Div 2 ...............*/}
                    <div className='custom-text-aling-right '>
                        <img className='herfeImg' src={RightSvg} alt={props.altText} />
                    </div>
                </div>
        </div>
        </>
    );
}

// Div 3 ............................................................................ 
export function DivImgTex(props: L){

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
            <div data-aos="zoom-in" className='CustomHoverSideImg '>
                {props.imgSrc !== "null" && props.imgSrc !== "nullll"  ? <img className={props.ImgClass} src={props.imgSrc} alt={props.altText} /> : ''}
                <div className="custom-horizontal-center col">

                    <div className='card-body col'>
                        { props.titelText !== "null" ? (<small className="custom-muted-text ">{props.titelText}</small>) : "" }
                        { props.nameTitel !== "null" ? (<h5 className="card-title">{props.nameTitel}</h5>) : "" }
                        { props.desp !== "null" ? (<p className='custom-muted-text'>{props.desp}</p>) : "" }
                    </div>
                    {/* Side Herf Img .............. Div 3 ...............*/}
                    { props.imgSrc !== "null" && props.herf === 'y'? (<div className='custom-text-aling-right'>
                            <img className='herfeImg' src={RightSvg} alt={props.altText} />
                    </div>) : '' }
                
                </div>
            </div>
        </>
    );
}

// Image Div ............................................................................ 

export function Image(props: M){
    return(
        <img className={props.ImgClass} src={props.imgSrc} alt={props.altText} />
    );
}

// 3 Heading with descreption...........................................................

interface KL{
    nameTitel_1: string
    desp_1: string
    nameTitel_2: string
    desp_2: string
    nameTitel_3: string
    desp_3: string
    herf: string
}

export function DivThreeHeading(props: KL){

    return(
        <>
            <div className="mb-3 custom-p-3 custom-background2 customborder CustomHoverSideImg" style={{}}>
                <div className='custom-vertical-center'>

                    <div className={""}>
                        { props.desp_1 !== "null" ? (<p className={'custom-muted-text'}>{props.desp_1}</p>) : "" }
                        { props.nameTitel_1 !== "null" ? (<h5 className="card-title">{props.nameTitel_1}</h5>) : "" }
                    </div>
                    <div className={""}>
                        { props.nameTitel_2 !== "null" ? (<h5 className="card-title">{props.nameTitel_2}</h5>) : "" }
                        { props.desp_2 !== "null" ? (<p className={'custom-muted-text'}>{props.desp_2}</p>) : "" }
                    </div>
                    <div className={""}>
                        { props.nameTitel_3 !== "null" ? (<h5 className="card-title">{props.nameTitel_3}</h5>) : "" }
                        { props.desp_3 !== "null" ? (<p className={'custom-muted-text'}>{props.desp_3}</p>) : "" }
                    </div>

                    {/* Side Herf Img .............. Div 1 ...............*/}
                    { props.herf === "y" ? (<div className='custom-text-aling-right'>
                            <img className='herfeImg' src={RightSvg} alt={'sideImg'} />
                    </div>) : '' }

                </div>
            </div>
        </>
    );
}

interface DivHeading{
    desp: string
    nameTitel: string
    updateText: string
}

function HeadingDiv(props: DivHeading){
    return(
        <>
            <div className={"p-3"}>
                { props.desp !== "null" ? (<p className={'custom-muted-text '} style={{marginBottom: '0px'}}>{props.desp}</p>) : "" }
                { props.nameTitel !== "null" ? (<h4 className="card-title ">{props.nameTitel}</h4>) : "" }
                { props.updateText !== "null" ? (<p className="card-text"><small className="custom-muted-text">{props.updateText}</small></p>) : ''}
            </div>
        </>
    );
}

interface LKL {
    array: { nameTitel: string; desp: string; updateText: string;}[];
    herf: string;
}

export function DivHeading(props: LKL){

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
            <div data-aos="zoom-in" className="mb-3 custom-p-3 custom-background2 customborder CustomHoverSideImg " style={{}}>
                <div className='custom-vertical-center'>

                    {props.array.map(Nam => (<HeadingDiv nameTitel={Nam.nameTitel} desp={Nam.desp} updateText={Nam.updateText}/>))}

                    {/* Side Herf Img .............. Div 1 ...............*/}
                    {/* { props.herf === "y" ? (<div className='custom-text-aling-right'>
                            <img className='herfeImg' src={RightSvg} alt={'sideImg'} />
                    </div>) : '' } */}

                </div>
            </div>
        </>
    );
}


// DivBoxUpdated  ............................................................................ 

interface kk {
    nameTitel: string;
    imgSrc: string;
    desp: string;
    altText: string;
    titelText: string;
    updateText: string;
    herf: string;
    herfLink: string;
    colClass: string;

}

export function DivBoxUpdated(props : kk){
    const nameTitel = props.nameTitel;
    const desp = props.desp;
    const updateText = props.updateText;
    const titelText = props.titelText;
    const altText = props.altText;
    const imgSrc = props.imgSrc;
    const herf = props.herf;
    const herfLink = props.herfLink;
    const colClass = props.colClass;

    const selectedShade = herf === 'y' ? 'CustomHoverImg' : '';
    const selectedShade2 = herf === 'yImg' ? 'CustomHoverImg' : '';

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
        <div className={colClass}>
            <Link to={herfLink + " "} style={{textDecoration: 'none'}}>
                
                    <div data-aos="zoom-in" className={"mb-3 custom-p-3 custom-background2 customborder CustomHoverSideImg  " + selectedShade}
                    style={{}}>
                        
                        { imgSrc !== "null" ? (<img data-aos="zoom-in" className={'card-img-top  customborder_2 ' + selectedShade2} src={imgSrc} alt={altText} />) : "" }
                        <div className='custom-horizontal-center'>

                            <div className={"card-body"}>
                                { titelText !== "null" ? (<small className="custom-muted-text ">{titelText}</small>) : "" }
                                { nameTitel !== "null" ? (<h5 className="card-title ">{nameTitel}</h5>) : "" }
                                { desp !== "null" ? (<p className={"card-text"}>{desp}</p>) : "" }
                                { updateText !== "null" ? (<p className="card-text "><small className="">{updateText}</small></p>) : "" }
                            </div>
                            {/* Side Herf Img .............. Div 1 ...............*/}
                            { imgSrc !== "null" && (herf === 'y' || herf === 'yImg') ? (<div data-aos="zoom-in" className='custom-text-aling-right '>
                                    <img className='herfeImg' src={RightSvg} alt={props.altText} />
                            </div>) : '' }
                        </div>
                    </div>
                
            </Link>
            </div>
        </>
    );
}