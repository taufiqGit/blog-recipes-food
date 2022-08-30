import axios from "axios";
import { useRouter } from "next/router";
import CardBlog from "../../components/cardBlog";
import Footer from "../../components/footer";
import CustomHead from "../../components/head";
import Navbar from "../../components/navbar";

export default function Category({ categories }) {
    const router = useRouter()
    const categoryName = router.query.cate.split('-').join(" ")

    return(
      <>
      <CustomHead title={categoryName} desc={categoryName}/>
        <div className="container mx-auto lg:max-w-4xl min-h-screen">
          <main className='w-full'>
            <Navbar/>
            <header className="w-auto max-w-max">
              <h2 className="text-2xl first-letter:uppercase text-[#000638]">{categoryName}</h2>
              <div className="w-1/2 h-[2px] mt-1.5 bg-gray-600 font-Merriweather"/>
            </header>
            
            <div className='grid grid-cols-2 mt-10'>
            {
              categories.map((item, idx) => (
                <CardBlog key={idx} 
                  slug={item.key} 
                  title={item.title} 
                  thumb={item.thumb}
                  serving={item.serving}
                />
              ))
            }               
            </div>
          </main>
        </div>    
        <Footer/>    
      </>
    )
}


export async function getStaticPaths(params) {
    const response = await axios.get(`${process.env.URI_API}/category/recipes`)
    const categories = response.data.results  
    const paths = categories.map(cate => ({params: { cate: cate.key }}))
    return {
      paths,
      fallback: false
    }
}
export async function getStaticProps(context) {
  const response = await axios.get(`${process.env.URI_API}/category/recipes/${context.params.cate}`)
  const categories = response.data.results  
    return {
      props: {
        categories
      }
    }
}