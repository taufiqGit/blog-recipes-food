import Image from "next/image"

const Spinner =()=>{
    return (
        <div className="w-full flex justify-center items-center mb-8">
                <Image className="animate-spin" src="/load.svg" width={30} height={30} alt="load.."/>
                <p className="text-gray-700 ml-3 text-lg">loading..</p>
        </div>
    )
}

export default Spinner