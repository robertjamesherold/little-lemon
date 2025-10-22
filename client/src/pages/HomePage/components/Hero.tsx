import { useNavigate } from "react-router-dom";
import { Article } from "../../../components/global/Article";
import { Section } from "../../../components/global/Section";

import { Button } from "../../../components/ui";
import productshot_1 from '../../../assets/productshots_2.png'

export function Hero() {

  const navigate = useNavigate();

  const goToReservation = () => {
    navigate("/reserve");
  };
 return(
     <Section className="flex w-full justify-center" ariaLabel="Little Lemon Highlights">
       <Article className="articlehomepage md:rounded-2xl primary-backgroundcolor-2 p-4 text-left text-white shadow-lg backdrop-blur-sm">
             
        <div className="w-full" style={{gridArea: 'headline'}}>
          <h1 className='primary-color-1 mb-0'>Little Lemon</h1>
          <h2 className='mt-0'>Chicago</h2>
        </div>
     
        <div className="space-y-4" style={{gridArea: 'paragraph'}}> 
        <p className="text-base max-w-[40ch]">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        </div>
          <div className="max-h-[320px] flex justify-center" style={{gridArea: 'image'}}> 
          <img className='w-full overflow-hidden h-full object-cover rounded-2xl' src={productshot_1}></img>
        </div>
        <div className="flex flex-col items-start gap-3 " style={{gridArea: 'action'}}>
         
          <Button size="md" variant="primary" onClick={goToReservation} className="w-auto">
            Reserve a Table
          </Button>
          <span className="text-sm ">Open daily from 5:00 PM – 11:00 PM</span>
        </div>
    
      </Article>
      </Section>)}