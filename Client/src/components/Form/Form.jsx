import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({ login }) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
     
    const handleChange = (event) => {
        setUserData({
            ...userData,    
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        })) 
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        login(userData);
    }
   
    return(
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
            <hr/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
 
export default Form;