import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
 const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
 const {storetokenInLS}=useAuth();
  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response=await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });
    console.log(response);
    if(response.ok){

      const res_data=await response.json();
      console.log("res from server",res_data );
      localStorage.setItem("token",res_data.token);
      
      alert("Login Successsful");
      setUser({email:"",password:""});
      navigate("/");
    }else{
      alert("Invalid Credential");
      console.log("Invalid Cradential");
    }
    
    } catch (error) {
      console.log("reg: ",error);
    }
    
    
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols flex flex-nowrap">
              <div className="registration-image reg-img">
                <img
                  src="https://t4.ftcdn.net/jpg/01/22/71/95/360_F_122719584_A863mvJEcEAnqmGQ4ky6RbXEhsHKw95x.jpg"
                  alt="a nurse with a cute look"
                  width="500"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form bg-pink-800 m-2 p-3">
                <h1 className="main-heading mb-3 text-emerald-400">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="text-emerald-400">email</label>{" "}
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
                    <label htmlFor="password" className="text-emerald-400">password</label>{" "}
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

export default Login;