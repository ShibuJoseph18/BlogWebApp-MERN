import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link , useLocation} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {

  const path = useLocation().pathname;
  // console.log(useLocation());
  return (
    <Navbar className="border-b-2">
        <Link to={"/"} className='whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg' >Shibu</span> blogs
        </Link>
        <form >
          <TextInput
            type="text"
            placeholder="Search"
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch/> 
        </Button>
        <div className='flex gap-2 md:order-2' >
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button> 
          <Link to={"/SignIn"}>
            <Button gradientDuoTone="purpleToBlue" pill>Sign-IN </Button> 
          </Link>
          <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/About'} as={'div'}>
            <Link to="/About">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/Project'} as={'div'}>
            <Link to="/Project">Project</Link>
          </Navbar.Link>
        </Navbar.Collapse> 
    </Navbar>
  )
}

