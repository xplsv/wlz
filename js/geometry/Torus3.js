// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var Torus3 = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 1.250000, 0.000000, -0.000000 );
	v( 0.875000, 0.216506, -0.000000 );
	v( 0.875000, -0.216506, -0.000000 );
	v( -0.625000, 0.000000, -1.082532 );
	v( -0.437500, 0.216506, -0.757772 );
	v( -0.437500, -0.216506, -0.757772 );
	v( -0.625000, 0.000000, 1.082532 );
	v( -0.437500, 0.216506, 0.757772 );
	v( -0.437500, -0.216506, 0.757772 );

	f4( 0, 3, 4, 1 );
	f4( 1, 4, 5, 2 );
	f4( 0, 2, 5, 3 );
	f4( 3, 6, 7, 4 );
	f4( 4, 7, 8, 5 );
	f4( 5, 8, 6, 3 );
	f4( 6, 0, 1, 7 );
	f4( 7, 1, 2, 8 );
	f4( 8, 2, 0, 6 );

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

Torus3.prototype = new THREE.Geometry();
Torus3.prototype.constructor = Torus3;