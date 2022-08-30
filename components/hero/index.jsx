import Image from "next/image"
import { useState } from "react"

export default function Hero({ handleSearch }) {
    const [search, setSearch] = useState('')
    //console.log('sdf',handleSearch);
    return(
        <section className="w-full h-72 flex justify-center items-center flex-col ">
            <h3 className="font-Merriweather text-[#000638] text-5xl">The Food Ninja Blog</h3>
            <p className="text-[#605C59] text-xl mt-2">A blog about food, experiences, and recipes.</p>
            <div className="mt-10 flex items-center">
                <div className="w-72 h-9">
                    <input 
                        onChange={(e)=> setSearch(e.target.value)}
                        className="focus:outline-none font-Merriweather text-gray-600 w-full h-full text-base px-2 border rounded border-gray-300" 
                        type="text" placeholder="Search for articles"/>
                </div>      
                <button 
                    onClick={()=> handleSearch(search)}
                    className="w-9 h-9 ml-2 rounded-full shadow-md flex justify-center items-center">
                    <Image src="/search.svg" height={18} width={18} alt="sd"/>
                </button>          
            </div>
        </section>
    )
}