import './card.css';
import prod from '../../imgs/homepage/Frame32.jpg'
import ReactStars from 'react-stars';

export const Card = () => {
    return (
        <div className='cardCont'>
            <div className='imgCont'>
                { <img src={prod} alt="" /> }
            </div>
            <h4>T-SHIRT WITH TAPE DETAILS</h4>
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

        <h4 className='class1'>$120</h4> 

        </div>
    );
}


