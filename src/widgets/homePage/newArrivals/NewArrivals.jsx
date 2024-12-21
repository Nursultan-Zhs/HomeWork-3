import { Card } from '../../../entities';
import { Card2 } from '../../../entities';
import { Card3 } from '../../../entities';
import { Card4 } from '../../../entities';




import './newArrivals.css'

export const NewArrivals = () => {
    return (
        <div className='arrivalsCont'>
            <div className='container'>
               <h2>NEW ARRIVALS</h2>
               <br />
               <div className='flexItem'>
                    <Card /> 
                    <Card2 /> 
                    <Card3 /> 
                    <Card4 />
               </div>
               <div className='button'>
                   <button>View All</button>
               </div>
        

            </div>
        </div>
    );
}

 
