import * as THREE from "three";
import {OrbitControls} from "../../node_modules/three/examples/jsm/controls/OrbitControls"

export default class InitScene {
    constructor () {
        this.scene = new THREE.Scene();
        this.camera = this.initCamera()
        this.renderer = this.initRenderer()
        this.lights = this.initLight()
    }

    initLight() { 
        const rearLight = new THREE.PointLight(0xF9FCE7, 0.7);
        rearLight.position.set(50, 30, -30)
        rearLight.castShadow = true

        const frontLight = new THREE.PointLight(0xCBF8FB,0.9);
        frontLight.position.set(-30, 30, 30)
        frontLight.castShadow = true

        frontLight.shadow.mapSize.width = 512; 
        frontLight.shadow.mapSize.height = 512; 
        frontLight.shadow.camera.near = 0.5; 
        frontLight.shadow.camera.far = 1000; 

        rearLight.shadow.mapSize.width = 512;
        rearLight.shadow.mapSize.height = 512;
        rearLight.shadow.camera.near = 0.5;
        rearLight.shadow.camera.far = 1000;

        this.scene.add(frontLight, rearLight)
        return [frontLight, rearLight]
    }

    lightHelperOn() {
        this.lights.forEach(light => {
            const pointLightHelper = new THREE.PointLightHelper( light, 1 );
            pointLightHelper.name = 'helper'
            this.scene.add(pointLightHelper)
        })
    }

    initCamera() {
        const camera = new THREE.PerspectiveCamera(
            25,
            window.innerWidth / window.innerHeight,
            0.1,
            400
          );

        if (window.innerWidth > 420) {
            camera.position.z = 160;
        } else {
            camera.position.z = 200
        }
        return camera
    }

    cameraInfo() {
        console.log({far: this.camera.far, position: this.camera.position, aspect: this.camera.aspect})
    }

    initRenderer() {
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(renderer.domElement);
        return renderer
    }

    initOrbitCOntrol() {
        const controls = new OrbitControls( this.camera, this.renderer.domElement );
        controls.minPolarAngle = Math.PI/2;
        controls.maxPolarAngle = Math.PI/2;
        controls.enableZoom = false;
        controls.enablePan = false;
    }
}

