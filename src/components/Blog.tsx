import Header from "./Header";
import './custom.css'
import {  DivImgTex } from "./DivBox";
import star from '/src/assets/star.png';
import IconGetStarted from '/src/assets/icon2.png'
import styled from 'styled-components';


interface kkkkk{
    srcLink: string;
}

function Image(props: kkkkk){
    return(
        <div className="col-6" style={{paddingTop: '40px'}}><img className='customborder' src={props.srcLink} alt="" width="100%" height="100%"/></div>
    );
}


export default function Blog() {

    const LoopImg = [
        {srcLink: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'}, {srcLink: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'}, {srcLink: 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp'}
    ];
    
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
        <Header Link={'blog'}/>

{/* Row 1........................................................................ */}
            <div className='container' style={{paddingTop: '40px'}}>
                <div className="row">
                    {/* <small className="custom-muted-text ">{'asd'  }</small> */}
                    <p className='customAnimateZoom custom-text-aling-center displayNonePC' style={{color: 'white', fontSize: '40px', fontWeight: 'bold'}} ><img src={star}/> MY WORK <img src={star}/></p>
                    <DynamicText className='customAnimateZoom custom-text-aling-left displayNone ' ><img src={star}/> MY WORK <img src={star}/></DynamicText>
                </div>
            </div>

{/* IMG ........................................................................ */}           
            <img style={{marginTop: '40px'}} src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="Girl in a jacket" width="100%" height="500px"/>
            

{/* Row 2........................................................................ */}            
            <div className='container' style={{paddingTop: '40px'}}>
                <div className=" custom-text-aling-center custom-background2 customborder">
                    <img  src={IconGetStarted} style={{width:'40px'}}/>
                    <div className="row" style={{marginTop: '-40px'}}> 
                        <div className='col custom-Streach-Grid custom-text-aling-left customborder mb-5 p-3 custom-background2' style={{marginLeft: '40px'}}>
                            <DivImgTex nameTitel={'Muhammad Danish'} titelText={'null'}altText={'null'} imgSrc={'nullll'} herf='n'
                                desp={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'} ImgClass={''}/>
                                </div>
                        <div className="col-1 custom-text-aling-center"></div>
                        {/* <div className='col custom-Streach-Grid custom-text-aling-left' style={{ display: 'flex', flexDirection:'column-reverse' }}><DivHeading array={
                            [{nameTitel: 'Education', desp: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.', updateText: 'null'}]
                            } herf='n'/></div> */}
                        <div className='col custom-Streach-Grid custom-text-aling-left customborder mb-5 p-3 custom-background2' style={{marginRight: '40px'}}>
                            <DivImgTex nameTitel={'Muhammad Danish'} titelText={'null'}altText={'null'} imgSrc={'nullll'} herf='n'
                                desp={'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'} ImgClass={''}/>
                                </div>
                    </div>
                </div>


{/* Row 3.....................................Images Lagrge and other 2 in one Rows................................... */}
                <div className='' style={{paddingTop: '40px'}}>
                    <img className='customborder' src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp" alt="" width="100%" height="500px"/>
                    <div className='row' >    
                        {LoopImg.map(Links => <Image srcLink={Links.srcLink}/>)}                        {/* Array Value */}
                    </div>
                </div>

{/* Row 4........................................................................ */}           
                <div>
                    
                </div>
            
            </div>
        </>
    );
}