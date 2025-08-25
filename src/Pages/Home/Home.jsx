import './Home.css'

const Home = () => {

  const handleClick = () => {
    const section = document.getElementById('intro')
    if(section) {
      section.scrollIntoView()
    }
  }

  return (
    <div className='screen-wrapper' onClick={handleClick}>
      <p className='home-text'>Click to Start</p>
    </div>
  )
}

export default Home