import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [heroCurrent, setHeroValue] = useState('https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg');
  let heroList = [
    "https://i.pinimg.com/1200x/5b/f4/a9/5bf4a989ac96489a138b7f2dc223ebd0.jpg",
    "https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
    "https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg",
    "https://i.bbcosplay.com/14934/scarlet-whitch.jpg"
  ]
  
  console.log(heroCurrent)
  function handleSuperHero (){
    const randomIndex = Math.floor(Math.random() * heroList.length)
    const randomSuperHero = heroList[randomIndex]
    setHeroValue(randomSuperHero)
  }

  function handleSpidey(){
    setHeroValue('https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg')
  }
  function handleCaptainMarvel(){
    setHeroValue('https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg')
  }

  function handleIronman (){
    setHeroValue('https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg')
  }

  function handleWanda (){
    setHeroValue('https://i.bbcosplay.com/14934/scarlet-whitch.jpg')
  }
  return (
    <>
      <div>
        <img className="main-image" src={heroCurrent}></img>
      </div>
      <div>
        <img onClick ={handleSpidey} className="item-image"src="https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg"></img>
        <img onClick ={handleCaptainMarvel}className="item-image"src="https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg"></img>
        <img onClick={handleIronman}className="item-image"src="https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg"></img>
        <img onClick={handleWanda}className="item-image"src="https://i.bbcosplay.com/14934/scarlet-whitch.jpg"></img>
      </div>
      <br></br>
      <button className="btn"onClick={handleSuperHero} >Change Super Hero</button>
    </>
  )
}

export default App
