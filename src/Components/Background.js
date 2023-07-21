import React from 'react'

function Background({backgroundImage ,isDark, themeDark ,themeLight}) {



  return (
    <div className='background' style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}></div>
  )
}

export default Background