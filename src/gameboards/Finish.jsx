import React from 'react'
import { Link } from 'react-router-dom';


const Next2 = () => {
  return (
    <div className="settingsContainer">

      <Link to="/">
      <button className="backToStartBtn">
        Completed - Back to Start
      </button>
      </Link>

    </div>
  )
}

export default Next2