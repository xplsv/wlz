var Part1Effect = function ( scene ) {

	Effect.call( this );

	var geometry, object, objects;

	this.init = function () {

		objects = [];
		geometry = new Plane( 10, 2500, 1, 30 );

		for ( var i = 0; i < 12; i ++ ) {

			object = new THREE.Mesh( geometry, new THREE.MeshColorFillMaterial( 0xffffff ) );
			object.overdraw = true;

			object.position.x = Math.random() * 200 - 100;
			object.position.y = - 100;
			object.position.z = ( i * - TUNE.getMS() * TUNE.getRows() ) - 1250;
			object.rotation.x = - 90 * Math.PI / 180;

			objects.push( object );
		}

		geometry = new Torus3s();

		for ( var i = 4; i < 15.9; i += 1 / TUNE.getRows() ) {

			object = new THREE.Mesh( geometry, new THREE.MeshColorFillMaterial( 0x101010 ) );
			object.overdraw = true;

			object.position.z = i * - TUNE.getMS() * TUNE.getRows();
			object.rotation.x = 90 * Math.PI / 180;
			object.rotation.y = i * 30 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 300;

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

		

	};

};


Part1Effect.prototype = new Effect();
Part1Effect.prototype.constructor = Part1Effect;
