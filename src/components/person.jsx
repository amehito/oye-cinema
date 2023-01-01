import { useRef, useState } from 'react'
import {  useFrame } from '@react-three/fiber'
import { usePersonControls } from './hooks'
import { useSpring, animated } from '@react-spring/three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

export function Person(props) {
  const ref = useRef()
  const { forward, backward, left, right, jump } = usePersonControls()

  useFrame((state, dt) => {
    // console.log(ref.current)
    // ref.current.position.x += 0.1
  })
  // const rotation =
  const [active,setActive] = useState(false)
  const { scale }  = useSpring({ scale: active ? 0.15 : 0.1 })
  const gltf = useLoader(GLTFLoader, '/Dice001.gltf')

  return (
    <animated.mesh onClick={()=>{
      setActive(v=>!v)
    }} {...props}  ref={ref}   scale={scale} >
      <primitive object={gltf.scene} />
    </animated.mesh>

  )
}
