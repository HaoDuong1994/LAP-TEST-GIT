function MainImage (pros){
   
   
   
    const {className, src} = pros
    console.log(pros)
    return <img className= {className} src={src}></img>
}

export default MainImage