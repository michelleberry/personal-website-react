import React from 'react';
import{Link} from 'react-router-dom';

export default function Home() {
   return (
   <div class="container-fluid">
      <div class="row">
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
      </div>
   </div>
   );
}