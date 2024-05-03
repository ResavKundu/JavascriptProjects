import { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "../../store/auth";
 const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

const navigate=useNavigate();
const {storetokenInLS}=useAuth();
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response=await fetch(`http://localhost:5000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
      
    }
    
  );
  if(response.ok){
    const res_data=await response.json();
    console.log("res from server",res_data );
    setUser({username: "",
    email: "",
    phone: "",
    password: ""});
    navigate("/login");
  }
  console.log(response);
    } catch (error) {
      console.log("reg: ",error);
    }
  };

  //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols ">
              <div className="registration-image reg-img">
              <h1 className="main-heading mb-3  text-white">Registration form</h1>
                <img
                  src="https://i.pinimg.com/originals/97/d1/e3/97d1e37ae0f898e03c51d446bd522ffc.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form bg-green-900 p-3 m-2">
                
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username" className="text-orange-500">username</label>{" "}
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <br/>
                  <div>
                    <label htmlFor="email" className="text-orange-500">email</label>{" "}
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <br/>
                  <div>
                    <label htmlFor="phone" className="text-orange-500">phone</label>{" "}
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <br/>
                  <div>
                    <label htmlFor="password" className="text-orange-500">password</label>{" "}
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit text-lime-400 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;