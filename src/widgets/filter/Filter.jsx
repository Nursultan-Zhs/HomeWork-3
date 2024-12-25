import './filter.css'
import prod from '../../imgs/filter/WWW.png'
import Slider from 'rc-slider';


export const Filter = ({priceRange, setPrice}) => {
    return (
    < div className='filterCont'>

            <h3>Filters</h3>
            <hr  />
            <div className='clas'>
            <div className='imgCont'>
                        { <img src={prod} alt="" /> }
                    </div>
                <p className='cl'>T-shirts </p>
                <p className='cl2'>Shorts </p>
                <p className='cl3'>Shirts</p>
                <p className='cl4'>Hoodie </p>
                <p className='cl5'>Jeans </p>
                <hr className='hr'/>
            </div>

            <div className='prise'>
                <h2>Price</h2>

                 <h4>${priceRange[0]} - ${priceRange[1]}</h4> 
                <Slider 
                    range
                    min={0}
                    max={500}
                     value={priceRange}
                     onChange={setPrice}
                    allowCross={false}
                    className='custom-slider'
                />
            </div> 
            <div className='filterButton'>
                <button>Go filter</button>
            </div>
        </div>
    );
}


