
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";
function Register() {
  const {register,handleSubmit,formState:{ errors }} = useForm({ resolver : zodResolver(registerschema)
  });
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>TIMELOCK</h1>
        <p>Create your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
         <input type="name" placeholder="Enter your name" {...register("/name")}/>
         <p>{errors.name?.message}</p>
          <input type="email" placeholder="Enter your email" {...register("email")} />
          <p>{errors.email?.message}</p>
          <input type="password" placeholder="Create password" {...register("password")} />
          <p>{errors.password?.message}</p>
          <button type="submit">Register</button>
        </form>
          <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
}
export default Register;
