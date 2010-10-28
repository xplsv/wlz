// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var Circle = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 0.707107, 0.000000, -0.707107 );
	v( 0.993712, 0.000000, 0.111964 );
	v( 0.532032, 0.000000, 0.846724 );
	v( -0.330279, 0.000000, 0.943883 );
	v( -0.943883, 0.000000, 0.330279 );
	v( -0.846724, 0.000000, -0.532032 );
	v( -0.111965, 0.000000, -0.993712 );
	v( 0.000000, 0.000000, -0.000000 );

	f3( 7, 0, 1 );
	f3( 7, 1, 2 );
	f3( 7, 2, 3 );
	f3( 7, 3, 4 );
	f3( 7, 4, 5 );
	f3( 7, 5, 6 );
	f3( 6, 0, 7 );

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, nx, ny, nz ) {

		scope.faces.push( new THREE.Face3( a, b, c, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	this.computeCentroids();
	this.computeNormals();

}

Circle.prototype = new THREE.Geometry();
Circle.prototype.constructor = Circle;
