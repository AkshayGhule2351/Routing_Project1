import React from 'react'

const SignUp = () => {
  return (
     
    <div className=" d-flex justify-content-center align-items-center 100-w vh-100 bg-success" >
    <div className=' 40-w  p-5 rounded  bg-light'> 
        <form>
            <h3>SignUp</h3>
            <div className='mb-2'>
                <label htmlFor='name'  >First Name:-</label>
                <input type="input" placeholder='Enter First Name here..' className='form-control' required />
            </div>
            <div className='mb-2'>
                <label htmlFor='name'>Last Name:-</label>
                <input type="input" placeholder='Enter Last Name here..' className='form-control'required  />
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email:-</label>
                <input type="email" placeholder='Enter Email here..' className='form-control' required />
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Password:-</label>
                <input type="password" placeholder='Enter Password here..' className='form-control'required  />
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox ' id="check" required  />
                <label htmlFor='check' className='custom-input-label ms-2 '><a href="/information">Accept term's and Condition</a></label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>SignUP</button>
            </div>
           
        </form>
    </div>
</div>
  )
}

export default SignUp
