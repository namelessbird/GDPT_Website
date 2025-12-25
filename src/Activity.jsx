import React from 'react'
import Footer from './Footer'
import "./styles.css"


export default function Activity(){
    return(
        <div className='min-h-screen flex flex-col pt-[15vh] sm:pt-[10vh]'>
            
            <main className="flex-grow flex flex-col items-center px-5 text-center">
                
                <div className="mb-8 w-full max-w-5xl">
                    <h1 className="text-3xl font-bold text-center">
                        Lịch Hoạt Động
                    </h1>  
                </div>

                <iframe
                    src="https://embed.styledcalendar.com/#W0C5a9mQi150NrgpTqTp"
                    title="Styled Calendar"
                    className="styled-calendar-container w-full max-w-5xl border-0 h-[500px] sm:h-[600px] mb-10 rounded-xl shadow-inner"
                    data-cy="calendar-embed-iframe"
                />
            </main>

            <Footer />
        </div>
    )
}