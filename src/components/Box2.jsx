import {useState,useRef} from 'react'
import {motion} from 'framer-motion'

import '../styles/box2.scss'
function Box2(props) {



  return (
    <motion.div className='Box2' onClick={props.bo2}
    drag
    dragConstraints={props.parent}
    dragMomentum={true}
dragTransition={{ timeConstant: 1000, power: 0.1 }} 
    >Box2</motion.div>
  )
}

export default Box2