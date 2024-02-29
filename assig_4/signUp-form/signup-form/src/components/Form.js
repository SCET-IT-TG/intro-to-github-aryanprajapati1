import React,{useState} from 'react'

export default function Form() {

    const [formData , setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: '',
        dob: '',
        gender: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(FormData);
    }

    const handleChange = (e) =>{
        setFormData({
            ...FormData,[e.target.name]: e.target.value,
        });
    }

    const isFormValid = () => {
        return(
            formData.name &&
            formData.mobile &&
            formData.email &&
            formData.address &&
            formData.dob &&
            formData.gender &&
            formData.username &&
            formData.password &&
            formData.password === formData.confirmPassword
        );
    };
  return (
    <div className="container text-center ">
         <form onSubmit={handleSubmit}>
            <legend>Sign Up Form</legend>
            <input name="name" placeholder="Name" onChange={handleChange} /><br />
            <input name="mobile" placeholder="Mobile" type="tel" onChange={handleChange} /><br />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} /><br />
            <input name="address" placeholder="Address" onChange={handleChange} /><br />
            <input name="dob" placeholder="Date of Birth" type="date" onChange={handleChange} /><br />
            <select name="gender" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br />
            <input name="username" placeholder="Username" type='text' onChange={handleChange} /><br />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} /><br />
            <input name="confirmPassword" placeholder="Confirm Password" type="password" onChange={handleChange} /><br />
            <button type="submit" id='submitButton' disabled={!isFormValid()}>Submit</button>
            <button type="reset" >Reset</button>
      </form>
    </div>
  )
}
