import React from 'react'

export default function Song({ title, lyrics }) {
    const [show, setShow] = React.useState(false)

    return (
        <div className="bg-white rounded-lg shadow-sm border p-4 flex flex-col">
            <h2 className="font-semibold text-lg mb-2 text-center">
                {title}
            </h2>

            {!show && (
                <button
                    className="text-blue-600 underline hover:text-blue-800 transition cursor-pointer"
                    onClick={() => setShow(true)}
                >
                    Xem Lời Bài Hát
                </button>
            )}

            {show && (
                <>
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-700 max-h-64 overflow-y-auto">
                        {lyrics}
                    </p>

                    <button
                        className="mt-3 text-red-500 underline hover:text-red-700 transition cursor-pointer"
                        onClick={() => setShow(false)}
                    >
                        Đóng Lời Bài Hát
                    </button>
                </>
            )}
        </div>
    )
}
