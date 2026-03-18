import { IoIosCheckmark, IoMdArrowForward, IoMdCheckmark } from "react-icons/io"; // Ionicons

export default function Cta(){
    return(
        <>
        

         <div id="cta" className=" bg-linear-to-br from-pink-500 via-red-500 to-yellow-500 flex flex-col pt-12 pr-5 pb-12 pl-5 mt-12 mr-2 ml-2 mb-12 rounded-2xl gap-y-6 items-center justify-center lg:flex-col lg:gap-y-10">
              <p className="top-14 left-8 font-medium text-4xl leading-10 text-center text-[#FFFFFF] lg:text-6xl lg:leading-16  lg:left-81 lg:top-22 lg:font-medium  ">Monitor your website like a pro</p>
              <p className="text-[#FFFFFF] left-8 top-40 font-light text-lg leading-4  text-center lg:top-66 lg:left-81  lg:text-[18px] lg:leading-7"> Join over 800+ happy site owners boosting productivity and efficiency!</p>
              

              <div className="lg:flex lg:flex-row lg:top-87 lg:left-115 lg:gap-x-10">      
                  <div id="button" className="top-64 left-24 flex flex-col gap-y-8">



                    <button className="rounded-sm pt-4 pr-8 pb-4 pl-8 bg-[#FFFF] text-[#EB2891]">Try fro free</button>



                   </div>
                <div id="blink" className="flex flex-row gap-x-1.5 items-center justify-center">

                   <p className="text-[#FFFFFF] text-[18px]  font-medium  leading-6 text-center"> <span> Contact Sales </span>  </p>
                    <p className="text-red-600 bg-white rounded-[50%] "><span><IoMdArrowForward/></span></p>
                  </div>


                  </div>


           
                   

        </div>



        
        
        </>
    )
}