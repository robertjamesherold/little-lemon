import { useNavigate } from "react-router-dom";
import { Article } from "../../../components/global/Article";
import { Section } from "../../../components/global/Section";

import { Button } from "../../../components/ui";
import bg from '../../../assets/bg_2.jpeg'
import bg3 from '../../../assets/bg_3.jpeg'

export function Hero() {

  const navigate = useNavigate();

  const goToReservation = () => {
    navigate("/reserve");
  };
 return(
     <Section className="flex w-full justify-center" ariaLabel="Little Lemon Highlights">
     
       <Article className="articlehomepage md:rounded-2xl primary-backgroundcolor-2 md:p-4 text-left text-white shadow-lg backdrop-blur-sm">
        <img className='absolute w-full h-full md:rounded-2xl z-0 opacity-25 mix-blend-color-burn' src={bg3} />        
        <div className="w-full px-4  pt-8 md:pt-4 z-5" style={{gridArea: 'headline'}}>
          <h1 className='primary-color-1 mb-0'>Little Lemon</h1>
          <h2 className='mt-0'>Chicago</h2>
        </div>
     
        <div className="px-4 pt-0  z-5" style={{gridArea: 'paragraph'}}> 
        <p className="text-base max-w-[40ch]">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        </div>
          <div className="max-h-[350px] shadow-lg z-5 flex justify-center touch-none select-none" style={{gridArea: 'image'}}> 
          <img className='w-full overflow-hidden h-full object-cover md:rounded-2xl' draggable={false} src={bg}></img>
        </div>
        <div className="flex  z-5 flex-col items-start gap-3 pb-8 md:pb-4 px-4" style={{gridArea: 'action'}}>
         
          <Button size="md" variant="primary" onClick={goToReservation} className="w-auto">
            Reserve a Table
          </Button>
          <span className="text-sm ">Open daily from 5:00 PM – 11:00 PM</span>
        </div>
    
      </Article>
      </Section>)}