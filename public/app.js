/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "b3acf4f9271ceb68978820430833569d.html";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	__webpack_require__(4);
	__webpack_require__(5);

	// import React from "react"
	// import ReactDOM from "react-dom"

	// import Foundation from "../node_modules/foundation-sites/js/foundation.core.js"
	//
	// const App = (props) => {
	//   return (
	//     <div>
	//       <h1>Foundation React Component</h1>
	//       <button className="button">Do a neato thing</button>
	//     </div>
	//   )
	// }
	//
	// ReactDOM.render(
	//   <App />,
	//   document.querySelector("#app")
	// )

	$(document).ready(function () {
	  $(document).foundation();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.1
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-02-22T19:11Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					// Support: IE<11
					// option.value not trimmed (#14858)
					return jQuery.trim( elem.value );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
								jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8+
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		context = context || ( support.createHTMLDocument ?
			document.implementation.createHTMLDocument( "" ) :
			document );

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){"use strict";function e(t){if(void 0===Function.prototype.name){var e=/function\s([^(]{1,})\(/,i=e.exec(t.toString());return i&&i.length>1?i[1].trim():""}return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name}function i(t){return/true/.test(t)?!0:/false/.test(t)?!1:isNaN(1*t)?t:parseFloat(t)}function n(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var s="6.2.0",o={version:s,_plugins:{},_uuids:[],rtl:function(){return"rtl"===t("html").attr("dir")},plugin:function(t,i){var s=i||e(t),o=n(s);this._plugins[o]=this[s]=t},registerPlugin:function(t,i){var s=i?n(i):e(t.constructor).toLowerCase();t.uuid=this.GetYoDigits(6,s),t.$element.attr("data-"+s)||t.$element.attr("data-"+s,t.uuid),t.$element.data("zfPlugin")||t.$element.data("zfPlugin",t),t.$element.trigger("init.zf."+s),this._uuids.push(t.uuid)},unregisterPlugin:function(t){var i=n(e(t.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(t.uuid),1),t.$element.removeAttr("data-"+i).removeData("zfPlugin").trigger("destroyed.zf."+i);for(var s in t)t[s]=null},reInit:function(e){var i=e instanceof t;try{if(i)e.each(function(){t(this).data("zfPlugin")._init()});else{var s=typeof e,o=this,a={object:function(e){e.forEach(function(e){e=n(e),t("[data-"+e+"]").foundation("_init")})},string:function(){e=n(e),t("[data-"+e+"]").foundation("_init")},undefined:function(){this.object(Object.keys(o._plugins))}};a[s](e)}}catch(r){console.error(r)}finally{return e}},GetYoDigits:function(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-"+e:"")},reflow:function(e,n){"undefined"==typeof n?n=Object.keys(this._plugins):"string"==typeof n&&(n=[n]);var s=this;t.each(n,function(n,o){var a=s._plugins[o],r=t(e).find("[data-"+o+"]").addBack("[data-"+o+"]");r.each(function(){var e=t(this),n={};if(e.data("zfPlugin"))return void console.warn("Tried to initialize "+o+" on an element that already has a Foundation plugin.");if(e.attr("data-options")){e.attr("data-options").split(";").forEach(function(t,e){var s=t.split(":").map(function(t){return t.trim()});s[0]&&(n[s[0]]=i(s[1]))})}try{e.data("zfPlugin",new a(t(this),n))}catch(s){console.error(s)}finally{return}})})},getFnName:e,transitionend:function(t){var e,i={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div");for(var s in i)"undefined"!=typeof n.style[s]&&(e=i[s]);return e?e:(e=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}};o.util={throttle:function(t,e){var i=null;return function(){var n=this,s=arguments;null===i&&(i=setTimeout(function(){t.apply(n,s),i=null},e))}}};var a=function(i){var n=typeof i,s=t("meta.foundation-mq"),a=t(".no-js");if(s.length||t('<meta class="foundation-mq">').appendTo(document.head),a.length&&a.removeClass("no-js"),"undefined"===n)o.MediaQuery._init(),o.reflow(this);else{if("string"!==n)throw new TypeError("We're sorry, "+n+" is not a valid parameter. You must use a string representing the method you wish to invoke.");var r=Array.prototype.slice.call(arguments,1),l=this.data("zfPlugin");if(void 0===l||void 0===l[i])throw new ReferenceError("We're sorry, '"+i+"' is not an available method for "+(l?e(l):"this element")+".");1===this.length?l[i].apply(l,r):this.each(function(e,n){l[i].apply(t(n).data("zfPlugin"),r)})}return this};window.Foundation=o,t.fn.foundation=a,function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var i=t[e];window.requestAnimationFrame=window[i+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(n+16,e);return setTimeout(function(){t(n=i)},i-e)},window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,n=function(){},s=function(){return i.apply(this instanceof n?this:t,e.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(n.prototype=this.prototype),s.prototype=new n,s})}(jQuery),!function(t){function e(t,e,n,s){var o,a,r,l,u=i(t);if(e){var d=i(e);a=u.offset.top+u.height<=d.height+d.offset.top,o=u.offset.top>=d.offset.top,r=u.offset.left>=d.offset.left,l=u.offset.left+u.width<=d.width}else a=u.offset.top+u.height<=u.windowDims.height+u.windowDims.offset.top,o=u.offset.top>=u.windowDims.offset.top,r=u.offset.left>=u.windowDims.offset.left,l=u.offset.left+u.width<=u.windowDims.width;var h=[a,o,r,l];return n?r===l==!0:s?o===a==!0:-1===h.indexOf(!1)}function i(t,e){if(t=t.length?t[0]:t,t===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var i=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),s=document.body.getBoundingClientRect(),o=window.pageYOffset,a=window.pageXOffset;return{width:i.width,height:i.height,offset:{top:i.top+o,left:i.left+a},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+a}},windowDims:{width:s.width,height:s.height,offset:{top:o,left:a}}}}function n(t,e,n,s,o,a){var r=i(t),l=e?i(e):null;switch(n){case"top":return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left,top:l.offset.top-(r.height+s)};case"left":return{left:l.offset.left-(r.width+o),top:l.offset.top};case"right":return{left:l.offset.left+l.width+o,top:l.offset.top};case"center top":return{left:l.offset.left+l.width/2-r.width/2,top:l.offset.top-(r.height+s)};case"center bottom":return{left:a?o:l.offset.left+l.width/2-r.width/2,top:l.offset.top+l.height+s};case"center left":return{left:l.offset.left-(r.width+o),top:l.offset.top+l.height/2-r.height/2};case"center right":return{left:l.offset.left+l.width+o+1,top:l.offset.top+l.height/2-r.height/2};case"center":return{left:r.windowDims.offset.left+r.windowDims.width/2-r.width/2,top:r.windowDims.offset.top+r.windowDims.height/2-r.height/2};case"reveal":return{left:(r.windowDims.width-r.width)/2,top:r.windowDims.offset.top+s};case"reveal full":return{left:r.windowDims.offset.left,top:r.windowDims.offset.top};default:return{left:Foundation.rtl()?l.offset.left-r.width+l.width:l.offset.left,top:l.offset.top+l.height+s}}}Foundation.Box={ImNotTouchingYou:e,GetDimensions:i,GetOffsets:n}}(jQuery),!function(t){function e(t){var e={};for(var i in t)e[t[i]]=t[i];return e}var i={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},n={},s={keys:e(i),parseKey:function(t){var e=i[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();return t.shiftKey&&(e="SHIFT_"+e),t.ctrlKey&&(e="CTRL_"+e),t.altKey&&(e="ALT_"+e),e},handleKey:function(e,i,s){var o,a,r,l=n[i],u=this.parseKey(e);return l?(o="undefined"==typeof l.ltr?l:Foundation.rtl()?t.extend({},l.ltr,l.rtl):t.extend({},l.rtl,l.ltr),a=o[u],r=s[a],void(r&&"function"==typeof r?(r.apply(),(s.handled||"function"==typeof s.handled)&&s.handled.apply()):(s.unhandled||"function"==typeof s.unhandled)&&s.unhandled.apply())):console.warn("Component not defined!")},findFocusable:function(e){return e.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return t(this).is(":visible")&&!(t(this).attr("tabindex")<0)})},register:function(t,e){n[t]=e}};Foundation.Keyboard=s}(jQuery),!function(t){function e(t){var e={};return"string"!=typeof t?e:(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var i=e.replace(/\+/g," ").split("="),n=i[0],s=i[1];return n=decodeURIComponent(n),s=void 0===s?null:decodeURIComponent(s),t.hasOwnProperty(n)?Array.isArray(t[n])?t[n].push(s):t[n]=[t[n],s]:t[n]=s,t},{}):e}var i={queries:[],current:"",_init:function(){var i,n=this,s=t(".foundation-mq").css("font-family");i=e(s);for(var o in i)n.queries.push({name:o,value:"only screen and (min-width: "+i[o]+")"});this.current=this._getCurrentSize(),this._watcher()},atLeast:function(t){var e=this.get(t);return e?window.matchMedia(e).matches:!1},get:function(t){for(var e in this.queries){var i=this.queries[e];if(t===i.name)return i.value}return null},_getCurrentSize:function(){var t;for(var e in this.queries){var i=this.queries[e];window.matchMedia(i.value).matches&&(t=i)}return"object"==typeof t?t.name:t},_watcher:function(){var e=this;t(window).on("resize.zf.mediaquery",function(){var i=e._getCurrentSize();i!==e.current&&(t(window).trigger("changed.zf.mediaquery",[i,e.current]),e.current=i)})}};Foundation.MediaQuery=i,window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var e=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;e.type="text/css",e.id="matchmediajs-test",i.parentNode.insertBefore(e,i),n="getComputedStyle"in window&&window.getComputedStyle(e,null)||e.currentStyle,t={matchMedium:function(t){var i="@media "+t+"{ #matchmediajs-test { width: 1px; } }";return e.styleSheet?e.styleSheet.cssText=i:e.textContent=i,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),Foundation.MediaQuery=i}(jQuery),!function(t){function e(t,e,i){function n(r){a||(a=window.performance.now()),o=r-a,i.apply(e),t>o?s=window.requestAnimationFrame(n,e):(window.cancelAnimationFrame(s),e.trigger("finished.zf.animate",[e]).triggerHandler("finished.zf.animate",[e]))}var s,o,a=null;s=window.requestAnimationFrame(n)}function i(e,i,o,a){function r(){e||i.hide(),l(),a&&a.apply(i)}function l(){i[0].style.transitionDuration=0,i.removeClass(u+" "+d+" "+o)}if(i=t(i).eq(0),i.length){var u=e?n[0]:n[1],d=e?s[0]:s[1];l(),i.addClass(o).css("transition","none"),requestAnimationFrame(function(){i.addClass(u),e&&i.show()}),requestAnimationFrame(function(){i[0].offsetWidth,i.css("transition","").addClass(d)}),i.one(Foundation.transitionend(i),r)}}var n=["mui-enter","mui-leave"],s=["mui-enter-active","mui-leave-active"],o={animateIn:function(t,e,n){i(!0,t,e,n)},animateOut:function(t,e,n){i(!1,t,e,n)}};Foundation.Move=e,Foundation.Motion=o}(jQuery),!function(t){var e={Feather:function(e){var i=arguments.length<=1||void 0===arguments[1]?"zf":arguments[1];e.attr("role","menubar");var n=e.find("li").attr({role:"menuitem"}),s="is-"+i+"-submenu",o=s+"-item",a="is-"+i+"-submenu-parent";e.find("a:first").attr("tabindex",0),n.each(function(){var e=t(this),i=e.children("ul");i.length&&(e.addClass(a).attr({"aria-haspopup":!0,"aria-expanded":!1,"aria-label":e.children("a:first").text()}),i.addClass("submenu "+s).attr({"data-submenu":"","aria-hidden":!0,role:"menu"})),e.parent("[data-submenu]").length&&e.addClass("is-submenu-item "+o)})},Burn:function(t,e){var i=(t.find("li").removeAttr("tabindex"),"is-"+e+"-submenu"),n=i+"-item",s="is-"+e+"-submenu-parent";t.find("*").removeClass(i+" "+n+" "+s+" is-submenu-item submenu is-active").removeAttr("data-submenu").css("display","")}};Foundation.Nest=e}(jQuery),!function(t){function e(t,e,i){var n,s,o=this,a=e.duration,r=Object.keys(t.data())[0]||"timer",l=-1;this.isPaused=!1,this.restart=function(){l=-1,clearTimeout(s),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(s),l=0>=l?a:l,t.data("paused",!1),n=Date.now(),s=setTimeout(function(){e.infinite&&o.restart(),i()},l),t.trigger("timerstart.zf."+r)},this.pause=function(){this.isPaused=!0,clearTimeout(s),t.data("paused",!0);var e=Date.now();l-=e-n,t.trigger("timerpaused.zf."+r)}}function i(e,i){function n(){s--,0===s&&i()}var s=e.length;0===s&&i(),e.each(function(){this.complete?n():"undefined"!=typeof this.naturalWidth&&this.naturalWidth>0?n():t(this).one("load",function(){n()})})}Foundation.Timer=e,Foundation.onImagesLoaded=i}(jQuery),function(t){function e(){this.removeEventListener("touchmove",i),this.removeEventListener("touchend",e),u=!1}function i(i){if(t.spotSwipe.preventDefault&&i.preventDefault(),u){var n,s=i.touches[0].pageX,a=(i.touches[0].pageY,o-s);l=(new Date).getTime()-r,Math.abs(a)>=t.spotSwipe.moveThreshold&&l<=t.spotSwipe.timeThreshold&&(n=a>0?"left":"right"),n&&(i.preventDefault(),e.call(this),t(this).trigger("swipe",n).trigger("swipe"+n))}}function n(t){1==t.touches.length&&(o=t.touches[0].pageX,a=t.touches[0].pageY,u=!0,r=(new Date).getTime(),this.addEventListener("touchmove",i,!1),this.addEventListener("touchend",e,!1))}function s(){this.addEventListener&&this.addEventListener("touchstart",n,!1)}t.spotSwipe={version:"1.0.0",enabled:"ontouchstart"in document.documentElement,preventDefault:!1,moveThreshold:75,timeThreshold:200};var o,a,r,l,u=!1;t.event.special.swipe={setup:s},t.each(["left","up","down","right"],function(){t.event.special["swipe"+this]={setup:function(){t(this).on("swipe",t.noop)}}})}(jQuery),!function(t){t.fn.addTouch=function(){this.each(function(i,n){t(n).bind("touchstart touchmove touchend touchcancel",function(){e(event)})});var e=function(t){var e,i=t.changedTouches,n=i[0],s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},o=s[t.type];"MouseEvent"in window&&"function"==typeof window.MouseEvent?e=window.MouseEvent(o,{bubbles:!0,cancelable:!0,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY}):(e=document.createEvent("MouseEvent"),e.initMouseEvent(o,!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null)),n.target.dispatchEvent(e)}}}(jQuery),!function(t){function e(){o(),n(),s(),i()}function i(e){var i=t("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(e&&("string"==typeof e?n.push(e):"object"==typeof e&&"string"==typeof e[0]?n.concat(e):console.error("Plugin names must be strings")),i.length){var s=n.map(function(t){return"closeme.zf."+t}).join(" ");t(window).off(s).on(s,function(e,i){var n=e.namespace.split(".")[0],s=t("[data-"+n+"]").not('[data-yeti-box="'+i+'"]');s.each(function(){var e=t(this);e.triggerHandler("close.zf.trigger",[e])})})}}function n(e){var i=void 0,n=t("[data-resize]");n.length&&t(window).off("resize.zf.trigger").on("resize.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){a||n.each(function(){t(this).triggerHandler("resizeme.zf.trigger")}),n.attr("data-events","resize")},e||10)})}function s(e){var i=void 0,n=t("[data-scroll]");n.length&&t(window).off("scroll.zf.trigger").on("scroll.zf.trigger",function(s){i&&clearTimeout(i),i=setTimeout(function(){a||n.each(function(){t(this).triggerHandler("scrollme.zf.trigger")}),n.attr("data-events","scroll")},e||10)})}function o(){if(!a)return!1;var e=document.querySelectorAll("[data-resize], [data-scroll], [data-mutate]"),i=function(e){var i=t(e[0].target);switch(i.attr("data-events")){case"resize":i.triggerHandler("resizeme.zf.trigger",[i]);break;case"scroll":i.triggerHandler("scrollme.zf.trigger",[i,window.pageYOffset]);break;default:return!1}};if(e.length)for(var n=0;n<=e.length-1;n++){var s=new a(i);s.observe(e[n],{attributes:!0,childList:!1,characterData:!1,subtree:!1,attributeFilter:["data-events"]})}}var a=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if(t[e]+"MutationObserver"in window)return window[t[e]+"MutationObserver"];return!1}(),r=function(e,i){e.data(i).split(" ").forEach(function(n){t("#"+n)["close"===i?"trigger":"triggerHandler"](i+".zf.trigger",[e])})};t(document).on("click.zf.trigger","[data-open]",function(){r(t(this),"open")}),t(document).on("click.zf.trigger","[data-close]",function(){var e=t(this).data("close");e?r(t(this),"close"):t(this).trigger("close.zf.trigger")}),t(document).on("click.zf.trigger","[data-toggle]",function(){r(t(this),"toggle")}),t(document).on("close.zf.trigger","[data-closable]",function(e){e.stopPropagation();var i=t(this).data("closable");""!==i?Foundation.Motion.animateOut(t(this),i,function(){t(this).trigger("closed.zf")}):t(this).fadeOut().trigger("closed.zf")}),t(document).on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",function(){var e=t(this).data("toggle-focus");t("#"+e).triggerHandler("toggle.zf.trigger",[t(this)])}),t(window).load(function(){e()}),Foundation.IHearYou=e}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Abide")}return _createClass(e,[{key:"_init",value:function(){this.$inputs=this.$element.find("input, textarea, select").not("[data-abide-ignore]"),this._events()}},{key:"_events",value:function(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(i){e.validateInput(t(i.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(i){e.validateInput(t(i.target))})}},{key:"_reflow",value:function(){this._init()}},{key:"requiredCheck",value:function(t){if(!t.attr("required"))return!0;var e=!0;switch(t[0].type){case"checkbox":case"radio":e=t[0].checked;break;case"select":case"select-one":case"select-multiple":var i=t.find("option:selected");i.length&&i.val()||(e=!1);break;default:t.val()&&t.val().length||(e=!1)}return e}},{key:"findFormError",value:function(t){var e=t.siblings(this.options.formErrorSelector);return e.length||(e=t.parent().find(this.options.formErrorSelector)),e}},{key:"findLabel",value:function(t){var e=t[0].id,i=this.$element.find('label[for="'+e+'"]');return i.length?i:t.closest("label")}},{key:"addErrorClasses",value:function(t){var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),t.addClass(this.options.inputErrorClass).attr("data-invalid","")}},{key:"removeErrorClasses",value:function(t){var e=this.findLabel(t),i=this.findFormError(t);e.length&&e.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),t.removeClass(this.options.inputErrorClass).removeAttr("data-invalid")}},{key:"validateInput",value:function(t){var e=this.requiredCheck(t),i=!1,n=!0,s=t.attr("data-validator"),o=!0;switch(t[0].type){case"radio":i=this.validateRadio(t.attr("name"));break;case"checkbox":i=e;break;case"select":case"select-one":case"select-multiple":i=e;break;default:i=this.validateText(t)}s&&(n=this.matchValidation(t,s,t.attr("required"))),t.attr("data-equalto")&&(o=this.options.validators.equalTo(t));var a=-1===[e,i,n,o].indexOf(!1),r=(a?"valid":"invalid")+".zf.abide";return this[a?"removeErrorClasses":"addErrorClasses"](t),t.trigger(r,[t]),a}},{key:"validateForm",value:function(){var e=[],i=this;this.$inputs.each(function(){e.push(i.validateInput(t(this)))});var n=-1===e.indexOf(!1);return this.$element.find("[data-abide-error]").css("display",n?"none":"block"),this.$element.trigger((n?"formvalid":"forminvalid")+".zf.abide",[this.$element]),n}},{key:"validateText",value:function(t,e){e=e||t.attr("pattern")||t.attr("type");var i=t.val();return i.length?this.options.patterns.hasOwnProperty(e)?this.options.patterns[e].test(i):e&&e!==t.attr("type")?new RegExp(e).test(i):!0:!0}},{key:"validateRadio",value:function(e){var i=this.$element.find(':radio[name="'+e+'"]'),n=[],s=this;return i.each(function(){var e=t(this),i=s.requiredCheck(e);n.push(i),i&&s.removeErrorClasses(e)}),-1===n.indexOf(!1)}},{key:"matchValidation",value:function(t,e,i){var n=this;i=!!i;var s=e.split(" ").map(function(e){return n.options.validators[e](t,i,t.parent())});return-1===s.indexOf(!1)}},{key:"resetForm",value:function(){var e=this.$element,i=this.options;t("."+i.labelErrorClass,e).not("small").removeClass(i.labelErrorClass),t("."+i.inputErrorClass,e).not("small").removeClass(i.inputErrorClass),t(i.formErrorSelector+"."+i.formErrorClass).removeClass(i.formErrorClass),e.find("[data-abide-error]").css("display","none"),t(":input",e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr("data-invalid"),e.trigger("formreset.zf.abide",[e])}},{key:"destroy",value:function(){var e=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){e.removeErrorClasses(t(this))}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={validateOn:"fieldChange",labelErrorClass:"is-invalid-label",inputErrorClass:"is-invalid-input",formErrorSelector:".form-error",formErrorClass:"is-visible",liveValidate:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,i,n){return t("#"+e.attr("data-equalto")).val()===e.val()}}},Foundation.plugin(e,"Abide")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Accordion"),Foundation.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}return _createClass(e,[{key:"_init",value:function(){this.$element.attr("role","tablist"),this.$tabs=this.$element.children("li"),0===this.$tabs.length&&(this.$tabs=this.$element.children("[data-accordion-item]")),this.$tabs.each(function(e,i){var n=t(i),s=n.find("[data-tab-content]"),o=s[0].id||Foundation.GetYoDigits(6,"accordion"),a=i.id||o+"-label";n.find("a:first").attr({"aria-controls":o,role:"tab",id:a,"aria-expanded":!1,"aria-selected":!1}),s.attr({role:"tabpanel","aria-labelledby":a,"aria-hidden":!0,id:o})});var e=this.$element.find(".is-active").children("[data-tab-content]");e.length&&this.down(e,!0),this._events()}},{key:"_events",value:function(){var e=this;this.$tabs.each(function(){var i=t(this),n=i.children("[data-tab-content]");n.length&&i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),i.hasClass("is-active")?(e.options.allowAllClosed||i.siblings().hasClass("is-active"))&&e.up(n):e.down(n)}).on("keydown.zf.accordion",function(t){Foundation.Keyboard.handleKey(t,"Accordion",{toggle:function(){e.toggle(n)},next:function(){i.next().find("a").focus().trigger("click.zf.accordion")},previous:function(){i.prev().find("a").focus().trigger("click.zf.accordion")},handled:function(){t.preventDefault(),t.stopPropagation()}})})})}},{key:"toggle",value:function(t){if(t.parent().hasClass("is-active")){if(!this.options.allowAllClosed&&!t.parent().siblings().hasClass("is-active"))return;this.up(t)}else this.down(t)}},{key:"down",value:function(e,i){var n=this;if(!this.options.multiExpand&&!i){var s=this.$element.find(".is-active").children("[data-tab-content]");s.length&&this.up(s)}e.attr("aria-hidden",!1).parent("[data-tab-content]").addBack().parent().addClass("is-active"),e.slideDown(n.options.slideSpeed,function(){n.$element.trigger("down.zf.accordion",[e])}),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!0,"aria-selected":!0})}},{key:"up",value:function(e){var i=e.parent().siblings(),n=this,s=this.options.multiExpand?i.hasClass("is-active"):e.parent().hasClass("is-active");(this.options.allowAllClosed||s)&&(e.slideUp(n.options.slideSpeed,function(){n.$element.trigger("up.zf.accordion",[e])}),e.attr("aria-hidden",!0).parent().removeClass("is-active"),t("#"+e.attr("aria-labelledby")).attr({"aria-expanded":!1,"aria-selected":!1}))}},{key:"destroy",value:function(){this.$element.find("[data-tab-content]").slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiExpand:!1,allowAllClosed:!1},Foundation.plugin(e,"Accordion")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"accordion"),this._init(),Foundation.registerPlugin(this,"AccordionMenu"),Foundation.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll",TAB:"down",SHIFT_TAB:"up"})}return _createClass(e,[{key:"_init",value:function(){this.$element.find("[data-submenu]").not(".is-active").slideUp(0),this.$element.attr({role:"tablist","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var e=this.id||Foundation.GetYoDigits(6,"acc-menu-link"),i=t(this),n=i.children("[data-submenu]"),s=n[0].id||Foundation.GetYoDigits(6,"acc-menu"),o=n.hasClass("is-active");i.attr({"aria-controls":s,"aria-expanded":o,role:"tab",id:e}),n.attr({"aria-labelledby":e,"aria-hidden":!o,role:"tabpanel",id:s})});var e=this.$element.find(".is-active");if(e.length){var i=this;e.each(function(){i.down(t(this))})}this._events()}},{key:"_events",value:function(){var e=this;this.$element.find("li").each(function(){var i=t(this).children("[data-submenu]");i.length&&t(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),e.toggle(i)})}).on("keydown.zf.accordionmenu",function(i){var n,s,o=t(this),a=o.parent("ul").children("li"),r=o.children("[data-submenu]");a.each(function(e){return t(this).is(o)?(n=a.eq(Math.max(0,e-1)),s=a.eq(Math.min(e+1,a.length-1)),t(this).children("[data-submenu]:visible").length&&(s=o.find("li:first-child")),t(this).is(":first-child")?n=o.parents("li").first():n.children("[data-submenu]:visible").length&&(n=n.find("li:last-child")),void(t(this).is(":last-child")&&(s=o.parents("li").first().next("li")))):void 0}),Foundation.Keyboard.handleKey(i,"AccordionMenu",{open:function(){r.is(":hidden")&&(e.down(r),r.find("li").first().focus())},close:function(){r.length&&!r.is(":hidden")?e.up(r):o.parent("[data-submenu]").length&&(e.up(o.parent("[data-submenu]")),o.parents("li").first().focus())},up:function(){n.focus()},down:function(){s.focus()},toggle:function(){o.children("[data-submenu]").length&&e.toggle(o.children("[data-submenu]"))},closeAll:function(){e.hideAll()},handled:function(){i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"hideAll",value:function(){this.$element.find("[data-submenu]").slideUp(this.options.slideSpeed)}},{key:"toggle",value:function(t){t.is(":animated")||(t.is(":hidden")?this.down(t):this.up(t))}},{key:"down",value:function(t){var e=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(t.parentsUntil(this.$element).add(t))),
	t.addClass("is-active").attr({"aria-hidden":!1}).parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),Foundation.Move(this.options.slideSpeed,t,function(){t.slideDown(e.options.slideSpeed,function(){e.$element.trigger("down.zf.accordionMenu",[t])})})}},{key:"up",value:function(t){var e=this;Foundation.Move(this.options.slideSpeed,t,function(){t.slideUp(e.options.slideSpeed,function(){e.$element.trigger("up.zf.accordionMenu",[t])})});var i=t.find("[data-submenu]").slideUp(0).addBack().attr("aria-hidden",!0);i.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1)}},{key:"destroy",value:function(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),Foundation.Nest.Burn(this.$element,"accordion"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={slideSpeed:250,multiOpen:!0},Foundation.plugin(e,"AccordionMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"drilldown"),this._init(),Foundation.registerPlugin(this,"Drilldown"),Foundation.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}return _createClass(e,[{key:"_init",value:function(){this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent"),this.$submenus=this.$submenuAnchors.children("[data-submenu]"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","menuitem"),this._prepareMenu(),this._keyboardEvents()}},{key:"_prepareMenu",value:function(){var e=this;this.$submenuAnchors.each(function(){var i=t(this),n=i.find("a:first");e.options.parentLink&&n.clone().prependTo(i.children("[data-submenu]")).wrap('<li class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menu-item"></li>'),n.data("savedHref",n.attr("href")).removeAttr("href"),i.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"menu"}),e._events(i)}),this.$submenus.each(function(){var i=t(this),n=i.find(".js-drilldown-back");n.length||i.prepend(e.options.backButton),e._back(i)}),this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=t(this.options.wrapper).addClass("is-drilldown").css(this._getMaxDims()),this.$element.wrap(this.$wrapper))}},{key:"_events",value:function(e){var i=this;e.off("click.zf.drilldown").on("click.zf.drilldown",function(n){if(t(n.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(n.stopImmediatePropagation(),n.preventDefault()),i._show(e),i.options.closeOnClick){var s=t("body").not(i.$wrapper);s.off(".zf.drilldown").on("click.zf.drilldown",function(t){t.preventDefault(),i._hideAll(),s.off(".zf.drilldown")})}})}},{key:"_keyboardEvents",value:function(){var e=this;this.$menuItems.add(this.$element.find(".js-drilldown-back")).on("keydown.zf.drilldown",function(i){var n,s,o=t(this),a=o.parent("ul").children("li");a.each(function(e){return t(this).is(o)?(n=a.eq(Math.max(0,e-1)),void(s=a.eq(Math.min(e+1,a.length-1)))):void 0}),Foundation.Keyboard.handleKey(i,"Drilldown",{next:function(){o.is(e.$submenuAnchors)&&(e._show(o),o.on(Foundation.transitionend(o),function(){o.find("ul li").filter(e.$menuItems).first().focus()}))},previous:function(){e._hide(o.parent("ul")),o.parent("ul").on(Foundation.transitionend(o),function(){setTimeout(function(){o.parent("ul").parent("li").focus()},1)})},up:function(){n.focus()},down:function(){s.focus()},close:function(){e._back()},open:function(){o.is(e.$menuItems)?o.is(e.$submenuAnchors)&&(e._show(o),setTimeout(function(){o.find("ul li").filter(e.$menuItems).first().focus()},1)):(e._hide(o.parent("ul")),setTimeout(function(){o.parent("ul").parent("li").focus()},1))},handled:function(){i.preventDefault(),i.stopImmediatePropagation()}})})}},{key:"_hideAll",value:function(){var t=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");t.one(Foundation.transitionend(t),function(e){t.removeClass("is-active is-closing")}),this.$element.trigger("closed.zf.drilldown")}},{key:"_back",value:function(t){var e=this;t.off("click.zf.drilldown"),t.children(".js-drilldown-back").on("click.zf.drilldown",function(i){i.stopImmediatePropagation(),e._hide(t)})}},{key:"_menuLinkEvents",value:function(){var t=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(e){setTimeout(function(){t._hideAll()},0)})}},{key:"_show",value:function(t){t.children("[data-submenu]").addClass("is-active"),this.$element.trigger("open.zf.drilldown",[t])}},{key:"_hide",value:function(t){t.addClass("is-closing").one(Foundation.transitionend(t),function(){t.removeClass("is-active is-closing"),t.blur()}),t.trigger("hide.zf.drilldown",[t])}},{key:"_getMaxDims",value:function(){var e=0,i={};return this.$submenus.add(this.$element).each(function(){var i=t(this).children("li").length;e=i>e?i:e}),i["min-height"]=e*this.$menuItems[0].getBoundingClientRect().height+"px",i["max-width"]=this.$element[0].getBoundingClientRect().width+"px",i}},{key:"destroy",value:function(){this._hideAll(),Foundation.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role").off(".zf.drilldown").end().off("zf.drilldown"),this.$element.find("a").each(function(){var e=t(this);e.data("savedHref")&&e.attr("href",e.data("savedHref")).removeData("savedHref")}),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={backButton:'<li class="js-drilldown-back"><a>Back</a></li>',wrapper:"<div></div>",parentLink:!1,closeOnClick:!1},Foundation.plugin(e,"Drilldown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Dropdown"),Foundation.Keyboard.register("Dropdown",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");this.$anchor=t('[data-toggle="'+e+'"]')||t('[data-open="'+e+'"]'),this.$anchor.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this.options.positionClass=this.getPositionClass(),this.counter=4,this.usedPositions=[],this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e,"aria-labelledby":this.$anchor[0].id||Foundation.GetYoDigits(6,"dd-anchor")}),this._events()}},{key:"getPositionClass",value:function(){var t=this.$element[0].className.match(/\b(top|left|right)\b/g);return t=t?t[0]:""}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.$element.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.$element.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.$element.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.$element.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.$element.removeClass(t):this.$element.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){if("false"===this.$anchor.attr("aria-expanded"))return!1;var t=this.getPositionClass(),e=Foundation.Box.GetDimensions(this.$element),i=(Foundation.Box.GetDimensions(this.$anchor),"left"===t?"left":"right"===t?"left":"top"),n="top"===i?"height":"width";"height"===n?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.$element))return this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:e.windowDims.width-2*this.options.hOffset,height:"auto"}),this.classChanged=!0,!1;for(this.$element.offset(Foundation.Box.GetOffsets(this.$element,this.$anchor,t,this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.$element)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"_events",value:function(){var e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.options.hover&&(this.$anchor.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.open(),e.$anchor.data("hover",!0)},e.options.hoverDelay)}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)}),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(e.timeout)}).on("mouseleave.zf.dropdown",function(){clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.close(),e.$anchor.data("hover",!1)},e.options.hoverDelay)})),this.$anchor.add(this.$element).on("keydown.zf.dropdown",function(i){var n=t(this),s=Foundation.Keyboard.findFocusable(e.$element);Foundation.Keyboard.handleKey(i,"Dropdown",{tab_forward:function(){e.$element.find(":focus").is(s.eq(-1))&&(e.options.trapFocus?(s.eq(0).focus(),i.preventDefault()):e.close())},tab_backward:function(){(e.$element.find(":focus").is(s.eq(0))||e.$element.is(":focus"))&&(e.options.trapFocus?(s.eq(-1).focus(),i.preventDefault()):e.close())},open:function(){n.is(e.$anchor)&&(e.open(),e.$element.attr("tabindex",-1).focus(),i.preventDefault())},close:function(){e.close(),e.$anchor.focus()}})})}},{key:"_addBodyHandler",value:function(){var e=t(document.body).not(this.$element),i=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){i.$anchor.is(t.target)||i.$anchor.find(t.target).length||i.$element.find(t.target).length||(i.close(),e.off("click.zf.dropdown"))})}},{key:"open",value:function(){if(this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchor.addClass("hover").attr({"aria-expanded":!0}),this._setPosition(),this.$element.addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var t=Foundation.Keyboard.findFocusable(this.$element);t.length&&t.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function(){if(!this.$element.hasClass("is-open"))return!1;if(this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchor.removeClass("hover").attr("aria-expanded",!1),this.classChanged){var t=this.getPositionClass();t&&this.$element.removeClass(t),this.$element.addClass(this.options.positionClass).css({height:"",width:""}),this.classChanged=!1,this.counter=4,this.usedPositions.length=0}this.$element.trigger("hide.zf.dropdown",[this.$element])}},{key:"toggle",value:function(){if(this.$element.hasClass("is-open")){if(this.$anchor.data("hover"))return;this.close()}else this.open()}},{key:"destroy",value:function(){this.$element.off(".zf.trigger").hide(),this.$anchor.off(".zf.dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={hoverDelay:250,hover:!1,hoverPane:!1,vOffset:1,hOffset:1,positionClass:"",trapFocus:!1,autoFocus:!1,closeOnClick:!1},Foundation.plugin(e,"Dropdown")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),Foundation.Nest.Feather(this.$element,"dropdown"),this._init(),Foundation.registerPlugin(this,"DropdownMenu"),Foundation.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}return _createClass(e,[{key:"_init",value:function(){var t=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),this.$element.hasClass(this.options.rightClass)||"right"===this.options.alignment||Foundation.rtl()?(this.options.alignment="right",t.addClass("opens-left")):t.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_events",value:function(){var e=this,i="ontouchstart"in window||"undefined"!=typeof window.ontouchstart,n="is-dropdown-submenu-parent";(this.options.clickOpen||i)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",function(s){var o=t(s.target).parentsUntil("ul","."+n),a=o.hasClass(n),r="true"===o.attr("data-is-click");o.children(".is-dropdown-submenu");if(a)if(r){if(!e.options.closeOnClick||!e.options.clickOpen&&!i||e.options.forceFollow&&i)return;s.stopImmediatePropagation(),s.preventDefault(),e._hide(o)}else s.preventDefault(),s.stopImmediatePropagation(),e._show(o.children(".is-dropdown-submenu")),o.add(o.parentsUntil(e.$element,"."+n)).attr("data-is-click",!0)}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(i){i.stopImmediatePropagation();var s=t(this),o=s.hasClass(n);o&&(clearTimeout(e.delay),e.delay=setTimeout(function(){e._show(s.children(".is-dropdown-submenu"))},e.options.hoverDelay))}).on("mouseleave.zf.dropdownmenu",function(i){var s=t(this),o=s.hasClass(n);if(o&&e.options.autoclose){if("true"===s.attr("data-is-click")&&e.options.clickOpen)return!1;clearTimeout(e.delay),e.delay=setTimeout(function(){e._hide(s)},e.options.closingTime)}}),this.$menuItems.on("keydown.zf.dropdownmenu",function(i){var n,s,o=t(i.target).parentsUntil("ul",'[role="menuitem"]'),a=e.$tabs.index(o)>-1,r=a?e.$tabs:o.siblings("li").add(o);r.each(function(e){return t(this).is(o)?(n=r.eq(e-1),void(s=r.eq(e+1))):void 0});var l=function(){o.is(":last-child")||s.children("a:first").focus()},u=function(){n.children("a:first").focus()},d=function(){var t=o.children("ul.is-dropdown-submenu");t.length&&(e._show(t),o.find("li > a:first").focus())},h=function(){var t=o.parent("ul").parent("li");t.children("a:first").focus(),e._hide(t)},c={open:d,close:function(){e._hide(e.$element),e.$menuItems.find("a:first").focus()},handled:function(){i.preventDefault(),i.stopImmediatePropagation()}};a?e.vertical?"left"===e.options.alignment?t.extend(c,{down:l,up:u,next:d,previous:h}):t.extend(c,{down:l,up:u,next:h,previous:d}):t.extend(c,{next:l,previous:u,down:d,up:h}):"left"===e.options.alignment?t.extend(c,{next:d,previous:h,down:l,up:u}):t.extend(c,{next:h,previous:d,down:l,up:u}),Foundation.Keyboard.handleKey(i,"DropdownMenu",c)})}},{key:"_addBodyHandler",value:function(){var e=t(document.body),i=this;e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){var n=i.$element.find(t.target);n.length||(i._hide(),e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}},{key:"_show",value:function(e){var i=this.$tabs.index(this.$tabs.filter(function(i,n){return t(n).find(e).length>0})),n=e.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(n,i),e.css("visibility","hidden").addClass("js-dropdown-active").attr({"aria-hidden":!1}).parent("li.is-dropdown-submenu-parent").addClass("is-active").attr({"aria-expanded":!0});var s=Foundation.Box.ImNotTouchingYou(e,null,!0);if(!s){var o="left"===this.options.alignment?"-right":"-left",a=e.parent(".is-dropdown-submenu-parent");a.removeClass("opens"+o).addClass("opens-"+this.options.alignment),s=Foundation.Box.ImNotTouchingYou(e,null,!0),s||a.removeClass("opens-"+this.options.alignment).addClass("opens-inner"),this.changed=!0}e.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler(),this.$element.trigger("show.zf.dropdownmenu",[e])}},{key:"_hide",value:function(t,e){var i;i=t&&t.length?t:void 0!==e?this.$tabs.not(function(t,i){return t===e}):this.$element;var n=i.hasClass("is-active")||i.find(".is-active").length>0;if(n){if(i.find("li.is-active").add(i).attr({"aria-expanded":!1,"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").attr({"aria-hidden":!0}).removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var s="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-"+this.options.alignment).addClass("opens-"+s),this.changed=!1}this.$element.trigger("hide.zf.dropdownmenu",[i])}}},{key:"destroy",value:function(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),t(document.body).off(".zf.dropdownmenu"),Foundation.Nest.Burn(this.$element,"dropdown"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableHover:!1,autoclose:!0,hoverDelay:50,clickOpen:!1,closingTime:500,alignment:"left",closeOnClick:!0,verticalClass:"vertical",rightClass:"align-right",forceFollow:!0},Foundation.plugin(e,"DropdownMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Equalizer")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("data-equalizer")||"",i=this.$element.find('[data-equalizer-watch="'+e+'"]');this.$watched=i.length?i:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",e||Foundation.GetYoDigits(6,"eq")),this.hasNested=this.$element.find("[data-equalizer]").length>0,this.isNested=this.$element.parentsUntil(document.body,"[data-equalizer]").length>0,this.isOn=!1;var n,s=this.$element.find("img");this.options.equalizeOn?(n=this._checkMQ(),t(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==n&&n===!1||void 0===n)&&(s.length?Foundation.onImagesLoaded(s,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function(){this.isOn=!1,this.$element.off(".zf.equalizer resizeme.zf.trigger")}},{key:"_events",value:function(){var t=this;this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",function(e){e.target!==t.$element[0]&&t._reflow()}):this.$element.on("resizeme.zf.trigger",this._reflow.bind(this)),this.isOn=!0}},{key:"_checkMQ",value:function(){var t=!Foundation.MediaQuery.atLeast(this.options.equalizeOn);return t?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),t}},{key:"_killswitch",value:function(){}},{key:"_reflow",value:function(){return!this.options.equalizeOnStack&&this._isStacked()?(this.$watched.css("height","auto"),!1):void(this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this)))}},{key:"_isStacked",value:function(){return this.$watched[0].offsetTop!==this.$watched[1].offsetTop}},{key:"getHeights",value:function(t){for(var e=[],i=0,n=this.$watched.length;n>i;i++)this.$watched[i].style.height="auto",e.push(this.$watched[i].offsetHeight);t(e)}},{key:"getHeightsByRow",value:function(e){var i=this.$watched.first().offset().top,n=[],s=0;n[s]=[];for(var o=0,a=this.$watched.length;a>o;o++){this.$watched[o].style.height="auto";var r=t(this.$watched[o]).offset().top;r!=i&&(s++,n[s]=[],i=r),n[s].push([this.$watched[o],this.$watched[o].offsetHeight])}for(var l=0,u=n.length;u>l;l++){var d=t(n[l]).map(function(){return this[1]}).get(),h=Math.max.apply(null,d);n[l].push(h)}e(n)}},{key:"applyHeight",value:function(t){var e=Math.max.apply(null,t);this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",e),this.$element.trigger("postequalized.zf.equalizer")}},{key:"applyHeightByRow",value:function(e){this.$element.trigger("preequalized.zf.equalizer");for(var i=0,n=e.length;n>i;i++){var s=e[i].length,o=e[i][s-1];if(2>=s)t(e[i][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var a=0,r=s-1;r>a;a++)t(e[i][a][0]).css({height:o});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"destroy",value:function(){this._pauseEvents(),this.$watched.css("height","auto"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={equalizeOnStack:!0,equalizeByRow:!1,equalizeOn:""},Foundation.plugin(e,"Equalizer")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,n),this.rules=[],this.currentPath="",this._init(),this._events(),Foundation.registerPlugin(this,"Interchange")}return _createClass(e,[{key:"_init",value:function(){this._addBreakpoints(),this._generateRules(),this._reflow()}},{key:"_events",value:function(){t(window).on("resize.zf.interchange",Foundation.util.throttle(this._reflow.bind(this),50))}},{key:"_reflow",value:function(){var t;for(var e in this.rules){var i=this.rules[e];window.matchMedia(i.query).matches&&(t=i)}t&&this.replace(t.path)}},{key:"_addBreakpoints",value:function(){for(var t in Foundation.MediaQuery.queries){var i=Foundation.MediaQuery.queries[t];e.SPECIAL_QUERIES[i.name]=i.value}}},{key:"_generateRules",value:function(t){var i,n=[];i=this.options.rules?this.options.rules:this.$element.data("interchange").match(/\[.*?\]/g);for(var s in i){var o=i[s].slice(1,-1).split(", "),a=o.slice(0,-1).join(""),r=o[o.length-1];e.SPECIAL_QUERIES[r]&&(r=e.SPECIAL_QUERIES[r]),n.push({path:a,query:r})}this.rules=n}},{key:"replace",value:function(e){if(this.currentPath!==e){var i=this,n="replaced.zf.interchange";"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).load(function(){i.currentPath=e}).trigger(n):e.match(/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i)?this.$element.css({"background-image":"url("+e+")"}).trigger(n):t.get(e,function(s){i.$element.html(s).trigger(n),t(s).foundation(),i.currentPath=e})}}},{key:"destroy",value:function(){}}]),e}();e.defaults={rules:null},e.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"},Foundation.plugin(e,"Interchange")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Magellan")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element[0].id||Foundation.GetYoDigits(6,"magellan");this.$targets=t("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":e,"data-scroll":e,id:e}),this.$active=t(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}},{key:"calcPoints",value:function(){var e=this,i=document.body,n=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,n.clientHeight)),this.docHeight=Math.round(Math.max(i.scrollHeight,i.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)),this.$targets.each(function(){var i=t(this),n=Math.round(i.offset().top-e.options.threshold);i.targetPoint=n,e.points.push(n)})}},{key:"_events",value:function(){var e=this;t("html, body"),{duration:e.options.animationDuration,easing:e.options.animationEasing};t(window).one("load",function(){e.options.deepLinking&&location.hash&&e.scrollToLoc(location.hash),e.calcPoints(),e._updateActive()}),this.$element.on({"resizeme.zf.trigger":this.reflow.bind(this),"scrollme.zf.trigger":this._updateActive.bind(this)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var i=this.getAttribute("href");e.scrollToLoc(i)})}},{key:"scrollToLoc",value:function(e){var i=Math.round(t(e).offset().top-this.options.threshold/2-this.options.barOffset);t("html, body").stop(!0).animate({scrollTop:i},this.options.animationDuration,this.options.animationEasing)}},{key:"reflow",value:function(){this.calcPoints(),this._updateActive()}},{key:"_updateActive",value:function(){var t,e=parseInt(window.pageYOffset,10);if(e+this.winHeight===this.docHeight)t=this.points.length-1;else if(e<this.points[0])t=0;else{var i=this.scrollPos<e,n=this,s=this.points.filter(function(t,s){return i?e>=t:t-n.options.threshold<=e});t=s.length?s.length-1:0}if(this.$active.removeClass(this.options.activeClass),this.$active=this.$links.eq(t).addClass(this.options.activeClass),this.options.deepLinking){var o=this.$active[0].getAttribute("href");window.history.pushState?window.history.pushState(null,null,o):window.location.hash=o}this.scrollPos=e,this.$element.trigger("update.zf.magellan",[this.$active])}},{key:"destroy",value:function(){if(this.$element.off(".zf.trigger .zf.magellan").find("."+this.options.activeClass).removeClass(this.options.activeClass),this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animationDuration:500,animationEasing:"linear",threshold:50,activeClass:"active",deepLinking:!1,barOffset:0},Foundation.plugin(e,"Magellan")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.$lastTrigger=t(),this._init(),this._events(),Foundation.registerPlugin(this,"OffCanvas")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("id");if(this.$element.attr("aria-hidden","true"),t(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),this.options.closeOnClick)if(t(".js-off-canvas-exit").length)this.$exiter=t(".js-off-canvas-exit");else{var i=document.createElement("div");i.setAttribute("class","js-off-canvas-exit"),t("[data-off-canvas-content]").append(i),this.$exiter=t(i)}this.options.isRevealed=this.options.isRevealed||new RegExp(this.options.revealClass,"g").test(this.$element[0].className),this.options.isRevealed&&(this.options.revealOn=this.options.revealOn||this.$element[0].className.match(/(reveal-for-medium|reveal-for-large)/g)[0].split("-")[2],this._setMQChecker()),this.options.transitionTime||(this.options.transitionTime=1e3*parseFloat(window.getComputedStyle(t("[data-off-canvas-wrapper]")[0]).transitionDuration))}},{key:"_events",value:function(){this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),this.options.closeOnClick&&this.$exiter.length&&this.$exiter.on({"click.zf.offcanvas":this.close.bind(this)})}},{key:"_setMQChecker",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)?e.reveal(!0):e.reveal(!1)}).one("load.zf.offcanvas",function(){Foundation.MediaQuery.atLeast(e.options.revealOn)&&e.reveal(!0)})}},{key:"reveal",value:function(t){var e=this.$element.find("[data-close]");t?(this.close(),this.isRevealed=!0,this.$element.off("open.zf.trigger toggle.zf.trigger"),e.length&&e.hide()):(this.isRevealed=!1,this.$element.on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),e.length&&e.show())}},{key:"open",value:function(e,i){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;t(document.body);this.options.forceTop&&t("body").scrollTop(0),Foundation.Move(this.options.transitionTime,this.$element,function(){t("[data-off-canvas-wrapper]").addClass("is-off-canvas-open is-open-"+n.options.position),n.$element.addClass("is-open")}),this.$element.attr("aria-hidden","false").trigger("opened.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.addClass("is-visible"),i&&(this.$lastTrigger=i.attr("aria-expanded","true")),this.options.autoFocus&&this.$element.one(Foundation.transitionend(this.$element),function(){n.$element.find("a, button").eq(0).focus()}),this.options.trapFocus&&(t("[data-off-canvas-content]").attr("tabindex","-1"),this._trapFocus())}}},{key:"_trapFocus",value:function(){var t=Foundation.Keyboard.findFocusable(this.$element),e=t.eq(0),i=t.eq(-1);t.off(".zf.offcanvas").on("keydown.zf.offcanvas",function(t){9!==t.which&&9!==t.keycode||(t.target!==i[0]||t.shiftKey||(t.preventDefault(),e.focus()),t.target===e[0]&&t.shiftKey&&(t.preventDefault(),i.focus()))})}},{key:"close",value:function(e){if(this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;t("[data-off-canvas-wrapper]").removeClass("is-off-canvas-open is-open-"+i.options.position),i.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true").trigger("closed.zf.offcanvas"),this.options.closeOnClick&&this.$exiter.removeClass("is-visible"),this.$lastTrigger.attr("aria-expanded","false"),this.options.trapFocus&&t("[data-off-canvas-content]").removeAttr("tabindex")}}},{key:"toggle",value:function(t,e){this.$element.hasClass("is-open")?this.close(t,e):this.open(t,e)}},{key:"_handleKeyboard",value:function(t){27===t.which&&(t.stopPropagation(),t.preventDefault(),this.close(),this.$lastTrigger.focus())}},{key:"destroy",value:function(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),
	this.$exiter.off(".zf.offcanvas"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={closeOnClick:!0,transitionTime:0,position:"left",forceTop:!0,isRevealed:!1,revealOn:null,autoFocus:!0,revealClass:"reveal-for-",trapFocus:!1},Foundation.plugin(e,"OffCanvas")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Orbit"),Foundation.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}return _createClass(e,[{key:"_init",value:function(){this.$wrapper=this.$element.find("."+this.options.containerClass),this.$slides=this.$element.find("."+this.options.slideClass);var t=this.$element.find("img"),e=this.$slides.filter(".is-active");e.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),t.length?Foundation.onImagesLoaded(t,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&this.$slides.length>1&&this.geoSync(),this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function(){this.$bullets=this.$element.find("."+this.options.boxOfBullets).find("button")}},{key:"geoSync",value:function(){var t=this;this.timer=new Foundation.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){t.changeSlide(!0)}),this.timer.start()}},{key:"_prepareForOrbit",value:function(){var t=this;this._setWrapperHeight(function(e){t._setSlideHeight(e)})}},{key:"_setWrapperHeight",value:function(e){var i,n=0,s=0;this.$slides.each(function(){i=this.getBoundingClientRect().height,t(this).attr("data-slide",s),s&&t(this).css({position:"relative",display:"none"}),n=i>n?i:n,s++}),s===this.$slides.length&&(this.$wrapper.css({height:n}),e(n))}},{key:"_setSlideHeight",value:function(e){this.$slides.each(function(){t(this).css("max-height",e)})}},{key:"_events",value:function(){var e=this;if(this.$slides.length>1){if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),e.changeSlide(!1)}),this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){e.$element.data("clickedOn",!e.$element.data("clickedOn")),e.timer[e.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){e.timer.pause()}).on("mouseleave.zf.orbit",function(){e.$element.data("clickedOn")||e.timer.start()})),this.options.navButtons){var i=this.$element.find("."+this.options.nextClass+", ."+this.options.prevClass);i.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(){e.changeSlide(t(this).hasClass(e.options.nextClass))})}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;var i=t(this).data("slide"),n=i>e.$slides.filter(".is-active").data("slide"),s=e.$slides.eq(i);e.changeSlide(n,s,i)}),this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(i){Foundation.Keyboard.handleKey(i,"Orbit",{next:function(){e.changeSlide(!0)},previous:function(){e.changeSlide(!1)},handled:function(){t(i.target).is(e.$bullets)&&e.$bullets.filter(".is-active").focus()}})})}}},{key:"changeSlide",value:function(t,e,i){var n=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(n[0].className))return!1;var s,o=this.$slides.first(),a=this.$slides.last(),r=t?"Right":"Left",l=t?"Left":"Right",u=this;s=e?e:t?this.options.infiniteWrap?n.next("."+this.options.slideClass).length?n.next("."+this.options.slideClass):o:n.next("."+this.options.slideClass):this.options.infiniteWrap?n.prev("."+this.options.slideClass).length?n.prev("."+this.options.slideClass):a:n.prev("."+this.options.slideClass),s.length&&(this.options.bullets&&(i=i||this.$slides.index(s),this._updateBullets(i)),this.options.useMUI?(Foundation.Motion.animateIn(s.addClass("is-active").css({position:"absolute",top:0}),this.options["animInFrom"+r],function(){s.css({position:"relative",display:"block"}).attr("aria-live","polite")}),Foundation.Motion.animateOut(n.removeClass("is-active"),this.options["animOutTo"+l],function(){n.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(n.removeClass("is-active is-in").removeAttr("aria-live").hide(),s.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()),this.$element.trigger("slidechange.zf.orbit",[s]))}},{key:"_updateBullets",value:function(t){var e=this.$element.find("."+this.options.boxOfBullets).find(".is-active").removeClass("is-active").blur(),i=e.find("span:last").detach();this.$bullets.eq(t).addClass("is-active").append(i)}},{key:"destroy",value:function(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={bullets:!0,navButtons:!0,animInFromRight:"slide-in-right",animOutToRight:"slide-out-right",animInFromLeft:"slide-in-left",animOutToLeft:"slide-out-left",autoPlay:!0,timerDelay:5e3,infiniteWrap:!0,swipe:!0,pauseOnHover:!0,accessible:!0,containerClass:"orbit-container",slideClass:"orbit-slide",boxOfBullets:"orbit-bullets",nextClass:"orbit-next",prevClass:"orbit-previous",useMUI:!0},Foundation.plugin(e,"Orbit")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveMenu")}return _createClass(e,[{key:"_init",value:function(){for(var e={},n=this.rules.split(" "),s=0;s<n.length;s++){var o=n[s].split("-"),a=o.length>1?o[0]:"small",r=o.length>1?o[1]:o[0];null!==i[r]&&(e[a]=i[r])}this.rules=e,t.isEmptyObject(e)||this._checkMediaQueries()}},{key:"_events",value:function(){var e=this;t(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}},{key:"_checkMediaQueries",value:function(){var e,n=this;t.each(this.rules,function(t){Foundation.MediaQuery.atLeast(t)&&(e=t)}),e&&(this.currentPlugin instanceof this.rules[e].plugin||(t.each(i,function(t,e){n.$element.removeClass(e.cssClass)}),this.$element.addClass(this.rules[e].cssClass),this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}},{key:"destroy",value:function(){this.currentPlugin.destroy(),t(window).off(".zf.ResponsiveMenu"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={};var i={dropdown:{cssClass:"dropdown",plugin:Foundation._plugins["dropdown-menu"]||null},drilldown:{cssClass:"drilldown",plugin:Foundation._plugins.drilldown||null},accordion:{cssClass:"accordion-menu",plugin:Foundation._plugins["accordion-menu"]||null}};Foundation.plugin(e,"ResponsiveMenu")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=t(i),this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),this._events(),Foundation.registerPlugin(this,"ResponsiveToggle")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.data("responsive-toggle");e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=t("#"+e),this.$toggler=this.$element.find("[data-toggle]"),this._update()}},{key:"_events",value:function(){t(window).on("changed.zf.mediaquery",this._update.bind(this)),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}},{key:"toggleMenu",value:function(){Foundation.MediaQuery.atLeast(this.options.hideFor)||(this.$targetMenu.toggle(0),this.$element.trigger("toggled.zf.responsiveToggle"))}},{key:"destroy",value:function(){}}]),e}();e.defaults={hideFor:"medium"},Foundation.plugin(e,"ResponsiveToggle")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(){return/iP(ad|hone|od).*OS/.test(window.navigator.userAgent)}var i=function(){function i(e,n){_classCallCheck(this,i),this.$element=e,this.options=t.extend({},i.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Reveal"),Foundation.Keyboard.register("Reveal",{ENTER:"open",SPACE:"open",ESCAPE:"close",TAB:"tab_forward",SHIFT_TAB:"tab_backward"})}return _createClass(i,[{key:"_init",value:function(){if(this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:Foundation.MediaQuery.current},this.isiOS=e(),this.isiOS&&this.$element.addClass("is-ios"),this.$anchor=t(t('[data-open="'+this.id+'"]').length?'[data-open="'+this.id+'"]':'[data-toggle="'+this.id+'"]'),this.$anchor.length){var i=this.$anchor[0].id||Foundation.GetYoDigits(6,"reveal");this.$anchor.attr({"aria-controls":this.id,id:i,"aria-haspopup":!0,tabindex:0}),this.$element.attr({"aria-labelledby":i})}(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(t("body")),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#"+this.id&&t(window).one("load.zf.reveal",this.open.bind(this))}},{key:"_makeOverlay",value:function(e){var i=t("<div></div>").addClass("reveal-overlay").attr({tabindex:-1,"aria-hidden":!0}).appendTo("body");return i}},{key:"_updatePosition",value:function(){var e,i=this.$element.outerWidth(),n=t(window).width(),s=this.$element.outerHeight(),o=t(window).height(),a=parseInt((n-i)/2,10);e=s>o?parseInt(Math.min(100,o/10),10):parseInt((o-s)/4,10),this.$element.css({top:e+"px"}),this.$overlay||this.$element.css({left:a+"px"})}},{key:"_events",value:function(){var e=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function(){e._updatePosition()}}),this.$anchor.length&&this.$anchor.on("keydown.zf.reveal",function(t){13!==t.which&&32!==t.which||(t.stopPropagation(),t.preventDefault(),e.open())}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(i){i.target===e.$element[0]||t.contains(e.$element[0],i.target)||e.close()}),this.options.deepLink&&t(window).on("popstate.zf.reveal:"+this.id,this._handleState.bind(this))}},{key:"_handleState",value:function(t){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}},{key:"open",value:function(){var e=this;if(this.options.deepLink){var i="#"+this.id;window.history.pushState?window.history.pushState(null,null,i):window.location.hash=i}if(this.isActive=!0,this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&this.$overlay.css({visibility:""}).hide(),this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id),this.options.animationIn?(this.options.overlay&&Foundation.Motion.animateIn(this.$overlay,"fade-in"),Foundation.Motion.animateIn(this.$element,this.options.animationIn,function(){this.focusableElements=Foundation.Keyboard.findFocusable(this.$element)})):(this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay)),this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),this.$element.trigger("open.zf.reveal"),this.isiOS){var n=window.pageYOffset;t("html, body").addClass("is-reveal-open").scrollTop(n)}else t("body").addClass("is-reveal-open");t("body").addClass("is-reveal-open").attr("aria-hidden",!(!this.options.overlay&&!this.options.fullScreen)),setTimeout(function(){e._extraHandlers()},0)}},{key:"_extraHandlers",value:function(){var e=this;this.focusableElements=Foundation.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||t("body").on("click.zf.reveal",function(i){i.target===e.$element[0]||t.contains(e.$element[0],i.target)||e.close()}),this.options.closeOnEsc&&t(window).on("keydown.zf.reveal",function(t){Foundation.Keyboard.handleKey(t,"Reveal",{close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())}}),0===e.focusableElements.length&&t.preventDefault()}),this.$element.on("keydown.zf.reveal",function(i){var n=t(this);Foundation.Keyboard.handleKey(i,"Reveal",{tab_forward:function(){e.$element.find(":focus").is(e.focusableElements.eq(-1))&&(e.focusableElements.eq(0).focus(),i.preventDefault())},tab_backward:function(){(e.$element.find(":focus").is(e.focusableElements.eq(0))||e.$element.is(":focus"))&&(e.focusableElements.eq(-1).focus(),i.preventDefault())},open:function(){e.$element.find(":focus").is(e.$element.find("[data-close]"))?setTimeout(function(){e.$anchor.focus()},1):n.is(e.focusableElements)&&e.open()},close:function(){e.options.closeOnEsc&&(e.close(),e.$anchor.focus())}})})}},{key:"close",value:function(){function e(){i.isiOS?t("html, body").removeClass("is-reveal-open"):t("body").removeClass("is-reveal-open"),t("body").attr({"aria-hidden":!1,tabindex:""}),i.$element.attr("aria-hidden",!0),i.$element.trigger("closed.zf.reveal")}if(!this.isActive||!this.$element.is(":visible"))return!1;var i=this;this.options.animationOut?(this.options.overlay?Foundation.Motion.animateOut(this.$overlay,"fade-out",e):e(),Foundation.Motion.animateOut(this.$element,this.options.animationOut)):(this.options.overlay?this.$overlay.hide(0,e):e(),this.$element.hide(this.options.hideDelay)),this.options.closeOnEsc&&t(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&t("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,i.options.deepLink&&(window.history.replaceState?window.history.replaceState("",document.title,window.location.pathname):window.location.hash="")}},{key:"toggle",value:function(){this.isActive?this.close():this.open()}},{key:"destroy",value:function(){this.options.overlay&&this.$overlay.hide().off().remove(),this.$element.hide().off(),this.$anchor.off(".zf"),t(window).off(".zf.reveal:"+this.id),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={animationIn:"",animationOut:"",showDelay:0,hideDelay:0,closeOnClick:!0,closeOnEsc:!0,multipleOpened:!1,vOffset:100,hOffset:0,fullScreen:!1,btmOffsetPct:10,overlay:!0,resetOnClose:!1,deepLink:!1},Foundation.plugin(i,"Reveal")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t,e){return t/e}function i(t,e,i,n){return Math.abs(t.position()[e]+t[n]()/2-i)}var n=function(){function n(e,i){_classCallCheck(this,n),this.$element=e,this.options=t.extend({},n.defaults,this.$element.data(),i),this._init(),Foundation.registerPlugin(this,"Slider"),Foundation.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}return _createClass(n,[{key:"_init",value:function(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):t("#"+this.$handle.attr("aria-controls")),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1,i=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=t().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this._events(this.$handle),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=this.inputs.length>1?this.inputs.eq(1):t("#"+this.$handle2.attr("aria-controls")),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,this._setHandlePos(this.$handle,this.options.initialStart,!0,function(){i._setHandlePos(i.$handle2,i.options.initialEnd,!0)}),this._setInitAttr(1),this._events(this.$handle2)),e||this._setHandlePos(this.$handle,this.options.initialStart,!0)}},{key:"_setHandlePos",value:function(t,i,n,s){i=parseFloat(i),i<this.options.start?i=this.options.start:i>this.options.end&&(i=this.options.end);var o=this.options.doubleSided;if(o)if(0===this.handles.index(t)){var a=parseFloat(this.$handle2.attr("aria-valuenow"));i=i>=a?a-this.options.step:i}else{var r=parseFloat(this.$handle.attr("aria-valuenow"));i=r>=i?r+this.options.step:i}this.options.vertical&&!n&&(i=this.options.end-i);var l=this,u=this.options.vertical,d=u?"height":"width",h=u?"top":"left",c=t[0].getBoundingClientRect()[d],f=this.$element[0].getBoundingClientRect()[d],p=e(i,this.options.end).toFixed(2),m=(f-c)*p,v=(100*e(m,f)).toFixed(this.options.decimal);i=parseFloat(i.toFixed(this.options.decimal));var g={};if(this._setValues(t,i),o){var w,y=0===this.handles.index(t),b=~~(100*e(c,f));if(y)g[h]=v+"%",w=parseFloat(this.$handle2[0].style[h])-v+b,s&&"function"==typeof s&&s();else{var $=parseFloat(this.$handle[0].style[h]);w=v-(isNaN($)?this.options.initialStart/((this.options.end-this.options.start)/100):$)+b}g["min-"+d]=w+"%"}this.$element.one("finished.zf.animate",function(){l.$element.trigger("moved.zf.slider",[t])});var C=this.$element.data("dragging")?1e3/60:this.options.moveTime;Foundation.Move(C,t,function(){t.css(h,v+"%"),l.options.doubleSided?l.$fill.css(g):l.$fill.css(d,100*p+"%")})}},{key:"_setInitAttr",value:function(t){var e=this.inputs.eq(t).attr("id")||Foundation.GetYoDigits(6,"slider");this.inputs.eq(t).attr({id:e,max:this.options.end,min:this.options.start,step:this.options.step}),this.handles.eq(t).attr({role:"slider","aria-controls":e,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":0===t?this.options.initialStart:this.options.initialEnd,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}},{key:"_setValues",value:function(t,e){var i=this.options.doubleSided?this.handles.index(t):0;this.inputs.eq(i).val(e),t.attr("aria-valuenow",e)}},{key:"_handleEvent",value:function(t,n,s){var o,a;if(s)o=this._adjustValue(null,s),a=!0;else{t.preventDefault();var r=this,l=this.options.vertical,u=l?"height":"width",d=l?"top":"left",h=l?t.pageY:t.pageX,c=this.$handle[0].getBoundingClientRect()[u]/2,f=this.$element[0].getBoundingClientRect()[u],p=this.$element.offset()[d]-h,m=p>0?-c:-f>p-c?f:Math.abs(p),v=e(m,f);if(o=(this.options.end-this.options.start)*v,Foundation.rtl()&&!this.options.vertical&&(o=this.options.end-o),o=r._adjustValue(null,o),a=!1,!n){var g=i(this.$handle,d,m,u),w=i(this.$handle2,d,m,u);n=w>=g?this.$handle:this.$handle2}}this._setHandlePos(n,o,a)}},{key:"_adjustValue",value:function(t,e){var i,n,s,o,a=this.options.step,r=parseFloat(a/2);return i=t?parseFloat(t.attr("aria-valuenow")):e,n=i%a,s=i-n,o=s+a,0===n?i:i=i>=s+r?o:s}},{key:"_events",value:function(e){if(this.options.disabled)return!1;var i,n=this;if(this.inputs.off("change.zf.slider").on("change.zf.slider",function(e){var i=n.inputs.index(t(this));n._handleEvent(e,n.handles.eq(i),t(this).val())}),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(e){return n.$element.data("dragging")?!1:void(t(e.target).is("[data-slider-handle]")||(n.options.doubleSided?n._handleEvent(e):n._handleEvent(e,n.$handle)))}),this.options.draggable){this.handles.addTouch();var s=t("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(o){e.addClass("is-dragging"),n.$fill.addClass("is-dragging"),n.$element.data("dragging",!0),i=t(o.currentTarget),s.on("mousemove.zf.slider",function(t){t.preventDefault(),n._handleEvent(t,i)}).on("mouseup.zf.slider",function(t){n._handleEvent(t,i),e.removeClass("is-dragging"),n.$fill.removeClass("is-dragging"),n.$element.data("dragging",!1),s.off("mousemove.zf.slider mouseup.zf.slider")})})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(e){var i,s=t(this),o=n.options.doubleSided?n.handles.index(s):0,a=parseFloat(n.inputs.eq(o).val());Foundation.Keyboard.handleKey(e,"Slider",{decrease:function(){i=a-n.options.step},increase:function(){i=a+n.options.step},decrease_fast:function(){i=a-10*n.options.step},increase_fast:function(){i=a+10*n.options.step},handled:function(){e.preventDefault(),n._setHandlePos(s,i,!0)}})})}},{key:"destroy",value:function(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),Foundation.unregisterPlugin(this)}}]),n}();n.defaults={start:0,end:100,step:1,initialStart:0,initialEnd:100,binding:!1,clickSelect:!0,vertical:!1,draggable:!0,disabled:!1,doubleSided:!1,decimal:2,moveTime:200,disabledClass:"disabled",invertVertical:!1},Foundation.plugin(n,"Slider")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){function e(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}var i=function(){function i(e,n){_classCallCheck(this,i),this.$element=e,this.options=t.extend({},i.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Sticky")}return _createClass(i,[{key:"_init",value:function(){var e=this.$element.parent("[data-sticky-container]"),i=this.$element[0].id||Foundation.GetYoDigits(6,"sticky"),n=this;e.length||(this.wasWrapped=!0),this.$container=e.length?e:t(this.options.container).wrapInner(this.$element),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":i}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,t(window).one("load.zf.sticky",function(){""!==n.options.anchor?n.$anchor=t("#"+n.options.anchor):n._parsePoints(),n._setSizes(function(){n._calc(!1)}),n._events(i.split("-").reverse().join("-"))})}},{key:"_parsePoints",value:function(){var e=this.options.topAnchor,i=this.options.btmAnchor,n=[e,i],s={};if(e&&i)for(var o=0,a=n.length;a>o&&n[o];o++){var r;if("number"==typeof n[o])r=n[o];else{var l=n[o].split(":"),u=t("#"+l[0]);r=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(r+=u[0].getBoundingClientRect().height)}s[o]=r}else s={0:1,1:document.documentElement.scrollHeight};this.points=s}},{key:"_events",value:function(e){var i=this,n=this.scrollListener="scroll.zf."+e;this.isOn||(this.canStick&&(this.isOn=!0,t(window).off(n).on(n,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,s){i._setSizes(function(){i._calc(!1),i.canStick?i.isOn||i._events(e):i.isOn&&i._pauseListeners(n)})}))}},{key:"_pauseListeners",value:function(e){this.isOn=!1,t(window).off(e),this.$element.trigger("pause.zf.sticky")}},{key:"_calc",value:function(t,e){return t&&this._setSizes(),this.canStick?(e||(e=window.pageYOffset),void(e>=this.topPoint?e<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0))):(this.isStuck&&this._removeSticky(!0),!1)}},{key:"_setSticky",value:function(){var t=this.options.stickTo,e="top"===t?"marginTop":"marginBottom",i="top"===t?"bottom":"top",n={};n[e]=this.options[e]+"em",n[t]=0,n[i]="auto",n.left=this.$container.offset().left+parseInt(window.getComputedStyle(this.$container[0])["padding-left"],10),this.isStuck=!0,this.$element.removeClass("is-anchored is-at-"+i).addClass("is-stuck is-at-"+t).css(n).trigger("sticky.zf.stuckto:"+t)}},{key:"_removeSticky",value:function(t){var e=this.options.stickTo,i="top"===e,n={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,o=i?"marginTop":"marginBottom",a=i?"bottom":"top",r=t?"top":"bottom";n[o]=0,t&&!i||i&&!t?(n[e]=s,n[a]=0):(n[e]=0,n[a]=s),n.left="",this.isStuck=!1,this.$element.removeClass("is-stuck is-at-"+e).addClass("is-anchored is-at-"+r).css(n).trigger("sticky.zf.unstuckfrom:"+r)}},{key:"_setSizes",value:function(t){this.canStick=Foundation.MediaQuery.atLeast(this.options.stickyOn),this.canStick||t();var e=this.$container[0].getBoundingClientRect().width,i=window.getComputedStyle(this.$container[0]),n=parseInt(i["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":e-n+"px"});var s=this.$element[0].getBoundingClientRect().height||this.containerHeight;this.containerHeight=s,this.$container.css({height:s}),this.elemHeight=s,this.isStuck&&this.$element.css({left:this.$container.offset().left+parseInt(i["padding-left"],10)}),this._setBreakPoints(s,function(){t&&t()})}},{key:"_setBreakPoints",value:function(t,i){if(!this.canStick){if(!i)return!1;i()}var n=e(this.options.marginTop),s=e(this.options.marginBottom),o=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:o+this.anchorHeight,r=window.innerHeight;"top"===this.options.stickTo?(o-=n,a-=t+n):"bottom"===this.options.stickTo&&(o-=r-(t+s),a-=r-s),this.topPoint=o,this.bottomPoint=a,i&&i()}},{key:"destroy",value:function(){this._removeSticky(!0),this.$element.removeClass(this.options.stickyClass+" is-anchored is-at-top").css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger"),this.$anchor.off("change.zf.sticky"),t(window).off(this.scrollListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""}),Foundation.unregisterPlugin(this)}}]),i}();i.defaults={container:"<div data-sticky-container></div>",stickTo:"top",anchor:"",topAnchor:"",btmAnchor:"",marginTop:1,marginBottom:1,stickyOn:"medium",stickyClass:"sticky",containerClass:"sticky-container",checkEvery:-1},Foundation.plugin(i,"Sticky")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this._init(),Foundation.registerPlugin(this,"Tabs"),Foundation.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}return _createClass(e,[{key:"_init",value:function(){var e=this;if(this.$tabTitles=this.$element.find("."+this.options.linkClass),this.$tabContent=t('[data-tabs-content="'+this.$element[0].id+'"]'),this.$tabTitles.each(function(){var i=t(this),n=i.find("a"),s=i.hasClass("is-active"),o=n[0].hash.slice(1),a=n[0].id?n[0].id:o+"-label",r=t("#"+o);i.attr({role:"presentation"}),n.attr({role:"tab","aria-controls":o,"aria-selected":s,id:a}),r.attr({role:"tabpanel","aria-hidden":!s,"aria-labelledby":a}),s&&e.options.autoFocus&&n.focus()}),this.options.matchHeight){var i=this.$tabContent.find("img");i.length?Foundation.onImagesLoaded(i,this._setHeight.bind(this)):this._setHeight()}this._events()}},{key:"_events",value:function(){this._addKeyHandler(),this._addClickHandler(),this.options.matchHeight&&t(window).on("changed.zf.mediaquery",this._setHeight.bind(this))}},{key:"_addClickHandler",value:function(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs","."+this.options.linkClass,function(i){i.preventDefault(),i.stopPropagation(),t(this).hasClass("is-active")||e._handleTabChange(t(this))})}},{key:"_addKeyHandler",value:function(){var e=this;e.$element.find("li:first-of-type"),e.$element.find("li:last-of-type");this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(i){if(9!==i.which){i.stopPropagation(),i.preventDefault();var n,s,o=t(this),a=o.parent("ul").children("li");a.each(function(i){return t(this).is(o)?void(e.options.wrapOnKeys?(n=0===i?a.last():a.eq(i-1),s=i===a.length-1?a.first():a.eq(i+1)):(n=a.eq(Math.max(0,i-1)),s=a.eq(Math.min(i+1,a.length-1)))):void 0}),Foundation.Keyboard.handleKey(i,"Tabs",{open:function(){o.find('[role="tab"]').focus(),e._handleTabChange(o)},previous:function(){n.find('[role="tab"]').focus(),e._handleTabChange(n)},next:function(){s.find('[role="tab"]').focus(),e._handleTabChange(s)}})}})}},{key:"_handleTabChange",value:function(e){var i=e.find('[role="tab"]'),n=i[0].hash,s=this.$tabContent.find(n),o=this.$element.find("."+this.options.linkClass+".is-active").removeClass("is-active").find('[role="tab"]').attr({"aria-selected":"false"});t("#"+o.attr("aria-controls")).removeClass("is-active").attr({"aria-hidden":"true"}),e.addClass("is-active"),i.attr({"aria-selected":"true"}),s.addClass("is-active").attr({"aria-hidden":"false"}),this.$element.trigger("change.zf.tabs",[e])}},{key:"selectTab",value:function(t){var e;e="object"==typeof t?t[0].id:t,e.indexOf("#")<0&&(e="#"+e);var i=this.$tabTitles.find('[href="'+e+'"]').parent("."+this.options.linkClass);this._handleTabChange(i)}},{key:"_setHeight",value:function(){var e=0;this.$tabContent.find("."+this.options.panelClass).css("height","").each(function(){var i=t(this),n=i.hasClass("is-active");n||i.css({visibility:"hidden",display:"block"});var s=this.getBoundingClientRect().height;n||i.css({visibility:"",display:""}),e=s>e?s:e}).css("height",e+"px")}},{key:"destroy",value:function(){this.$element.find("."+this.options.linkClass).off(".zf.tabs").hide().end().find("."+this.options.panelClass).hide(),this.options.matchHeight&&t(window).off("changed.zf.mediaquery"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={autoFocus:!1,wrapOnKeys:!0,matchHeight:!1,linkClass:"tabs-title",panelClass:"tabs-panel"},Foundation.plugin(e,"Tabs")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){
	return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,i.data(),n),this.className="",this._init(),this._events(),Foundation.registerPlugin(this,"Toggler")}return _createClass(e,[{key:"_init",value:function(){var e;this.options.animate?(e=this.options.animate.split(" "),this.animationIn=e[0],this.animationOut=e[1]||null):(e=this.$element.data("toggler"),this.className="."===e[0]?e.slice(1):e);var i=this.$element[0].id;t('[data-open="'+i+'"], [data-close="'+i+'"], [data-toggle="'+i+'"]').attr("aria-controls",i),this.$element.attr("aria-expanded",!this.$element.is(":hidden"))}},{key:"_events",value:function(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function(){this.$element.toggleClass(this.className);var t=this.$element.hasClass(this.className);t?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler"),this._updateARIA(t)}},{key:"_toggleAnimate",value:function(){var t=this;this.$element.is(":hidden")?Foundation.Motion.animateIn(this.$element,this.animationIn,function(){this.trigger("on.zf.toggler"),t._updateARIA(!0)}):Foundation.Motion.animateOut(this.$element,this.animationOut,function(){this.trigger("off.zf.toggler"),t._updateARIA(!1)})}},{key:"_updateARIA",value:function(t){this.$element.attr("aria-expanded",!!t)}},{key:"destroy",value:function(){this.$element.off(".zf.toggler"),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={animate:!1},Foundation.plugin(e,"Toggler")}(jQuery);var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();!function(t){var e=function(){function e(i,n){_classCallCheck(this,e),this.$element=i,this.options=t.extend({},e.defaults,this.$element.data(),n),this.isActive=!1,this.isClick=!1,this._init(),Foundation.registerPlugin(this,"Tooltip")}return _createClass(e,[{key:"_init",value:function(){var e=this.$element.attr("aria-describedby")||Foundation.GetYoDigits(6,"tooltip");this.options.positionClass=this._getPositionClass(this.$element),this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?t(this.options.template):this._buildTemplate(e),this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":e,"data-yeti-box":e,"data-toggle":e,"data-resize":e}).addClass(this.triggerClass),this.usedPositions=[],this.counter=4,this.classChanged=!1,this._events()}},{key:"_getPositionClass",value:function(t){if(!t)return"";var e=t[0].className.match(/\b(top|left|right)\b/g);return e=e?e[0]:""}},{key:"_buildTemplate",value:function(e){var i=(this.options.tooltipClass+" "+this.options.positionClass+" "+this.options.templateClasses).trim(),n=t("<div></div>").addClass(i).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e});return n}},{key:"_reposition",value:function(t){this.usedPositions.push(t?t:"bottom"),!t&&this.usedPositions.indexOf("top")<0?this.template.addClass("top"):"top"===t&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"left"===t&&this.usedPositions.indexOf("right")<0?this.template.removeClass(t).addClass("right"):"right"===t&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):!t&&this.usedPositions.indexOf("top")>-1&&this.usedPositions.indexOf("left")<0?this.template.addClass("left"):"top"===t&&this.usedPositions.indexOf("bottom")>-1&&this.usedPositions.indexOf("left")<0?this.template.removeClass(t).addClass("left"):"left"===t&&this.usedPositions.indexOf("right")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):"right"===t&&this.usedPositions.indexOf("left")>-1&&this.usedPositions.indexOf("bottom")<0?this.template.removeClass(t):this.template.removeClass(t),this.classChanged=!0,this.counter--}},{key:"_setPosition",value:function(){var t=this._getPositionClass(this.template),e=Foundation.Box.GetDimensions(this.template),i=Foundation.Box.GetDimensions(this.$element),n="left"===t?"left":"right"===t?"left":"top",s="top"===n?"height":"width";"height"===s?this.options.vOffset:this.options.hOffset;if(e.width>=e.windowDims.width||!this.counter&&!Foundation.Box.ImNotTouchingYou(this.template))return this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center bottom",this.options.vOffset,this.options.hOffset,!0)).css({width:i.windowDims.width-2*this.options.hOffset,height:"auto"}),!1;for(this.template.offset(Foundation.Box.GetOffsets(this.template,this.$element,"center "+(t||"bottom"),this.options.vOffset,this.options.hOffset));!Foundation.Box.ImNotTouchingYou(this.template)&&this.counter;)this._reposition(t),this._setPosition()}},{key:"show",value:function(){if("all"!==this.options.showOn&&!Foundation.MediaQuery.atLeast(this.options.showOn))return!1;var t=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),t.isActive=!0,this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){}),this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function(){var t=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){t.isActive=!1,t.isClick=!1,t.classChanged&&(t.template.removeClass(t._getPositionClass(t.template)).addClass(t.options.positionClass),t.usedPositions=[],t.counter=4,t.classChanged=!1)}),this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function(){var t=this,e=(this.template,!1);this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(e){t.isActive||(t.timeout=setTimeout(function(){t.show()},t.options.hoverDelay))}).on("mouseleave.zf.tooltip",function(i){clearTimeout(t.timeout),(!e||!t.isClick&&t.options.clickOpen)&&t.hide()}),this.options.clickOpen&&this.$element.on("mousedown.zf.tooltip",function(e){e.stopImmediatePropagation(),t.isClick?t.hide():(t.isClick=!0,!t.options.disableHover&&t.$element.attr("tabindex")||t.isActive||t.show())}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(e){t.isActive?t.hide():t.show()}),this.$element.on({"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(i){return e=!0,t.isClick?!1:void t.show()}).on("focusout.zf.tooltip",function(i){e=!1,t.isClick=!1,t.hide()}).on("resizeme.zf.trigger",function(){t.isActive&&t._setPosition()})}},{key:"toggle",value:function(){this.isActive?this.hide():this.show()}},{key:"destroy",value:function(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tootip").removeAttr("aria-describedby").removeAttr("data-yeti-box").removeAttr("data-toggle").removeAttr("data-resize"),this.template.remove(),Foundation.unregisterPlugin(this)}}]),e}();e.defaults={disableForTouch:!1,hoverDelay:200,fadeInDuration:150,fadeOutDuration:150,disableHover:!1,templateClasses:"",tooltipClass:"tooltip",triggerClass:"has-tip",showOn:"small",template:"",tipText:"",touchCloseText:"Tap to close.",clickOpen:!0,positionClass:"",vOffset:10,hOffset:12},Foundation.plugin(e,"Tooltip")}(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?includePaths[]=./node_modules/foundation-sites/scss!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?includePaths[]=./node_modules/foundation-sites/scss!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Patua+One);", ""]);

	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * Foundation for Sites by ZURB\n * Version 6.2.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n   * 1. Set default font family to sans-serif.\n   * 2. Prevent iOS and IE text size adjust after device orientation change,\n   *    without disabling user zoom.\n   */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n   * Remove default margin.\n   */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n     ========================================================================== */\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n   */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n     ========================================================================== */\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\na {\n  background-color: transparent; }\n\n/**\n   * Improve readability of focused elements when they are also in an\n   * active/hover state.\n   */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n   * Address styling not present in IE 8/9.\n   */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\nimg {\n  border: 0; }\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n   * Contain overflow in all browsers.\n   */\npre {\n  overflow: auto; }\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\nbutton {\n  overflow: visible; }\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\ninput {\n  line-height: normal; }\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n   */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * Define consistent border, margin, and padding.\n   * [NOTE] We don't enable this ruleset in Foundation, because we want the <fieldset> element to have plain styling.\n   */\n/* fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  } */\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n     ========================================================================== */\n/**\n   * Remove most spacing between table cells.\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.foundation-mq {\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  background: #f2f2f2;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  line-height: 1; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.row {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .row::before, .row::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .row::after {\n    clear: both; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row .row {\n    margin-left: -0.625rem;\n    margin-right: -0.625rem; }\n    @media screen and (min-width: 40em) {\n      .row .row {\n        margin-left: -0.9375rem;\n        margin-right: -0.9375rem; } }\n    .row .row.collapse {\n      margin-left: 0;\n      margin-right: 0; }\n  .row.expanded {\n    max-width: none; }\n    .row.expanded .row {\n      margin-left: auto;\n      margin-right: auto; }\n\n.column, .columns {\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .column, .columns {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\n    float: right; }\n  .column.end:last-child:last-child, .end.columns:last-child:last-child {\n    float: left; }\n\n.column.row.row, .row.row.columns {\n  float: none; }\n  .row .column.row.row, .row .row.row.columns {\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.small-1 {\n  width: 8.33333%; }\n\n.small-push-1 {\n  position: relative;\n  left: 8.33333%; }\n\n.small-pull-1 {\n  position: relative;\n  left: -8.33333%; }\n\n.small-offset-0 {\n  margin-left: 0%; }\n\n.small-2 {\n  width: 16.66667%; }\n\n.small-push-2 {\n  position: relative;\n  left: 16.66667%; }\n\n.small-pull-2 {\n  position: relative;\n  left: -16.66667%; }\n\n.small-offset-1 {\n  margin-left: 8.33333%; }\n\n.small-3 {\n  width: 25%; }\n\n.small-push-3 {\n  position: relative;\n  left: 25%; }\n\n.small-pull-3 {\n  position: relative;\n  left: -25%; }\n\n.small-offset-2 {\n  margin-left: 16.66667%; }\n\n.small-4 {\n  width: 33.33333%; }\n\n.small-push-4 {\n  position: relative;\n  left: 33.33333%; }\n\n.small-pull-4 {\n  position: relative;\n  left: -33.33333%; }\n\n.small-offset-3 {\n  margin-left: 25%; }\n\n.small-5 {\n  width: 41.66667%; }\n\n.small-push-5 {\n  position: relative;\n  left: 41.66667%; }\n\n.small-pull-5 {\n  position: relative;\n  left: -41.66667%; }\n\n.small-offset-4 {\n  margin-left: 33.33333%; }\n\n.small-6 {\n  width: 50%; }\n\n.small-push-6 {\n  position: relative;\n  left: 50%; }\n\n.small-pull-6 {\n  position: relative;\n  left: -50%; }\n\n.small-offset-5 {\n  margin-left: 41.66667%; }\n\n.small-7 {\n  width: 58.33333%; }\n\n.small-push-7 {\n  position: relative;\n  left: 58.33333%; }\n\n.small-pull-7 {\n  position: relative;\n  left: -58.33333%; }\n\n.small-offset-6 {\n  margin-left: 50%; }\n\n.small-8 {\n  width: 66.66667%; }\n\n.small-push-8 {\n  position: relative;\n  left: 66.66667%; }\n\n.small-pull-8 {\n  position: relative;\n  left: -66.66667%; }\n\n.small-offset-7 {\n  margin-left: 58.33333%; }\n\n.small-9 {\n  width: 75%; }\n\n.small-push-9 {\n  position: relative;\n  left: 75%; }\n\n.small-pull-9 {\n  position: relative;\n  left: -75%; }\n\n.small-offset-8 {\n  margin-left: 66.66667%; }\n\n.small-10 {\n  width: 83.33333%; }\n\n.small-push-10 {\n  position: relative;\n  left: 83.33333%; }\n\n.small-pull-10 {\n  position: relative;\n  left: -83.33333%; }\n\n.small-offset-9 {\n  margin-left: 75%; }\n\n.small-11 {\n  width: 91.66667%; }\n\n.small-push-11 {\n  position: relative;\n  left: 91.66667%; }\n\n.small-pull-11 {\n  position: relative;\n  left: -91.66667%; }\n\n.small-offset-10 {\n  margin-left: 83.33333%; }\n\n.small-12 {\n  width: 100%; }\n\n.small-offset-11 {\n  margin-left: 91.66667%; }\n\n.small-up-1 > .column, .small-up-1 > .columns {\n  width: 100%;\n  float: left; }\n  .small-up-1 > .column:nth-of-type(1n), .small-up-1 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-1 > .column:nth-of-type(1n+1), .small-up-1 > .columns:nth-of-type(1n+1) {\n    clear: both; }\n  .small-up-1 > .column:last-child, .small-up-1 > .columns:last-child {\n    float: left; }\n\n.small-up-2 > .column, .small-up-2 > .columns {\n  width: 50%;\n  float: left; }\n  .small-up-2 > .column:nth-of-type(1n), .small-up-2 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-2 > .column:nth-of-type(2n+1), .small-up-2 > .columns:nth-of-type(2n+1) {\n    clear: both; }\n  .small-up-2 > .column:last-child, .small-up-2 > .columns:last-child {\n    float: left; }\n\n.small-up-3 > .column, .small-up-3 > .columns {\n  width: 33.33333%;\n  float: left; }\n  .small-up-3 > .column:nth-of-type(1n), .small-up-3 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-3 > .column:nth-of-type(3n+1), .small-up-3 > .columns:nth-of-type(3n+1) {\n    clear: both; }\n  .small-up-3 > .column:last-child, .small-up-3 > .columns:last-child {\n    float: left; }\n\n.small-up-4 > .column, .small-up-4 > .columns {\n  width: 25%;\n  float: left; }\n  .small-up-4 > .column:nth-of-type(1n), .small-up-4 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-4 > .column:nth-of-type(4n+1), .small-up-4 > .columns:nth-of-type(4n+1) {\n    clear: both; }\n  .small-up-4 > .column:last-child, .small-up-4 > .columns:last-child {\n    float: left; }\n\n.small-up-5 > .column, .small-up-5 > .columns {\n  width: 20%;\n  float: left; }\n  .small-up-5 > .column:nth-of-type(1n), .small-up-5 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-5 > .column:nth-of-type(5n+1), .small-up-5 > .columns:nth-of-type(5n+1) {\n    clear: both; }\n  .small-up-5 > .column:last-child, .small-up-5 > .columns:last-child {\n    float: left; }\n\n.small-up-6 > .column, .small-up-6 > .columns {\n  width: 16.66667%;\n  float: left; }\n  .small-up-6 > .column:nth-of-type(1n), .small-up-6 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-6 > .column:nth-of-type(6n+1), .small-up-6 > .columns:nth-of-type(6n+1) {\n    clear: both; }\n  .small-up-6 > .column:last-child, .small-up-6 > .columns:last-child {\n    float: left; }\n\n.small-up-7 > .column, .small-up-7 > .columns {\n  width: 14.28571%;\n  float: left; }\n  .small-up-7 > .column:nth-of-type(1n), .small-up-7 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-7 > .column:nth-of-type(7n+1), .small-up-7 > .columns:nth-of-type(7n+1) {\n    clear: both; }\n  .small-up-7 > .column:last-child, .small-up-7 > .columns:last-child {\n    float: left; }\n\n.small-up-8 > .column, .small-up-8 > .columns {\n  width: 12.5%;\n  float: left; }\n  .small-up-8 > .column:nth-of-type(1n), .small-up-8 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-8 > .column:nth-of-type(8n+1), .small-up-8 > .columns:nth-of-type(8n+1) {\n    clear: both; }\n  .small-up-8 > .column:last-child, .small-up-8 > .columns:last-child {\n    float: left; }\n\n.small-collapse > .column, .small-collapse > .columns {\n  padding-left: 0;\n  padding-right: 0; }\n\n.small-collapse .row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.small-uncollapse > .column, .small-uncollapse > .columns {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n\n.small-centered {\n  float: none;\n  margin-left: auto;\n  margin-right: auto; }\n\n.small-uncentered,\n.small-push-0,\n.small-pull-0 {\n  position: static;\n  margin-left: 0;\n  margin-right: 0;\n  float: left; }\n\n@media screen and (min-width: 40em) {\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .medium-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .medium-offset-0 {\n    margin-left: 0%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .medium-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .medium-offset-1 {\n    margin-left: 8.33333%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%; }\n  .medium-pull-3 {\n    position: relative;\n    left: -25%; }\n  .medium-offset-2 {\n    margin-left: 16.66667%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .medium-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .medium-offset-3 {\n    margin-left: 25%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .medium-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .medium-offset-4 {\n    margin-left: 33.33333%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%; }\n  .medium-pull-6 {\n    position: relative;\n    left: -50%; }\n  .medium-offset-5 {\n    margin-left: 41.66667%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .medium-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .medium-offset-6 {\n    margin-left: 50%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .medium-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .medium-offset-7 {\n    margin-left: 58.33333%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%; }\n  .medium-pull-9 {\n    position: relative;\n    left: -75%; }\n  .medium-offset-8 {\n    margin-left: 66.66667%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .medium-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .medium-offset-9 {\n    margin-left: 75%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .medium-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .medium-offset-10 {\n    margin-left: 83.33333%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-11 {\n    margin-left: 91.66667%; }\n  .medium-up-1 > .column, .medium-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .medium-up-1 > .column:nth-of-type(1n), .medium-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-1 > .column:nth-of-type(1n+1), .medium-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .medium-up-1 > .column:last-child, .medium-up-1 > .columns:last-child {\n      float: left; }\n  .medium-up-2 > .column, .medium-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .medium-up-2 > .column:nth-of-type(1n), .medium-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-2 > .column:nth-of-type(2n+1), .medium-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .medium-up-2 > .column:last-child, .medium-up-2 > .columns:last-child {\n      float: left; }\n  .medium-up-3 > .column, .medium-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .medium-up-3 > .column:nth-of-type(1n), .medium-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-3 > .column:nth-of-type(3n+1), .medium-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .medium-up-3 > .column:last-child, .medium-up-3 > .columns:last-child {\n      float: left; }\n  .medium-up-4 > .column, .medium-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .medium-up-4 > .column:nth-of-type(1n), .medium-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-4 > .column:nth-of-type(4n+1), .medium-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .medium-up-4 > .column:last-child, .medium-up-4 > .columns:last-child {\n      float: left; }\n  .medium-up-5 > .column, .medium-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .medium-up-5 > .column:nth-of-type(1n), .medium-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-5 > .column:nth-of-type(5n+1), .medium-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .medium-up-5 > .column:last-child, .medium-up-5 > .columns:last-child {\n      float: left; }\n  .medium-up-6 > .column, .medium-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .medium-up-6 > .column:nth-of-type(1n), .medium-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-6 > .column:nth-of-type(6n+1), .medium-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .medium-up-6 > .column:last-child, .medium-up-6 > .columns:last-child {\n      float: left; }\n  .medium-up-7 > .column, .medium-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .medium-up-7 > .column:nth-of-type(1n), .medium-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-7 > .column:nth-of-type(7n+1), .medium-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .medium-up-7 > .column:last-child, .medium-up-7 > .columns:last-child {\n      float: left; }\n  .medium-up-8 > .column, .medium-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .medium-up-8 > .column:nth-of-type(1n), .medium-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-8 > .column:nth-of-type(8n+1), .medium-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .medium-up-8 > .column:last-child, .medium-up-8 > .columns:last-child {\n      float: left; }\n  .medium-collapse > .column, .medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .medium-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .medium-uncentered,\n  .medium-push-0,\n  .medium-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\n@media screen and (min-width: 64em) {\n  .large-1 {\n    width: 8.33333%; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .large-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .large-offset-0 {\n    margin-left: 0%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .large-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .large-offset-1 {\n    margin-left: 8.33333%; }\n  .large-3 {\n    width: 25%; }\n  .large-push-3 {\n    position: relative;\n    left: 25%; }\n  .large-pull-3 {\n    position: relative;\n    left: -25%; }\n  .large-offset-2 {\n    margin-left: 16.66667%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .large-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .large-offset-3 {\n    margin-left: 25%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .large-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .large-offset-4 {\n    margin-left: 33.33333%; }\n  .large-6 {\n    width: 50%; }\n  .large-push-6 {\n    position: relative;\n    left: 50%; }\n  .large-pull-6 {\n    position: relative;\n    left: -50%; }\n  .large-offset-5 {\n    margin-left: 41.66667%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .large-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .large-offset-6 {\n    margin-left: 50%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .large-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .large-offset-7 {\n    margin-left: 58.33333%; }\n  .large-9 {\n    width: 75%; }\n  .large-push-9 {\n    position: relative;\n    left: 75%; }\n  .large-pull-9 {\n    position: relative;\n    left: -75%; }\n  .large-offset-8 {\n    margin-left: 66.66667%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .large-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .large-offset-9 {\n    margin-left: 75%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .large-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .large-offset-10 {\n    margin-left: 83.33333%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-11 {\n    margin-left: 91.66667%; }\n  .large-up-1 > .column, .large-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .large-up-1 > .column:nth-of-type(1n), .large-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-1 > .column:nth-of-type(1n+1), .large-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .large-up-1 > .column:last-child, .large-up-1 > .columns:last-child {\n      float: left; }\n  .large-up-2 > .column, .large-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .large-up-2 > .column:nth-of-type(1n), .large-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-2 > .column:nth-of-type(2n+1), .large-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .large-up-2 > .column:last-child, .large-up-2 > .columns:last-child {\n      float: left; }\n  .large-up-3 > .column, .large-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .large-up-3 > .column:nth-of-type(1n), .large-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-3 > .column:nth-of-type(3n+1), .large-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .large-up-3 > .column:last-child, .large-up-3 > .columns:last-child {\n      float: left; }\n  .large-up-4 > .column, .large-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .large-up-4 > .column:nth-of-type(1n), .large-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-4 > .column:nth-of-type(4n+1), .large-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .large-up-4 > .column:last-child, .large-up-4 > .columns:last-child {\n      float: left; }\n  .large-up-5 > .column, .large-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .large-up-5 > .column:nth-of-type(1n), .large-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-5 > .column:nth-of-type(5n+1), .large-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .large-up-5 > .column:last-child, .large-up-5 > .columns:last-child {\n      float: left; }\n  .large-up-6 > .column, .large-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .large-up-6 > .column:nth-of-type(1n), .large-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-6 > .column:nth-of-type(6n+1), .large-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .large-up-6 > .column:last-child, .large-up-6 > .columns:last-child {\n      float: left; }\n  .large-up-7 > .column, .large-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .large-up-7 > .column:nth-of-type(1n), .large-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-7 > .column:nth-of-type(7n+1), .large-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .large-up-7 > .column:last-child, .large-up-7 > .columns:last-child {\n      float: left; }\n  .large-up-8 > .column, .large-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .large-up-8 > .column:nth-of-type(1n), .large-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-8 > .column:nth-of-type(8n+1), .large-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .large-up-8 > .column:last-child, .large-up-8 > .columns:last-child {\n      float: left; }\n  .large-collapse > .column, .large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .large-uncollapse > .column, .large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .large-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .large-uncentered,\n  .large-push-0,\n  .large-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\np {\n  font-size: inherit;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  text-rendering: optimizeLegibility; }\n\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 80%;\n  line-height: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Patua One\", cursive;\n  font-weight: normal;\n  font-style: normal;\n  color: inherit;\n  text-rendering: optimizeLegibility;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  line-height: 1.4; }\n  h1 small,\n  h2 small,\n  h3 small,\n  h4 small,\n  h5 small,\n  h6 small {\n    color: #cacaca;\n    line-height: 0; }\n\nh1 {\n  font-size: 1.5rem; }\n\nh2 {\n  font-size: 1.25rem; }\n\nh3 {\n  font-size: 1.1875rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1.0625rem; }\n\nh6 {\n  font-size: 1rem; }\n\n@media screen and (min-width: 40em) {\n  h1 {\n    font-size: 3rem; }\n  h2 {\n    font-size: 2.5rem; }\n  h3 {\n    font-size: 1.9375rem; }\n  h4 {\n    font-size: 1.5625rem; }\n  h5 {\n    font-size: 1.25rem; }\n  h6 {\n    font-size: 1rem; } }\n\na {\n  color: #4472a9;\n  text-decoration: none;\n  line-height: inherit;\n  cursor: pointer; }\n  a:hover, a:focus {\n    color: #3a6291; }\n  a img {\n    border: 0; }\n\nhr {\n  max-width: 75rem;\n  height: 0;\n  border-right: 0;\n  border-top: 0;\n  border-bottom: 1px solid #cacaca;\n  border-left: 0;\n  margin: 1.25rem auto;\n  clear: both; }\n\nul,\nol,\ndl {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  list-style-position: outside; }\n\nli {\n  font-size: inherit; }\n\nul {\n  list-style-type: disc;\n  margin-left: 1.25rem; }\n\nol {\n  margin-left: 1.25rem; }\n\nul ul, ol ul, ul ol, ol ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\n\ndl {\n  margin-bottom: 1rem; }\n  dl dt {\n    margin-bottom: 0.3rem;\n    font-weight: bold; }\n\nblockquote {\n  margin: 0 0 1rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #cacaca; }\n  blockquote, blockquote p {\n    line-height: 1.6;\n    color: #8a8a8a; }\n\ncite {\n  display: block;\n  font-size: 0.8125rem;\n  color: #8a8a8a; }\n  cite:before {\n    content: '\\2014    '; }\n\nabbr {\n  color: #0a0a0a;\n  cursor: help;\n  border-bottom: 1px dotted #0a0a0a; }\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #0a0a0a;\n  background-color: #f2f2f2;\n  border: 1px solid #cacaca;\n  padding: 0.125rem 0.3125rem 0.0625rem; }\n\nkbd {\n  padding: 0.125rem 0.25rem 0;\n  margin: 0;\n  background-color: #f2f2f2;\n  color: #0a0a0a;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace; }\n\n.subheader {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n  line-height: 1.4;\n  color: #8a8a8a; }\n\n.lead {\n  font-size: 125%;\n  line-height: 1.6; }\n\n.stat {\n  font-size: 2.5rem;\n  line-height: 1; }\n  p + .stat {\n    margin-top: -1rem; }\n\n.no-bullet {\n  margin-left: 0;\n  list-style: none; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n@media screen and (min-width: 40em) {\n  .medium-text-left {\n    text-align: left; }\n  .medium-text-right {\n    text-align: right; }\n  .medium-text-center {\n    text-align: center; }\n  .medium-text-justify {\n    text-align: justify; } }\n\n@media screen and (min-width: 64em) {\n  .large-text-left {\n    text-align: left; }\n  .large-text-right {\n    text-align: right; }\n  .large-text-center {\n    text-align: center; }\n  .large-text-justify {\n    text-align: justify; } }\n\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  .ir a:after,\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #8a8a8a;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\ntextarea {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-family: inherit;\n  font-size: 1rem;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  border-radius: 0;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\n  textarea:focus {\n    border: 1px solid #8a8a8a;\n    background-color: #fefefe;\n    outline: none;\n    box-shadow: 0 0 5px #cacaca;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n\ntextarea {\n  max-width: 100%; }\n  textarea[rows] {\n    height: auto; }\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #cacaca; }\n\ninput:disabled, input[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: #f2f2f2;\n  cursor: default; }\n\n[type='submit'],\n[type='button'] {\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type='search'] {\n  box-sizing: border-box; }\n\n[type='file'],\n[type='checkbox'],\n[type='radio'] {\n  margin: 0 0 1rem; }\n\n[type='checkbox'] + label,\n[type='radio'] + label {\n  display: inline-block;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0;\n  vertical-align: baseline; }\n\nlabel > [type='checkbox'],\nlabel > [type='radio'] {\n  margin-right: 0.5rem; }\n\n[type='file'] {\n  width: 100%; }\n\nlabel {\n  display: block;\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #0a0a0a; }\n  label.middle {\n    margin: 0 0 1rem;\n    padding: 0.5625rem 0; }\n\n.help-text {\n  margin-top: -0.5rem;\n  font-size: 0.8125rem;\n  font-style: italic;\n  color: #0a0a0a; }\n\n.input-group {\n  display: table;\n  width: 100%;\n  margin-bottom: 1rem; }\n  .input-group > :first-child {\n    border-radius: 0 0 0 0; }\n  .input-group > :last-child > * {\n    border-radius: 0 0 0 0; }\n\n.input-group-label, .input-group-field, .input-group-button {\n  margin: 0;\n  display: table-cell;\n  vertical-align: middle; }\n\n.input-group-label {\n  text-align: center;\n  padding: 0 1rem;\n  background: #f2f2f2;\n  color: #0a0a0a;\n  border: 1px solid #cacaca;\n  white-space: nowrap;\n  width: 1%;\n  height: 100%; }\n  .input-group-label:first-child {\n    border-right: 0; }\n  .input-group-label:last-child {\n    border-left: 0; }\n\n.input-group-field {\n  border-radius: 0;\n  height: 2.5rem; }\n\n.input-group-button {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  height: 100%;\n  width: 1%; }\n  .input-group-button a,\n  .input-group-button input,\n  .input-group-button button {\n    margin: 0; }\n\n.input-group .input-group-button {\n  display: table-cell; }\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\nlegend {\n  margin-bottom: 0.5rem;\n  max-width: 100%; }\n\n.fieldset {\n  border: 1px solid #cacaca;\n  padding: 1.25rem;\n  margin: 1.125rem 0; }\n  .fieldset legend {\n    background: #f2f2f2;\n    padding: 0 0.1875rem;\n    margin: 0;\n    margin-left: -0.1875rem; }\n\nselect {\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-family: inherit;\n  line-height: normal;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"32\" height=\"24\" viewBox=\"0 0 32 24\"><polygon points=\"0,0 32,0 16,24\" style=\"fill: rgb%28138, 138, 138%29\"></polygon></svg>');\n  background-size: 9px 6px;\n  background-position: right center;\n  background-origin: content-box;\n  background-repeat: no-repeat; }\n  @media screen and (min-width: 0\\0) {\n    select {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\n  select:disabled {\n    background-color: #f2f2f2;\n    cursor: default; }\n  select::-ms-expand {\n    display: none; }\n  select[multiple] {\n    height: auto; }\n\n.is-invalid-input:not(:focus) {\n  background-color: rgba(236, 88, 64, 0.1);\n  border-color: #ec5840; }\n\n.is-invalid-label {\n  color: #ec5840; }\n\n.form-error {\n  display: none;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #ec5840; }\n  .form-error.is-visible {\n    display: block; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  border-radius: 0;\n  padding: 0.85em 1em;\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  background-color: #4472a9;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #3a6190;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .button.primary {\n    background-color: #4472a9;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #365b87;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #dc3838;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #bc2121;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button.alert {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #4472a9;\n    color: #4472a9; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #223955;\n      color: #223955; }\n    .button.hollow.primary {\n      border: 1px solid #4472a9;\n      color: #4472a9; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #223955;\n        color: #223955; }\n    .button.hollow.secondary {\n      border: 1px solid #dc3838;\n      color: #dc3838; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #751515;\n        color: #751515; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #ec5840;\n      color: #ec5840; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #881f0e;\n        color: #881f0e; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed;\n    pointer-events: none; }\n  .button.dropdown::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    border-color: #fefefe transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: relative;\n    top: 0.4em;\n    float: right;\n    margin-left: 1em;\n    display: inline-block; }\n  .button.arrow-only::after {\n    margin-left: 0;\n    float: none;\n    top: -0.1em; }\n\n.accordion {\n  list-style-type: none;\n  background: #fefefe;\n  border: 1px solid #f2f2f2;\n  border-bottom: 0;\n  border-radius: 0;\n  margin-left: 0; }\n\n.accordion-title {\n  display: block;\n  padding: 1.25rem 1rem;\n  line-height: 1;\n  font-size: 0.75rem;\n  color: #4472a9;\n  position: relative;\n  border-bottom: 1px solid #f2f2f2; }\n  .accordion-title:hover, .accordion-title:focus {\n    background-color: #f2f2f2; }\n  .accordion-title::before {\n    content: '+';\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    margin-top: -0.5rem; }\n  .is-active > .accordion-title::before {\n    content: '\\2013'; }\n\n.accordion-content {\n  padding: 1rem;\n  display: none;\n  border-bottom: 1px solid #f2f2f2;\n  background-color: #fefefe; }\n\n.is-accordion-submenu-parent > a {\n  position: relative; }\n  .is-accordion-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 6px;\n    border-color: #4472a9 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: absolute;\n    top: 50%;\n    margin-top: -4px;\n    right: 1rem; }\n\n.is-accordion-submenu-parent[aria-expanded='true'] > a::after {\n  transform-origin: 50% 50%;\n  transform: scaleY(-1); }\n\n.badge {\n  display: inline-block;\n  padding: 0.3em;\n  min-width: 2.1em;\n  font-size: 0.6rem;\n  text-align: center;\n  border-radius: 50%;\n  background: #4472a9;\n  color: #fefefe; }\n  .badge.secondary {\n    background: #dc3838;\n    color: #fefefe; }\n  .badge.success {\n    background: #3adb76;\n    color: #fefefe; }\n  .badge.warning {\n    background: #ffae00;\n    color: #fefefe; }\n  .badge.alert {\n    background: #ec5840;\n    color: #fefefe; }\n\n.breadcrumbs {\n  list-style: none;\n  margin: 0 0 1rem 0; }\n  .breadcrumbs::before, .breadcrumbs::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .breadcrumbs::after {\n    clear: both; }\n  .breadcrumbs li {\n    float: left;\n    color: #0a0a0a;\n    font-size: 0.6875rem;\n    cursor: default;\n    text-transform: uppercase; }\n    .breadcrumbs li:not(:last-child)::after {\n      color: #cacaca;\n      content: \"/\";\n      margin: 0 0.75rem;\n      position: relative;\n      top: 1px;\n      opacity: 1; }\n  .breadcrumbs a {\n    color: #4472a9; }\n    .breadcrumbs a:hover {\n      text-decoration: underline; }\n  .breadcrumbs .disabled {\n    color: #cacaca; }\n\n.button-group {\n  margin-bottom: 1rem;\n  font-size: 0; }\n  .button-group::before, .button-group::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .button-group::after {\n    clear: both; }\n  .button-group .button {\n    margin: 0;\n    font-size: 0.9rem;\n    float: left; }\n    .button-group .button:not(:last-child) {\n      border-right: 1px solid #f2f2f2; }\n  .button-group.tiny .button {\n    font-size: 0.6rem; }\n  .button-group.small .button {\n    font-size: 0.75rem; }\n  .button-group.large .button {\n    font-size: 1.25rem; }\n  .button-group.expanded {\n    margin-right: -1px; }\n    .button-group.expanded::before, .button-group.expanded::after {\n      display: none; }\n    .button-group.expanded .button:first-child:nth-last-child(2), .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button {\n      display: inline-block;\n      width: calc(50% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(3), .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button {\n      display: inline-block;\n      width: calc(33.33333% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(4), .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button {\n      display: inline-block;\n      width: calc(25% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(5), .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button {\n      display: inline-block;\n      width: calc(20% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(6), .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button {\n      display: inline-block;\n      width: calc(16.66667% - 1px);\n      margin-right: 1px; }\n  .button-group.primary .button {\n    background-color: #4472a9;\n    color: #fefefe; }\n    .button-group.primary .button:hover, .button-group.primary .button:focus {\n      background-color: #365b87;\n      color: #fefefe; }\n  .button-group.secondary .button {\n    background-color: #dc3838;\n    color: #fefefe; }\n    .button-group.secondary .button:hover, .button-group.secondary .button:focus {\n      background-color: #bc2121;\n      color: #fefefe; }\n  .button-group.success .button {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button-group.success .button:hover, .button-group.success .button:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button-group.warning .button {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button-group.warning .button:hover, .button-group.warning .button:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button-group.alert .button {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button-group.alert .button:hover, .button-group.alert .button:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button-group.stacked .button, .button-group.stacked-for-small .button, .button-group.stacked-for-medium .button {\n    width: 100%; }\n    .button-group.stacked .button:not(:last-child), .button-group.stacked-for-small .button:not(:last-child), .button-group.stacked-for-medium .button:not(:last-child) {\n      margin-right: 0; }\n  @media screen and (min-width: 40em) {\n    .button-group.stacked-for-small .button {\n      width: auto; }\n      .button-group.stacked-for-small .button:not(:last-child) {\n        margin-right: 1px; } }\n  @media screen and (min-width: 64em) {\n    .button-group.stacked-for-medium .button {\n      width: auto; }\n      .button-group.stacked-for-medium .button:not(:last-child) {\n        margin-right: 1px; } }\n  @media screen and (max-width: 39.9375em) {\n    .button-group.stacked-for-small.expanded {\n      display: block; }\n      .button-group.stacked-for-small.expanded .button {\n        display: block;\n        margin-right: 0; } }\n\n.callout {\n  margin: 0 0 1rem 0;\n  padding: 1rem;\n  border: 1px solid rgba(10, 10, 10, 0.25);\n  border-radius: 0;\n  position: relative;\n  color: #0a0a0a;\n  background-color: white; }\n  .callout > :first-child {\n    margin-top: 0; }\n  .callout > :last-child {\n    margin-bottom: 0; }\n  .callout.primary {\n    background-color: #e2eaf3; }\n  .callout.secondary {\n    background-color: #fae1e1; }\n  .callout.success {\n    background-color: #e1faea; }\n  .callout.warning {\n    background-color: #fff3d9; }\n  .callout.alert {\n    background-color: #fce6e2; }\n  .callout.small {\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.5rem; }\n  .callout.large {\n    padding-top: 3rem;\n    padding-right: 3rem;\n    padding-bottom: 3rem;\n    padding-left: 3rem; }\n\n.close-button {\n  position: absolute;\n  color: #8a8a8a;\n  right: 1rem;\n  top: 0.5rem;\n  font-size: 2em;\n  line-height: 1;\n  cursor: pointer; }\n  [data-whatinput='mouse'] .close-button {\n    outline: 0; }\n  .close-button:hover, .close-button:focus {\n    color: #0a0a0a; }\n\n.menu {\n  margin: 0;\n  list-style-type: none; }\n  .menu > li {\n    display: table-cell;\n    vertical-align: middle; }\n    [data-whatinput='mouse'] .menu > li {\n      outline: 0; }\n  .menu > li > a {\n    display: block;\n    padding: 0.7rem 1rem;\n    line-height: 1; }\n  .menu input,\n  .menu a,\n  .menu button {\n    margin-bottom: 0; }\n  .menu > li > a img,\n  .menu > li > a i {\n    vertical-align: middle; }\n  .menu > li > a i + span,\n  .menu > li > a img + span {\n    vertical-align: middle; }\n  .menu > li > a img,\n  .menu > li > a i {\n    margin-right: 0.25rem;\n    display: inline-block; }\n  .menu > li {\n    display: table-cell; }\n  .menu.vertical > li {\n    display: block; }\n  @media screen and (min-width: 40em) {\n    .menu.medium-horizontal > li {\n      display: table-cell; }\n    .menu.medium-vertical > li {\n      display: block; } }\n  @media screen and (min-width: 64em) {\n    .menu.large-horizontal > li {\n      display: table-cell; }\n    .menu.large-vertical > li {\n      display: block; } }\n  .menu.simple li {\n    line-height: 1;\n    display: inline-block;\n    margin-right: 1rem; }\n  .menu.simple a {\n    padding: 0; }\n  .menu.align-right::before, .menu.align-right::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .menu.align-right::after {\n    clear: both; }\n  .menu.align-right > li {\n    float: right; }\n  .menu.expanded {\n    width: 100%;\n    display: table;\n    table-layout: fixed; }\n    .menu.expanded > li:first-child:last-child {\n      width: 100%; }\n  .menu.icon-top > li > a {\n    text-align: center; }\n    .menu.icon-top > li > a img,\n    .menu.icon-top > li > a i {\n      display: block;\n      margin: 0 auto 0.25rem; }\n  .menu.nested {\n    margin-left: 1rem; }\n  .menu .active > a {\n    color: #fefefe;\n    background: #4472a9; }\n\n.menu-text {\n  font-weight: bold;\n  color: inherit;\n  line-height: 1;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding: 0.7rem 1rem; }\n\n.menu-centered {\n  text-align: center; }\n  .menu-centered > .menu {\n    display: inline-block; }\n\n.no-js [data-responsive-menu] ul {\n  display: none; }\n\n.menu-icon {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #fefefe;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #fefefe, 0 14px 0 #fefefe; }\n  .menu-icon:hover::after {\n    background: #cacaca;\n    box-shadow: 0 7px 0 #cacaca, 0 14px 0 #cacaca; }\n\n.menu-icon.dark {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon.dark::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #0a0a0a;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a; }\n  .menu-icon.dark:hover::after {\n    background: #8a8a8a;\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\n\n.is-drilldown {\n  position: relative;\n  overflow: hidden; }\n  .is-drilldown li {\n    display: block !important; }\n\n.is-drilldown-submenu {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background: #fefefe;\n  transition: transform 0.15s linear; }\n  .is-drilldown-submenu.is-active {\n    z-index: 1;\n    display: block;\n    transform: translateX(-100%); }\n  .is-drilldown-submenu.is-closing {\n    transform: translateX(100%); }\n\n.is-drilldown-submenu-parent > a {\n  position: relative; }\n  .is-drilldown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 6px;\n    border-color: transparent transparent transparent #4472a9;\n    border-left-style: solid;\n    border-right-width: 0;\n    position: absolute;\n    top: 50%;\n    margin-top: -6px;\n    right: 1rem; }\n\n.js-drilldown-back > a::before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 6px;\n  border-color: transparent #4472a9 transparent transparent;\n  border-right-style: solid;\n  border-left-width: 0;\n  border-left-width: 0;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.75rem; }\n\n.dropdown-pane {\n  background-color: #f2f2f2;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  display: block;\n  font-size: 1rem;\n  padding: 1rem;\n  position: absolute;\n  visibility: hidden;\n  width: 300px;\n  z-index: 10; }\n  .dropdown-pane.is-open {\n    visibility: visible; }\n\n.dropdown-pane.tiny {\n  width: 100px; }\n\n.dropdown-pane.small {\n  width: 200px; }\n\n.dropdown-pane.large {\n  width: 400px; }\n\n.dropdown.menu > li.opens-left > .is-dropdown-submenu {\n  left: auto;\n  right: 0;\n  top: 100%; }\n\n.dropdown.menu > li.opens-right > .is-dropdown-submenu {\n  right: auto;\n  left: 0;\n  top: 100%; }\n\n.dropdown.menu > li.is-dropdown-submenu-parent > a {\n  padding-right: 1.5rem;\n  position: relative; }\n\n.dropdown.menu > li.is-dropdown-submenu-parent > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: #4472a9 transparent transparent;\n  border-top-style: solid;\n  border-bottom-width: 0;\n  right: 5px;\n  margin-top: -2px; }\n\n[data-whatinput='mouse'] .dropdown.menu a {\n  outline: 0; }\n\n.no-js .dropdown.menu ul {\n  display: none; }\n\n.dropdown.menu.vertical > li .is-dropdown-submenu {\n  top: 0; }\n\n.dropdown.menu.vertical > li.opens-left .is-dropdown-submenu {\n  left: auto;\n  right: 100%; }\n\n.dropdown.menu.vertical > li.opens-right .is-dropdown-submenu {\n  right: auto;\n  left: 100%; }\n\n.dropdown.menu.vertical > li > a::after {\n  right: 14px;\n  margin-top: -3px; }\n\n.dropdown.menu.vertical > li.opens-left > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: transparent #4472a9 transparent transparent;\n  border-right-style: solid;\n  border-left-width: 0; }\n\n.dropdown.menu.vertical > li.opens-right > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: transparent transparent transparent #4472a9;\n  border-left-style: solid;\n  border-right-width: 0; }\n\n@media screen and (min-width: 40em) {\n  .dropdown.menu.medium-horizontal > li.opens-left > .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n  .dropdown.menu.medium-horizontal > li.opens-right > .is-dropdown-submenu {\n    right: auto;\n    left: 0;\n    top: 100%; }\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a {\n    padding-right: 1.5rem;\n    position: relative; }\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: #4472a9 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    right: 5px;\n    margin-top: -2px; }\n  .dropdown.menu.medium-vertical > li .is-dropdown-submenu {\n    top: 0; }\n  .dropdown.menu.medium-vertical > li.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 100%; }\n  .dropdown.menu.medium-vertical > li.opens-right .is-dropdown-submenu {\n    right: auto;\n    left: 100%; }\n  .dropdown.menu.medium-vertical > li > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .dropdown.menu.medium-vertical > li.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #4472a9 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .dropdown.menu.medium-vertical > li.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #4472a9;\n    border-left-style: solid;\n    border-right-width: 0; } }\n\n@media screen and (min-width: 64em) {\n  .dropdown.menu.large-horizontal > li.opens-left > .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n  .dropdown.menu.large-horizontal > li.opens-right > .is-dropdown-submenu {\n    right: auto;\n    left: 0;\n    top: 100%; }\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a {\n    padding-right: 1.5rem;\n    position: relative; }\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: #4472a9 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    right: 5px;\n    margin-top: -2px; }\n  .dropdown.menu.large-vertical > li .is-dropdown-submenu {\n    top: 0; }\n  .dropdown.menu.large-vertical > li.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 100%; }\n  .dropdown.menu.large-vertical > li.opens-right .is-dropdown-submenu {\n    right: auto;\n    left: 100%; }\n  .dropdown.menu.large-vertical > li > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .dropdown.menu.large-vertical > li.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #4472a9 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .dropdown.menu.large-vertical > li.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #4472a9;\n    border-left-style: solid;\n    border-right-width: 0; } }\n\n.dropdown.menu.align-right .is-dropdown-submenu.first-sub {\n  top: 100%;\n  left: auto;\n  right: 0; }\n\n.is-dropdown-menu.vertical {\n  width: 100px; }\n  .is-dropdown-menu.vertical.align-right {\n    float: right; }\n\n.is-dropdown-submenu-parent {\n  position: relative; }\n  .is-dropdown-submenu-parent a::after {\n    position: absolute;\n    top: 50%;\n    right: 5px;\n    margin-top: -2px; }\n  .is-dropdown-submenu-parent.opens-inner .is-dropdown-submenu {\n    top: 100%; }\n  .is-dropdown-submenu-parent.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n\n.is-dropdown-submenu {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 200px;\n  z-index: 1;\n  background: #fefefe;\n  border: 1px solid #cacaca; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #4472a9 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #4472a9;\n    border-left-style: solid;\n    border-right-width: 0; }\n  .is-dropdown-submenu .is-dropdown-submenu {\n    margin-top: -1px; }\n  .is-dropdown-submenu > li {\n    width: 100%; }\n  .is-dropdown-submenu:not(.js-dropdown-nohover) > .is-dropdown-submenu-parent:hover > .is-dropdown-submenu, .is-dropdown-submenu.js-dropdown-active {\n    display: block; }\n\n.flex-video {\n  position: relative;\n  height: 0;\n  padding-bottom: 75%;\n  margin-bottom: 1rem;\n  overflow: hidden; }\n  .flex-video iframe,\n  .flex-video object,\n  .flex-video embed,\n  .flex-video video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .flex-video.widescreen {\n    padding-bottom: 56.25%; }\n  .flex-video.vimeo {\n    padding-top: 0; }\n\n.label {\n  display: inline-block;\n  padding: 0.33333rem 0.5rem;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  border-radius: 0;\n  background: #4472a9;\n  color: #fefefe; }\n  .label.secondary {\n    background: #dc3838;\n    color: #fefefe; }\n  .label.success {\n    background: #3adb76;\n    color: #fefefe; }\n  .label.warning {\n    background: #ffae00;\n    color: #fefefe; }\n  .label.alert {\n    background: #ec5840;\n    color: #fefefe; }\n\n.media-object {\n  margin-bottom: 1rem;\n  display: block; }\n  .media-object img {\n    max-width: none; }\n  @media screen and (max-width: 39.9375em) {\n    .media-object.stack-for-small .media-object-section {\n      padding: 0;\n      padding-bottom: 1rem;\n      display: block; }\n      .media-object.stack-for-small .media-object-section img {\n        width: 100%; } }\n\n.media-object-section {\n  display: table-cell;\n  vertical-align: top; }\n  .media-object-section:first-child {\n    padding-right: 1rem; }\n  .media-object-section:last-child:not(:nth-child(2)) {\n    padding-left: 1rem; }\n  .media-object-section.middle {\n    vertical-align: middle; }\n  .media-object-section.bottom {\n    vertical-align: bottom; }\n\nhtml,\nbody {\n  height: 100%; }\n\n.off-canvas-wrapper {\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n  backface-visibility: hidden;\n  -webkit-overflow-scrolling: auto; }\n\n.off-canvas-wrapper-inner {\n  position: relative;\n  width: 100%;\n  transition: transform 0.5s ease; }\n  .off-canvas-wrapper-inner::before, .off-canvas-wrapper-inner::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .off-canvas-wrapper-inner::after {\n    clear: both; }\n\n.off-canvas-content,\n.off-canvas-content {\n  min-height: 100%;\n  background: #f2f2f2;\n  transition: transform 0.5s ease;\n  backface-visibility: hidden;\n  z-index: 1;\n  padding-bottom: 0.1px;\n  box-shadow: 0 0 10px rgba(10, 10, 10, 0.5); }\n\n.js-off-canvas-exit {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(254, 254, 254, 0.25);\n  cursor: pointer;\n  transition: background 0.5s ease; }\n\n.off-canvas {\n  position: absolute;\n  background: #f2f2f2;\n  z-index: -1;\n  max-height: 100%;\n  overflow-y: auto;\n  transform: translateX(0); }\n  [data-whatinput='mouse'] .off-canvas {\n    outline: 0; }\n  .off-canvas.position-left {\n    left: -250px;\n    top: 0;\n    width: 250px; }\n    .is-open-left {\n      transform: translateX(250px); }\n  .off-canvas.position-right {\n    right: -250px;\n    top: 0;\n    width: 250px; }\n    .is-open-right {\n      transform: translateX(-250px); }\n\n@media screen and (min-width: 40em) {\n  .position-left.reveal-for-medium {\n    left: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-left.reveal-for-medium ~ .off-canvas-content {\n      margin-left: 250px; }\n  .position-right.reveal-for-medium {\n    right: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-right.reveal-for-medium ~ .off-canvas-content {\n      margin-right: 250px; } }\n\n@media screen and (min-width: 64em) {\n  .position-left.reveal-for-large {\n    left: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-left.reveal-for-large ~ .off-canvas-content {\n      margin-left: 250px; }\n  .position-right.reveal-for-large {\n    right: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-right.reveal-for-large ~ .off-canvas-content {\n      margin-right: 250px; } }\n\n.orbit {\n  position: relative; }\n\n.orbit-container {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  list-style: none; }\n\n.orbit-slide {\n  width: 100%;\n  max-height: 100%; }\n  .orbit-slide.no-motionui.is-active {\n    top: 0;\n    left: 0; }\n\n.orbit-figure {\n  margin: 0; }\n\n.orbit-image {\n  margin: 0;\n  width: 100%;\n  max-width: 100%; }\n\n.orbit-caption {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 0;\n  color: #fefefe;\n  background-color: rgba(10, 10, 10, 0.5); }\n\n.orbit-previous, .orbit-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  padding: 1rem;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .orbit-previous, [data-whatinput='mouse'] .orbit-next {\n    outline: 0; }\n  .orbit-previous:hover, .orbit-next:hover, .orbit-previous:active, .orbit-next:active, .orbit-previous:focus, .orbit-next:focus {\n    background-color: rgba(10, 10, 10, 0.5); }\n\n.orbit-previous {\n  left: 0; }\n\n.orbit-next {\n  left: auto;\n  right: 0; }\n\n.orbit-bullets {\n  position: relative;\n  margin-top: 0.8rem;\n  margin-bottom: 0.8rem;\n  text-align: center; }\n  [data-whatinput='mouse'] .orbit-bullets {\n    outline: 0; }\n  .orbit-bullets button {\n    width: 1.2rem;\n    height: 1.2rem;\n    margin: 0.1rem;\n    background-color: #cacaca;\n    border-radius: 50%; }\n    .orbit-bullets button:hover {\n      background-color: #8a8a8a; }\n    .orbit-bullets button.is-active {\n      background-color: #8a8a8a; }\n\n.pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .pagination::before, .pagination::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .pagination::after {\n    clear: both; }\n  .pagination li {\n    font-size: 0.875rem;\n    margin-right: 0.0625rem;\n    border-radius: 0;\n    display: none; }\n    .pagination li:last-child, .pagination li:first-child {\n      display: inline-block; }\n    @media screen and (min-width: 40em) {\n      .pagination li {\n        display: inline-block; } }\n  .pagination a,\n  .pagination button {\n    color: #0a0a0a;\n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .pagination a:hover,\n    .pagination button:hover {\n      background: #f2f2f2; }\n  .pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #4472a9;\n    color: #fefefe;\n    cursor: default; }\n  .pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; }\n    .pagination .disabled:hover {\n      background: transparent; }\n  .pagination .ellipsis::after {\n    content: '\\2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.pagination-previous a::before,\n.pagination-previous.disabled::before {\n  content: '\\AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.pagination-next a::after,\n.pagination-next.disabled::after {\n  content: '\\BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.progress {\n  background-color: #cacaca;\n  height: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0; }\n  .progress.primary .progress-meter {\n    background-color: #4472a9; }\n  .progress.secondary .progress-meter {\n    background-color: #dc3838; }\n  .progress.success .progress-meter {\n    background-color: #3adb76; }\n  .progress.warning .progress-meter {\n    background-color: #ffae00; }\n  .progress.alert .progress-meter {\n    background-color: #ec5840; }\n\n.progress-meter {\n  position: relative;\n  display: block;\n  width: 0%;\n  height: 100%;\n  background-color: #4472a9; }\n\n.progress-meter-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #fefefe;\n  white-space: nowrap; }\n\n.slider {\n  position: relative;\n  height: 0.5rem;\n  margin-top: 1.25rem;\n  margin-bottom: 2.25rem;\n  background-color: #f2f2f2;\n  cursor: pointer;\n  user-select: none;\n  touch-action: none; }\n\n.slider-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  max-width: 100%;\n  height: 0.5rem;\n  background-color: #cacaca;\n  transition: all 0.2s ease-in-out; }\n  .slider-fill.is-dragging {\n    transition: all 0s linear; }\n\n.slider-handle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  display: inline-block;\n  width: 1.4rem;\n  height: 1.4rem;\n  background-color: #4472a9;\n  transition: all 0.2s ease-in-out;\n  touch-action: manipulation;\n  border-radius: 0; }\n  [data-whatinput='mouse'] .slider-handle {\n    outline: 0; }\n  .slider-handle:hover {\n    background-color: #3a6190; }\n  .slider-handle.is-dragging {\n    transition: all 0s linear; }\n\n.slider.disabled,\n.slider[disabled] {\n  opacity: 0.25;\n  cursor: not-allowed; }\n\n.slider.vertical {\n  display: inline-block;\n  width: 0.5rem;\n  height: 12.5rem;\n  margin: 0 1.25rem;\n  transform: scale(1, -1); }\n  .slider.vertical .slider-fill {\n    top: 0;\n    width: 0.5rem;\n    max-height: 100%; }\n  .slider.vertical .slider-handle {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 1.4rem;\n    height: 1.4rem;\n    transform: translateX(-50%); }\n\n.sticky-container {\n  position: relative; }\n\n.sticky {\n  position: absolute;\n  z-index: 0;\n  transform: translate3d(0, 0, 0); }\n\n.sticky.is-stuck {\n  position: fixed;\n  z-index: 5; }\n  .sticky.is-stuck.is-at-top {\n    top: 0; }\n  .sticky.is-stuck.is-at-bottom {\n    bottom: 0; }\n\n.sticky.is-anchored {\n  position: absolute;\n  left: auto;\n  right: auto; }\n  .sticky.is-anchored.is-at-bottom {\n    bottom: 0; }\n\nbody.is-reveal-open {\n  overflow: hidden; }\n\n.reveal-overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1005;\n  background-color: rgba(10, 10, 10, 0.45);\n  overflow-y: scroll; }\n\n.reveal {\n  display: none;\n  z-index: 1006;\n  padding: 1rem;\n  border: 1px solid #cacaca;\n  background-color: #fefefe;\n  border-radius: 0;\n  position: relative;\n  top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: auto; }\n  [data-whatinput='mouse'] .reveal {\n    outline: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal {\n      min-height: 0; } }\n  .reveal .column, .reveal .columns,\n  .reveal .columns {\n    min-width: 0; }\n  .reveal > :last-child {\n    margin-bottom: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal {\n      width: 600px;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal .reveal {\n      left: auto;\n      right: auto;\n      margin: 0 auto; } }\n  .reveal.collapse {\n    padding: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal.tiny {\n      width: 30%;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal.small {\n      width: 50%;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal.large {\n      width: 90%;\n      max-width: 75rem; } }\n  .reveal.full {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    height: 100vh;\n    min-height: 100vh;\n    max-width: none;\n    margin-left: 0;\n    border: 0; }\n  @media screen and (max-width: 39.9375em) {\n    .reveal {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      max-width: none;\n      margin-left: 0;\n      border: 0; } }\n  .reveal.without-overlay {\n    position: fixed; }\n\n.switch {\n  margin-bottom: 1rem;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  color: #fefefe;\n  font-weight: bold;\n  font-size: 0.875rem; }\n\n.switch-input {\n  opacity: 0;\n  position: absolute; }\n\n.switch-paddle {\n  background: #cacaca;\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n  transition: all 0.25s ease-out;\n  border-radius: 0;\n  color: inherit;\n  font-weight: inherit; }\n  input + .switch-paddle {\n    margin: 0; }\n  .switch-paddle::after {\n    background: #fefefe;\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1.5rem;\n    left: 0.25rem;\n    top: 0.25rem;\n    width: 1.5rem;\n    transition: all 0.25s ease-out;\n    transform: translate3d(0, 0, 0);\n    border-radius: 0; }\n  input:checked ~ .switch-paddle {\n    background: #4472a9; }\n    input:checked ~ .switch-paddle::after {\n      left: 2.25rem; }\n  [data-whatinput='mouse'] input:focus ~ .switch-paddle {\n    outline: 0; }\n\n.switch-active, .switch-inactive {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.switch-active {\n  left: 8%;\n  display: none; }\n  input:checked + label > .switch-active {\n    display: block; }\n\n.switch-inactive {\n  right: 15%; }\n  input:checked + label > .switch-inactive {\n    display: none; }\n\n.switch.tiny .switch-paddle {\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.625rem; }\n\n.switch.tiny .switch-paddle::after {\n  width: 1rem;\n  height: 1rem; }\n\n.switch.tiny input:checked ~ .switch-paddle:after {\n  left: 1.75rem; }\n\n.switch.small .switch-paddle {\n  width: 3.5rem;\n  height: 1.75rem;\n  font-size: 0.75rem; }\n\n.switch.small .switch-paddle::after {\n  width: 1.25rem;\n  height: 1.25rem; }\n\n.switch.small input:checked ~ .switch-paddle:after {\n  left: 2rem; }\n\n.switch.large .switch-paddle {\n  width: 5rem;\n  height: 2.5rem;\n  font-size: 1rem; }\n\n.switch.large .switch-paddle::after {\n  width: 2rem;\n  height: 2rem; }\n\n.switch.large input:checked ~ .switch-paddle:after {\n  left: 2.75rem; }\n\ntable {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-radius: 0; }\n  table thead,\n  table tbody,\n  table tfoot {\n    border: 1px solid #f1f1f1;\n    background-color: #fefefe; }\n  table caption {\n    font-weight: bold;\n    padding: 0.5rem 0.625rem 0.625rem; }\n  table thead,\n  table tfoot {\n    background: #f8f8f8;\n    color: #0a0a0a; }\n    table thead tr,\n    table tfoot tr {\n      background: transparent; }\n    table thead th,\n    table thead td,\n    table tfoot th,\n    table tfoot td {\n      padding: 0.5rem 0.625rem 0.625rem;\n      font-weight: bold;\n      text-align: left; }\n  table tbody tr:nth-child(even) {\n    background-color: #f1f1f1; }\n  table tbody th,\n  table tbody td {\n    padding: 0.5rem 0.625rem 0.625rem; }\n\n@media screen and (max-width: 63.9375em) {\n  table.stack thead {\n    display: none; }\n  table.stack tfoot {\n    display: none; }\n  table.stack tr,\n  table.stack th,\n  table.stack td {\n    display: block; }\n  table.stack td {\n    border-top: 0; } }\n\ntable.scroll {\n  display: block;\n  width: 100%;\n  overflow-x: auto; }\n\ntable.hover tr:hover {\n  background-color: #f9f9f9; }\n\ntable.hover tr:nth-of-type(even):hover {\n  background-color: #ececec; }\n\n.table-scroll {\n  overflow-x: auto; }\n  .table-scroll table {\n    width: auto; }\n\n.tabs {\n  margin: 0;\n  list-style-type: none;\n  background: #fefefe;\n  border: 1px solid #f2f2f2; }\n  .tabs::before, .tabs::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .tabs::after {\n    clear: both; }\n\n.tabs.vertical > li {\n  width: auto;\n  float: none;\n  display: block; }\n\n.tabs.simple > li > a {\n  padding: 0; }\n  .tabs.simple > li > a:hover {\n    background: transparent; }\n\n.tabs.primary {\n  background: #4472a9; }\n  .tabs.primary > li > a {\n    color: #fefefe; }\n    .tabs.primary > li > a:hover, .tabs.primary > li > a:focus {\n      background: #416ca1; }\n\n.tabs-title {\n  float: left; }\n  .tabs-title > a {\n    display: block;\n    padding: 1.25rem 1.5rem;\n    line-height: 1;\n    font-size: 0.75rem; }\n    .tabs-title > a:hover {\n      background: #fefefe; }\n    .tabs-title > a:focus, .tabs-title > a[aria-selected='true'] {\n      background: #f2f2f2; }\n\n.tabs-content {\n  background: #fefefe;\n  transition: all 0.5s ease;\n  border: 1px solid #f2f2f2;\n  border-top: 0; }\n\n.tabs-content.vertical {\n  border: 1px solid #f2f2f2;\n  border-left: 0; }\n\n.tabs-panel {\n  display: none;\n  padding: 1rem; }\n  .tabs-panel.is-active {\n    display: block; }\n\n.thumbnail {\n  border: solid 4px #fefefe;\n  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);\n  display: inline-block;\n  line-height: 0;\n  max-width: 100%;\n  transition: box-shadow 200ms ease-out;\n  border-radius: 0;\n  margin-bottom: 1rem; }\n  .thumbnail:hover, .thumbnail:focus {\n    box-shadow: 0 0 6px 1px rgba(68, 114, 169, 0.5); }\n\n.title-bar {\n  background: #0a0a0a;\n  color: #fefefe;\n  padding: 0.5rem; }\n  .title-bar::before, .title-bar::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .title-bar::after {\n    clear: both; }\n  .title-bar .menu-icon {\n    margin-left: 0.25rem;\n    margin-right: 0.5rem; }\n\n.title-bar-left {\n  float: left; }\n\n.title-bar-right {\n  float: right;\n  text-align: right; }\n\n.title-bar-title {\n  font-weight: bold;\n  vertical-align: middle;\n  display: inline-block; }\n\n.menu-icon.dark {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon.dark::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #0a0a0a;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a; }\n  .menu-icon.dark:hover::after {\n    background: #8a8a8a;\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\n\n.has-tip {\n  border-bottom: dotted 1px #8a8a8a;\n  font-weight: bold;\n  position: relative;\n  display: inline-block;\n  cursor: help; }\n\n.tooltip {\n  background-color: #0a0a0a;\n  color: #fefefe;\n  font-size: 80%;\n  padding: 0.75rem;\n  position: absolute;\n  z-index: 10;\n  top: calc(100% + 0.6495rem);\n  max-width: 10rem !important;\n  border-radius: 0; }\n  .tooltip::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent transparent #0a0a0a;\n    border-bottom-style: solid;\n    border-top-width: 0;\n    bottom: 100%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%); }\n  .tooltip.top::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: #0a0a0a transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    top: 100%;\n    bottom: auto; }\n  .tooltip.left::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent transparent transparent #0a0a0a;\n    border-left-style: solid;\n    border-right-width: 0;\n    bottom: auto;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%); }\n  .tooltip.right::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent #0a0a0a transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0;\n    bottom: auto;\n    left: auto;\n    right: 100%;\n    top: 50%;\n    transform: translateY(-50%); }\n\n.top-bar {\n  padding: 0.5rem; }\n  .top-bar::before, .top-bar::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .top-bar::after {\n    clear: both; }\n  .top-bar,\n  .top-bar ul {\n    background-color: #f2f2f2; }\n  .top-bar input {\n    width: 200px;\n    margin-right: 1rem; }\n  .top-bar .input-group-field {\n    width: 100%;\n    margin-right: 0; }\n  .top-bar input.button {\n    width: auto; }\n\n@media screen and (max-width: 39.9375em) {\n  .stacked-for-small .top-bar-left,\n  .stacked-for-small .top-bar-right {\n    width: 100%; } }\n\n@media screen and (max-width: 63.9375em) {\n  .stacked-for-medium .top-bar-left,\n  .stacked-for-medium .top-bar-right {\n    width: 100%; } }\n\n@media screen and (max-width: 74.9375em) {\n  .stacked-for-large .top-bar-left,\n  .stacked-for-large .top-bar-right {\n    width: 100%; } }\n\n.top-bar-left,\n.top-bar-right {\n  width: 100%; }\n\n@media screen and (min-width: 40em) {\n  .top-bar-left,\n  .top-bar-right {\n    width: auto; } }\n\n.top-bar-title {\n  float: left;\n  margin-right: 1rem; }\n\n.top-bar-left {\n  float: left; }\n\n.top-bar-right {\n  float: right; }\n\n.hide {\n  display: none !important; }\n\n.invisible {\n  visibility: hidden; }\n\n@media screen and (max-width: 39.9375em) {\n  .hide-for-small-only {\n    display: none !important; } }\n\n@media screen and (max-width: 0em), screen and (min-width: 40em) {\n  .show-for-small-only {\n    display: none !important; } }\n\n@media screen and (min-width: 40em) {\n  .hide-for-medium {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em) {\n  .show-for-medium {\n    display: none !important; } }\n\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  .hide-for-medium-only {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em), screen and (min-width: 64em) {\n  .show-for-medium-only {\n    display: none !important; } }\n\n@media screen and (min-width: 64em) {\n  .hide-for-large {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em) {\n  .show-for-large {\n    display: none !important; } }\n\n@media screen and (min-width: 64em) and (max-width: 74.9375em) {\n  .hide-for-large-only {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em), screen and (min-width: 75em) {\n  .show-for-large-only {\n    display: none !important; } }\n\n.show-for-sr,\n.show-on-focus {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n\n.show-on-focus:active, .show-on-focus:focus {\n  position: static !important;\n  height: auto;\n  width: auto;\n  overflow: visible;\n  clip: auto; }\n\n.show-for-landscape,\n.hide-for-portrait {\n  display: block !important; }\n  @media screen and (orientation: landscape) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: block !important; } }\n  @media screen and (orientation: portrait) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: none !important; } }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n  @media screen and (orientation: landscape) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: none !important; } }\n  @media screen and (orientation: portrait) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: block !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.clearfix::before, .clearfix::after {\n  content: ' ';\n  display: table;\n  flex-basis: 0;\n  order: 1; }\n\n.clearfix::after {\n  clear: both; }\n\nh2 {\n  color: #4472a9;\n  font-size: 2.625rem;\n  margin: 1.25rem 0; }\n\n.promo-video {\n  position: static;\n  top: 0; }\n  .promo-video #overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 740px;\n    width: 100%;\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#236db5+0,021744+100&1+0,0.75+100 */\n    background: -moz-linear-gradient(top, #236db5 0%, rgba(2, 23, 68, 0.75) 100%);\n    /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, #236db5 0%, rgba(2, 23, 68, 0.75) 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, #236db5 0%, rgba(2, 23, 68, 0.75) 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#236db5', endColorstr='#bf021744',GradientType=0 );\n    /* IE6-9 */ }\n  .promo-video .header-content {\n    background-color: transparent;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%; }\n  .promo-video .headliner {\n    left: 0;\n    top: 50%;\n    position: absolute;\n    width: 100%;\n    transform: translateY(-50%); }\n    .promo-video .headliner h1 {\n      border-top: 2px solid #fefefe;\n      border-bottom: 2px solid #fefefe;\n      color: #fefefe;\n      text-transform: uppercase; }\n\n.menu-icon,\n.menu-icon:hover {\n  width: 3.75rem;\n  height: 2.25rem;\n  margin-top: 1.5625rem; }\n  .menu-icon::after,\n  .menu-icon:hover::after {\n    background-color: #fefefe;\n    height: 0.5rem;\n    box-shadow: 0 28px 0 #fefefe, 0 14px 0 #fefefe; }\n\nsection.rooms {\n  padding: 1.875rem 0; }\n  section.rooms div.room-image {\n    position: relative; }\n    section.rooms div.room-image .room-title {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding-left: 1.25rem; }\n      section.rooms div.room-image .room-title h3 {\n        color: #fefefe; }\n  section.rooms div.room-content {\n    background-color: #fefefe;\n    padding: 1.25rem; }\n\n.button {\n  background-color: #dc3838;\n  color: #fefefe;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1rem;\n  margin: 1.25rem 0; }\n  .button:hover, .button:focus {\n    background-color: #bf2222;\n    color: #fefefe; }\n\n/*** Separator Image ***/\n.separator-image {\n  height: 200px;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: scroll; }\n  @media screen and (min-width: 40em) {\n    .separator-image {\n      height: 350px;\n      background-size: cover; } }\n  @media screen and (min-width: 64em) {\n    .separator-image {\n      background-size: cover; } }\n\n.pool-image {\n  background-image: url(" + __webpack_require__(8) + "); }\n  @media screen and (min-width: 40em) {\n    .pool-image {\n      background-image: url(" + __webpack_require__(9) + "); } }\n  @media screen and (min-width: 64em) {\n    .pool-image {\n      background-image: url(" + __webpack_require__(10) + "); } }\n\n.bar-image {\n  background-image: url(" + __webpack_require__(11) + "); }\n  @media screen and (min-width: 40em) {\n    .bar-image {\n      background-image: url(" + __webpack_require__(12) + "); } }\n  @media screen and (min-width: 64em) {\n    .bar-image {\n      background-image: url(" + __webpack_require__(13) + "); } }\n\n/*** About Us Section ***/\n@media screen and (min-width: 40em) {\n  .about-us-gallery {\n    height: 35rem;\n    position: relative; } }\n\n@media screen and (min-width: 40em) {\n  .about-us-gallery {\n    height: 26.25rem; } }\n\n@media screen and (min-width: 40em) {\n  .about-us-gallery .empty {\n    height: 35rem; } }\n\n@media screen and (min-width: 40em) {\n  .about-us-gallery .empty {\n    height: 26.25rem; } }\n\n@media screen and (min-width: 40em) {\n  .about-us-gallery div.content-about-us {\n    position: absolute;\n    top: 1.25rem;\n    left: 0;\n    width: 100%; } }\n\n.bluebg {\n  background-color: #4472a9; }\n  .bluebg h2.white {\n    color: #fefefe; }\n\nsection.booking {\n  padding: 3.125rem; }\n\nfooter {\n  background-color: #4472a9;\n  padding-top: 1.875rem;\n  color: #fefefe; }\n  footer .menu a {\n    color: #fefefe; }\n  footer .contact-information li {\n    position: relative;\n    height: 100px;\n    padding-left: 60px;\n    padding-top: 35px; }\n    footer .contact-information li:first-child {\n      padding-top: 22px; }\n    footer .contact-information li i {\n      font-size: 3.75rem;\n      position: absolute;\n      top: 0;\n      left: 0; }\n  footer .social i {\n    font-size: 3.75rem; }\n  footer p.copyright {\n    padding: 1.25rem 0;\n    background-color: #3d6697;\n    margin: 0; }\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1RDFEQ0ZFOUJEOTExRTVCRDQ5RkM3OTgyQzMwN0FCIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1RDFEQ0ZEOUJEOTExRTVCRDQ5RkM3OTgyQzMwN0FCIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDdEMkQ3OTlCQzMxMUU1ODcwQkVDMjEzMkQ3MDQyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDdEMkQ3QTlCQzMxMUU1ODcwQkVDMjEzMkQ3MDQyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAQDAwMDAwQDAwQGBAMEBgcF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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "062ee008ac95178ec241360824322b8d.jpg";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5b021d32f320517942b536b04411d1d6.jpg";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ3RDJENzk5QkMzMTFFNTg3MEJFQzIxMzJENzA0MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ3RDJEN0E5QkMzMTFFNTg3MEJFQzIxMzJENzA0MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDdEMkQ3NzlCQzMxMUU1ODcwQkVDMjEzMkQ3MDQyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDdEMkQ3ODlCQzMxMUU1ODcwQkVDMjEzMkQ3MDQyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAQDAwMDAwQDAwQGBAMEBgcF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"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMbaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVEN0QyRDdFOUJDMzExRTU4NzBCRUMyMTMyRDcwNDI3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVEN0QyRDdEOUJDMzExRTU4NzBCRUMyMTMyRDcwNDI3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkYxREVFRTg4OEEyRTAxMUU3MUI5REEwNzMzQUQwNzU0IiBzdFJlZjpkb2N1bWVudElEPSJGMURFRUU4ODhBMkUwMTFFNzFCOURBMDczM0FEMDc1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/tAEhQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAADxwBWgADGyVHHAIAAAIAAgA4QklNBCUAAAAA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"

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6d65fb1b7e268ebd42d9f25e6af5dcb9.jpg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);