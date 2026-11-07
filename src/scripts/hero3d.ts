import * as THREE from 'three';

export interface StationData {
  id: string;
  name: string;
  badge: string;
  metric: string;
  description: string;
  color: number;
}

export const STATIONS: StationData[] = [
  {
    id: 'nvme',
    name: 'PCIe 4.0 NVMe',
    badge: 'STORAGE',
    metric: '7,500 MB/s',
    description: 'Ultra-fast enterprise NVMe SSD arrays with instantaneous database queries.',
    color: 0x10b981
  },
  {
    id: 'litespeed',
    name: 'LiteSpeed Enterprise',
    badge: 'ACCELERATOR',
    metric: '10x Faster',
    description: 'Native server-level cache & HTTP/3 protocol for lightning WordPress load times.',
    color: 0xff501a
  },
  {
    id: 'shield',
    name: 'DDoS Guard & SSL',
    badge: 'SECURITY',
    metric: '40 Gbps Scrub',
    description: 'Automated 256-bit encryption & multi-layer edge firewall defending your traffic.',
    color: 0x06b6d4
  },
  {
    id: 'uptime',
    name: 'Tier-4 Anycast DNS',
    badge: 'AVAILABILITY',
    metric: '99.9% SLA',
    description: 'Redundant power, multi-homed BGP routing & sub-10ms global DNS resolution.',
    color: 0xf59e0b
  }
];

export function initHero3D(container: HTMLElement) {
  if (!container) return;

  const canvas = container.querySelector('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  // Scene setup
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(6.8, 5.2, 7.8);
  camera.lookAt(0, 0.2, 0);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.3);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 2.4);
  mainLight.position.set(6, 10, 5);
  mainLight.castShadow = true;
  mainLight.shadow.mapSize.width = 1024;
  mainLight.shadow.mapSize.height = 1024;
  mainLight.shadow.camera.near = 0.5;
  mainLight.shadow.camera.far = 25;
  mainLight.shadow.camera.left = -5;
  mainLight.shadow.camera.right = 5;
  mainLight.shadow.camera.top = 5;
  mainLight.shadow.camera.bottom = -5;
  mainLight.shadow.bias = -0.0005;
  scene.add(mainLight);

  // Hostamble Signature Red/Orange Accent Rim Light
  const redRimLight = new THREE.PointLight(0xff501a, 4.5, 12);
  redRimLight.position.set(-3.5, 3, -2.5);
  scene.add(redRimLight);

  // Cyber Cyan Uplink Light
  const cyanLight = new THREE.PointLight(0x06b6d4, 3.2, 10);
  cyanLight.position.set(3, 2, -3);
  scene.add(cyanLight);

  // Master group that responds to drag & idle rotation
  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // 1. BASE PODIUM (Dark metallic bevel with glowing trim)
  const podiumGroup = new THREE.Group();
  masterGroup.add(podiumGroup);

  // Soft ground shadow plane
  const shadowGeo = new THREE.PlaneGeometry(8, 8);
  const shadowCanvas = document.createElement('canvas');
  shadowCanvas.width = 128;
  shadowCanvas.height = 128;
  const sCtx = shadowCanvas.getContext('2d')!;
  const sGrad = sCtx.createRadialGradient(64, 64, 10, 64, 64, 64);
  sGrad.addColorStop(0, 'rgba(20, 10, 5, 0.45)');
  sGrad.addColorStop(0.5, 'rgba(255, 80, 26, 0.12)');
  sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
  sCtx.fillStyle = sGrad;
  sCtx.fillRect(0, 0, 128, 128);
  const shadowTex = new THREE.CanvasTexture(shadowCanvas);
  const shadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    depthWrite: false
  });
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
  shadowMesh.rotation.x = -Math.PI / 2;
  shadowMesh.position.y = -0.85;
  podiumGroup.add(shadowMesh);

  // Cylindrical titanium pedestal base
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x141722,
    metalness: 0.85,
    roughness: 0.22
  });
  const baseMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(2.6, 2.8, 0.28, 48),
    baseMat
  );
  baseMesh.position.y = -0.7;
  baseMesh.receiveShadow = true;
  baseMesh.castShadow = true;
  podiumGroup.add(baseMesh);

  // Glowing neon orange accent ring on base
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0xff501a,
    emissive: 0xff501a,
    emissiveIntensity: 2.2,
    roughness: 0.2
  });
  const ringMesh = new THREE.Mesh(
    new THREE.TorusGeometry(2.7, 0.035, 16, 64),
    ringMat
  );
  ringMesh.rotation.x = Math.PI / 2;
  ringMesh.position.y = -0.68;
  podiumGroup.add(ringMesh);

  // Secondary inner platform tier
  const tier2Mat = new THREE.MeshStandardMaterial({
    color: 0x1e2230,
    metalness: 0.75,
    roughness: 0.35
  });
  const tier2Mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(2.2, 2.3, 0.16, 48),
    tier2Mat
  );
  tier2Mesh.position.y = -0.52;
  tier2Mesh.receiveShadow = true;
  tier2Mesh.castShadow = true;
  podiumGroup.add(tier2Mesh);

  // 2. CENTRAL CLOUD SERVER TOWER (Multi-Bay Enterprise Blade Cluster)
  const serverGroup = new THREE.Group();
  serverGroup.position.y = 0.3;
  masterGroup.add(serverGroup);

  // Server Main Chassis Column
  const chassisMat = new THREE.MeshStandardMaterial({
    color: 0x161922,
    metalness: 0.9,
    roughness: 0.25
  });
  const chassis = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.8, 1.5),
    chassisMat
  );
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  serverGroup.add(chassis);

  // Chassis Front Bezel with Hostamble Brand Accent lines
  const frontPlateMat = new THREE.MeshStandardMaterial({
    color: 0x0f1118,
    metalness: 0.8,
    roughness: 0.3
  });
  const frontPlate = new THREE.Mesh(
    new THREE.BoxGeometry(1.36, 1.64, 0.08),
    frontPlateMat
  );
  frontPlate.position.z = 0.76;
  serverGroup.add(frontPlate);

  // 4 Hot-Swappable Server Blade Drawers with Animated Status LEDs
  const ledMeshes: THREE.Mesh[] = [];
  const bladeMat = new THREE.MeshStandardMaterial({
    color: 0x222634,
    metalness: 0.7,
    roughness: 0.4
  });

  for (let i = 0; i < 4; i++) {
    const yPos = 0.52 - i * 0.35;

    // Blade handle bar
    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.24, 0.05),
      bladeMat
    );
    blade.position.set(0, yPos, 0.81);
    blade.castShadow = true;
    serverGroup.add(blade);

    // Activity LED bar (emerald / orange / cyan)
    const ledColor = i === 1 ? 0xff501a : (i === 2 ? 0x06b6d4 : 0x10b981);
    const ledMat = new THREE.MeshStandardMaterial({
      color: ledColor,
      emissive: ledColor,
      emissiveIntensity: 1.8,
      roughness: 0.1
    });
    const led = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.05, 0.02),
      ledMat
    );
    led.position.set(0.42, yPos, 0.84);
    serverGroup.add(led);
    ledMeshes.push(led);

    // Drive status dot
    const dotMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x10b981,
      emissiveIntensity: 1.5
    });
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.025, 8, 8),
      dotMat
    );
    dot.position.set(0.24, yPos, 0.84);
    serverGroup.add(dot);
    ledMeshes.push(dot);
  }

  // Glowing Hostamble Pulsing Reactor Core (center of tower)
  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xff501a,
    emissive: 0xff501a,
    emissiveIntensity: 3.0,
    roughness: 0.1
  });
  const coreMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.25, 24, 24),
    coreMat
  );
  coreMesh.position.set(0, 0, 0);
  serverGroup.add(coreMesh);

  // Outer Glass Shield Cylinder around Core
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.28,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.9,
    ior: 1.5
  });
  const glassCylinder = new THREE.Mesh(
    new THREE.CylinderGeometry(0.36, 0.36, 0.9, 24),
    glassMat
  );
  glassCylinder.position.set(0, 0, 0);
  serverGroup.add(glassCylinder);

  // Top High-Speed Cooling Turbine (spins continuously)
  const fanGroup = new THREE.Group();
  fanGroup.position.set(0, 0.92, 0);
  serverGroup.add(fanGroup);

  const fanRingMat = new THREE.MeshStandardMaterial({
    color: 0xff501a,
    emissive: 0xff501a,
    emissiveIntensity: 1.2,
    metalness: 0.6
  });
  const fanRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.55, 0.04, 16, 32),
    fanRingMat
  );
  fanRing.rotation.x = Math.PI / 2;
  fanGroup.add(fanRing);

  // 6 Turbine Blades
  const bladeGeo = new THREE.BoxGeometry(0.44, 0.02, 0.1);
  const fanBladeMat = new THREE.MeshStandardMaterial({
    color: 0x333a4d,
    metalness: 0.8,
    roughness: 0.2
  });
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI) / 3;
    const fb = new THREE.Mesh(bladeGeo, fanBladeMat);
    fb.rotation.y = angle;
    fb.rotation.z = 0.25; // angled pitch
    fanGroup.add(fb);
  }

  // 3. DUAL FLOATING HOLOGRAPHIC ORBITAL RINGS
  const ring1Group = new THREE.Group();
  ring1Group.position.y = 0.3;
  ring1Group.rotation.x = 0.45;
  ring1Group.rotation.z = 0.2;
  masterGroup.add(ring1Group);

  const orbit1Mat = new THREE.MeshStandardMaterial({
    color: 0x06b6d4,
    emissive: 0x06b6d4,
    emissiveIntensity: 1.4,
    transparent: true,
    opacity: 0.75,
    roughness: 0.3
  });
  const orbit1Mesh = new THREE.Mesh(
    new THREE.TorusGeometry(1.95, 0.022, 16, 80),
    orbit1Mat
  );
  ring1Group.add(orbit1Mesh);

  // Counter-rotating tilted ring
  const ring2Group = new THREE.Group();
  ring2Group.position.y = 0.3;
  ring2Group.rotation.x = -0.55;
  ring2Group.rotation.z = -0.3;
  masterGroup.add(ring2Group);

  const orbit2Mat = new THREE.MeshStandardMaterial({
    color: 0xff501a,
    emissive: 0xff501a,
    emissiveIntensity: 1.6,
    transparent: true,
    opacity: 0.65,
    roughness: 0.3
  });
  const orbit2Mesh = new THREE.Mesh(
    new THREE.TorusGeometry(2.15, 0.02, 16, 80),
    orbit2Mat
  );
  ring2Group.add(orbit2Mesh);

  // 4 Data Packets riding the orbit
  const packets: THREE.Mesh[] = [];
  for (let i = 0; i < 4; i++) {
    const pMat = new THREE.MeshStandardMaterial({
      color: i % 2 === 0 ? 0xffffff : 0xff501a,
      emissive: i % 2 === 0 ? 0x06b6d4 : 0xff501a,
      emissiveIntensity: 3.5
    });
    const pMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.065, 12, 12),
      pMat
    );
    ring1Group.add(pMesh);
    packets.push(pMesh);
  }

  // 4. INTERACTIVE 3D FEATURE SATELLITES (Floating Station Nodes)
  const stationObjects: {
    mesh: THREE.Group;
    data: StationData;
    initialPos: THREE.Vector3;
    glowMat: THREE.MeshStandardMaterial;
    floatOffset: number;
  }[] = [];

  const interactiveMeshes: THREE.Object3D[] = [];

  STATIONS.forEach((data, index) => {
    const group = new THREE.Group();
    const angle = (index * Math.PI) / 2 + Math.PI / 4;
    const radius = 2.45;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = index % 2 === 0 ? 0.35 : -0.05;

    group.position.set(x, y, z);
    const initialPos = new THREE.Vector3(x, y, z);

    // Glowing core material for the satellite
    const glowMat = new THREE.MeshStandardMaterial({
      color: data.color,
      emissive: data.color,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.8
    });

    // Glass shell material
    const shellMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
      roughness: 0.15,
      metalness: 0.3,
      transmission: 0.85
    });

    if (data.id === 'nvme') {
      // 3D SSD Cartridge Shape
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.45, 0.08), glowMat);
      const shell = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.52, 0.12), shellMat);
      group.add(body, shell);
    } else if (data.id === 'litespeed') {
      // High-speed Diamond Turbine Crystal
      const octa = new THREE.Mesh(new THREE.OctahedronGeometry(0.26), glowMat);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.02, 12, 24), glowMat);
      ring.rotation.x = Math.PI / 3;
      group.add(octa, ring);
    } else if (data.id === 'shield') {
      // 3D Security Shield Prism
      const shield = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.42, 4), glowMat);
      shield.rotation.y = Math.PI / 4;
      shield.rotation.x = Math.PI;
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.02, 12, 24), glowMat);
      group.add(shield, ring);
    } else {
      // 99.9% Cloud Anycast Globe
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), glowMat);
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.018, 12, 24), glowMat);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.018, 12, 24), glowMat);
      ring2.rotation.x = Math.PI / 2;
      group.add(sphere, ring1, ring2);
    }

    // Invisible larger hit sphere for effortless raycasting/clicking
    const hitSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    hitSphere.userData = { stationId: data.id };
    group.add(hitSphere);
    interactiveMeshes.push(hitSphere);

    masterGroup.add(group);
    stationObjects.push({
      mesh: group,
      data,
      initialPos,
      glowMat,
      floatOffset: index * 1.5
    });
  });

  // 5. AMBIENT DATA PARTICLES (Energy Sparks)
  const particleCount = 45;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  const particleVelocities: { radius: number; angle: number; speed: number; y: number; ySpeed: number }[] = [];

  for (let i = 0; i < particleCount; i++) {
    const radius = 0.8 + Math.random() * 2.2;
    const angle = Math.random() * Math.PI * 2;
    const y = -0.5 + Math.random() * 2.0;

    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = y;
    particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

    particleVelocities.push({
      radius,
      angle,
      speed: 0.008 + Math.random() * 0.012,
      y,
      ySpeed: 0.003 + Math.random() * 0.005
    });
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0xff501a,
    size: 0.07,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });
  const particleSystem = new THREE.Points(particleGeo, particleMat);
  masterGroup.add(particleSystem);

  // 6. INTERACTION & CONTROLS (Drag to Rotate, Parallax Tilt, Raycasting)
  let isDragging = false;
  let previousMouseX = 0;
  let previousMouseY = 0;
  let targetRotationY = 0.4;
  let targetRotationX = 0.12;
  let currentRotationY = 0.4;
  let currentRotationX = 0.12;
  let autoRotateSpeed = 0.0035;

  let mouseX = 0;
  let mouseY = 0;
  let targetParallaxX = 0;
  let targetParallaxY = 0;
  let currentParallaxX = 0;
  let currentParallaxY = 0;

  let activeStationId: string | null = null;
  let hoveredStationId: string | null = null;

  // DOM elements for tooltip & status HUD
  const hudElement = container.querySelector('[data-hero3d-hud]') as HTMLElement;
  const stationBadge = container.querySelector('[data-station-badge]') as HTMLElement;
  const stationTitle = container.querySelector('[data-station-title]') as HTMLElement;
  const stationMetric = container.querySelector('[data-station-metric]') as HTMLElement;
  const stationDesc = container.querySelector('[data-station-desc]') as HTMLElement;
  const pillButtons = container.querySelectorAll<HTMLButtonElement>('[data-station-select]');

  function updateHUD(station: StationData) {
    if (!hudElement) return;
    if (stationBadge) stationBadge.textContent = station.badge;
    if (stationTitle) stationTitle.textContent = station.name;
    if (stationMetric) {
      stationMetric.textContent = station.metric;
      stationMetric.style.color = `#${station.color.toString(16).padStart(6, '0')}`;
    }
    if (stationDesc) stationDesc.textContent = station.description;

    pillButtons.forEach(btn => {
      if (btn.dataset.stationSelect === station.id) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Set default initial HUD station (LiteSpeed)
  updateHUD(STATIONS[1]);

  // Pill click handlers to focus stations
  pillButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.stationSelect;
      const found = STATIONS.find(s => s.id === id);
      if (found) {
        activeStationId = found.id;
        updateHUD(found);
        // Rotate smoothly toward this station
        const idx = STATIONS.findIndex(s => s.id === id);
        const targetAngle = -((idx * Math.PI) / 2 + Math.PI / 4) + Math.PI / 2;
        targetRotationY = targetAngle;
      }
    });
  });

  // Raycasting for 3D clicks / hovers
  const raycaster = new THREE.Raycaster();
  const mouseVec = new THREE.Vector2();

  function onPointerMove(e: PointerEvent) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseVec.x = (x / rect.width) * 2 - 1;
    mouseVec.y = -(y / rect.height) * 2 + 1;

    mouseX = mouseVec.x;
    mouseY = mouseVec.y;
    targetParallaxX = mouseX * 0.18;
    targetParallaxY = -mouseY * 0.12;

    if (isDragging) {
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      targetRotationY += deltaX * 0.007;
      targetRotationX += deltaY * 0.005;

      // Clamp X rotation so it doesn't flip over
      targetRotationX = Math.max(-0.25, Math.min(0.55, targetRotationX));

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    } else {
      // Check hover
      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes);
      if (intersects.length > 0) {
        const id = intersects[0].object.userData.stationId;
        if (hoveredStationId !== id) {
          hoveredStationId = id;
          canvas.style.cursor = 'pointer';
        }
      } else {
        if (hoveredStationId !== null) {
          hoveredStationId = null;
          canvas.style.cursor = 'grab';
        }
      }
    }
  }

  function onPointerDown(e: PointerEvent) {
    isDragging = true;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
    canvas.style.cursor = 'grabbing';
    canvas.setPointerCapture(e.pointerId);
  }

  function onPointerUp(e: PointerEvent) {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = hoveredStationId ? 'pointer' : 'grab';
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch (_) {}

      // If clicked without substantial dragging, select the hovered station
      raycaster.setFromCamera(mouseVec, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes);
      if (intersects.length > 0) {
        const id = intersects[0].object.userData.stationId;
        const station = STATIONS.find(s => s.id === id);
        if (station) {
          activeStationId = station.id;
          updateHUD(station);
        }
      }
    }
  }

  canvas.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);

  // Resize handler
  function handleResize() {
    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    camera.aspect = width / height;

    // Adjust camera distance for mobile / smaller screens so nothing is clipped
    if (width < 500) {
      camera.position.set(8.6, 6.4, 9.6);
    } else if (width < 768) {
      camera.position.set(7.6, 5.8, 8.6);
    } else {
      camera.position.set(6.8, 5.2, 7.8);
    }

    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  const resizeObserver = new ResizeObserver(() => handleResize());
  resizeObserver.observe(container);
  handleResize();

  // Visibility optimization (IntersectionObserver)
  let isVisible = true;
  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0].isIntersecting;
    },
    { rootMargin: '100px' }
  );
  visibilityObserver.observe(container);

  // 7. RENDER ANIMATION LOOP
  const startTime = performance.now();
  let animId = 0;

  function animate() {
    animId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const time = (performance.now() - startTime) * 0.001;

    // Auto rotate when idle
    if (!isDragging) {
      targetRotationY += autoRotateSpeed;
    }

    // Smooth inertia interpolation
    currentRotationY += (targetRotationY - currentRotationY) * 0.08;
    currentRotationX += (targetRotationX - currentRotationX) * 0.08;
    currentParallaxX += (targetParallaxX - currentParallaxX) * 0.05;
    currentParallaxY += (targetParallaxY - currentParallaxY) * 0.05;

    masterGroup.rotation.y = currentRotationY + currentParallaxX;
    masterGroup.rotation.x = currentRotationX + currentParallaxY;

    // Gentle global hover float
    masterGroup.position.y = Math.sin(time * 1.5) * 0.08;

    // Spin Top High-Speed Cooling Turbine
    fanGroup.rotation.y = time * 3.5;

    // Rotate Holographic Rings
    ring1Group.rotation.z = time * 0.45;
    ring2Group.rotation.z = -time * 0.38;

    // Move Data Packets along Orbit Ring 1
    packets.forEach((p, i) => {
      const pAngle = time * 0.8 + (i * Math.PI) / 2;
      p.position.x = Math.cos(pAngle) * 1.95;
      p.position.y = Math.sin(pAngle) * 1.95;
    });

    // Pulse Reactor Core
    const pulse = Math.sin(time * 3) * 0.5 + 0.5;
    coreMat.emissiveIntensity = 2.0 + pulse * 2.2;
    coreMesh.scale.setScalar(1 + pulse * 0.12);

    // Random Micro-flicker on Server LED Activity Lights
    if (Math.random() < 0.15) {
      const idx = Math.floor(Math.random() * ledMeshes.length);
      const targetLedMat = ledMeshes[idx].material as THREE.MeshStandardMaterial;
      targetLedMat.emissiveIntensity = 1.0 + Math.random() * 2.5;
    }

    // Animate Satellite Feature Nodes (Bobbing, Hover Scale, and Spin)
    stationObjects.forEach((st) => {
      const isTarget = st.data.id === activeStationId || st.data.id === hoveredStationId;
      
      // Floating harmonic wave
      const floatY = Math.sin(time * 2.2 + st.floatOffset) * 0.12;
      st.mesh.position.y = st.initialPos.y + floatY;

      // Slow self-spin
      st.mesh.rotation.y = time * 0.8 + st.floatOffset;

      // Glow & Scale response to hover/active
      const targetScale = isTarget ? 1.25 : 1.0;
      st.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);

      const targetEmissive = isTarget ? 3.4 : 1.6;
      st.glowMat.emissiveIntensity = THREE.MathUtils.lerp(
        st.glowMat.emissiveIntensity,
        targetEmissive,
        0.15
      );
    });

    // Animate Ambient Data Particles
    const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
    const positions = posAttr.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      const vel = particleVelocities[i];
      vel.angle += vel.speed;
      vel.y += vel.ySpeed;

      if (vel.y > 2.4) {
        vel.y = -0.5;
      }

      positions[i * 3] = Math.cos(vel.angle) * vel.radius;
      positions[i * 3 + 1] = vel.y;
      positions[i * 3 + 2] = Math.sin(vel.angle) * vel.radius;
    }
    posAttr.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();

  // Return teardown function for clean memory management
  return function destroy() {
    cancelAnimationFrame(animId);
    visibilityObserver.disconnect();
    resizeObserver.disconnect();
    canvas.removeEventListener('pointerdown', onPointerDown);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    renderer.dispose();
  };
}
