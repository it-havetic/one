import React from 'react'

function Button({ bgFrom, bgTo, buttonName }) {
    return (
        <a className="relative inline-block z-20 " href="#pricing">
            <div className="absolute -bottom-2 -right-1.5 -z-10 flex h-[52px] w-full rounded-[5px] bg-white "></div>
            <div style={{
                background: `linear-gradient(to right, ${bgFrom}, ${bgTo})`,
            }} className={`flex items-center justify-center text-xl leading-31.2 mt-5 text-white font-semibold z-20 gap-2 rounded-[5px] px-6 py-[18px]`}>
                {buttonName}
                <img alt="arrow" className="rotate-90 " src="https://www.jsmastery.pro/assets/general/icons/arrow-white.svg" />
            </div>
        </a>
    )
}

export default Button
