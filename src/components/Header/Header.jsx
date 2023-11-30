import { Dropdown } from "./Dropdown";
import UserLogo from '../../../public/assets/logo-black.svg'
import LogoSVG  from '../../../public/assets/logo-no-background.svg';
import CartSVG from '../../../public/assets/cart.svg'

export function Header(){
    const headerItems = [
        {tittle: 'Park Info', dropdownItems: ['pi option1' ,'pi option1']},
        {tittle: 'Attraction s', dropdownItems: ['att option1' ,' att option1']},
        {tittle: 'Events', dropdownItems: ['ev option 1', 'ev option 2']}    
    ];
    
        return(
            <div className="text-white sticky  w-screen top-0 z-10 bg-gray-800 ">
                <section className=" max-w-4xl mx-auto p 4 flex justify-between items-center">
                   <div className="w-full">


                <div className="flex justify-between  md:hidden w-screen ">
                <h2 className="text-3xl w-3/4 whitespace-nowrap gap-10 flex items-center">
                <img src={LogoSVG} alt="alt" className="w-20"/>
                <span>Script Park</span>
                </h2>
                
                <div className="flex items-center justify-end gap-5 mr-5">
                <img src={UserLogo} alt="asd" className="w-8" />
                <img src={CartSVG} alt="alt" className="w-8"/>
                <button className="text-3xl focus:outline-none mr-8">
                       &#9776;
                    </button>
                </div>
                
                    </div>

                    <nav className="hidden  md:flex gap-12 lg:gap-20">
                    <img src={LogoSVG} alt="alt" className="w-16"/>
                    {headerItems.map((element, index) =>(
                 <Dropdown  key={index} tittle={element.tittle} dropdownItems={element.dropdownItems}/>
            ))
}
<div className="flex items-center gap-5 mr-5 lg: ml-16">
                <img src={UserLogo} alt="asd" className="h-8" />
                <img src={UserLogo} alt="asd" className="h-8" />
                <img src={CartSVG} alt="alt" className="h-8"/>
                
                
                </div>



                    </nav>
                
                </div>


                </section>
                
                <div className="hidden sm:flex ml-5 gap-10 ">                
                
               
</div>
       

                <div>
                    
                </div>
        </div>
    )
}