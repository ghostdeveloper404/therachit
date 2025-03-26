import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div id={item.id} key={Math.random()}
        className="w-[20rem]  max-lg:w-full h-full px-6 
        bg-neutral-800 border border-neutral-600 rounded-[2rem]
         lg:w-[80rem]  even:py-14 odd:py-8 odd:my-4
         
            [&>h4]:first:text-purple-400
           ">
            <h4  className="h4 text-4xl   font-bold mb-4">
                {item.title}
            </h4>
            <p className="body-2 min-h-[4rem] mb-3 text-neutral-100/50  "> {item.description} </p>
        
           <div  className="flex item-center h-[5.5rem] mb-6 ">
             {item.price && (
                <>
                <div  className="h3 text-5xl">₹</div>
                <div  className="text-[5.5rem] leading-none font-bold "> {item.price} </div>
                </>
             )}
           </div>
           <Button key={Math.random()} white={!!item.price} className="w-full mb-6 " href={item.link} > 
            {item.price ? "Get started": "Contact us"}
             </Button>
              
              <ul>
               { item.features.map((feature,index) => (
                 <li   className="flex items-start py-5 border-t border-neutral-600" key={index}>
                      <img   src={check} width={24} height={24} alt="check" />
                     <p  className="body-2 ml-4">{feature}</p>
                 </li>
               ))}
              </ul>

        </div>
      ))}
    </div>
  )
}

export default PricingList
