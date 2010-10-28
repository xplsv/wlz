var Part4Effect = function ( scene ) {

	Effect.call( this );

	var geometry, geometry2, object, object2, objects, icosas;

	this.init = function () {

		objects = []; icosas = [];

		geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( - 150, 0, 0 ) ) );
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 150, 0, 0 ) ) );

		for ( var i = 32.5; i < 39; i += 1 / TUNE.getRows() ) {

			object = new THREE.Line( geometry, new THREE.LineColorMaterial( 0x808080, 0.2 ) );

			object.position.y = - 200;
			object.position.z = ( i * - TUNE.getMS() * TUNE.getRows() );

			objects.push( object );

		}

		geometry = new Icosa();
		geometry2 = new Circle();

		for ( var i = 1; i < 8; i += 0.4 ) {

			object = new THREE.Mesh( geometry, [ new THREE.MeshColorFillMaterial( 0x000000, 0.2 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ] );
			// object.overdraw = true;

			object.position.x = Math.random() * 4000 - 2000;
			// object.position.y = Math.random() * 500;
			object.position.z = ( i * - TUNE.getMS() * TUNE.getRows() ) - TUNE.getPatternMS( 32 );

			object.rotation.x = Math.random() * 200 - 100;
			object.rotation.y = Math.random() * 200 - 100;
			object.rotation.z = Math.random() * 200 - 100;

			object.scale.x = object.scale.y = object.scale.z = Math.random() * 500 + 50;

			objects.push( object );
			icosas.push( object );

			object2 = new THREE.Mesh( geometry2, new THREE.MeshColorFillMaterial( 0x000000, 0.2 ) );
			// object2.overdraw = true;

			object2.position.x = object.position.x;
			object2.position.y = - 200;
			object2.position.z = object.position.z;

			object2.rotation.x = - 180 * Math.PI / 180;

			object2.scale.x = object2.scale.y = object2.scale.z = object.scale.x;

			objects.push( object2 );

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

		for ( var i = 0, l = icosas.length; i < l; i++ ) {

			object = icosas[ i ];
			object.rotation.x += 0.01;
			object.rotation.y += 0.005;
			object.position.y = Math.sin( object.rotation.x ) * 500 + 900;

		}

	};

};


Part4Effect.prototype = new Effect();
Part4Effect.prototype.constructor = Part4Effect;
