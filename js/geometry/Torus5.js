// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var Torus5 = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 1.250000, 0.000000, -0.000000 );
	v( 0.875000, 0.216506, -0.000000 );
	v( 0.875000, -0.216506, -0.000000 );
	v( 0.386271, 0.000000, -1.188821 );
	v( 0.270390, 0.216506, -0.832174 );
	v( 0.270390, -0.216506, -0.832174 );
	v( -1.011271, 0.000000, -0.734732 );
	v( -0.707890, 0.216506, -0.514312 );
	v( -0.707890, -0.216506, -0.514312 );
	v( -1.011271, 0.000000, 0.734732 );
	v( -0.707890, 0.216506, 0.514312 );
	v( -0.707890, -0.216506, 0.514312 );
	v( 0.386271, 0.000000, 1.188821 );
	v( 0.270390, 0.216506, 0.832174 );
	v( 0.270390, -0.216506, 0.832174 );

	f4( 0, 3, 4, 1 );
	f4( 1, 4, 5, 2 );
	f4( 0, 2, 5, 3 );
	f4( 3, 6, 7, 4 );
	f4( 4, 7, 8, 5 );
	f4( 5, 8, 6, 3 );
	f4( 6, 9, 10, 7 );
	f4( 7, 10, 11, 8 );
	f4( 8, 11, 9, 6 );
	f4( 9, 12, 13, 10 );
	f4( 10, 13, 14, 11 );
	f4( 11, 14, 12, 9 );
	f4( 12, 0, 1, 13 );
	f4( 13, 1, 2, 14 );
	f4( 14, 2, 0, 12 );

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, nx, ny, nz ) {

		scope.faces.push( new THREE.Face3( a, b, c, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	function f4( a, b, c, d, nx, ny, nz ) {

		scope.faces.push( new THREE.Face4( a, b, c, d, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	function uv( u1, v1, u2, v2, u3, v3, u4, v4 ) {

		var uv = [];
		uv.push( new THREE.UV( u1, v1 ) );
		uv.push( new THREE.UV( u2, v2 ) );
		uv.push( new THREE.UV( u3, v3 ) );
		if ( u4 && v4 ) uv.push( new THREE.UV( u4, v4 ) );
		scope.uvs.push( uv );
	}

	this.computeCentroids();
	this.computeNormals();

}

Torus5.prototype = new THREE.Geometry();
Torus5.prototype.constructor = Torus5;