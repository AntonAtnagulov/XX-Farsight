export default function onWindowResize(scene){
    scene.camera.aspect = window.innerWidth / window.innerHeight;
    scene.camera.updateProjectionMatrix();
    scene.renderer.setSize( window.innerWidth, window.innerHeight );
}