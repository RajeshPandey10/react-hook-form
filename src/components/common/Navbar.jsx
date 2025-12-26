import { NavLink, Link } from "react-router-dom"
import navMenu from "../../constants/navMenu"



const NavBar = ({user}) => {
  const linkClasses = ({ isActive }) =>
    `relative text-black cursor-pointer transition-colors duration-200 hover:text-orange-500
     ${isActive ? "after:w-full font-bold" : "after:w-0"}
     after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-orange-500
     after:transition-all after:duration-300`

  return (
    <div className="sticky top-0 z-10">
    <div className="w-full py-3 border-b sticky top-0 z-50 bg-white">
      <div className="flex justify-between px-20 items-center font-semibold">

     
        {/* Navigation Links */}
        <div className="flex xl:gap-10 md:gap-8 gap-2">
          {
            navMenu.filter(({auth})=>(user?auth:!auth))
            .map(({label,route})=>(
                <li>
                    <NavLink to={route} className={linkClasses}>
                        {label}
                    </NavLink>
                </li>
            ))

          }
          {
            user&&(
                <li>
                    <button>log out</button>
                </li>
            )
          }
        </div>

      

      </div>
    </div>
    </div>
  )
}

export default NavBar