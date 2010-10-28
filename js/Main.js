var audio, sequencer,
camera, camera2, scene, renderer,
container;

var TUNE, QUALITY = 1;

var time;

init();

function init() {

	audio = document.getElementById( 'audio' );

	camera = new THREE.Camera( 60, 800 / 600, 1, 20000 );
	camera2 = new THREE.Camera( 60, 800 / 600, 1, 20000 );

	scene = new THREE.Scene();

	var ambientLight = new THREE.AmbientLight( Math.random() * 0x10 << 16 | Math.random() * 0x10 << 8 | Math.random() * 0x30 );
	scene.addLight( ambientLight );

	document.body.style.backgroundColor = ambientLight.color.__styleString;

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xff << 16 | Math.random() * 0xff << 8 | Math.random() * 0x80 );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() * 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.addLight( directionalLight );

	var directionalLight = new THREE.DirectionalLight( Math.random() * 0xff << 16 | Math.random() * 0xff << 8 | Math.random() * 0x80 );
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() * 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.addLight( directionalLight );


	renderer = new THREE.CanvasRenderer();
	renderer.setSize( 800, 600 );

	//

	TUNE = new Tune( audio );
	TUNE.setBPM( 132 );
	TUNE.setRows( 6 );

	sequencer = new Sequencer();

	// Camera

	sequencer.add( new TweenEffect( camera.position, { z: 300 }, { z: - TUNE.getBeatMS( 552 ) + 300 }, TWEEN.Easing.Linear.EaseNone ), 0, TUNE.getPatternMS( 92 ) );

	sequencer.add( new TweenEffect( camera.target.position, { z: 0 }, { z: - TUNE.getBeatMS( 552 ) }, TWEEN.Easing.Linear.EaseNone ), 0, TUNE.getPatternMS( 92 ) );

	sequencer.add( new TweenEffect( camera.target.position, { x: - 100, y: - 400 }, { x: 0, y: 0 }, TWEEN.Easing.Exponential.EaseIn ), 0, TUNE.getPatternMS( 12 ) );

	sequencer.add( new TweenEffect( camera.position, { x: 0, y: 0 }, { x: - 100, y: - 50 }, TWEEN.Easing.Quadratic.EaseOut ), TUNE.getPatternMS( 16 ), TUNE.getPatternMS( 20 ) );

	sequencer.add( new TweenEffect( camera.position, { x: - 100, y: - 50 }, { x: 0, y: 0 }, TWEEN.Easing.Quadratic.EaseInOut ), TUNE.getPatternMS( 20 ), TUNE.getPatternMS( 24 ) );


	// Scenes

	// sequencer.add( new DummyEffect( scene ), TUNE.getPatternMS( 0 ), TUNE.getPatternMS( 92 ) );
	sequencer.add( new Part1Effect( scene ), TUNE.getPatternMS( 0 ), TUNE.getPatternMS( 16 ) );
	sequencer.add( new Part2Effect( scene ), TUNE.getPatternMS( 12 ), TUNE.getPatternMS( 24 ) );
	sequencer.add( new Part3Effect( scene ), TUNE.getPatternMS( 12 ), TUNE.getPatternMS( 33 ) );
	sequencer.add( new Part4Effect( scene ), TUNE.getPatternMS( 24 ), TUNE.getPatternMS( 40 ) );
	sequencer.add( new Part5Effect( scene ), TUNE.getPatternMS( 24 ), TUNE.getPatternMS( 49 ) );
	sequencer.add( new Part6Effect( scene ), TUNE.getPatternMS( 40 ), TUNE.getPatternMS( 56 ) );
	sequencer.add( new Part7Effect( scene ), TUNE.getPatternMS( 40 ), TUNE.getPatternMS( 64 ) );
	sequencer.add( new Part8Effect( scene ), TUNE.getPatternMS( 64 ), TUNE.getPatternMS( 72 ) );

}

function start( pattern ) {

	document.body.removeChild( document.getElementById( 'launcher' ) );

	container = document.createElement( 'div' );
	container.appendChild( renderer.domElement );
	document.body.appendChild( container );

	time = document.createElement( 'div' );
	time.style.position = 'fixed';
	time.style.left = '0px';
	time.style.top = '0px';
	time.style.backgroundColor = '#ffffff';
	time.style.padding = '5px 10px';
	document.body.appendChild( time );

	audio.currentTime = TUNE.getBeatMS( pattern * TUNE.getRows() ) / 1000;
	audio.play();

	onWindowResize();
	window.addEventListener( 'resize', onWindowResize, false );

	document.addEventListener( 'keydown', onDocumentKeyDown, false );

	setInterval( loop, 1000 / 120 );
}

function onDocumentKeyDown( event ) {

	switch( event.keyCode ) {

		case 32:

			audio.paused ? audio.play() : audio.pause();
			break;

		case 37:

			audio.currentTime -= 1;
			break;

		case 39:

			audio.currentTime += 1;
			break;

	}

}

function onWindowResize( event ) {

	var width = window.innerWidth / QUALITY,
	height = window.innerHeight / QUALITY;

	camera.projectionMatrix = THREE.Matrix4.makePerspective( 60, width / height, 1, 20000 );
	camera2.projectionMatrix = THREE.Matrix4.makePerspective( 60, width / height, 1, 20000 );

	renderer.setSize( width, height );
	renderer.domElement.style.width = window.innerWidth + 'px';
	renderer.domElement.style.height = window.innerHeight + 'px';

}

function loop() {

	var currentTime = audio.currentTime;
	var ms = currentTime * 1000;

	time.innerHTML = ( Math.floor( ms / TUNE.getMS() ) % TUNE.getRows() ) + " / " + ( Math.floor( ( ms / TUNE.getRows() ) / TUNE.getMS() ) ) + " — " + Math.floor( ms );

	sequencer.update( ms );

	camera2.position.copy( camera.position );
	camera2.position.x += Math.sin( currentTime * 0.1 ) * 50;
	camera2.position.y += Math.cos( currentTime * 0.05 ) * 50;

	camera2.target.position.copy( camera.target.position );
	camera2.target.position.x += Math.cos( currentTime * 0.05 ) * 50;
	camera2.target.position.y += Math.sin( currentTime * 0.1 ) * 50;


	renderer.render( scene, camera2 );

}
