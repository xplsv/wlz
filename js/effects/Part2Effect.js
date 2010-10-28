var Part2Effect = function ( scene ) {

	Effect.call( this );

	var geometry, material, object, objects;

	this.init = function () {

		objects = [];
		geometry = new Tetrahedron();

		for ( var i = 16; i < 24; i += 1 / TUNE.getRows() * 0.2 ) {

			if ( Math.random() > 0.5 ) {

				material = [ new THREE.MeshColorFillMaterial( 0xa0a0a0 ), new THREE.MeshColorStrokeMaterial( 0xffffff ) ]

			} else {

				material = [ new THREE.MeshColorFillMaterial( 0x101010 ), new THREE.MeshColorStrokeMaterial( 0x808080 ) ];

			}

			object = new THREE.Mesh( geometry, material );

			object.position.x = Math.random() * 2000 - 1000;
			object.position.y = Math.random() * 2000 - 1000;
			object.position.z = i * - TUNE.getMS() * TUNE.getRows();

			object.rotation.x = Math.random() * 360 * Math.PI / 180;
			object.rotation.y = Math.random() * 360 * Math.PI / 180;
			object.rotation.z = Math.random() * 360 * Math.PI / 180;

			object.scale.x = object.scale.y = object.scale.z = 30;

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
			object.rotation.x += 0.01;
			object.rotation.y += 0.02;

		}

	};

};


Part2Effect.prototype = new Effect();
Part2Effect.prototype.constructor = Part2Effect;
