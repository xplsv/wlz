var Part8Effect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects, frames, levels,
	time, lastTime = 0, timeStep = TUNE.getMS() / 6,
	timeStart = TUNE.getPatternMS( 56 ), timeEnd = TUNE.getPatternMS( 64 );

	this.init = function () {

		objects = [];

		geometry = new Plane( 100, 20000, 1, 100 );

		object = new THREE.Mesh( geometry, new THREE.MeshColorFillMaterial( 0xffffff, 0.5 ) );
		object.overdraw = true;

		object.position.y = - 200;
		object.position.z = - TUNE.getPatternMS( 64 ) - 10000;

		object.rotation.x = - 90 * Math.PI / 180;

		objects.push( object );

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

		

	};

};

Part8Effect.prototype = new Effect();
Part8Effect.prototype.constructor = Part8Effect;
