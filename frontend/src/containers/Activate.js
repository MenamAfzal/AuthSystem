import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { verify } from '../actions/auth';


 const Activate = ({verify})=>{
    const { uid1, token1 } = useParams();
    const [verified, setVerified] = useState(false)
    const verify_account = e => {
         const uid = uid1;
         const token = token1;
         verify(uid ,token);
         setVerified(true);
     };

    if (verified) {
        return<Navigate to = '/'/>
    }

     return (
         <div className='container mt-5'>
             <div 
             className='d-flex flex-column justify-content-center aligh-items-center'
             style={{ marginTop: '200px'}}>
                 <h1>Verify Your Account</h1>
                 <button
                    onClick={verify_account}
                    style ={{marginTop: '50px'}}
                    type = 'button'
                    className= 'btn btn-primary'
                    >
                     Verify
                 </button>


             </div>
         </div>
     )


 };
// The connect function takes another function as an argument: 
//mapStateToProps. 
//mapStateToProps determines what state from our store we want to pull into our component.


 export default connect(null , { verify }) (Activate);