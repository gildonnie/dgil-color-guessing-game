/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  console.log(isMobile)
  return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor='black' />
        <pointLight intensity={1} />
        <spotLight position={[-3, 5, 1]} angle={1} penumbra={1} intensity={300} castShadow shadow-mapSize={1024} />
        <primitive object={computer.scene} scale={isMobile ? 0.55 : 0.75} position={isMobile ? [0, -3, -1.6] : [0, -2.9, -1.2]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
  
    // Set initial state based on the media query
    setIsMobile(mediaQuery.matches);
  
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
  
    // Add event listener for changes in the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  
    // Cleanup function to remove event listener when component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all /> 
    </Canvas>
   
  );
};

export default ComputersCanvas;
