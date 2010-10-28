var Part7Effect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects, cubes,
	time, lastTime = 0, timeStep = TUNE.getMS() / 6,
	timeStart = TUNE.getPatternMS( 56 ), timeEnd = TUNE.getPatternMS( 64 );

	this.init = function () {

		objects = []; cubes = [];

		geometry = new Cube( 50, 50, 50 );

		for ( var i = 0; i < 50; i ++ ) {

			for ( var j = 0; j < 14; j ++ ) {

				if ( Math.random() > 0.5 ) {

					continue;

				}

				object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0x202020 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ] );

				object.position.x = j * 600 - 3300;
				object.position.z = ( i * - TUNE.getMS() ) - TUNE.getPatternMS( 56 );

				object.scale.x = object.scale.z = Math.random() * 4 + 2;
				object.scale.y = Math.random() * 30 + 2;

				object.position.y = - 200 + ( object.scale.y * 50 ) / 2;

				cubes.push( object);
				objects.push( object );

			}

		}

		geometry = new Plane( 100, 22000, 1, 100 );

		object = new THREE.Mesh( geometry, new THREE.MeshColorFillMaterial( 0x808080 ) );
		object.overdraw = true;

		object.position.y = - 200;
		object.position.z = - TUNE.getPatternMS( 56 ) - 11000;

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

		/*
		for ( var i = 0, l = cubes.length; i < l; i ++ ) {

			object = cubes[ i ];
			object.position.y = Math.sin( k * 10 ) * 1000;

		}
		*/

	};

};

Part7Effect.prototype = new Effect();
Part7Effect.prototype.constructor = Part7Effect;
