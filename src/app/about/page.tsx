

import AboutSection from "../components/about/About";
import HeroSection from "../components/about/HeroSection";
import Social from "../components/about/Social";
import SubscribeButton from "../components/about/Subscribe";
import YoutubeEmbed from "../components/about/YTEmbed";
import Greet from "../components/Greet";
import Tech from "../components/Tech";

export default function about(){
    return(
        <div className="flex-col justify-center items-center min-h-screen text-center space-y-4 max-w-7xl mx-auto bg-gray-100">
            <h1 className="text-2xl font-bold">About Page</h1>
            <Greet name="john"/>
            <Tech name="Tech World" subscribers={10} description="this is information technology channel"/>
            <HeroSection/>
            <AboutSection/>
            <YoutubeEmbed/>
            <Social/>
            <div className="flex justify-center items-center p-4">
            <SubscribeButton/>
            </div>
           
        </div>
    )
}