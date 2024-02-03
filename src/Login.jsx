import React from 'react';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className="login template  d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
            <div className=' 40-w  p-5 rounded  bg-white'> 
                <form>
                    
                    <h3>SignIn</h3>
                    <div className='mb-2'>
                        <label htmlFor='email' >Email:-</label>
                        <input type="email" placeholder='Enter Email here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Password:-</label>
                        <input type="password" placeholder='Enter Password here..' className='form-control' required />
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className='custom-control custom-checkbox ' id="check" required />
                        <label htmlFor='check' className='custom-input-label ms-2 '>Remember me</label>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>SignIn</button>
                    </div>
                    <p className='text-end mt-2'>
                    <Link to="/SignUp" className='ms-2 '>Forgot Password</Link> OR <Link to="/SignUp" className='ms-2 '>SignUp</Link> 
                        </p>
                </form>
            </div>
        </div>
    )
}


export default Login
