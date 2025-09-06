'use client'
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { useState } from "react";

export default function Home() {
  return (
    <div className="bg-gray-900">
    <nav className="flex justify-center items-center relative" >
      <div className="border border-gray-600 rounded-full flex gap-4 backdrop-blur-lg  p-[1px] fixed top-5 z-[9999]">
        <a href="#" className="px-4 py-2 text-neutral-200">Home</a>
        <a href="#" className="px-4 py-2 text-neutral-200">Project</a>
        <a href="#" className="px-4 py-2 text-neutral-200">About</a>
        <a href="#" className="px-4 py-2 text-black bg-neutral-200 rounded-full">contact</a>
      </div>
    </nav>

     <section className="min-h-[700px] max-w-6xl mx-auto  grid place-content-center text-white">
      <div className="flex flex-col items-center">
        <Image src="/vec.png"alt="e" width={90} height={30} className="h-30"/>
        <span className="leading-none border border-gray-600 rounded px-3 py-1 flex items-center gap-2 text-neutral-200">
          <div className="h-[10px] w-[10px] bg-green-400 rounded-full"></div>
          Available for new project
        </span>
      </div>
           
      <div className="text-center my-5 space-y-3">
        <h1 className="text-center text-5xl font-bold bg-gradient-to-t from-green-700 to-green-50 bg-clip-text text-transparent">
          Building Exceptional
          <br />User Experience
        </h1>
        <p className="max-w-md text-neutral-400">Creating an exceptional user experience means designing products that are simple, intuitive, and enjoyable to use. It’s about understanding user needs, removing unnecessary complexity, and ensuring every interaction feels seamless. A great user experience not only solves problems but also leaves users feeling satisfied, valued, and engaged.</p>

       <div className="">
        <button className="text-neutral-200 border border-neutral-400 py-1 text-sm mr-1 px-3 rounded">Explore my work</button>
        <button className="text-neutral-900 border text-sm border-neutral-900 bg-white py-1 ml-1 px-3 rounded">
          <span>👋 </span>
          Let's connect
        </button>
       </div>


      </div>
      </section>

      
      <section className="max-w-6xl px-4 mx-auto ">
         <div className="space-y-3">
       <h5 className="text-sm bg-gradient-to-l from-emerald-300 to-cyan-400 text-center bg-clip-text text-transparent">REAL-WORLD RESULTS</h5>
       <h1 className="text-center text-5xl font-bold ">Featured Projects</h1>
       <p className="text-sm text-neutral-300 line-clamp-3 text-center">See how I transform concept into engaging digital experience </p>
        </div>
       
       <main className="grid place-content-center gap-14 mt-10">
            
        <div className="flex flex-col md:flex-row md:gap-5 border bg-gray-800 rounded-2xl px-8 pt-8 md:pb-8 overflow-hidden max-w-[300px] md:max-w-[700px]"
>
          <div className="space-y-5 ">  
            <div className="border-b border-gray-600 pb-3">
              <h3 className="bg-gradient-to-l from-emerald-300 to-cyan-400  bg-clip-text text-transparent font-bold">New</h3>
              <h1 className="text-4xl uppercase font-bold ">Ecommerce Pro</h1>
          
            </div>

                <ul className="text-neutral-500">
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck  className="text-neutral-400"/>Fully responsive</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>E-commerce functionality</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>AI integartion</li>
                  </ul>
                  <a href="#"  className="px-4 py-2 md:w-auto border rounded-lg  flex justify-center items-center bg-white  text-neutral-800">Visit Live Site</a> 
          </div>
                  <Image src="/ecom.webp" height={450} width={550}  className="mt-5 -mb-10 h-[150px] rounded-t-2xl object-fill md:hidden" alt="" />

                  <Image src="/ecom.webp"  height={450} width={450} className="hidden md:block  md:-mr-60 md:-mb-10" alt="" />
        </div> 

        <div className="flex flex-col md:flex-row md:gap-5 border bg-gray-800 rounded-2xl px-8 pt-8 md:pb-8 overflow-hidden max-w-[300px] md:max-w-[700px]"
>
          <div className="space-y-5 ">
            <div className="border-b border-gray-600 pb-3">
              <h3 className="bg-gradient-to-l from-emerald-300 to-cyan-400  bg-clip-text text-transparent font-bold">New</h3>
              <h1 className="text-4xl uppercase font-bold ">Job portal</h1>
          
            </div>

                <ul className="text-neutral-500">
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck  className="text-neutral-400"/>Fully responsive</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>E-commerce functionality</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>AI integartion</li>
                  </ul>
                  <a href="#"  className="px-4 py-2 md:w-auto border rounded-lg  flex justify-center items-center bg-white  text-neutral-800">Visit Live Site</a> 
          </div>
                  <Image src="/job.png" height={450} width={550}  className="mt-5 -mb-10 h-[150px] rounded-t-2xl object-fill md:hidden" alt="" />

                  <Image src="/job.png"  height={450} width={450} className="hidden md:block  md:-mr-60 md:-mb-10" alt="" />
        </div>

<div className="flex flex-col md:flex-row md:gap-5 border bg-gray-800 rounded-2xl px-8 pt-8 md:pb-8 overflow-hidden max-w-[300px] md:max-w-[700px]"
>
          <div className="space-y-5 ">
            <div className="border-b border-gray-600 pb-3">
              <h3 className="bg-gradient-to-l from-emerald-300 to-cyan-400  bg-clip-text text-transparent font-bold">New</h3>
              <h1 className="text-4xl uppercase font-bold ">Blog website</h1>
          
            </div>

                <ul className="text-neutral-500">
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck  className="text-neutral-400"/>Fully responsive</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>Real time updates</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>AI integartion</li>
                  </ul>
                  <a href="#"  className="px-4 py-2 md:w-auto border rounded-lg  flex justify-center items-center bg-white  text-neutral-800">Visit Live Site</a> 
          </div>
                  <Image src="/blog.png" height={450} width={550}  className="mt-5 -mb-10 h-[150px] rounded-t-2xl object-fill md:hidden" alt="" />

                  <Image src="/blog.png"  height={450} width={450} className="hidden md:block  md:-mr-60 md:-mb-10" alt="" />
        </div>


        <div className="flex flex-col md:flex-row md:gap-5 border bg-gray-800 rounded-2xl px-8 pt-8 md:pb-8 overflow-hidden max-w-[300px] md:max-w-[700px]"
>
          <div className="space-y-5 ">
            <div className="border-b border-gray-600 pb-3">
              <h3 className="bg-gradient-to-l from-emerald-300 to-cyan-400  bg-clip-text text-transparent font-bold">New</h3>
              <h1 className="text-4xl uppercase font-bold ">Real time Chat App</h1>
          
            </div>

                <ul className="text-neutral-500">
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck  className="text-neutral-400"/>Fully responsive</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>E-commerce functionality</li>
                    <li className="flex items-center gap-2 text-neutral-400"><CiCircleCheck/>AI integartion</li>
                  </ul>
                  <a href="#"  className="px-4 py-2 md:w-auto border rounded-lg  flex justify-center items-center bg-white  text-neutral-800">Visit Live Site</a> 
          </div>
                  <Image src="/chat.jpg" height={450} width={550}  className="mt-5 -mb-10 h-[150px] rounded-t-2xl object-fill md:hidden" alt="" />

                  <Image src="/chat.jpg"  height={450} width={450} className="hidden md:block  md:-mr-60 md:-mb-10" alt="" />
        </div>
                  
          
       </main>

      </section>
         <section className="mt-20 -rotate-2 bg-gray-900">
          <marquee className='bg-gradient-to-l from-emerald-300 to-cyan-300 py-4 '>
                <span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span>
                <span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span>
                <span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span>
                <span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span>

                <span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span><span className="font-bold text-black">
                  SECURE
                  ✮ ❂
                </span>
          </marquee>
         </section>

         {/*  */}
    <section className="max-w-6xl mt-20 mx-auto px-10">
    <div className="space-y-3 mt-2">
       <h5 className="text-sm bg-gradient-to-l from-emerald-300 to-cyan-400 text-center bg-clip-text text-transparent">HAPPY CLIENT'S</h5>
       <h1 className="text-center text-5xl font-bold  bg-gradient-to-l from-gray-500 to-white bg-clip-text text-transparent">What Clients Say About Me</h1>
       <p className="text-sm text-neutral-300 line-clamp-3 text-center ">Don't just take my word for it <br /> See What have to say about my work</p>
        </div>
     
     <main className="mt-10  grid md:grid-cols-2 lg:grid-cols-3 gap-4">
         <div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className="h-16 w-16 bg-white m-4 rounded-full overflow-hidden">
              <Image src={'/img1.jpg'} width={100} height={100} className="bg-cover h-full" alt=""/>
            </div>
            <div>
              <span className="font-bold">Zabi</span>
              <p className="text-sm">IT Manager</p>
            </div>
          </div>
          <p className="p-2">Results-driven IT Manager with 7+ years experience leading infrastructure, security and application teams. Proven track record in reducing downtime by 30%, implementing ITIL-aligned processes, and delivering projects on time and under budget.</p>
         </div>


<div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className=" h-16 w-16 bg-[url('/img2.jpeg')] bg-cover bg-center m-4 rounded-full"></div>
            <div>
              <span className="font-bold">Jash</span>
              <p className="text-sm">AI Engineer</p>
            </div>
          </div>
          <p className="p-2">As an AI Engineer, I specialize in developing intelligent systems that bridge the gap between cutting-edge research and practical applications. My work involves designing and training deep learning models, implementing natural language processing .</p>
         </div>


         <div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className="h-16 w-16 bg-[url('/img3.webp')] bg-cover bg-center m-4 rounded-full"></div>
            <div>
              <span className="font-bold">Emma</span>
              <p className="text-sm">Software Architect</p>
            </div>
          </div>
          <p className="p-2">As a Software Architect, I design and guide the implementation of complex software systems that meet business and technical goals. My focus is on creating scalable architectures, defining coding standards, and integrating modern technologies .</p>
         </div>

         <div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className="h-16 w-16 bg-[url('/img5.jpeg')] bg-cover bg-center m-4 rounded-full"></div>
            <div>
              <span className="font-bold">zain</span>
              <p className="text-sm">Principal DevOps</p>
            </div>
          </div>
          <p className="p-2">Principal DevOps Engineer with 10+ years of experience designing and leading cloud-native infrastructure, CI/CD pipelines, and automation frameworks. Proven expertise in AWS, Kubernetes, Docker, Terraform, and monitoring solutions.</p>
         </div>


         <div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className="h-16 w-16 bg-[url('/img4.jpg')] bg-cover bg-center m-4 rounded-full"></div>
            <div>
              <span className="font-bold">Yasir</span>
              <p className="text-sm">Creative Designer</p>
            </div>
          </div>
          <p className="p-2">Creative Designer with strong expertise in visual storytelling, branding, and digital design. Skilled in Adobe Creative Suite, Figma, and modern design principles. Experienced in delivering user-centered designs that enhance engagement.</p>
         </div>


         <div className="border rounded-md border-gray-400 bg-gray-600">
          {/* profile */}
          <div className="profile flex items-center">
            <div className="h-16 w-16 bg-[url('/img6.jpg')] bg-cover bg-center m-4 rounded-full"></div>
            <div>
              <span className="font-bold">Henry</span>
              <p className="text-sm">Digital Marketer</p>
            </div>
          </div>
          <p className="p-2">Digital Marketer with proven expertise in SEO, social media strategy, paid advertising, and content marketing. Skilled at driving brand awareness, generating qualified leads, and optimizing campaigns using data-driven insights.!</p>
         </div>

     </main>
      </section> 



      <section className="mt-12 px-12 max-w-6xl mx-auto">
 <div className="space-y-3">
       <h5 className="text-sm bg-gradient-to-l from-emerald-300 to-cyan-400 text-center bg-clip-text text-transparent">ABOUT ME</h5>
       <h1 className="text-center text-5xl font-bold ">A Sneak Peak At What I Do </h1>
       <p className="text-sm text-neutral-300 line-clamp-3 text-center">Learn more about me what i do and what i bring to the table</p>

        </div>


        <main className="mt-10 grid grid-cols-1  md:grid-cols-3 gap-4">
          <div className="border border-gray-600 bg-gray-800 rounded-2xl ">
            <div className="space-y-2 overflow-hidden ">
              <div>
                
              <div className="flex gap-2 p-2">
                <Image src="/plus.png"  height={150} width={150} className="h-6 w-6" alt=""/>
                  <h3 className="text-lg font-bold self-end">My Reads</h3>
                
              </div>
              <p className="p-2">Explore my books shapping my perspective </p>
              </div>
              <div className="flex justify-center">
              <Image src="/book.webp"  height={150} width={150} className="mt-6 -mb-10 h-50 " alt="" />

              </div>

              
            </div>
          </div>

          <div className="border border-gray-600 bg-gray-800 rounded-2xl col-span-1 md:col-span-2">
            <div className="space-y-2 overflow-hidden ">
              <div>
                
              <div className="flex gap-2 p-2">
               
                  <h3 className="text-lg font-bold self-end">My Toolbox</h3>
                
              </div>
              <p className="p-2">Explore the technologies and tools i use to craft
                exceptional dogital experience  </p>
              </div>
              <div className="p-2  gap-4 grid grid-cols-2 md:grid-cols-4 ">
                 <button className="bg-gray-900  px-2  rounded-lg shadow-emerald-300 shadow-2xs">Javascript</button>
                 <button className="bg-gray-900 px-2  rounded-lg shadow-emerald-300 shadow-2xs">HTML5</button>
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">CSS3</button>
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">Githup</button>
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">React</button>
                
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">node js</button>
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">Express js</button>
                 <button className="bg-gray-900  px-2 rounded-lg shadow-emerald-300 shadow-2xs">MongoDB</button>
              </div>

              
            </div>
          </div>

        </main>

        {/* ssecong  container */}
        <main className="mt-10 grid grid-cols-1  md:grid-cols-3 gap-4">
         

          <div className="border border-gray-600 bg-gray-800 rounded-2xl col-span-1 md:col-span-2">
            <div className="space-y-2 overflow-hidden ">
              <div>
                
              <div className="flex gap-2 p-2">
  
                  <h3 className="text-lg font-bold self-end">Beyond the code</h3>
                
              </div>
              <p className="p-2">Explore the My books shaping my perspective</p>
              </div>
              <div className="p-2  gap-4 grid grid-cols-2 md:grid-cols-4 ">
                 <button className="bg-gray-900 py-2 shadow-emerald-300 shadow-xl rounded-lg">Riding bikes</button>
                 <button className="bg-gray-900 py-2 shadow-emerald-300 shadow-xl rounded-lg">Photography</button>
                 <button className="bg-gray-900 py-2 shadow-emerald-300 shadow-xl rounded-lg">Painting</button>
              </div>

              
            </div>
          </div>
         
          <div className="border border-gray-600 bg-gray-800 rounded-2xl overflow-hidden">       
              <Image src="/source.gif"   height={150} width={150} className="-mb-10 h-full w-full" alt="" />
              </div>
        </main>
      </section>

    </div>
  )
}
