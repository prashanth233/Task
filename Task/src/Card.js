import React from 'react';
function Card (props) {
    return <>
 <div className="col-lg-4">
     <div className="card mb-5 mb-lg-0">
         <div className="card-body">
         <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>             {/* plan is title of card */}
         <h6 class="card-price text-center">{props.data.price}</h6>               {/*this line  is price of card */}
         <hr/>
         <ul className="fa-ul">
             {
    props.data.features.map((feature) =>{
       return <li className={feature.isEnabled ? "" : "text-muted"}>               
    <span className="fa-li">       
        </span>{feature.name}          

    </li> 
    })
   }
 </ul>
 
 <button href="#" className="btn btn-block btn-primary text-uppercase">Button</button>
         </div>
     </div>
 </div>
    </>
  }

  export default Card;
