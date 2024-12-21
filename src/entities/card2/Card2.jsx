import './card2.css';
import prod from '../../imgs/homepage/image8.jpg'
import ReactStars from 'react-stars';

export const Card2 = () => {
    return (
        <div className='cardCont2'>
            <div className='imgCont2'>
                 <img className='img1' src={prod} alt="" /> 
            </div>
            <h4>SKINNY FIT JEANS</h4>
            <ReactStars
            count={4}
             value={3.5}  
             isHalf={true}          
               size={20}       
             edit={false}    
             activeColor="#ffd700" 
             inactiveColor="#ffffff"

      />  
         <p>3.5/5</p>

        <h4 className='price'>$240</h4> 
        <h4 className='price2'>$260</h4>

        <div className='class'>
         <h5>-20%</h5> 
          </div> 
        {/* <h5>-20%</h5> */}

        </div>
    );
}


