import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Canvas
const canvas = document.querySelector("canvas.webgl");
const animationButton1 = document.getElementById("animationButton1");
const animationButton2 = document.getElementById("animationButton2");
const animationButton3 = document.getElementById("animationButton3");

// Add click event listeners to the buttons
animationButton1.addEventListener("click", () => changeAnimation(0));
animationButton2.addEventListener("click", () => changeAnimation(1));
animationButton3.addEventListener("click", () => changeAnimation(2));
document.addEventListener("keydown", (event) => {
  // console.log(event.key);
  if (event.key == "1") {
    changeAnimation(0);
  } else if (event.key == "2") {
    changeAnimation(1);
  } else if (event.key == "3") {
    changeAnimation(2);
  }
});

let animation = null;
function changeAnimation(animationIndex) {
  if (mixer) {
    mixer.stopAllAction();
  }
  const newAction = mixer.clipAction(animation[animationIndex]);
  newAction.play();
}

// Scene
const scene = new THREE.Scene();

/* Models */

const gltfLoader = new GLTFLoader();

let mixer = null;
gltfLoader.load("/models/Fox.gltf", (gltf) => {
  mixer = new THREE.AnimationMixer(gltf.scene);
  animation = gltf.animations;
  const action = mixer.clipAction(animation[1]);
  action.play();
  gltf.scene.scale.set(0.025, 0.025, 0.025);
  scene.add(gltf.scene);
});

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.BoxGeometry(6, 6, 0.1),
  new THREE.MeshNormalMaterial()
);
floor.position.y = -0.1;
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(2, 2, 2);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.75, 0);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  //update mixer
  if (mixer != null) {
    mixer.update(deltaTime);
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
