import './card4.css';
 import prod from '../../imgs/homepage/image10.jpg'
import ReactStars from 'react-stars';

export const Card4 = () => {
    return (
        <div className='cardCont4'>
            <div className='imgCont4'>
                 <img className='img3' src={prod} alt="" /> 
            </div>
            <h4>SLEEVE STRIPED T-SHIRT</h4>
            <ReactStars
            count={5}
             value={4.5}  
             isHalf={true}          
               size={20}       
             edit={false}    
             activeColor="#ffd700" 
             inactiveColor="#ffffff"

      />  
      <p>4.5/5</p>
        <h4 className='pr'>$130</h4> 
        <h4 className='price2'>$160</h4> 

        <div className='clas'>
         <h5>-30%</h5> 
          </div> 

        </div>
    );
}