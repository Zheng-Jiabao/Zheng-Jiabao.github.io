var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var controls =new THREE.OrbitControls(camera,renderer.domElement);
controls.autoRotate=true;
controls.autoRotateSpeed = 10
/*var control2 = new THREE.FlyControls(camera,renderer.domElement);
control2.rollSpeed = Math.PI / 24; // 翻滚速度
control2.autoForward = false; //自动向前移动
control2.dragToLook = true;
control2.movementSpeed = 25; //移动速度*/

var Lights=[];

function New_Light(power,color,intensity,distance,posx,posy,posz){
	let tmp = new THREE.PointLight( color, intensity, distance );
	tmp.position.set( posx, posy, posz )
	tmp.power=power
	scene.add(tmp);
}
New_Light(100,0xffffff, 100, 0,0, 100, 0)
New_Light(100,0xffffff,100, 0,100, 0, 100)
New_Light(100,0xffffff,100, 0,0, 0, 100)
New_Light(100,0xffffff,100, 0,0, -100, 100)
New_Light(100,0xffffff,100, 0,1000, 0, 0)
New_Light(100,0xffffff,100, 0,-10, 0, 0)
New_Light(100,0xffffff,100, 0,50, 0, -100)

/*
scene.add(new THREE.AmbientLight(0x0c0c0c));

        let spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-400, -400, -400);

        let spotLight2 = new THREE.SpotLight(0xffffff);
        spotLight2.position.set(400, 800, 400);
*/

var loader = new THREE.FontLoader();

var searchurl = window.location.search.slice(1,window.location.search.length).replace(/%20/g, " ");

loader.load( 'js/helvetiker_regular.typeface.json', function ( font ) {

	var geometryT1 = new THREE.TextGeometry( searchurl, {
		font: font,
		size: 10,
		height: 5,
		curveSegments: 12,
		bevelEnabled: false,
		bevelThickness: 10,
		bevelSize: 8,
		bevelSegments: 5
	} );
	var materialT1 = new THREE.MeshPhysicalMaterial({color:0xff0000});
	materialT1.clearcoat =1
	var Text1 = new THREE.Mesh( geometryT1, materialT1 );
	scene.add( Text1 );

	var geometryT2 = new THREE.TextGeometry( '', {
		font: font,
		size: 10,
		height: 5,
		curveSegments: 12,
		bevelEnabled: false,
		bevelThickness: 10,
		bevelSize: 8,
		bevelSegments: 5
	} );
	var materialT2 = new THREE.MeshPhysicalMaterial({color:0xff0000});
	materialT1.clearcoat =1
	var Text2 = new THREE.Mesh( geometryT2, materialT2 );
	Text2.position.y=-10
	scene.add( Text2 );
	
} );

//geometryT2

camera.position.z = 100;

function animate() {
    requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}
animate();