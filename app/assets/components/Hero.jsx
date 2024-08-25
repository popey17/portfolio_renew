"use client";
import style from '@/app/assets/scss/style.module.scss';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei'
import { Lightformer } from '@react-three/drei';
import HomeModal from './HomeModal';

function Hero({}) {
  


  return (
    <>
    <section className={`${style.section} ${style['section--hero']}`}>
      <div className={style.heroContent__container}>
        <div className={style.heroContent}>
          <h2 className={style.heroTitle}>
            I&apos;m <span>Aung Myat Kyaw</span>,
          </h2>
          <div className={style.heroDescription}>
            <span><span className={style.circled}>Front-end</span> developer</span>
            <span>and full stack</span><br/>
            <span>web developer.</span>
          </div>
        </div>       
        <div className={style.canvasContainer}>
          <Canvas orthographic camera={{ position: [6, -5, 10], zoom: 60 }} resize={{ debounce: 0 }}>
            <HomeModal/>
            <ambientLight />
            <directionalLight castShadow intensity={0.8} position={[0, 0, 10]}/>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 2, 0, 0]}>
                <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
                  <Lightformer key={i} form="circle" intensity={4} rotation={[Math.PI / 2, 0, 0]} position={[x, 4, i * 4]} scale={[4, 1, 1]} />
                ))}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[50, 2, 1]} />
              </group>
            </Environment>
          </Canvas>
      </div>
      </div>
      <div className={style.mouseIcon}>
        <div className={style.mousey}>
          <div className={style.scroller}></div>
        </div>
        <span>SCROLL DOWN</span>
      </div>
    </section>
    </>
  )
}

export default Hero