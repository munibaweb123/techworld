

import ContactForm from "../components/contact/ContactForm";
import Greet from "../components/Greet";


const contact = ()=>{
    return(
        <div className="flex-col justify-center items-center h-screen text-center space-y-4 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold">Contact Us</h1>
           <Greet name={"Everyone"}/>
            <ContactForm/>
            
           
        </div>
    )
}
export default contact;