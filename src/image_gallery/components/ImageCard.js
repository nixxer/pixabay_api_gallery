import React from 'react'

const ImageCard = ({ image,clickTag }) => {
  const tags = image.tags.split(',')

  const setTag= (tag)=>{
    console.log(`set tag: ${tag}`)
    clickTag(tag)
  }
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white mb-4">
      <img src={image.webformatURL} alt=""
        className="w-full" />
      <div className="px-6 py-4 ">
        <div className="font-bold text-gray-600 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li><strong> -View: {image.views}</strong></li>
          <li><strong> -Download: {image.downloads}</strong></li>
          <li><strong> -Likes: {image.likes}</strong></li>          
        </ul>
      </div>
      <div className="px-6 py-4">
        {
          tags.map((tag, index) => (
            <span key={index} className="cursor-pointer inline-block bg-gray-200 rounded-full
              px-3 py-1 text-sm font-semibold text-gray-700 mr-2" onClick={()=>setTag(tag)}>
              #{tag}
            </span>
          ))
        }

      </div>
    </div>

  );
}

export default ImageCard
