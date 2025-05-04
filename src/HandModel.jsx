import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function HandModel(props) {
  const ref = useRef()
  const gltf = useLoader(GLTFLoader, '/hand.glb')
  
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5
  })

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={props.scale || 1}
      position={props.position || [0, 0, 0]}
    />
  )
}

