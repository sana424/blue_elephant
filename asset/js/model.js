import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const canvas = document.getElementById('model-canvas');
const renderer = new THREE.WebGLRenderTarget({
    canvas,
    antialias : true,
    alpha: true,
})

const rotState = {y : 0};

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene(); // 정면
//카메라
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
); 
camera.position.set(0, 1, 4);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(3, 5, 3);
scene.add(dirLight);

const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-3, 2, -3);
scene.add(dirLight2);

const loader = new GLTFLoader();
let model = null;

loader.load(
    "./asset/model/base_basic_shaded.glb",
    (gltf)=> {
        model = gltf.scene;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        model.position.sub(center);

        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.set(0, size.y * 0.3, maxDim * 2);
        camera.lookAt(0,0,0);
    },

    (progress) => {
        const pct = Math.round((progress.loaded / (progress.total || 1)) * 100);
        console.log(pct);

    }
)

function animate(){
    requestAnimationFrame(animate);
    if(model){
        model.rotation.y = rotState.y;
    }
    renderer.render(scene, camera);
}

animate();