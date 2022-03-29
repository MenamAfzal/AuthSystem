import React from 'react';
import Navbar from '../components/Navbar'




 const Layout = (props)=>(
     <div>
         <Navbar/>
         {props.children}
         {/* #implementing logic to stay login after refreshing you stayed logged in  */}
     </div>

 );

 export default Layout;