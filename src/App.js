import React,{useState,useEffect} from 'react';
import ImageCard from './image_gallery/components/ImageCard'
import ImageSearch  from './image_gallery/components/ImageSearch'

import './assets/main.css';
import './assets/custom.css';

function App() {
  const [images,setImages] = useState([])
  const [isLoading, setIsLoading] =useState(true)
  const [term, setTerm] = useState('')
 
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data=>{
      setImages(data.hits)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
  },[term])
    
  const textTerm= term===''?'':`- #${term}`
  
  return(
    <div className="container mx-auto">
    <ImageSearch searchtText={(text)=>setTerm(text)} />
    <div className="flex justify-center">       
      <span className='font-mono text-4xl text-purple-700 mb-8'>Pixabay Gallery {textTerm}</span>
    </div>

     {
     isLoading?
      <div className="flex justify-center">
       <h4>Loading...</h4>
      </div>:
       <div className="grid grid-cols-3 gab-4">
        {
          images.map(image=>(
            <ImageCard key={image.id} image={image} clickTag={(tag)=>setTerm(tag)} />
          ))
        }
      </div>
      }
    </div>
  )
}

export default App;
