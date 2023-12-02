import { Events } from "../components/Events";
import { Header } from "../components/Header";
import Chrismas from '../../public/assets/Christmas-Events.jpg'

export function EventsPage(){
    return(
        
        <div>
            <Header/>
            <div className="grid grid-cols-1 m-auto w-fit mt-6 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Events image={Chrismas} tittle='Hola' description='sa' time='Friday 27, 9:00pm-12:am' badges={['hola', 'hi']}/>
            <Events image={Chrismas} tittle='Hola' description='hi' badges={['hola', 'hi']}/>
            <Events image={Chrismas} tittle='Hola' description='hi' badges={['hola', 'hi']}/>
            <Events image={Chrismas} tittle='Hola' description='hi' badges={['hola', 'hi']}/>
            </div>
        </div>
    )
}