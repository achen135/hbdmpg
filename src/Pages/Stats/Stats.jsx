import { useEffect, useState } from 'react'
import './Stats.css'

const Stats = () => {

  const handleClick = () => {
  const section = document.getElementById('game')
    if(section) {
      section.scrollIntoView()
    }
  }

  const firstMet = new Date("2025-06-25T04:30:00");
  const firstDate = new Date("2025-07-02T12:20:00");
  const secondDate = new Date("2025-07-07T19:50:00");
  const thirdDate = new Date("2025-07-23T11:30:00");
  const officialDate = new Date("2025-08-17T21:30:00");

  const [daysSinceMet, setDaysSinceMet] = useState(0);
  const [timeSinceDate, setTimeSinceDate] = useState({});
  const [timeSinceOfficial, setTimeSinceOfficial] = useState({});
  const [timeSinceSecond, setTimeSinceSecond] = useState({});
  const [timeSinceThird, setTimeSinceThird] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // --- Days since firstMet ---
      const diffMet = now - firstMet;
      const days = Math.floor(diffMet / (1000 * 60 * 60 * 24));
      setDaysSinceMet(days);

      // --- Timer since firstDate ---
      const diffDate = now - firstDate;
      const secondsDate = Math.floor(diffDate / 1000) % 60;
      const minutesDate = Math.floor(diffDate / (1000 * 60)) % 60;
      const hoursDate = Math.floor(diffDate / (1000 * 60 * 60)) % 24;
      const daysDate = Math.floor(diffDate / (1000 * 60 * 60 * 24));
      setTimeSinceDate({ days: daysDate, hours: hoursDate, minutes: minutesDate, seconds: secondsDate });

      // --- Timer since officialDate ---
      const diffOfficial = now - officialDate;
      const secondsOfficial = Math.floor(diffOfficial / 1000) % 60;
      const minutesOfficial = Math.floor(diffOfficial / (1000 * 60)) % 60;
      const hoursOfficial = Math.floor(diffOfficial / (1000 * 60 * 60)) % 24;
      const daysOfficial = Math.floor(diffOfficial / (1000 * 60 * 60 * 24));
      setTimeSinceOfficial({ days: daysOfficial, hours: hoursOfficial, minutes: minutesOfficial, seconds: secondsOfficial });

    // ---Timer since secondDate ---
    const diffSecond = now - secondDate;
    const secondsSecond = Math.floor(diffSecond / 1000) % 60;
    const minutesSecond = Math.floor(diffSecond / (1000 * 60)) % 60;
    const hoursSecond = Math.floor(diffSecond / (1000 * 60 * 60)) % 24;
    const daysSecond = Math.floor(diffSecond / (1000 * 60 * 60 * 24));
    setTimeSinceSecond({ days: daysSecond, hours: hoursSecond, minutes: minutesSecond, seconds: secondsSecond });

    // ---Timer since thirdDate ---
    const diffThird = now - thirdDate;
    const secondsThird = Math.floor(diffThird / 1000) % 60;
    const minutesThird = Math.floor(diffThird / (1000 * 60)) % 60;
    const hoursThird = Math.floor(diffThird / (1000 * 60 * 60)) % 24;
    const daysThird = Math.floor(diffThird / (1000 * 60 * 60 * 24));
    setTimeSinceThird({ days: daysThird, hours: hoursThird, minutes: minutesThird, seconds: secondsThird });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='stats-screen-wrapper'>
      <p className='stats-text'>Our Stats</p>

      <div className='stats-container'>
        {/* Stat 1: Days since first talked */}
        <div className='stat'>
          <div className="stat-title">Days since we first talked</div>
          <div className="stat-details">{daysSinceMet} days</div>
        </div>

        {/* Stat 2: Time since first date */}
        <div className='stat'>
          <div className="stat-title">Time since our first date</div>
          <div className="stat-details">
            {timeSinceDate.days}d {timeSinceDate.hours}h {timeSinceDate.minutes}m
          </div>
        </div>

        {/* Stat 3: Time since second date */}
        <div className='stat'>
          <div className="stat-title">Time since our second date</div>
          <div className="stat-details">
            {timeSinceSecond.days}d {timeSinceSecond.hours}h {timeSinceSecond.minutes}m
          </div>
        </div>

        {/* Stat 4: Time since third date */}
        <div className='stat'>
          <div className="stat-title">Time since our third date</div>
          <div className="stat-details">
            {timeSinceThird.days}d {timeSinceThird.hours}h {timeSinceThird.minutes}m
          </div>
        </div>

        {/* Stat 5: Time since official */}
        <div className='stat'>
          <div className="stat-title">Time we've been official</div>
          <div className="stat-details">
            {timeSinceOfficial.days}d {timeSinceOfficial.hours}h {timeSinceOfficial.minutes}m
          </div>
        </div>

        <div className='stat'>
          <div className='stat-title'>Times I've thought about you</div>
          <div id='long-text' className='stat-details'>Too many to count... Pauline oh how much I miss you...</div>
        </div>
      </div>

      <div className='next-button' onClick={handleClick}>Next :{")"}</div>
    </div>
  );
};

export default Stats;
