import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMesssage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value.trim() });
  }
  
  async function handleSubmit(event) {
    event.preventDefault();

    if(!formData.username || !formData.password || !formData.email) {
      return setErrorMessage("All fields are required");
    }

    try {

      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json()

      if(res.ok) {
        setLoading(false);
        navigate('/SignIn');
      }
    } catch(error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }
  return (
    <div className='min-h-screen mt-40'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
          <div className="flex-1">
          <Link to={"/"} className='text-4xl font-bold dark:text-white'>
              <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg' >Shibu</span> blogs
          </Link>
            <p className="text-sm mt-5"> Signup with your email and password or go for thr google auth</p>
          </div>
        {/* right */}
          <div className="flex-1">
            <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
              <div>
                <Label value="Username" />
                <TextInput 
                  type="text" 
                  placeholder="Username" 
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Email" />
                <TextInput 
                  type="email" 
                  placeholder="Email" 
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput 
                  type="password" 
                  placeholder="Password" 
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                  {
                    loading ? (
                      <>
                        <Spinner size='sm' />
                        <span className="pl-3">Loading...</span>
                      </>
                    ): 'Sign Up'
                  }
              </Button>
            </form>
            <div className='flex gap-2 mt-5 text-sm'>
              <span>Have account?</span>
              <Link to={'/SignIn'} className='text-blue-500'>SignIn</Link>
            </div>
          </div>   
      </div>
      {
        errorMesssage && 
        <Alert className='mt-5' color='failure'>
          { errorMesssage}
        </Alert>
      }
    </div>
    
  )
}
