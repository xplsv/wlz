var DummyEffect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects;

	this.init = function () {

		objects = [];

		geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 100, 0, 0 ) ) );
		// geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 0, 0 ) ) );
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 100, 0, 0 ) ) );

		for ( var i = 0; i < TUNE.getRows(); i++ ) {

			object = new THREE.Line( geometry, new THREE.LineColorMaterial( 0xffffff, 0.5 ) );
			object.scale.x = i % TUNE.getRows() == 0 ? 2 : 1;
			object.position.y = - 100;
			object.position.z = i * - TUNE.getMS();
			object.rotation.x = -90 * Math.PI / 180;
			objects.push( object );
		}
	};

	this.show = function () {

		for ( var i = 0, l = objects.length; i < l; i++ ) {

			scene.addObject( objects[ i ] );

		}

	};

	this.hide = function () {

		for ( var i = 0, l = objects.length; i < l; i++ ) {

			scene.removeObject( objects[ i ] );

		}

	};

	this.update = function ( k ) {

		for ( var i = 0, l = objects.length; i < l; i++ ) {

			object = objects[ i ];

			if ( - object.position.z < TUNE.getCurrentTime() - 300 ) {

				object.position.z -= TUNE.getMS() * TUNE.getRows();

			}
		}

	};

};


DummyEffect.prototype = new Effect();
DummyEffect.prototype.constructor = DummyEffect;
