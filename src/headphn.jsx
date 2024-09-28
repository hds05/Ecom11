import './App.css';
import { Fragment } from 'react';
function Headphn(props) {
    return (

        < Fragment >
            <div className='headphn' >

                {/* <div className='img'>
                    <img src="head1.jpg" alt="" />
                </div> */}
                <div className="img">
                    <img src="head1.jpg" width={130} alt="" />
                </div>
                <div className='text'>

                    <h3>product name:   </h3>
                    <p>$19.99   </p>
                    <button className='btn1'><a href="https://www.amazon.in/Bose-QuietComfort-Wireless-Cancelling-Headphones/dp/B0CCZ1L489/ref=asc_df_B0CCZ1L489/?tag=googleshopdes-21&linkCode=df0&hvadid=686112335922&hvpos=&hvnetw=g&hvrand=6189594746510978212&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9302627&hvtargid=pla-2204571204179&mcid=0a9f65f98b633b6ab7a0a1da651f3c5b&gad_source=1&th=1" className='atag'>Shop Now!!</a></button>
                </div>

            </div>

        </Fragment >

    );
}

export default Headphn;
