"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/techbg.jpg)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <p className="text-white hidden md:block font-semibold">
            Hi, I'm Sergei.
            </p>
          <h1 className="text-white text-[50px] font-semibold">
            I turn ideas into
            <span className="text-[50px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              {" "}
               applications
              
            </span>
            
            </h1>
          
            <div className="flex-col md:flex-row hidden md:flex gap-5">
              <Link href="/about-me" className='rounded-[20px] group relative bg-orange-500 hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]'>
                About me
              </Link>

              <Link href="/my-projects" className='rounded-[20px] group relative bg-transparent hover:bg-orange-400 border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
                My projects
              </Link>

            

              <Link href="/Resume_Sergei_Chernitsyn_portfolio.pdf"  target="_blank" rel="noopener noreferrer" className='rounded-[20px] group relative bg-transparent hover:bg-orange-400 border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
                <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
               My Resume
              </Link>
            
            </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/about-me"
          className="rounded-[20px] group bg-orange-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          About me 
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/Resume_Sergei_Chernitsyn_portfolio.pdf" target="_blank" rel="noopener noreferrer"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Resume
        </Link>
      </div>

    

     
    </main>
  );
}