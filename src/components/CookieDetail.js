import React,{useState} from 'react';

const CookieDetail =({cookie}) => {
    const [select , setSelect] = useState("");
    
   return(
     <div className="productSelection">
          <h1 className="productSelection p"> {cookie.name}</h1>
          <p className="productSelection p">{cookie.price}</p>
          <p className="productSelection p">{cookie.description}</p>
          <img className="productSelection img" src={cookie.image}/>
          
          

     </div>

   );
        
    
};

export default CookieDetail
