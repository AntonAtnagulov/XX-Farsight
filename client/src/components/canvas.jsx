import React, { useEffect } from "react";
import { useRef } from "react";
import * as THREE from "three";
import InitScene from "../classes/rendere";
import Model from "../classes/model";
import { Vector3 } from "three";
import { spinnerOff } from '../redux/rtkSlice';
import {useDispatch} from 'react-redux'

export default function Canvas() {
    const mountRef = useRef();
    const init = new InitScene();
    const loadManager = new THREE.LoadingManager()
    const dispatch = useDispatch()

    loadManager.onLoad = function() {
        dispatch(spinnerOff())
    }

    window.addEventListener('resize', () => {
        init.camera.aspect = window.innerWidth / window.innerHeight;
        init.camera.updateProjectionMatrix();
        init.renderer.setSize( window.innerWidth, window.innerHeight );
        if (window.innerWidth < 420) {
            init.camera.position.z = 200
        } else {
            init.camera.position.z = 160
        }
    })

    useEffect(() => {
        const modelMaterial = new THREE.MeshPhongMaterial({
            color: 0xd3d3d3,
            shininess: 90,
            flatShading: true,
        });
        const box = new Model('./models/FullFar1.stl', modelMaterial, new Vector3(0.6, 0.6, 0.6), loadManager);

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

            init.scene.traverse((obj) => {
                if (obj.isMesh) {
                    obj.geometry.dispose();
                    obj.material.dispose();
                    obj.geometry = null;
                    obj.material = null;
                    init.scene.remove(obj);
                }
            });
            init.scene.clear();
            init.renderer.dispose();
            mountRef?.current?.removeChild(init.renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
}
