// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var TorusFlat3 = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 1.250000, 0.000000, -0.000000 );
	v( 0.875000, -0.000002, -0.000000 );
	v( -0.625000, 0.000000, -1.082532 );
	v( -0.437500, -0.000002, -0.757772 );
	v( -0.625000, 0.000000, 1.082532 );
	v( -0.437500, -0.000002, 0.757772 );

	f4( 0, 2, 3, 1 );
	f4( 2, 4, 5, 3 );
	f4( 4, 0, 1, 5 );

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f4( a, b, c, d, nx, ny, nz ) {

		scope.faces.push( new THREE.Face4( a, b, c, d, nx && ny && nz ? new THREE.Vector3( nx, ny, nz ) : null ) );

	}

	this.computeCentroids();
	this.computeNormals();

}

TorusFlat3.prototype = new THREE.Geometry();
TorusFlat3.prototype.constructor = TorusFlat3;
