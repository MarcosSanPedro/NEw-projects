import UserLogo from '../../public/assets/logo-black.svg'
import CartSVG from '../../public/assets/cart.svg'


export function Header2(){
    return(
        <div className="navbar bg-slate-400">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Park Info</a></li>
        <li><a>Attractions</a></li>
        <li>
          <a>Things to do</a>
          <ul className="p-2">
            <li><a>Restaurants</a></li>
            <li><a>Shops</a></li>
            <li><a>Rides</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">ScripPark</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><a>Park Info</a></li>
      <li><a>Attractions</a></li>
      <li>
        <details>
          <summary>Things to do</summary>
          <ul className="p-2">
            <li><a>Restaurants</a></li>
            <li><a>Shops</a></li>
            <li><a>Rides</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end gap-4 mr-4">
  <img src={UserLogo} alt="asd" className='w-7' />
  <img src={CartSVG} alt="alt"  className='w-7'  />
  <img src={UserLogo} alt="asd" className='w-7' />
    
  </div>
</div>
    )
}