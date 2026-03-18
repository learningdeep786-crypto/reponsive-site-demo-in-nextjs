import Image from "next/image";
import Logo from "../../public/Logo.svg";
import User from "../../public/User.svg";
import Menu from "../../public/Menu.svg";
import bluebutton from "../../public/bluebutton.svg"
import Gradient from "../../public/Gradient.svg"
import image from "../../public/Image.svg"



import Google from "../../public/Google.svg"
import Slack from "../../public/Slack.svg"
import Trustpilot from "../../public/Trustpilot.svg"
import CNN from "../../public/CNN.svg"
import Cluth from "../../public/Clutch.svg"



const navlinks=[
        {name:'features'},
        {name:"pricing"},
        {name:"enterprise"},
        {name:"careers"}, 
];


export default function Nav() {
    return(
       <>
              
          

          <div className="w-full flex justify-between items-center px-5 py-4 
                 lg:container lg:mx-auto  cursor-pointer">

        <div className="flex justify-center items-center ">
                <Image src={Logo} alt="logo" /> 

                <div className="hidden lg:flex lg:justify-center lg:items-center pl-18.5 gap-x-14 ">

                        {navlinks.map((item,index)=>(

                        <p key={index}  className="text-[#36485C] font-medium   capitalize cursor-pointer">  {item.name}    </p>


                        ))}


                    </div>




        </div>
            
            <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                <span className="hidden lg:font-medium lg:text-[#36465C] lg:capitalize lg:block pr-9">user account</span>
                <div className="flex justify-center items-center ">
                    <Image src={User} alt="user"/>
                    <span className="hidden lg:font-medium lg:text-[#36465C] lg:pl-2.5 lg:block">Sign in</span>
                    </div>
                    <div>
                    <Image src={Menu} alt="menu button" className="lg:hidden"/>
                    </div>
                    </div>
                    </div> 
            </div>

            <div className=" pt-4 lg:pt-10">
                <div className="px-5 lg:px-70">
           

              <h1 className=" capitalize text-center leading-10 font-medium text-[#172026] text-[52px]  lg:text-[64px] lg:leading-18">start mointoring your website like the pro</h1>

              <p className="text-center pt-6 text-[#36485C] lg:leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptates dignissimos nihil eum sit quis cumque voluptatem incidunt fugiat, dolor corrupti magni inventore eaque temporibus maiores illo. Culpa, laborum dolor!
              Ex maxime placeat facilis repellat totam? Voluptatum incidunt officiis reprehenderit quis dolor nulla ipsum labore, beatae sit facilis, et natus! Iure iste nobis repellendus voluptas maxime fuga laborum maiores culpa.</p>

            <div className="flex w-full pt-8 justify-center gap-x-8">


                <button className="bg-[#4328EB] px-8 py-4 rounded-sm w-1/2  text-white lg:w-fit">
                 Try for free
                </button>

                <button className="w-1/2 text-blue-600 flex justify-center items-center gap-x-2 lg:w-fit">
                        view pricing <span><Image src={bluebutton} alt="blue" /></span>
                </button>
                

                
 
</div>

             

                </div >
          


            </div>

            <div className="relative flex h-full w-full justify-center ">

                <Image src={Gradient} alt="grad" className="min-h-125  w-full object-cover border-2 lg:h-auto  "/>

                <div className=" absolute bottom-5 w-full flex-col  items-center">

                <Image src={image} alt=" hero wali" className="-ml-2 h-77.5 sm:-mb-20 sm:h-100 lg:-mb-28 lg:h-auto lg:ml-16 xl:w-[70%]"/>

                <div className=" flex w-full  flex-col items-center lg:flex lg:flex-row  lg:justify-between lg:px-20 lg:pt-14 ">

                    <div>
                        
                        <p className="text-amber-50 text-center">Trusted by these companies</p>
                   </div>
                    <div className="grid grid-cols-3 item-center justify-center justify-items-center lg:grid-cols-5">
                        <Image src={Google}  alt=""/>
                        <Image src={Slack} alt=""/>
                        <Image src={Trustpilot} alt=""/>
                        <Image src={CNN} alt=""/>
                        <Image src={Cluth} alt=""/>

                    </div>
                </div>

                </div>

            </div>
       </>




    )
}