import './Intro.css'
import cake from '../../assets/cake.png'
import pandj from '../../assets/pandj.png'
import eevee from '../../assets/eevee.png'
import jungwon from '../../assets/jungwon.jpg'
import smiski from '../../assets/smiski.png'
import kageyama from '../../assets/kageyama.png'
import sanrio from '../../assets/sanrio.png'
import labubu from '../../assets/labubu.png'
import sukuna from '../../assets/sukuna.png'
import next from '../../assets/next.png'

const Intro = () => {

  const handleClick = () => {
  const section = document.getElementById('stats')
    if(section) {
      section.scrollIntoView()
    }
  }

  return (
    <div className='intro-screen-wrapper'>
     <p className='hbd-text'>Happy Birthday</p>
     <img className='cake-image' src={cake}/>
     <img className='pandj-image' id='deco' src={pandj}/>
     <img className='eevee-image' id='deco' src={eevee}/>
     <img className='jungwon-image' id='deco' src={jungwon}/>
     <img className='smiski-image' id='deco' src={smiski}/>
     <img className='kageyama-image' id='deco' src={kageyama}/>
     <img className='sanrio-image' id='deco' src={sanrio}/>
     <img className='labubu-image' id='deco' src={labubu}/>
     <img className='sukuna-image' id='deco' src={sukuna}/>
     <img className='next-image' id='deco' src={next} onClick={handleClick}/>
    </div>
  )
}

export default Intro
