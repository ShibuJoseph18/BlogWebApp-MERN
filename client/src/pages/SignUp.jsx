import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
            <form className="flex gap-4 flex-col">
              <div>
                <Label value="Username" />
                <TextInput 
                  type="text" 
                  placeholder="Username" 
                  id="username"
                />
              </div>
              <div>
                <Label value="Email" />
                <TextInput 
                  type="text" 
                  placeholder="Email" 
                  id="email"
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput 
                  type="text" 
                  placeholder="Password" 
                  id="password"
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type='submit'>
                  SignUp
              </Button>
            </form>
            <div className='flex gap-2 mt-4 text-sm'>
              <span>Have account?</span>
              <Link to={'/SignIn'} className='text-blue-500'>SignIn</Link>
            </div>
          </div>   
      </div>
    </div>
    
  )
}


// export default function SignUp() {
//   return (
//       <div className=' w-96 h-96 flex max-w-3xl mx-auto flex-col items-center justify-center rounded-lg mt-36 bg-slate-100'>
//         {/* right */}
          
//           <div className="m-8">
            
//             <form className="flex gap-4 flex-col">
//               <div>
//                 <Label value="Username" />
//                 <TextInput 
//                   type="text" 
//                   placeholder="Username" 
//                   id="username"
//                 />
//               </div>
//               <div>
//                 <Label value="Email" />
//                 <TextInput 
//                   type="text" 
//                   placeholder="Email" 
//                   id="email"
//                 />
//               </div>
//               <div>
//                 <Label value="Password" />
//                 <TextInput 
//                   type="text" 
//                   placeholder="Password" 
//                   id="password"
//                 />
//               </div>
//               <Button gradientDuoTone='purpleToPink' type='submit'>
//                   SignUp
//               </Button>
//             </form>
//             <div className='flex gap-2 mt-4 text-sm'>
//               <span>Have an account?</span>
//               <Link to={'/SignIn'} className='text-blue-500'>SignIn</Link>
//             </div>
//           </div>   
//       </div>
    
//   )
// }
