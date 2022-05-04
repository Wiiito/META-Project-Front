import React from 'react'
import * as Styles from './styles'

const ScrollDown = () => {
  return (
    <Styles.MouseScroll>
      <Styles.Mouse>
        <Styles.Button />
      </Styles.Mouse>
      <Styles.Arrows>
        <div className="arrow"></div>
        <div className="arrow"></div>
      </Styles.Arrows>
    </Styles.MouseScroll>
  )
}

export default ScrollDown
