import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
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
  const introRef = useRef(null)

  useEffect(() => {
    const section = introRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('fade-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const handleClick = () => {
    const section = document.getElementById('stats')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCakeClick = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.7 }
    })
  }

  return (
    <div className='intro-screen-wrapper hidden' ref={introRef}>
      <p className='hbd-text'>Happy Birthday <span className='hbd-subtext'>{"("}Click the Cake{")"}</span></p>
      <img className='cake-image' src={cake} onClick={handleCakeClick} />
      <img className='pandj-image' id='deco' src={pandj} />
      <img className='eevee-image' id='deco' src={eevee} />
      <img className='jungwon-image' id='deco' src={jungwon} />
      <img className='smiski-image' id='deco' src={smiski} />
      <img className='kageyama-image' id='deco' src={kageyama} />
      <img className='sanrio-image' id='deco' src={sanrio} />
      <img className='labubu-image' id='deco' src={labubu} />
      <img className='sukuna-image' id='deco' src={sukuna} />
      <img className='next-image' src={next} onClick={handleClick} />
    </div>
  )
}

export default Intro
