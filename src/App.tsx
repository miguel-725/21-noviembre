import { useState, useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import { Vector2, type Mesh } from 'three';

function Cubo() {
  const esfera = useRef<Mesh>(null)
  const texturaEsfera = useTexture('/verityyy.jpg')
  const [encima, setEncima] = useState(false)

  const cono = useRef<Mesh>(null)
  const texturaCono = useTexture('/kanye.jpg')
  const [encima2, setEncima2] = useState(false)

  const cubo = useRef<Mesh>(null)
  const texturaCubo = useTexture('/papi.jpg')
  const [encima3, setEncima3] = useState(false)

  const pera = useRef<Mesh>(null)
  const texturaPera = useTexture('/teto.jpg')
  const [encima4, setEncima4] = useState(false)

  const puntosPera = [
    new Vector2(0, -1),
    new Vector2(0.75, -0.85),
    new Vector2(0.95, -0.35),
    new Vector2(0.7, 0.2),
    new Vector2(0.45, 0.65),
    new Vector2(0.28, 1.05),
    new Vector2(0, 1.15)
  ]

  useFrame((_, delta) => {
    if (esfera.current) {
      esfera.current.rotation.y += delta;
    }
    if (cono.current) {
      cono.current.rotation.y += delta;
    }
    if (cubo.current) {
      cubo.current.rotation.y += delta;
    }
    if (pera.current) {
      pera.current.rotation.y += delta;
    }
  })

  return (
    <>
      <mesh
        ref={esfera}
        position={[-4.5, 0, -4]}
        scale={encima ? 1.4 : 1}
        onPointerOver={() => setEncima(true)}
        onPointerOut={() => setEncima(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texturaEsfera} />
      </mesh>

      <mesh
        ref={cono}
        position={[-1.5, 0, -4]}
        scale={encima2 ? 1.4 : 1}
        onPointerOver={() => setEncima2(true)}
        onPointerOut={() => setEncima2(false)}
      >
        <coneGeometry args={[0.8, 1.5, 32]} />
        <meshStandardMaterial map={texturaCono} />
      </mesh>

      <mesh
        ref={cubo}
        position={[1.5, 0, -4]}
        scale={encima3 ? 1.4 : 1}
        onPointerOver={() => setEncima3(true)}
        onPointerOut={() => setEncima3(false)}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial map={texturaCubo} />
      </mesh>

      <mesh
        ref={pera}
        position={[4.5, 0, -4]}
        scale={encima4 ? 1.4 : 1}
        onPointerOver={() => setEncima4(true)}
        onPointerOut={() => setEncima4(false)}
      >
        <latheGeometry args={[puntosPera, 32]} />
        <meshStandardMaterial map={texturaPera} />
      </mesh>
    </>
  )
}

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <Environment files="backroomss.jpg" background />
      <Cubo />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={-0.4}
      />
    </Canvas>
  )
}

export default App