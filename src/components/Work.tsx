import Header from './Header';
import './custom.css'
import DivBox, {DivBoxUpdated} from './DivBox'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import projectImg from '/src/assets/projectImg.jpeg'
import project2 from '/src/assets/project2.jpeg'
import star from '/src/assets/star.png';

// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

const DivBox_Data = [
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-6  custom-col'},
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-6  custom-col'},
]
const DivBox_Data_R2 = [
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-4   custom-col'},
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-4  custom-col'},
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-4  custom-col'},
    {Name: 'Dynamic', Titel: 'Web Desing', altText: 'Site', imgSrc: projectImg, desp: 'null', 
    herf: 'yImg', updateText: 'null', herfLink: '', colClass: 'col-4  custom-col'},
]

const Work = () => {

    const DynamicText = styled.div`
        color: white;
        @media (min-width: 1500px) {
        font-size: 70px; /* Default font size for larger screens */
        }
        @media (max-width: 1500px) {
        font-size: 4vw; /* Font size for screens with a max width of 1500px or smaller */
        }
    
        font-weight: bold;
    `;

    return(
        <>
            <Header Link={'work'}/>

            <div className='container' style={{paddingTop: '70px'}}>
                <div className='row '>
                    <p className='customAnimateZoom custom-text-aling-center displayNonePC' style={{color: 'white', fontSize: '40px', fontWeight: 'bold'}} ><img src={star}/> MY WORK <img src={star}/></p>
                    <div className='col-4 custom-Streach-Grid custom-col '> 
                        <Link to="/about" style={{textDecoration: 'none'}}>
                            <DivBox 
                                nameTitel={'Dynamic'}
                                titelText={'Web Desing'}
                                altText={'Site'}
                                imgSrc={project2}
                                desp={'null'}
                                herf='yImg'
                                updateText={'null'}
                                classTaglineDiv={'card-body'}
                                classTagline={'card-text'}
                            />
                        </Link>
                    </div>
                    <div className='row col-8 custom-col custom-col '>
                        <DynamicText className='customAnimateZoom custom-text-aling-center displayNone ' ><img src={star}/> MY WORK <img src={star}/></DynamicText>
                        <div className='custom-Streach-Flex custom-padding-right custom-verticalPC custom-vertical-Mobile'>
                            {DivBox_Data.map(Data => <DivBoxUpdated
                                    nameTitel={Data.Name}
                                    titelText={Data.Titel}
                                    altText={Data.altText}
                                    imgSrc={Data.imgSrc}
                                    desp={Data.desp}
                                    herf={Data.herf}
                                    herfLink={Data.herfLink}
                                    colClass={Data.colClass}
                                    updateText={Data.updateText}
                                />)}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    {DivBox_Data_R2.map(Data => <DivBoxUpdated
                        nameTitel={Data.Name}
                        titelText={Data.Titel}
                        altText={Data.altText}
                        imgSrc={Data.imgSrc}
                        desp={Data.desp}
                        herf={Data.herf}
                        herfLink={Data.herfLink}
                        colClass={Data.colClass}
                        updateText={Data.updateText}
                    />)}
                </div>
            </div>
        </>
    );
}




//   const [show, setShow] = useState(false);

//   const animationProps = useSpring({
//     opacity: show ? 1 : 0, // Example: Fade in/out animation
//   });

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle Animation</button>
//       <animated.div style={animationProps}>
//         {/* Content to animate */}
//         <p>This content will animate.</p>
//       </animated.div>
//     </div>
//   );

// }

export default Work;