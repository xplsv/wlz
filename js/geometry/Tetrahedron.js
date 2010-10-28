// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var Tetrahedron = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 0.707107, -0.350000, -0.707107 );
	v( 0.258819, -0.350000, 0.965926 );
	v( -0.965926, -0.350000, -0.258819 );
	v( 0.000000, 1.050000, 0.000000 );

	f3( 1, 0, 3 );
	f3( 3, 2, 1 );
	f3( 3, 0, 2 );
	f3( 0, 1, 2 );

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c, nx, ny, nz ) {

		scope.faces.push( new THREE.Face3( a, b, c, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	this.computeCentroids();
	this.computeNormals();

}

Tetrahedron.prototype = new THREE.Geometry();
Tetrahedron.prototype.constructor = Tetrahedron;
