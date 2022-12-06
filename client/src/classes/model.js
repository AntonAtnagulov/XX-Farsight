import * as THREE from "three";
import {STLLoader} from "../../node_modules/three/examples/jsm/loaders/STLLoader.js"

export default class Model {
    constructor(path, material, scale) {
        this.models = []
        this.material = material
        this.path = path
        this.scale = scale
    }

    initModel(scene) {
        const loader = new STLLoader()
        loader.load(
            this.path,
             (geometry) => {
                geometry.center()
                const material = this.material
                const mesh = new THREE.Mesh(geometry, material)
                mesh.rotateX(-Math.PI / 2)
                mesh.scale.set(...this.scale)
                mesh.castShadow = true; //default is false
                mesh.receiveShadow = true; //default
                scene.add(mesh)
                this.models.push(mesh)
            })
            
    }
}
