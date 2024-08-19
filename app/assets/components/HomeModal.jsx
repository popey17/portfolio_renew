import { Torus, MeshTransmissionMaterial, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { useControls } from 'leva';

const HomeModal = () => {

  const { viewport } = useThree()
  const torus = useRef(null);
  

  useFrame( () => {
    torus.current.rotation.y += 0.01
    torus.current.rotation.x += Math.sin(0.005)
  })

  const config = {
    backside: false,
    samples: 16,
    transmission: 1,
    roughness: 0.5,
    clearcoat: 0,
    thickness: 200 ,
    backsideThickness: 0 ,
    ior: 3,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 0,
    distortionScale: 0.2,
    temporalDistortion: 0 ,
  }

  return (
    <group>      
      <mesh ref={torus} castShadow receiveShadow 
      scale={viewport.width/10}         
      position={[viewport.width / 2 - 4, -3 , -1]}
      >
        <Torus args={[1, 0.5, 30, 100]} >
          <MeshTransmissionMaterial {...config} color='#fef4ef' toneMapped={false} />
        </Torus>
      </mesh>
    </group>
  )
}

export default HomeModal