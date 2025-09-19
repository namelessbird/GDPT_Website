import React from 'react'
import "./styles.css"

export default function Activity(){
    return(
        <div className='justify-center flex py-5 px-5'>
            {/* <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=cnl1cDI1NDRAZ21haWwuY29t&color=%23039be5"
                className="w-[800px] h-[600px] border border-gray-500 rounded-md shadow-md"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar"
            >
            </iframe> */}
            <iframe
                src="https://embed.styledcalendar.com/#W0C5a9mQi150NrgpTqTp"
                title="Styled Calendar"
                className="styled-calendar-container w-full max-w-5xl border-0 h-auto sm:h-[600px]"
                data-cy="calendar-embed-iframe"
                name="iFrameResizer0"
            />
        </div>
    )
}