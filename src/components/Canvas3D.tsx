import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Move3d, Compass } from 'lucide-react';

interface Canvas3DProps {
  interactive?: boolean;
}

export const Canvas3D: React.FC<Canvas3DProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [freeLook, setFreeLook] = useState<boolean>(false);
  const [activeBeacon, setActiveBeacon] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070a, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.5, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x181c28, 1.5);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xf59e0b, 3.0);
    goldKeyLight.position.set(5, 8, 5);
    scene.add(goldKeyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x06b6d4, 1.5);
    cyanRimLight.position.set(-6, -2, -4);
    scene.add(cyanRimLight);

    const pointLight = new THREE.PointLight(0xfbbf24, 2, 15);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(40, 40, 0xf59e0b, 0x181c28);
    gridHelper.position.y = -3.5;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.25;
    scene.add(gridHelper);

    // Central Obsidian Monolith
    const monolithGroup = new THREE.Group();
    scene.add(monolithGroup);

    // Monolith Body (Beveled elongated octahedron / prism)
    const monolithGeo = new THREE.CylinderGeometry(0.8, 1.4, 4.2, 6, 1);
    const monolithMat = new THREE.MeshPhysicalMaterial({
      color: 0x090b10,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const monolithMesh = new THREE.Mesh(monolithGeo, monolithMat);
    monolithMesh.position.y = 0.2;
    monolithGroup.add(monolithMesh);

    // Monolith Gold Wireframe Edges
    const edgesGeo = new THREE.EdgesGeometry(monolithGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    edgesMesh.position.copy(monolithMesh.position);
    monolithGroup.add(edgesMesh);

    // Inner Glowing Core
    const coreGeo = new THREE.OctahedronGeometry(0.65, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.copy(monolithMesh.position);
    monolithGroup.add(coreMesh);

    // 4 Orbiting Holographic Beacons
    const beaconData = [
      { name: 'STARBOY PRIME (A10G Cloud)', radius: 3.2, speed: 0.6, color: 0xf59e0b, yOffset: 0.8 },
      { name: 'Civilizationx (Multi-Agent Sim)', radius: 4.1, speed: -0.45, color: 0x10b981, yOffset: -0.4 },
      { name: 'paperclip-ai-companies (Foundry)', radius: 3.6, speed: 0.52, color: 0x38bdf8, yOffset: 0.3 },
      { name: 'disaster-mesh-communications (Mesh PWA)', radius: 4.6, speed: -0.38, color: 0xeab308, yOffset: -0.9 },
    ];

    const beaconMeshes: {
      group: THREE.Group;
      mesh: THREE.Mesh;
      ring: THREE.Line;
      radius: number;
      speed: number;
      yOffset: number;
      name: string;
    }[] = [];

    beaconData.forEach((b) => {
      const bGroup = new THREE.Group();
      scene.add(bGroup);

      // Beacon Satellite
      const sGeo = new THREE.OctahedronGeometry(0.22, 0);
      const sMat = new THREE.MeshStandardMaterial({
        color: b.color,
        emissive: b.color,
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      bGroup.add(sMesh);

      // Orbital Orbit Path Ring
      const ringGeo = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * b.radius, b.yOffset, Math.sin(theta) * b.radius));
      }
      ringGeo.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: b.color,
        transparent: true,
        opacity: 0.18,
      });
      const orbitRing = new THREE.Line(ringGeo, ringMat);
      scene.add(orbitRing);

      beaconMeshes.push({
        group: bGroup,
        mesh: sMesh,
        ring: orbitRing,
        radius: b.radius,
        speed: b.speed,
        yOffset: b.yOffset,
        name: b.name,
      });
    });

    // Cyber Gold Particles Field
    const particleCount = 1200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 26;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 26;
      particleScales[i] = Math.random() * 0.8 + 0.2;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particlesMat = new THREE.PointsMaterial({
      color: 0xfbbf24,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleSystem);

    // Mouse and Free-Look Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let orbitAzimuth = 0;
    let orbitPolar = 0;
    let cameraDistance = 11;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      if (freeLook && isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        orbitAzimuth -= deltaX * 0.005;
        orbitPolar = Math.max(-0.6, Math.min(0.8, orbitPolar + deltaY * 0.005));
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else if (!freeLook) {
        const rect = container.getBoundingClientRect();
        targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
        targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (freeLook) {
        isDragging = true;
        if ('touches' in e && e.touches.length > 0) {
          previousPointerX = e.touches[0].clientX;
          previousPointerY = e.touches[0].clientY;
        } else if ('clientX' in e) {
          previousPointerX = (e as MouseEvent).clientX;
          previousPointerY = (e as MouseEvent).clientY;
        }
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (freeLook) {
        e.preventDefault();
        cameraDistance = Math.max(6, Math.min(18, cameraDistance + e.deltaY * 0.008));
      }
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('mousedown', handlePointerDown);
    container.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    container.addEventListener('wheel', handleWheel, { passive: false });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp for ambient mode
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Monolith rotation & float
      monolithGroup.rotation.y = elapsedTime * 0.22;
      monolithGroup.rotation.x = Math.sin(elapsedTime * 0.4) * 0.08;
      monolithGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.15;
      coreMesh.rotation.y = -elapsedTime * 0.6;
      coreMesh.rotation.z = Math.cos(elapsedTime * 0.5) * 0.4;

      // Rotate Particles gently
      particleSystem.rotation.y = elapsedTime * 0.02;

      // Update Orbiting Beacons
      beaconMeshes.forEach((beacon) => {
        const angle = elapsedTime * beacon.speed;
        const x = Math.cos(angle) * beacon.radius;
        const z = Math.sin(angle) * beacon.radius;
        const y = beacon.yOffset + Math.sin(elapsedTime * 1.5 + beacon.radius) * 0.2;
        beacon.mesh.position.set(x, y, z);
        beacon.mesh.rotation.x += 0.02;
        beacon.mesh.rotation.y += 0.03;
      });

      // Camera control
      if (freeLook) {
        camera.position.x = Math.sin(orbitAzimuth) * Math.cos(orbitPolar) * cameraDistance;
        camera.position.z = Math.cos(orbitAzimuth) * Math.cos(orbitPolar) * cameraDistance;
        camera.position.y = 2.5 + Math.sin(orbitPolar) * cameraDistance;
        camera.lookAt(0, 0.2, 0);
      } else {
        camera.position.x = mouseX * 1.8;
        camera.position.y = 2.5 + mouseY * 1.2;
        camera.position.z = 11;
        camera.lookAt(0, 0.2, 0);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('mousedown', handlePointerDown);
      container.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      monolithGeo.dispose();
      monolithMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, [freeLook]);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden cursor-grab active:cursor-grabbing" />
      
      {/* 3D Mode & HUD Controls Overlay */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2">
        <button
          onClick={() => setFreeLook(!freeLook)}
          className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 backdrop-blur-md border transition-all ${
            freeLook
              ? 'bg-gold-500/20 text-gold-300 border-gold-500/50 shadow-gold-sm'
              : 'bg-obsidian-900/80 text-slate-400 border-obsidian-700 hover:text-slate-200 hover:border-gold-500/30'
          }`}
          title="Toggle between pointer-parallax and 360 drag free-look"
        >
          {freeLook ? <Move3d className="w-3.5 h-3.5 text-gold-400 animate-spin" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{freeLook ? 'FREE-LOOK ACTIVE (DRAG/SCROLL)' : 'FREE-LOOK 3D'}</span>
        </button>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-obsidian-900/80 backdrop-blur-md border border-obsidian-800 text-[11px] font-mono text-slate-400">
          <Compass className="w-3 h-3 text-gold-500" />
          <span>4 SATELLITES: STARBOY • CIVILIZATIONX • PAPERCLIP • DISASTER-MESH</span>
        </div>
      </div>
    </div>
  );
};
