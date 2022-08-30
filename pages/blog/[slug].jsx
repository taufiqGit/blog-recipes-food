import axios from "axios"
import Image from "next/image"
import Footer from "../../components/footer"
import CustomHead from "../../components/head"
import Navbar from "../../components/navbar"

export default function Product({ recipe }) {
    const { title, thumb, desc, ingredient, step, author, times, difficulty, servings } = recipe
    
    return(
        <>
        <CustomHead title={title} desc={title}/>
        <div className="container mx-auto lg:max-w-4xl min-h-screen">
            <main className='w-full'>
                <Navbar/>
                <article className="w-full py-4">
                    <h3 className="text-3xl font-semibold mt-6 text-[#000638] first-letter:uppercase">{title}</h3>
                    <div className="mt-4 flex justify-between">
                        <div className="flex justify-center flex-col ">
                            <h4 className="text-gray-700 font-semibold">{author.user}</h4>
                            <p className="text-gray-700 text-sm">{author.datePublished}</p>
                        </div>
                        <div className="flex">
                            <div className="flex items-center my-[0.5px]">
                                <Image src="/watch.svg" height={18} width={18} alt="icon d"/>
                                <span className="text-gray-600 ml-1.5 ">{times}</span>
                            </div>
                            <div className="flex items-center my-[0.5px] ml-3">
                                <Image src="/cooking.svg" height={18} width={18} alt="icon d"/>
                                <span className="text-gray-600 ml-1.5 ">{difficulty}</span>
                            </div>
                            <div className="flex items-center my-[0.5px] ml-3">
                                <Image src="/food-tudung.svg" height={18} width={18} alt="icon d"/>
                                <span className="text-gray-600 ml-1.5 ">{servings}</span>
                            </div>                            
                        </div>
                    </div>
                    {
                        thumb && (
                            <div className="flex justify-center mt-8">
                                <Image src={thumb} width={750} height={400} className="rounded-md" alt='ii'/>
                            </div>                            
                        )
                    }
                    <div className=" mt-8">
                        <h3 className="text-2xl text-[#000638]">Description</h3>
                        <p className="text-gray-600 text-lg mt-4">{desc}</p>
                    </div>
                    <div className=" mt-8">
                        <h3 className="text-2xl text-[#000638]">Ingredient</h3>
                        <ul className="mt-4 ml-2">
                            {
                                ingredient.map((item, idx)=>(
                                    <li key={idx} className="text-gray-600 my-2">
                                        <Image src="/arrow-icon.svg" width={15} height={15} alt="icon"/>
                                        <span className="ml-2 text-lg">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className=" mt-8">
                        <h3 className="text-2xl text-[#000638]">Step</h3>
                        <ul className="mt-4 ml-2">
                            {
                                step.map((item, idx)=>(
                                    <li key={idx} className="text-gray-600 my-2">
                                        <Image src="/arrow-icon.svg" width={15} height={15} alt="icon"/>
                                        <span className="ml-2 text-lg">{item}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </article>
            </main>            
        </div>        
        <Footer/>
        </>

    )
}
export async function getServerSideProps(context) {
    const response = await axios.get(`${process.env.URI_API}/recipe/${context.params.slug}`)
    const result = await response.data
    return {
        props: { recipe: result.results }
    }
}

