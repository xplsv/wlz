// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var TorusFlat5 = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 1.250000, 0.000000, -0.000000 );
	v( 0.875000, -0.000029, -0.000000 );
	v( 0.386271, 0.000000, -1.188821 );
	v( 0.270390, -0.000029, -0.832174 );
	v( -1.011271, 0.000000, -0.734732 );
	v( -0.707890, -0.000029, -0.514312 );
	v( -1.011271, 0.000000, 0.734732 );
	v( -0.707890, -0.000029, 0.514312 );
	v( 0.386271, 0.000000, 1.188821 );
	v( 0.270390, -0.000029, 0.832174 );

	f4( 0, 2, 3, 1 );
	f4( 2, 4, 5, 3 );
	f4( 4, 6, 7, 5 );
	f4( 6, 8, 9, 7 );
	f4( 8, 0, 1, 9 );

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f4( a, b, c, d, nx, ny, nz ) {

		scope.faces.push( new THREE.Face4( a, b, c, d, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	this.computeCentroids();
	this.computeNormals();

}

TorusFlat5.prototype = new THREE.Geometry();
TorusFlat5.prototype.constructor = TorusFlat5;
