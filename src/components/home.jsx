import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useNavigate, Link } from 'react-router-dom';
import GradientSpheres from '../colorfulSpheres/gradient_sphere';
import useForceUpdate from '../colorfulSpheres/useForceUpdate';

export default function Home() {
   const forceUpdate = useForceUpdate();
   const navigate = useNavigate();

   useEffect(() => {
      const timer = setTimeout(() => forceUpdate(), 3500);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }, [forceUpdate]); 

   return (
   <div class="container-fluid">
      <GradientSpheres/>
      <div className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
        <div className="text-center text-light p-4">
          <h1 className='display-1'>Michelle Berry</h1>
          <p>Aspiring Backend Developer, Looking for New Grad / Entry level roles</p>
          <p>Interned at Snapchat, Ecobee, Arctic Wolf</p>
          <p>University of Guelph Honours Computer Science 2024</p>
        </div>
      </div>
      {/* <div class="row">
         <div class="col-xl ">
            <Link to='/resume'>
               <img src="https://media.graphassets.com/dER0sbuT5KzqqdQ1aUyS?_gl=1*19a7rpo*_ga*MTM1ODQ0ODMzNi4xNjYzMjg1OTc0*_ga_G6FYGSYGZ4*MTY2MzMzNzk4NC4zLjAuMTY2MzMzNzk4NC42MC4wLjA." alt="" width="85%"/>
            </Link>
         </div>
         <div class="col-xl">
            <Link to="/galleries">
               <img src="https://media.graphassets.com/S46bJODRpmbCVHWYYS55?_gl=1*1j8bx7a*_ga*MTM1ODQ0ODMzNi4xNjYzMjg1OTc0*_ga_G6FYGSYGZ4*MTY2MzMzNzk4NC4zLjAuMTY2MzMzNzk4NC42MC4wLjA." alt="" width="90%"/>
            </Link>
         </div>
      </div> */}
   </div>
   );
}