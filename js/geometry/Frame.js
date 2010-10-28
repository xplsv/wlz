// Generated with Blender 2.54 exporter
// http://github.com/mrdoob/three.js/tree/master/utils/exporters/blender

var Frame = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v( 0.883884, -0.883883, -0.153008 );
	v( 0.618719, -0.618718, -0.153005 );
	v( 0.883883, 0.883884, -0.153008 );
	v( 0.618718, 0.618718, -0.153005 );
	v( -0.883884, 0.883883, -0.153008 );
	v( -0.618719, 0.618718, -0.153005 );
	v( -0.883883, -0.883884, -0.153008 );
	v( -0.618718, -0.618718, -0.153005 );
	v( -0.883883, -0.883887, 0.148464 );
	v( 0.883884, -0.883887, 0.148464 );
	v( 0.618719, -0.618722, 0.148467 );
	v( -0.618718, -0.618722, 0.148467 );
	v( -0.883887, 0.883883, 0.148464 );
	v( -0.883887, -0.883884, 0.148464 );
	v( -0.618722, -0.618718, 0.148467 );
	v( -0.618722, 0.618718, 0.148467 );
	v( 0.883883, 0.883887, 0.148464 );
	v( -0.883884, 0.883887, 0.148464 );
	v( -0.618719, 0.618722, 0.148467 );
	v( 0.618718, 0.618722, 0.148467 );
	v( 0.883887, -0.883883, 0.148464 );
	v( 0.883887, 0.883884, 0.148464 );
	v( 0.618722, 0.618718, 0.148467 );
	v( 0.618722, -0.618718, 0.148467 );

	f4( 0, 9, 8, 6 );
	f4( 7, 11, 10, 1 );
	f4( 8, 9, 10, 11 );
	f4( 6, 13, 12, 4 );
	f4( 5, 15, 14, 7 );
	f4( 12, 13, 14, 15 );
	f4( 4, 17, 16, 2 );
	f4( 3, 19, 18, 5 );
	f4( 16, 17, 18, 19 );
	f4( 20, 0, 2, 21 );
	f4( 1, 23, 22, 3 );
	f4( 20, 21, 22, 23 );

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

Frame.prototype = new THREE.Geometry();
Frame.prototype.constructor = Frame;