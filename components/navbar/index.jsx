import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Navbar(params) {
    const [category, setCategory] = useState([])
    const [toggleCat, setToggleCat] = useState(false)

    const getListCategory = async()=>{
        try {
            const response = await axios.get(`data/api/category/recipes`)
            const categories = await response.data.results
            setCategory(categories)
        } catch (error) {
            console.error('error: getListCategory', error);
        }
    }

    useEffect(()=>{
        getListCategory()
    }, [])
    return (
        <nav className="flex justify-between py-8">
            <Link href="/">
            <h3 className="text-[#000638] text-2xl font-Merriweather cursor-pointer">Food Ninja</h3>
            </Link>
            <div className="text-[#000638] flex font-Roboto text-base">
                <div className="ml-3 relative">
                    <button onClick={()=> setToggleCat(!toggleCat)} className="flex items-center">
                        <Image src="/arrow-down.svg" height={15} width={15} alt="as"/>
                        <span className="ml-1">Category</span>
                    </button>
                    <div className="absolute z-20 w-auto min-w-[180px] h-auto bg-white shadow-lg rounded-md" >
                    {
                     toggleCat && category.length > 0 && category.map((item, idx)=>(
                            <Link key={idx} href={`/category/${item.key}`} >
                                <a className="text-gray-700 hover:text-gray-800 hover:font-semibold block mx-2.5 my-1">{item.category}</a>
                            </Link>
                        )) 
                    }
                    </div>
                </div>
                <a className="ml-3" href="">About</a>
                <a className="ml-3" href="">Contact</a>
            </div>
        </nav>
    )
}