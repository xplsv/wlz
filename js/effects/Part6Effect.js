var Part6Effect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects, frames, levels,
	time, lastTime = 0, timeStep = TUNE.getMS() / 6,
	timeStart = TUNE.getPatternMS( 48 ), timeEnd = TUNE.getPatternMS( 56 );

	this.init = function () {

		frames = [];

		geometry = new Frame();

		for ( var i = 48, j = 0; i < 55.6; i += 1 / TUNE.getRows(), j ++ ) {

			object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0x101010 ), new THREE.MeshColorStrokeMaterial( 0x808080 ) ] );

			object.position.z = i * - TUNE.getMS() * TUNE.getRows();

			object.rotation.z = - ( i - 48 ) * 0.2;

			object.scale.x = object.scale.z = 300;
			object.scale.y = 300;

			frames.push( object );

		}

		geometry = new Plane( 50, 50 );

	};

	this.show = function () {

		objects = [];
		lastTime = 0;

		for ( var i = 0, l = frames.length; i < l; i++ ) {

			scene.addObject( frames[ i ] );

		}

	};

	this.hide = function () {

		for ( var i = 0, l = frames.length; i < l; i++ ) {

			scene.removeObject( frames[ i ] );

		}

		for ( var i = 0, l = objects.length; i < l; i++ ) {

			scene.removeObject( objects[ i ] );

		}

	};

	this.update = function ( k ) {
		/*
		time = TUNE.getCurrentTime();

		if ( time < timeStart || time > timeEnd ) {

			return;

		}

		if ( time > lastTime + timeStep ) {

			
			var levels = Math.random() * 20 * k,
			scaleX = Math.random() * 5,
			scaleY = Math.random() * 5,
			positionX = Math.random() * 400 - 200;

			for ( var i = 0; i < levels; i ++ ) {

				object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0x000000, 0.2 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ] );

				object.scale.x = scaleX;
				object.scale.y = scaleY;

				object.position.x = positionX;
				object.position.y = - 200 + ( i * 20 );
				object.position.z = - time - 800;

				object.rotation.x = - 90 * Math.PI / 180;

				objects.push( object );

				scene.addObject( object );

			}

			lastTime = time;

		}
		*/

	};

};

Part6Effect.prototype = new Effect();
Part6Effect.prototype.constructor = Part6Effect;
