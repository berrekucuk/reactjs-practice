import React, { useState } from 'react'

function ImageState() {

    const [imageSource, setImageSource] = useState("https://static.srpcdigital.com/styles/1037xauto/public/2021/09/23/759356-1998132552.jpg")

    let imageSources = [
        "https://static.srpcdigital.com/styles/1037xauto/public/2021/09/23/759356-1998132552.jpg",
        "https://www.cumhuriyet.com.tr/thumbs/1520x900/Archive/2023/7/16/2099819/kapak_135652.jpg",
        "https://img-s1.onedio.com/id-57ab39e97027962828cb48fe/rev-0/w-600/h-375/f-jpg/s-a41261646e558fd2abf45da6bce68f30e327853d.jpg",
        "https://image.milimaj.com/i/milliyet/75/0x0/5f2604df5542841108c15025.jpg",
        "https://i.pinimg.com/236x/03/f5/84/03f584b688af038d9c53a977b540d660.jpg"
    ]

    //her butona tıkladığı resim rastgele değişsin
    const change = () =>{
        var randomImage = Math.floor(Math.random() * imageSources.length )
        setImageSource(imageSources[randomImage])
    }

  return <>
  <button onClick={change}>Change</button>
  <hr/>
  <img width={200} height={150} src={imageSource} alt='placeholder'/>
  </>
}

export default ImageState