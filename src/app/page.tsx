'use client'



import Greet from "./components/Greet";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Test from "./components/Test";


export default function Home() {
  
  return (
   <main className="min-h-screen max-w-7xl mx-auto bg-gray-100 dark:bg-gray-900">
   
    <h1 className="text-4xl text-center p-10 text-blue-100">Welcome to nextjs 15 🎈</h1>
   <div className="flex justify-center items-center">
   {/* <button onClick={()=>alert("button is clicked!")}  className="bg-amber-300 p-4 rounded-md text-2xl text-blue-900">
    click me
    </button> */}
    
    </div> 
    <div className="flex-col justify-start items-start bg-cyan-300 border-2 border-cyan-500 p-4 m-4">
    <Tech name="Traversy Media" subscribers={100000} description="Web development tutorials"/>
    <Greet name="Muniba"/>
    
    </div>
    <Hero/>
    <Test/>
   </main>
  );
}
