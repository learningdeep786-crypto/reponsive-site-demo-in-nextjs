
import { FaMinus } from "react-icons/fa"; // Font Awesome
import { FaPlus } from "react-icons/fa"; // Font Awesome






export default function Faqs(){
    return(
        <>









        <div id="FAQ" className="flex flex-col pt-12 pr-5 pb-12 pl-5 gap-y-6 lg:flex-row lg:flex lg:pt-30 lg:pr-20 lg:pl-20 lg:pb-15 lg:gap-x-6 ">
                
            <div id="copy" className="flex flex-col lg:w-2/5">

                <p className="leading-6 font-medium  text-[14px] text-[#EB2891] lg:text-[16px] lg:leading-6">Frequently Asked Questions</p>
                <p className="font-medium text-2xl leading-9 text-[#172026] lg:text-[42px] lg:leading-14.5 lg:font-medium">Let’s clarify some of your questions</p>
                <p className="font-light leading-6  text-[16px]  text-[#36485C] lg:text-[18px] lg:leading-7 lg:font-medium ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>

            </div>

            <div id="questions" className="flex flex-col gap-y-4 lg:gap-y-4  lg:w-3/5">

                <div id="one" className="flex flex-col rounded-lg p-4 gap-y-2  bg-[#E3F1FF] lg:flex-row lg:gap-x-4 " >
                    <div id="question" className="flex flex-row  justify-center items-center gap-x-4 lg:flex-col lg:justify-start lg:items-start">
                        <p className="leading-6 text-[16px] font-medium text-[#172026]">Ut enim ad minima veniam, quis nostrum exercitationem ullam?</p>
                        <button className="sm:hidden">
                         <FaMinus /> 
                        </button>
                        <p className="font-light text-[16px] leading-6 text-[#36485C]  hidden sm:block ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>


                    </div>
                    <div className=" hidden sm:block sm:content-start">
                         <button >
                         <FaMinus /> 
                        </button>
                    </div>
                     

                    <p className="font-light text-[16px] leading-6 text-[#36485C]  sm:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

                </div>



                <div id="two" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:flex-row lg:rounded-lg lg:p-6 lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>
                
            
                <div id="three" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>

                 <div id="four" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>

                 <div id="five" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]">Ut enim ad minima veniam, quis nostrum exercitationem ullam?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>



                 <div id="six" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>




                 <div id="seven" className="flex flex-row rounded-lg  p-4 gap-x-4 bg-[#E3F1FF] lg:gap-x-4  lg:justify-between" >

                    <p className="font-medium leading-6 text-[16px] text-[#172026]">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                    <button>
                        <FaPlus /> 
                    </button>

                </div>
              



                 


            </div>




        </div>
        
        
        </>
    )
}