import React from 'react'
import { useParams,useLocation} from 'react-router-dom' //userHistory

function User() {
    const {userid, passWord} = useParams();
    const location=useLocation();
    // const history=useHistory()
    const click=()=>{
      window.alert("Hi Resav!!")
;    }
  return (
    <>
      <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}{passWord}</div>
      <h3>My current path is {location.pathname}</h3>
      <br/>
      {location.pathname === `/user/resav/kundu` ?
        <button onClick={click}>Click me</button> : null
      }
    </>
  )
}

export default User