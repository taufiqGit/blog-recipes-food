import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react';
import CardBlog from '../components/cardBlog';
import Footer from '../components/footer';
import CustomHead from '../components/head';
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Spinner from '../components/spinner';
import { HitSearch } from '../service/search';

export default function Home({ dataRecipes }) {
  const [listRecipes, setListRecipes] = useState(dataRecipes)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState('')

  const handleSearch = async(q)=>{
    setIsLoading(true)
    try {
      if (q) {
        const response = await axios.get(`data/api/search/?q=${q}`)
        const result = await response.data.results
        if (result.length <= 0) {
          setIsError("Not Found")
        } else{
          setIsError("")
        }
        setListRecipes(result)       
      } else {
        setIsError("")
        setListRecipes(dataRecipes)
      }
    } catch (error) {
      console.error('error Search: ', error);
      setIsLoading(false)
      setIsError(error.message)
    } finally{
      setIsLoading(false)
    }
  }

  return (
    <>
      <CustomHead 
        title="Indonesian Food Recipes"
        desc="hahah"
      />
      <div className="container mx-auto lg:max-w-4xl min-h-screen">
        <main className='w-full'>
          <Navbar/>
          <Hero handleSearch={handleSearch}/>
          {
            isLoading && <Spinner/>
          }
          {
            isError && <p className='text-gray-700 mb-8 text-lg'>{isError}</p>
          }
          <div className='grid grid-cols-2'>
            {
              listRecipes.map((item, idx) => (
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

export async function getServerSideProps(){
  const response = await axios.get(`${process.env.URI_API}/recipes`)
  const result = await response.data
  
  return {
    props: {
      dataRecipes: result.results
    }
  }
}
