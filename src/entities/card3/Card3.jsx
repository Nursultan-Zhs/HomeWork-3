import './card3.css';
 import prod from '../../imgs/homepage/image9.jpg'
import ReactStars from 'react-stars';

export const Card3 = () => {
    return (
        <div className='cardCont3'>
            <div className='imgCont3'>
                 <img className='img2' src={prod} alt="" /> 
            </div>
            <h4>CHECKERED SHIRT</h4>
            <ReactStars
            count={5}
             value={4.5}  
             isHalf={true}          
               size={20}       
             edit={false}    
             activeColor="#ffd700" 
             inactiveColor="#ffffff"

      />  
      <p className='class2'>4.5/5</p>
        <h4 className='div1'>$180</h4> 
        

        </div>
    );
}