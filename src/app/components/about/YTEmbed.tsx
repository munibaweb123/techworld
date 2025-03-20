import React from 'react'
import { Bell } from 'lucide-react'


const YoutubeEmbed = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-cyan-300 border-2 border-cyan-500 p-4 m-4">
        <h1 className="text-2xl font-bold">My latest videos on youtube:</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 m-4 gap-4 h-full">
         <iframe className="w-full h-full" src="https://www.youtube.com/embed/umiFi7z2jzw?si=ZwAWGgdZs9dUt88c" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <iframe className="w-full h-full" src="https://www.youtube.com/embed/5krv1AZs-hY?si=HkIzeWLC6RwPqTV0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/HjBP7ydB0lM?si=efaKkZBdGVfmU_Yl" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/HjBP7ydB0lM?si=efaKkZBdGVfmU_Yl" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/UpooKW7sY9I?si=v30htIXChtY9cu3B" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/FLSvrJyuclk?si=uC1D-iVuQA-QHHM5" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <p className='flex items-center justify-center gap-2'>Subscribe my channel <Bell color='red' size={24}/></p>
    </section>
  )
}

export default YoutubeEmbed