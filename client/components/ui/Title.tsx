import React from 'react'

export default function Title({title,content,className=""}:{title:string,content?:string,className?:string}) {
    return (
        <div className={`text-center ${className}`}>
            <h2 className="md:text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                <span className="relative inline-block">
                    <span className="relative z-10">{title}</span>
                    <span className="absolute left-0 bottom-1 w-full h-2 bg-primary/30 rounded z-0"></span>
                </span>
            </h2>
            {content&&<p className="text-gray-500 text-sm">{content}</p>}
        </div>
    )
}
