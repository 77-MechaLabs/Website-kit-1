// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
scene.add(directionalLight);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load(
  'path/to/your/model.glb',
  function (gltf) {
    const model = gltf.scene;
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error('Error loading 3D model:', error);
  }
);

// Set the initial camera position
camera.position.z = 5;

// Create an animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the model
  if (model) {
    model.rotation.y += 0.01;
  }

  // Render the scene with the camera
  renderer.render(scene, camera);
}

// Start the animation loop
animate();
