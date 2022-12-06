import React, { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import InitScene from "../classes/rendere";
import Model from "../classes/model";
import { Vector3 } from "three";

export default function Canvas() {
    const mountRef = useRef();
    const init = new InitScene();

    window.addEventListener('resize', () => {
        init.camera.aspect = window.innerWidth / window.innerHeight;
        init.camera.updateProjectionMatrix();
        init.renderer.setSize( window.innerWidth, window.innerHeight );
        if (window.innerWidth < 420) {
            init.camera.position.z = 250
        } else {
            init.camera.position.z = 170
        }
    })

    useEffect(() => {
        const modelMaterial = new THREE.MeshPhongMaterial({
            color: 0xd3d3d3,
            shininess: 30,
            flatShading: true,
        });
        const box = new Model('./models/FullFar1.stl', modelMaterial, new Vector3(0.6, 0.6, 0.6));

        init.initOrbitCOntrol();
        box.initModel(init.scene);

        function animate() {
            requestAnimationFrame(animate);
            init.renderer.render(init.scene, init.camera);
        }
        animate();

        return () => {
            init.scene.clear();
            init.render = null;
            document.body.removeChild(init.renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
}
