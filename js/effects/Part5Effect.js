var Part5Effect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects, lines, levels,
	time, lastTime = 0, timeStep = TUNE.getMS() / 6,
	timeStart = TUNE.getPatternMS( 40 ), timeEnd = TUNE.getPatternMS( 47.5 );

	this.init = function () {

		lines = [];

		geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 150, 0, 0 ) ) );
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 150, 0, 0 ) ) );

		for ( var i = 40; i < 47.5; i += 1 / TUNE.getRows() ) {

			object = new THREE.Line( geometry, new THREE.LineColorMaterial( 0x808080, 0.2 ) );

			object.position.y = - 200;
			object.position.z = ( i * - TUNE.getMS() * TUNE.getRows() );

			lines.push( object );

		}

		geometry = new Plane( 50, 50 );

	};

	this.show = function () {

		objects = [];
		lastTime = 0;

		for ( var i = 0, l = lines.length; i < l; i++ ) {

			scene.addObject( lines[ i ] );

		}

	};

	this.hide = function () {

		for ( var i = 0, l = lines.length; i < l; i++ ) {

			scene.removeObject( lines[ i ] );

		}

		for ( var i = 0, l = objects.length; i < l; i++ ) {

			scene.removeObject( objects[ i ] );

		}

	};

	this.update = function ( k ) {

		time = TUNE.getCurrentTime();

		if ( time < timeStart || time > timeEnd ) {

			return;

		}

		if ( time > lastTime + timeStep ) {

			var levels = Math.random() * 20 * ( k - 0.5 ),
			scaleX = Math.random() * 5,
			scaleY = Math.random() * 5,
			positionX = Math.random() * 150 - 75;

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

	};

};

Part5Effect.prototype = new Effect();
Part5Effect.prototype.constructor = Part5Effect;
