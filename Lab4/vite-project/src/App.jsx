import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageItem from './component/itemImage'

function App() {
  const [heroCurrent, setHeroValue] = useState('https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg');

  
  let heroList1 = [
    {
      id:1,
      name:'spider',
      src: 'https://cdn.vox-cdn.com/thumbor/SbX1VbxJhxijxD1tzRTJ8uq38P4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19101461/spider_man_far_from_home_peter_parker_1562394390.jpg'
    },
    {
      id:2,
      name:'captain marvel',
      src: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg'
    },
    {
      id:3,
      name:'Thor',
      src: 'https://i.pinimg.com/1200x/5b/f4/a9/5bf4a989ac96489a138b7f2dc223ebd0.jpg'
    },
    {
      id:4,
      name:'IronMan',
      src: 'https://i.pinimg.com/550x/5d/d2/c8/5dd2c8f82ef46e0db3fe07a6e3285c2f.jpg'
    },
    {
      id:5,
      name:'Wanda',
      src: 'https://i.bbcosplay.com/14934/scarlet-whitch.jpg'
    },
  ]
  console.log(heroCurrent)
  
  function handleSuperHero (){
    setHeroValue(heroList1.src)
  }

  return (
    <>
      <div>
        <img className="main-image" src={heroCurrent}></img>
      </div>
      <div>

        {
          heroList1.map(function(hero){
            console.log(hero.src)
            return <ImageItem onClick={handleSuperHero}className="item-image" src={hero.src} />
          })
        }
        
        
      </div>
      <br></br>
      
    </>
  )
}

export default App
