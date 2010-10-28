var Part3Effect = function ( scene ) {

	Effect.call( this );

	var geometry, geometry2, object, objects, toruses,
	angle = 0, time, lastTime = 0,
	timeStep = TUNE.getMS() / 8, timeStart = TUNE.getPatternMS( 23.9 ), timeEnd = TUNE.getPatternMS( 32 );

	this.init = function () {

		toruses = [];
		geometry = new Torus5();
		geometry2 = new TorusFlat5();

		for ( var i = 20, j = 0; i < 23; i += 1 / TUNE.getRows(), j ++ ) {

			object = new THREE.Mesh( geometry2, new THREE.MeshColorStrokeMaterial( 0xffffff, 0.3 ) );

			object.position.z = i * - TUNE.getMS() * TUNE.getRows();
			object.rotation.x = 90 * Math.PI / 180;
			object.rotation.y = i * 30 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 20;

			toruses.push( object );

		}

		for ( var i = 24, j = 0; i < 31.4; i += 1 / TUNE.getRows() * 0.25, j ++ ) {

			object = new THREE.Mesh( geometry2, new THREE.MeshColorStrokeMaterial( 0xffffff, 0.3 ) );

			object.position.z = i * - TUNE.getMS() * TUNE.getRows();
			object.rotation.x = 90 * Math.PI / 180;
			object.rotation.y = i * 30 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 20;

			toruses.push( object );

		}

		for ( var i = 24, j = 0; i < 32; i += 1 / TUNE.getRows(), j ++ ) {

			object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0x101010 ), new THREE.MeshColorStrokeMaterial( 0x808080 ) ] );

			object.position.z = i * - TUNE.getMS() * TUNE.getRows();
			object.rotation.x = 90 * Math.PI / 180;
			object.rotation.y = i * 30 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 300;

			toruses.push( object );

			//

			if ( ( j + 3 )  % 3 == 0 ) {

				object = new THREE.Mesh( geometry2, new THREE.MeshColorFillMaterial( 0xffffff, 0.3 ) );

				object.position.z = i * - TUNE.getMS() * TUNE.getRows();
				object.rotation.x = 90 * Math.PI / 180;
				object.rotation.y = i * 30 * Math.PI / 180;

				object.scale.x = object.scale.y = object.scale.z = 200;

				toruses.push( object );

			}

		}

		geometry = new Tetrahedron(); // new Cube( 40, 40, 40 );

	};

	this.show = function () {

		for ( var i = 0, l = toruses.length; i < l; i++ ) {

			scene.addObject( toruses[ i ] );

		}

		objects = [];
		lastTime = 0;

	};

	this.hide = function () {

		for ( var i = 0, l = toruses.length; i < l; i++ ) {

			scene.removeObject( toruses[ i ] );

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

			angle += 0.2;

			object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0xa0a0a0 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ] );

			object.position.x = Math.cos( angle ) * 200;
			object.position.y = Math.sin( angle ) * 200;
			object.position.z = - time - 800;

			object.rotation.x = Math.random() * 360 * Math.PI / 180;
			object.rotation.y = Math.random() * 360 * Math.PI / 180;
			object.rotation.z = Math.random() * 360 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 30;

			objects.push( object );

			scene.addObject( object );

			//

			object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0xa0a0a0 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ] );

			object.position.x = Math.cos( angle + 3.14 ) * 150;
			object.position.y = Math.sin( angle + 3.14 ) * 150;
			object.position.z = - time - 500;

			object.rotation.x = Math.random() * 360 * Math.PI / 180;
			object.rotation.y = Math.random() * 360 * Math.PI / 180;
			object.rotation.z = Math.random() * 360 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 30;

			objects.push( object );

			scene.addObject( object );

			lastTime = time;

		}

	};

};


Part3Effect.prototype = new Effect();
Part3Effect.prototype.constructor = Part3Effect;
