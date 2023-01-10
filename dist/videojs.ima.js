(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('video.js'), require('videojs-contrib-ads')) :
	typeof define === 'function' && define.amd ? define(['video.js', 'videojs-contrib-ads'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.videojs));
})(this, (function (videojs) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global$e =
	  // eslint-disable-next-line es/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails$d = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$c = fails$d;

	var functionBindNative = !fails$c(function () {
	  // eslint-disable-next-line es/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$4 = functionBindNative;

	var FunctionPrototype$3 = Function.prototype;
	var apply$2 = FunctionPrototype$3.apply;
	var call$7 = FunctionPrototype$3.call;

	// eslint-disable-next-line es/no-reflect -- safe
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$4 ? call$7.bind(apply$2) : function () {
	  return call$7.apply(apply$2, arguments);
	});

	var NATIVE_BIND$3 = functionBindNative;

	var FunctionPrototype$2 = Function.prototype;
	var call$6 = FunctionPrototype$2.call;
	var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$6, call$6);

	var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
	  return function () {
	    return call$6.apply(fn, arguments);
	  };
	};

	var uncurryThis$f = functionUncurryThis;

	var toString$4 = uncurryThis$f({}.toString);
	var stringSlice = uncurryThis$f(''.slice);

	var classofRaw$2 = function (it) {
	  return stringSlice(toString$4(it), 8, -1);
	};

	var classofRaw$1 = classofRaw$2;
	var uncurryThis$e = functionUncurryThis;

	var functionUncurryThisClause = function (fn) {
	  // Nashorn bug:
	  //   https://github.com/zloirock/core-js/issues/1128
	  //   https://github.com/zloirock/core-js/issues/1130
	  if (classofRaw$1(fn) === 'Function') return uncurryThis$e(fn);
	};

	var documentAll$2 = typeof document == 'object' && document.all;

	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
	// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

	var documentAll_1 = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var $documentAll$1 = documentAll_1;

	var documentAll$1 = $documentAll$1.all;

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable$e = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor = {};

	var fails$b = fails$d;

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails$b(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var NATIVE_BIND$2 = functionBindNative;

	var call$5 = Function.prototype.call;

	var functionCall = NATIVE_BIND$2 ? call$5.bind(call$5) : function () {
	  return call$5.apply(call$5, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$3 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$d = functionUncurryThis;
	var fails$a = fails$d;
	var classof$8 = classofRaw$2;

	var $Object$4 = Object;
	var split = uncurryThis$d(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails$a(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !$Object$4('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$8(it) == 'String' ? split(it, '') : $Object$4(it);
	} : $Object$4;

	// we can't use just `it == null` since of `document.all` special case
	// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
	var isNullOrUndefined$2 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$1 = isNullOrUndefined$2;

	var $TypeError$7 = TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible$3 = function (it) {
	  if (isNullOrUndefined$1(it)) throw $TypeError$7("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings
	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$2 = requireObjectCoercible$3;

	var toIndexedObject$5 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$2(it));
	};

	var isCallable$d = isCallable$e;
	var $documentAll = documentAll_1;

	var documentAll = $documentAll.all;

	var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$d(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$d(it);
	};

	var path$5 = {};

	var path$4 = path$5;
	var global$d = global$e;
	var isCallable$c = isCallable$e;

	var aFunction = function (variable) {
	  return isCallable$c(variable) ? variable : undefined;
	};

	var getBuiltIn$4 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path$4[namespace]) || aFunction(global$d[namespace])
	    : path$4[namespace] && path$4[namespace][method] || global$d[namespace] && global$d[namespace][method];
	};

	var uncurryThis$c = functionUncurryThis;

	var objectIsPrototypeOf = uncurryThis$c({}.isPrototypeOf);

	var getBuiltIn$3 = getBuiltIn$4;

	var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

	var global$c = global$e;
	var userAgent = engineUserAgent;

	var process = global$c.process;
	var Deno = global$c.Deno;
	var versions = process && process.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version$1;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version$1 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version$1 && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version$1 = +match[1];
	  }
	}

	var engineV8Version = version$1;

	/* eslint-disable es/no-symbol -- required for testing */

	var V8_VERSION = engineV8Version;
	var fails$9 = fails$d;

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$9(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	/* eslint-disable es/no-symbol -- required for testing */

	var NATIVE_SYMBOL$1 = symbolConstructorDetection;

	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$2 = getBuiltIn$4;
	var isCallable$b = isCallable$e;
	var isPrototypeOf$3 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

	var $Object$3 = Object;

	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$2('Symbol');
	  return isCallable$b($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
	};

	var $String$2 = String;

	var tryToString$1 = function (argument) {
	  try {
	    return $String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$a = isCallable$e;
	var tryToString = tryToString$1;

	var $TypeError$6 = TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable$3 = function (argument) {
	  if (isCallable$a(argument)) return argument;
	  throw $TypeError$6(tryToString(argument) + ' is not a function');
	};

	var aCallable$2 = aCallable$3;
	var isNullOrUndefined = isNullOrUndefined$2;

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined(func) ? undefined : aCallable$2(func);
	};

	var call$4 = functionCall;
	var isCallable$9 = isCallable$e;
	var isObject$8 = isObject$9;

	var $TypeError$5 = TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$4(fn, input))) return val;
	  if (isCallable$9(fn = input.valueOf) && !isObject$8(val = call$4(fn, input))) return val;
	  if (pref !== 'string' && isCallable$9(fn = input.toString) && !isObject$8(val = call$4(fn, input))) return val;
	  throw $TypeError$5("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var isPure = true;

	var global$b = global$e;

	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var defineProperty$3 = Object.defineProperty;

	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$3(global$b, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$b[key] = value;
	  } return value;
	};

	var global$a = global$e;
	var defineGlobalProperty = defineGlobalProperty$1;

	var SHARED = '__core-js_shared__';
	var store$3 = global$a[SHARED] || defineGlobalProperty(SHARED, {});

	var sharedStore = store$3;

	var store$2 = sharedStore;

	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.27.1',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$1 = requireObjectCoercible$3;

	var $Object$2 = Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject$4 = function (argument) {
	  return $Object$2(requireObjectCoercible$1(argument));
	};

	var uncurryThis$b = functionUncurryThis;
	var toObject$3 = toObject$4;

	var hasOwnProperty = uncurryThis$b({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$3(it), key);
	};

	var uncurryThis$a = functionUncurryThis;

	var id = 0;
	var postfix = Math.random();
	var toString$3 = uncurryThis$a(1.0.toString);

	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$3(++id + postfix, 36);
	};

	var global$9 = global$e;
	var shared$2 = shared$3.exports;
	var hasOwn$9 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;

	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$1 = global$9.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

	var wellKnownSymbol$a = function (name) {
	  if (!hasOwn$9(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$9(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var call$3 = functionCall;
	var isObject$7 = isObject$9;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$9 = wellKnownSymbol$a;

	var $TypeError$4 = TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$9('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$7(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$3(exoticToPrim, input, pref);
	    if (!isObject$7(result) || isSymbol$1(result)) return result;
	    throw $TypeError$4("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey$2 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$8 = global$e;
	var isObject$6 = isObject$9;

	var document$1 = global$8.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$8 = descriptors;
	var fails$8 = fails$d;
	var createElement = documentCreateElement$1;

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !DESCRIPTORS$8 && !fails$8(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$7 = descriptors;
	var call$2 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$2 = createPropertyDescriptor$3;
	var toIndexedObject$4 = toIndexedObject$5;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$8 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;

	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$4(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwn$8(O, P)) return createPropertyDescriptor$2(!call$2(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var fails$7 = fails$d;
	var isCallable$8 = isCallable$e;

	var replacement = /#|\.prototype\./;

	var isForced$1 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable$8(detection) ? fails$7(detection)
	    : !!detection;
	};

	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';

	var isForced_1 = isForced$1;

	var uncurryThis$9 = functionUncurryThisClause;
	var aCallable$1 = aCallable$3;
	var NATIVE_BIND$1 = functionBindNative;

	var bind$7 = uncurryThis$9(uncurryThis$9.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable$1(fn);
	  return that === undefined ? fn : NATIVE_BIND$1 ? bind$7(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$6 = descriptors;
	var fails$6 = fails$d;

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$6(function () {
	  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var isObject$5 = isObject$9;

	var $String$1 = String;
	var $TypeError$3 = TypeError;

	// `Assert: Type(argument) is Object`
	var anObject$3 = function (argument) {
	  if (isObject$5(argument)) return argument;
	  throw $TypeError$3($String$1(argument) + ' is not an object');
	};

	var DESCRIPTORS$5 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
	var anObject$2 = anObject$3;
	var toPropertyKey = toPropertyKey$2;

	var $TypeError$2 = TypeError;
	// eslint-disable-next-line es/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
	  anObject$2(O);
	  P = toPropertyKey(P);
	  anObject$2(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$2(O);
	  P = toPropertyKey(P);
	  anObject$2(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$4 = descriptors;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor$1 = createPropertyDescriptor$3;

	var createNonEnumerableProperty$5 = DESCRIPTORS$4 ? function (object, key, value) {
	  return definePropertyModule$1.f(object, key, createPropertyDescriptor$1(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$7 = global$e;
	var apply$1 = functionApply;
	var uncurryThis$8 = functionUncurryThisClause;
	var isCallable$7 = isCallable$e;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var isForced = isForced_1;
	var path$3 = path$5;
	var bind$6 = functionBindContext;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
	var hasOwn$7 = hasOwnProperty_1;

	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$1(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};

	/*
	  options.target         - name of the target object
	  options.global         - target is the global object
	  options.stat           - export as static methods of target
	  options.proto          - export as prototype methods of target
	  options.real           - real prototype method for the `pure` version
	  options.forced         - export even if the native feature is available
	  options.bind           - bind methods to the target, required for the `pure` version
	  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
	  options.sham           - add a flag to not completely full polyfills
	  options.enumerable     - export as enumerable property
	  options.dontCallGetSet - prevent calling a getter on target
	  options.name           - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;

	  var nativeSource = GLOBAL ? global$7 : STATIC ? global$7[TARGET] : (global$7[TARGET] || {}).prototype;

	  var target = GLOBAL ? path$3 : path$3[TARGET] || createNonEnumerableProperty$4(path$3, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;

	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

	  for (key in source) {
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contains in native
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$7(nativeSource, key);

	    targetProperty = target[key];

	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];

	    // export native or implementation
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

	    // bind timers to global for call from export context
	    if (options.bind && USE_NATIVE) resultProperty = bind$6(sourceProperty, global$7);
	    // wrap global constructors for prevent changs in this version
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    // make static versions for prototype methods
	    else if (PROTO && isCallable$7(sourceProperty)) resultProperty = uncurryThis$8(sourceProperty);
	    // default case
	    else resultProperty = sourceProperty;

	    // add a flag to not completely full polyfills
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$4(resultProperty, 'sham', true);
	    }

	    createNonEnumerableProperty$4(target, key, resultProperty);

	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$7(path$3, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$4(path$3, VIRTUAL_PROTOTYPE, {});
	      }
	      // export virtual prototype methods
	      createNonEnumerableProperty$4(path$3[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      // export real prototype methods
	      if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
	        createNonEnumerableProperty$4(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `Math.trunc` method
	// https://tc39.es/ecma262/#sec-math.trunc
	// eslint-disable-next-line es/no-math-trunc -- safe
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor : ceil)(n);
	};

	var trunc = mathTrunc;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- NaN check
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var toLength = toLength$1;

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike$2 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$3 = toIndexedObject$5;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike$1 = lengthOfArrayLike$2;

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$1 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$3($this);
	    var length = lengthOfArrayLike$1(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$1(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$1(false)
	};

	var hiddenKeys$3 = {};

	var uncurryThis$7 = functionUncurryThis;
	var hasOwn$6 = hasOwnProperty_1;
	var toIndexedObject$2 = toIndexedObject$5;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$2 = hiddenKeys$3;

	var push$1 = uncurryThis$7([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$2(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$6(hiddenKeys$2, key) && hasOwn$6(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwn$6(O, key = names[i++])) {
	    ~indexOf(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys$2 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$2;

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es/no-object-keys -- safe
	var objectKeys$2 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var objectGetOwnPropertySymbols = {};

	// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var DESCRIPTORS$3 = descriptors;
	var uncurryThis$6 = functionUncurryThis;
	var call$1 = functionCall;
	var fails$5 = fails$d;
	var objectKeys$1 = objectKeys$2;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$2 = toObject$4;
	var IndexedObject$1 = indexedObject;

	// eslint-disable-next-line es/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es/no-object-defineproperty -- required for testing
	var defineProperty$2 = Object.defineProperty;
	var concat$1 = uncurryThis$6([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails$5(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$3 && $assign({ b: 1 }, $assign(defineProperty$2({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$2(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject$2(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject$1(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$3 || call$1(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $$7 = _export;
	var assign$3 = objectAssign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es/no-object-assign -- required for testing
	$$7({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$3 }, {
	  assign: assign$3
	});

	var path$2 = path$5;

	var assign$2 = path$2.Object.assign;

	var parent$3 = assign$2;

	var assign$1 = parent$3;

	var assign = assign$1;

	var addToUnscopables$1 = function () { /* empty */ };

	var iterators = {};

	var global$6 = global$e;
	var isCallable$6 = isCallable$e;

	var WeakMap$1 = global$6.WeakMap;

	var weakMapBasicDetection = isCallable$6(WeakMap$1) && /native code/.test(String(WeakMap$1));

	var shared$1 = shared$3.exports;
	var uid = uid$2;

	var keys = shared$1('keys');

	var sharedKey$3 = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var NATIVE_WEAK_MAP = weakMapBasicDetection;
	var global$5 = global$e;
	var isObject$4 = isObject$9;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
	var hasOwn$5 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey$2 = sharedKey$3;
	var hiddenKeys$1 = hiddenKeys$3;

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$5.TypeError;
	var WeakMap = global$5.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (NATIVE_WEAK_MAP || shared.state) {
	  var store$1 = shared.state || (shared.state = new WeakMap());
	  /* eslint-disable no-self-assign -- prototype methods protection */
	  store$1.get = store$1.get;
	  store$1.has = store$1.has;
	  store$1.set = store$1.set;
	  /* eslint-enable no-self-assign -- prototype methods protection */
	  set = function (it, metadata) {
	    if (store$1.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    store$1.set(it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return store$1.get(it) || {};
	  };
	  has = function (it) {
	    return store$1.has(it);
	  };
	} else {
	  var STATE = sharedKey$2('state');
	  hiddenKeys$1[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$5(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$3(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$5(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$5(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$2 = descriptors;
	var hasOwn$4 = hasOwnProperty_1;

	var FunctionPrototype$1 = Function.prototype;
	// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
	var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwn$4(FunctionPrototype$1, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var objectDefineProperties = {};

	var DESCRIPTORS$1 = descriptors;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var definePropertyModule = objectDefineProperty;
	var anObject$1 = anObject$3;
	var toIndexedObject$1 = toIndexedObject$5;
	var objectKeys = objectKeys$2;

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es/no-object-defineproperties -- safe
	objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$1(O);
	  var props = toIndexedObject$1(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$1 = getBuiltIn$4;

	var html$1 = getBuiltIn$1('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */

	var anObject = anObject$3;
	var definePropertiesModule = objectDefineProperties;
	var enumBugKeys = enumBugKeys$2;
	var hiddenKeys = hiddenKeys$3;
	var html = html$1;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$1 = sharedKey$3;

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$1('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
	};

	var fails$4 = fails$d;

	var correctPrototypeGetter = !fails$4(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$3 = hasOwnProperty_1;
	var isCallable$5 = isCallable$e;
	var toObject$1 = toObject$4;
	var sharedKey = sharedKey$3;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

	var IE_PROTO = sharedKey('IE_PROTO');
	var $Object$1 = Object;
	var ObjectPrototype = $Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	// eslint-disable-next-line es/no-object-getprototypeof -- safe
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
	  var object = toObject$1(O);
	  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable$5(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$1 ? ObjectPrototype : null;
	};

	var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;

	var defineBuiltIn$2 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$2(target, key, value);
	  return target;
	};

	var fails$3 = fails$d;
	var isCallable$4 = isCallable$e;
	var isObject$3 = isObject$9;
	var create$1 = objectCreate;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var defineBuiltIn$1 = defineBuiltIn$2;
	var wellKnownSymbol$8 = wellKnownSymbol$a;

	var ITERATOR$1 = wellKnownSymbol$8('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = !isObject$3(IteratorPrototype$1) || fails$3(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$1[ITERATOR$1].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$1(IteratorPrototype$1);

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable$4(IteratorPrototype$1[ITERATOR$1])) {
	  defineBuiltIn$1(IteratorPrototype$1, ITERATOR$1, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var wellKnownSymbol$7 = wellKnownSymbol$a;

	var TO_STRING_TAG$3 = wellKnownSymbol$7('toStringTag');
	var test = {};

	test[TO_STRING_TAG$3] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$3 = isCallable$e;
	var classofRaw = classofRaw$2;
	var wellKnownSymbol$6 = wellKnownSymbol$a;

	var TO_STRING_TAG$2 = wellKnownSymbol$6('toStringTag');
	var $Object = Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG$2)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable$3(O.callee) ? 'Arguments' : result;
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$6 = classof$7;

	// `Object.prototype.toString` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.tostring
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$6(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$1 = objectDefineProperty.f;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
	var hasOwn$2 = hasOwnProperty_1;
	var toString$2 = objectToString;
	var wellKnownSymbol$5 = wellKnownSymbol$a;

	var TO_STRING_TAG$1 = wellKnownSymbol$5('toStringTag');

	var setToStringTag$2 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwn$2(target, TO_STRING_TAG$1)) {
	      defineProperty$1(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$1(target, 'toString', toString$2);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$3;
	var setToStringTag$1 = setToStringTag$2;
	var Iterators$3 = iterators;

	var returnThis$1 = function () { return this; };

	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$3[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$6 = _export;
	var call = functionCall;
	var FunctionName = functionName;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf = objectGetPrototypeOf;
	var setToStringTag = setToStringTag$2;
	var defineBuiltIn = defineBuiltIn$2;
	var wellKnownSymbol$4 = wellKnownSymbol$a;
	var Iterators$2 = iterators;
	var IteratorsCore = iteratorsCore;

	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	FunctionName.CONFIGURABLE;
	IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol$4('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$2[TO_STRING_TAG] = returnThis;
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if ((FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
	    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$2[NAME] = defaultIterator;

	  return methods;
	};

	// `CreateIterResultObject` abstract operation
	// https://tc39.es/ecma262/#sec-createiterresultobject
	var createIterResultObject$1 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject = toIndexedObject$5;
	var addToUnscopables = addToUnscopables$1;
	var Iterators$1 = iterators;
	var InternalStateModule = internalState;
	var defineProperty = objectDefineProperty.f;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$1;
	var IS_PURE = isPure;
	var DESCRIPTORS = descriptors;

	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState = InternalStateModule.set;
	var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

	// `Array.prototype.entries` method
	// https://tc39.es/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.es/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.es/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.es/ecma262/#sec-createarrayiterator
	defineIterator(Array, 'Array', function (iterated, kind) {
	  setInternalState(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject(iterated), // target
	    index: 0,                          // next index
	    kind: kind                         // kind
	  });
	// `%ArrayIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject(undefined, true);
	  }
	  if (kind == 'keys') return createIterResultObject(index, false);
	  if (kind == 'values') return createIterResultObject(target[index], false);
	  return createIterResultObject([index, target[index]], false);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.es/ecma262/#sec-createmappedargumentsobject
	var values = Iterators$1.Arguments = Iterators$1.Array;

	// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
	addToUnscopables();
	addToUnscopables();
	addToUnscopables();

	// V8 ~ Chrome 45- bug
	if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
	  defineProperty(values, 'name', { value: 'values' });
	} catch (error) { /* empty */ }

	// iterable DOM collections
	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$4 = global$e;
	var classof$5 = classof$7;
	var createNonEnumerableProperty = createNonEnumerableProperty$5;
	var Iterators = iterators;
	var wellKnownSymbol$3 = wellKnownSymbol$a;

	var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');

	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$4[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$5(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  Iterators[COLLECTION_NAME] = Iterators.Array;
	}

	var classof$4 = classofRaw$2;

	// `IsArray` abstract operation
	// https://tc39.es/ecma262/#sec-isarray
	// eslint-disable-next-line es/no-array-isarray -- safe
	var isArray$1 = Array.isArray || function isArray(argument) {
	  return classof$4(argument) == 'Array';
	};

	var uncurryThis$5 = functionUncurryThis;
	var isCallable$2 = isCallable$e;
	var store = sharedStore;

	var functionToString = uncurryThis$5(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable$2(store.inspectSource)) {
	  store.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource$1 = store.inspectSource;

	var uncurryThis$4 = functionUncurryThis;
	var fails$2 = fails$d;
	var isCallable$1 = isCallable$e;
	var classof$3 = classof$7;
	var getBuiltIn = getBuiltIn$4;
	var inspectSource = inspectSource$1;

	var noop = function () { /* empty */ };
	var empty = [];
	var construct$1 = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = uncurryThis$4(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  try {
	    construct$1(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$1(argument)) return false;
	  switch (classof$3(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor$1 = !construct$1 || fails$2(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isArray = isArray$1;
	var isConstructor = isConstructor$1;
	var isObject$2 = isObject$9;
	var wellKnownSymbol$2 = wellKnownSymbol$a;

	var SPECIES = wellKnownSymbol$2('species');
	var $Array = Array;

	// a part of `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
	    else if (isObject$2(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.es/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate$1 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$5 = functionBindContext;
	var uncurryThis$3 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toObject = toObject$4;
	var lengthOfArrayLike = lengthOfArrayLike$2;
	var arraySpeciesCreate = arraySpeciesCreate$1;

	var push = uncurryThis$3([].push);

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
	var createMethod = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = IndexedObject(O);
	    var boundFunction = bind$5(callbackfn, that);
	    var length = lengthOfArrayLike(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push(target, value);      // filter
	        } else switch (TYPE) {
	          case 4: return false;             // every
	          case 7: push(target, value);      // filterReject
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.es/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod(0),
	  // `Array.prototype.map` method
	  // https://tc39.es/ecma262/#sec-array.prototype.map
	  map: createMethod(1),
	  // `Array.prototype.filter` method
	  // https://tc39.es/ecma262/#sec-array.prototype.filter
	  filter: createMethod(2),
	  // `Array.prototype.some` method
	  // https://tc39.es/ecma262/#sec-array.prototype.some
	  some: createMethod(3),
	  // `Array.prototype.every` method
	  // https://tc39.es/ecma262/#sec-array.prototype.every
	  every: createMethod(4),
	  // `Array.prototype.find` method
	  // https://tc39.es/ecma262/#sec-array.prototype.find
	  find: createMethod(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod(6),
	  // `Array.prototype.filterReject` method
	  // https://github.com/tc39/proposal-array-filtering
	  filterReject: createMethod(7)
	};

	var fails$1 = fails$d;

	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$1(function () {
	    // eslint-disable-next-line no-useless-call -- required for testing
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;

	var STRICT_METHOD = arrayMethodIsStrict('forEach');

	// `Array.prototype.forEach` method implementation
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	} : [].forEach;

	var $$5 = _export;
	var forEach$4 = arrayForEach;

	// `Array.prototype.forEach` method
	// https://tc39.es/ecma262/#sec-array.prototype.foreach
	// eslint-disable-next-line es/no-array-prototype-foreach -- safe
	$$5({ target: 'Array', proto: true, forced: [].forEach != forEach$4 }, {
	  forEach: forEach$4
	});

	var path$1 = path$5;

	var entryVirtual$4 = function (CONSTRUCTOR) {
	  return path$1[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$3 = entryVirtual$4;

	var forEach$3 = entryVirtual$3('Array').forEach;

	var parent$2 = forEach$3;

	var forEach$2 = parent$2;

	var classof$2 = classof$7;
	var hasOwn$1 = hasOwnProperty_1;
	var isPrototypeOf$2 = objectIsPrototypeOf;
	var method$1 = forEach$2;

	var ArrayPrototype$1 = Array.prototype;

	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};

	var forEach$1 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$1 || (isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.forEach)
	    || hasOwn$1(DOMIterables, classof$2(it)) ? method$1 : own;
	};

	var forEach = forEach$1;

	var $$4 = _export;
	var $includes = arrayIncludes.includes;
	var fails = fails$d;

	// FF99+ bug
	var BROKEN_ON_SPARSE = fails(function () {
	  return !Array(1).includes();
	});

	// `Array.prototype.includes` method
	// https://tc39.es/ecma262/#sec-array.prototype.includes
	$$4({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
	  includes: function includes(el /* , fromIndex = 0 */) {
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$2 = entryVirtual$4;

	var includes$4 = entryVirtual$2('Array').includes;

	var isObject$1 = isObject$9;
	var classof$1 = classofRaw$2;
	var wellKnownSymbol$1 = wellKnownSymbol$a;

	var MATCH$1 = wellKnownSymbol$1('match');

	// `IsRegExp` abstract operation
	// https://tc39.es/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$1(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$1(it) == 'RegExp');
	};

	var isRegExp = isRegexp;

	var $TypeError$1 = TypeError;

	var notARegexp = function (it) {
	  if (isRegExp(it)) {
	    throw $TypeError$1("The method doesn't accept regular expressions");
	  } return it;
	};

	var classof = classof$7;

	var $String = String;

	var toString$1 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	var wellKnownSymbol = wellKnownSymbol$a;

	var MATCH = wellKnownSymbol('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;
	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (error1) {
	    try {
	      regexp[MATCH] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (error2) { /* empty */ }
	  } return false;
	};

	var $$3 = _export;
	var uncurryThis$2 = functionUncurryThis;
	var notARegExp = notARegexp;
	var requireObjectCoercible = requireObjectCoercible$3;
	var toString = toString$1;
	var correctIsRegExpLogic = correctIsRegexpLogic;

	var stringIndexOf = uncurryThis$2(''.indexOf);

	// `String.prototype.includes` method
	// https://tc39.es/ecma262/#sec-string.prototype.includes
	$$3({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
	  includes: function includes(searchString /* , position = 0 */) {
	    return !!~stringIndexOf(
	      toString(requireObjectCoercible(this)),
	      toString(notARegExp(searchString)),
	      arguments.length > 1 ? arguments[1] : undefined
	    );
	  }
	});

	var entryVirtual$1 = entryVirtual$4;

	var includes$3 = entryVirtual$1('String').includes;

	var isPrototypeOf$1 = objectIsPrototypeOf;
	var arrayMethod = includes$4;
	var stringMethod = includes$3;

	var ArrayPrototype = Array.prototype;
	var StringPrototype = String.prototype;

	var includes$2 = function (it) {
	  var own = it.includes;
	  if (it === ArrayPrototype || (isPrototypeOf$1(ArrayPrototype, it) && own === ArrayPrototype.includes)) return arrayMethod;
	  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf$1(StringPrototype, it) && own === StringPrototype.includes)) {
	    return stringMethod;
	  } return own;
	};

	var parent$1 = includes$2;

	var includes$1 = parent$1;

	var includes = includes$1;

	const RemainingTimeDisplay = videojs__default["default"].getComponent("RemainingTimeDisplay");
	const TimeDisplay = videojs__default["default"].getComponent("TimeDisplay");
	class ImaRemainingTimeDisplay extends RemainingTimeDisplay {
	  // modified version of TimeDisplay method

	  createEl() {
	    // prefix "-" in later versions of vjs7
	    // we need to call grandparent
	    return TimeDisplay.prototype.createEl.call(this);
	  }
	  updateTextNode_() {
	    if (!this.contentEl_) {
	      return;
	    }
	    while (this.contentEl_.firstChild) {
	      this.contentEl_.removeChild(this.contentEl_.firstChild);
	    }
	    this.textNode_ = document.createTextNode(this.getRemainingTimeLabel() + (this.formattedTime_ || "-0:00").replace("-", ""));
	    this.contentEl_.appendChild(this.textNode_);
	  }
	  getRemainingTimeLabel() {
	    let podCount = ": ";
	    if (this.player_.totalAds > 1) {
	      podCount = ` (${this.player_.adPosition} ${this.options_.ofLabel} ${this.player_.totalAds}): `;
	    }
	    return this.options_.adLabel + podCount;
	  }
	}
	videojs__default["default"].registerComponent("imaRemainingTimeDisplay", ImaRemainingTimeDisplay);

	/* global Bun -- Deno case */

	var engineIsBun = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';

	var uncurryThis$1 = functionUncurryThis;

	var arraySlice$2 = uncurryThis$1([].slice);

	var $TypeError = TypeError;

	var validateArgumentsLength$1 = function (passed, required) {
	  if (passed < required) throw $TypeError('Not enough arguments');
	  return passed;
	};

	var global$3 = global$e;
	var apply = functionApply;
	var isCallable = isCallable$e;
	var ENGINE_IS_BUN = engineIsBun;
	var USER_AGENT = engineUserAgent;
	var arraySlice$1 = arraySlice$2;
	var validateArgumentsLength = validateArgumentsLength$1;

	var Function$1 = global$3.Function;
	// dirty IE9- and Bun 0.3.0- checks
	var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
	  var version = global$3.Bun.version.split('.');
	  return version.length < 3 || version[0] == 0 && (version[1] < 3 || version[1] == 3 && version[2] == 0);
	})();

	// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
	// https://github.com/oven-sh/bun/issues/1633
	var schedulersFix$2 = function (scheduler, hasTimeArg) {
	  var firstParamIndex = hasTimeArg ? 2 : 1;
	  return WRAP ? function (handler, timeout /* , ...arguments */) {
	    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
	    var fn = isCallable(handler) ? handler : Function$1(handler);
	    var params = boundArgs ? arraySlice$1(arguments, firstParamIndex) : [];
	    var callback = boundArgs ? function () {
	      apply(fn, this, params);
	    } : fn;
	    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
	  } : scheduler;
	};

	var $$2 = _export;
	var global$2 = global$e;
	var schedulersFix$1 = schedulersFix$2;

	var setInterval = schedulersFix$1(global$2.setInterval, true);

	// Bun / IE9- setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	$$2({ global: true, bind: true, forced: global$2.setInterval !== setInterval }, {
	  setInterval: setInterval
	});

	var $$1 = _export;
	var global$1 = global$e;
	var schedulersFix = schedulersFix$2;

	var setTimeout$2 = schedulersFix(global$1.setTimeout, true);

	// Bun / IE9- setTimeout additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	$$1({ global: true, bind: true, forced: global$1.setTimeout !== setTimeout$2 }, {
	  setTimeout: setTimeout$2
	});

	var path = path$5;

	var setTimeout$1 = path.setTimeout;

	var setTimeout = setTimeout$1;

	var uncurryThis = functionUncurryThis;
	var aCallable = aCallable$3;
	var isObject = isObject$9;
	var hasOwn = hasOwnProperty_1;
	var arraySlice = arraySlice$2;
	var NATIVE_BIND = functionBindNative;

	var $Function = Function;
	var concat = uncurryThis([].concat);
	var join = uncurryThis([].join);
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!hasOwn(factories, argsLength)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
	    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
	  } return factories[argsLength](C, args);
	};

	// `Function.prototype.bind` method implementation
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	var functionBind = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
	  var F = aCallable(this);
	  var Prototype = F.prototype;
	  var partArgs = arraySlice(arguments, 1);
	  var boundFunction = function bound(/* args... */) {
	    var args = concat(partArgs, arraySlice(arguments));
	    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
	  };
	  if (isObject(Prototype)) boundFunction.prototype = Prototype;
	  return boundFunction;
	};

	// TODO: Remove from `core-js@4`
	var $ = _export;
	var bind$4 = functionBind;

	// `Function.prototype.bind` method
	// https://tc39.es/ecma262/#sec-function.prototype.bind
	$({ target: 'Function', proto: true, forced: Function.bind !== bind$4 }, {
	  bind: bind$4
	});

	var entryVirtual = entryVirtual$4;

	var bind$3 = entryVirtual('Function').bind;

	var isPrototypeOf = objectIsPrototypeOf;
	var method = bind$3;

	var FunctionPrototype = Function.prototype;

	var bind$2 = function (it) {
	  var own = it.bind;
	  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method : own;
	};

	var parent = bind$2;

	var bind$1 = parent;

	var bind = bind$1;

	var version = "0.6.1";

	const Tech = videojs__default["default"].getTech("Tech");
	class Ima extends Tech {
	  constructor(options, ready) {
	    super(options, ready);
	    this.contentTracker = {
	      previousTime: 0,
	      currentTime: 0,
	      duration: 0,
	      seeking: false
	    };
	    this.currentAd = null;
	    this.source = options.source;
	    this.adDisplayContainer = null;
	    this.adsLoader = null;
	    this.adsManager = null;
	    this.width = 0;
	    this.heght = 0;
	    this.screenMode = "";
	    this.volume_ = 1;
	    this.muted_ = false;

	    // initialized later via handleLateInit_ method
	    // called by ImaPlayer
	  }

	  /* DEFAULT IMA SOURCE OPTIONS */

	  mergeWithDefaults(options) {
	    var gis = google.ima.settings;
	    return assign({
	      showControlsForJSAds: true,
	      locale: gis.getLocale(),
	      disableFlashAds: gis.getDisableFlashAds(),
	      disableCustomPlaybackForIOS10Plus: videojs__default["default"].browser.IS_IOS,
	      numRedirects: gis.getNumRedirects(),
	      autoPlayAdBreaks: true,
	      vpaidMode: google.ima.ImaSdkSettings.VpaidMode.ENABLED,
	      adTagUrl: "",
	      adsResponse: "",
	      forceNonLinearFullSlot: false,
	      nonLinearWidth: 0,
	      nonLinearHeight: 0,
	      adWillAutoPlay: false,
	      adWillPlayMuted: false,
	      showCountdown: true,
	      adsRenderingSettings: {
	        loadVideoTimeout: options.timeout || 5000
	      }
	    }, options);
	  }

	  /* THESE ARE Tech's OVERRIDEN METHODS */

	  createEl() {
	    var divWrapper = document.createElement("div");
	    divWrapper.className = "vjs-tech ima-ad-container";
	    divWrapper.id = this.options_.playerId + "-ad-container";
	    return divWrapper;
	  }
	  controls() {
	    return false;
	  }
	  poster() {
	    return null;
	  }
	  setPoster() {}
	  src(source) {
	    this.setSource(source);
	    return this.source;
	  }
	  currentSrc() {
	    return this.source.adTagUrl || this.source.adsResponse || "";
	  }
	  setSource(source, init) {
	    if (!source || typeof source !== "object") {
	      return;
	    }
	    this.source = this.mergeWithDefaults(source);
	    if (!init) this.reset();
	    this.trigger("loadstart"); // resets player classes

	    if (!this.source.adTagUrl && !this.source.adsResponse) {
	      // if no ads are provided we left tech reseted
	      // and let content know that no ads will be played
	      if (init) this.triggerReady();
	      this.trigger("adsready");
	      return;
	    }
	    this.isReady_ = false;
	    this.trigger("waiting");
	    this.initAdContainer();
	    this.requestAds();
	  }
	  autoplay() {
	    return this.source && this.source.autoPlayAdBreaks;
	  }
	  setAutoplay() {}
	  loop() {
	    return false;
	  }
	  setLoop() {}
	  play() {
	    // state order dispatching
	    if (!this.isReady_) {
	      console.warn("Ads warning: ads not ready to play yet.");
	      return;
	    }
	    if (!this.adsManager || this.ended()) {
	      console.warn("Ads warning: No ads.");
	      return;
	    }
	    if (!this.contentHasStarted_) {
	      console.warn("Ads warning: content must be playing.");
	      return;
	    }
	    if (this.isLinearAd() && this.paused()) {
	      this.adsManager.resume();
	      return;
	    }
	    if (!this.hasStarted_ || !this.autoplay()) {
	      this.start();
	      return;
	    }
	  }
	  pause() {
	    if (this.isLinearAd() && !this.paused()) {
	      this.adsManager.pause();
	    }
	  }
	  paused() {
	    return !!this.paused_;
	  }
	  currentTime() {
	    let currentTime = this.adsManager ? this.duration() - this.adsManager.getRemainingTime() : 0;
	    return currentTime > 0 ? currentTime : 0;
	  }
	  setCurrentTime() {}
	  seeking() {
	    return false;
	  }
	  seekable() {
	    return videojs__default["default"].createTimeRange();
	  }
	  playbackRate() {
	    return 1.0;
	  }
	  duration() {
	    return this.currentAd && this.currentAd.getDuration() > 0 ? this.currentAd.getDuration() : 0;
	  }
	  ended() {
	    return !!this.ended_;
	  }
	  volume() {
	    return this.volume_;
	  }

	  // throttle volume change (to reduce event emits)
	  setManagerVolume(vol) {
	    clearTimeout(this.volTimeout);
	    this.volTimeout = setTimeout(() => this.adsManager && this.adsManager.setVolume(vol), 250);
	  }
	  setVolume(vol) {
	    if (vol === this.volume_) return;
	    this.volume_ = vol;
	    this.muted_ = !vol;
	    this.trigger("volumechange");
	    this.setManagerVolume(vol);
	  }
	  muted() {
	    return this.muted_;
	  }
	  setMuted(mute) {
	    if (mute == this.muted_) return;
	    this.muted_ = mute;
	    this.trigger("volumechange");
	    this.setManagerVolume(!mute ? this.volume_ : 0);
	  }
	  buffered() {
	    return videojs__default["default"].createTimeRange(0, this.currentTime());
	  }
	  supportsFullScreen() {
	    return true;
	  }
	  preload() {}
	  load() {}
	  reset() {
	    if (this.adsManager) {
	      //Dispose of the IMA SDK
	      this.adsManager.stop();
	      this.adsManager.destroy();
	      this.adsManager = null;
	    }
	    if (!this.contentCompleted_) {
	      this.onContentCompleted();
	    }
	    this.err = null;
	    this.currentAd = null;
	    this.muted_ = false;
	    this.ended_ = false;
	    this.paused_ = false;
	    this.contentTracker.previousTime = 0;
	    this.contentTracker.currentTime = 0;
	    this.contentTracker.duration = 0;
	    this.contentTracker.seeking = false;
	    this.adsLoader && this.adsLoader.destroy() || "";
	    this.adsLoader = null;
	    this.adDisplayContainer && this.adDisplayContainer.destroy() || "";
	    this.adDisplayContainer = null;
	  }
	  dispose() {
	    this.reset(true);
	    this.player_ = null; // allow object to be GCed

	    //Needs to be called after the IMA SDK is destroyed, otherwise there will be a null reference exception
	    super.dispose.call(this);
	  }

	  /* THESE METHODS ARE CALLED DURING SOURCE INITIALIZATION */

	  handleLateInit_(contentInfo) {
	    this.player_ = contentInfo.imaPlayer;
	    this.source.contentMediaElement = contentInfo.mediaElement;
	    this.source.adWillAutoPlay = contentInfo.autoplay;
	    this.source.adWillPlayMuted = contentInfo.muted;
	    this.muted_ = contentInfo.muted;
	    this.volume_ = contentInfo.volume;
	    this.resize(contentInfo);
	    this.setSource(this.source, true);
	  }
	  initAdContainer() {
	    this.adDisplayContainer = new google.ima.AdDisplayContainer(this.el_, this.source.contentMediaElement);
	    this.setAdsLoader();
	  }
	  setScreenMode(isFullscreen) {
	    this.screenMode = isFullscreen ? google.ima.ViewMode.FULLSCREEN : google.ima.ViewMode.NORMAL;
	  }
	  setAdsLoader() {
	    var _context, _context2;
	    this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
	    this.adsLoader.getSettings().setLocale(this.source.locale);
	    this.adsLoader.getSettings().setDisableFlashAds(this.source.disableFlashAds);
	    this.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(this.source.disableCustomPlaybackForIOS10Plus);
	    this.adsLoader.getSettings().setVpaidMode(this.source.vpaidMode);
	    this.adsLoader.getSettings().setNumRedirects(this.source.numRedirects);
	    this.adsLoader.getSettings().setPlayerType("videojs-ima-player");
	    this.adsLoader.getSettings().setPlayerVersion(version);
	    this.adsLoader.getSettings().setAutoPlayAdBreaks(this.source.autoPlayAdBreaks);
	    this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, bind(_context = this.onAdEvent).call(_context, this, this.onAdsManagerLoaded), false);
	    this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, bind(_context2 = this.onAdEvent).call(_context2, this, this.onAdsLoaderError), false);
	  }
	  requestAds() {
	    if (!this.source.adTagUrl && !this.source.adsResponse) {
	      return;
	    }
	    const adsRequest = new google.ima.AdsRequest();
	    if (this.source.adTagUrl) {
	      adsRequest.adTagUrl = this.source.adTagUrl;
	    } else {
	      adsRequest.adsResponse = this.source.adsResponse;
	    }
	    adsRequest.forceNonLinearFullSlot = this.source.forceNonLinearFullSlot;
	    adsRequest.linearAdSlotWidth = this.width;
	    adsRequest.linearAdSlotHeight = this.height;
	    adsRequest.nonLinearAdSlotWidth = this.source.nonLinearWidth || adsRequest.linearAdSlotWidth;
	    adsRequest.nonLinearAdSlotHeight = this.source.nonLinearHeight || adsRequest.linearAdSlotHeight / 3;
	    adsRequest.setAdWillAutoPlay(this.source.adWillAutoPlay);
	    adsRequest.setAdWillPlayMuted(this.source.adWillPlayMuted);
	    this.adsLoader.requestAds(adsRequest);
	  }
	  setAdsManager(e) {
	    var _context3, _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18, _context19, _context20, _context21, _context22, _context23, _context24, _context25, _context26;
	    this.adsRenderingSettings = new google.ima.AdsRenderingSettings();
	    // this should be handled by contrib ads statefullnes
	    //this.adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
	    assign(this.adsRenderingSettings, this.source.adsRenderingSettings || {});
	    this.adsManager = e.getAdsManager(this.contentTracker, this.adsRenderingSettings);
	    this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, bind(_context3 = this.onAdEvent).call(_context3, this, this.onAdError));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, bind(_context4 = this.onAdEvent).call(_context4, this, this.onContentPauseRequested));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, bind(_context5 = this.onAdEvent).call(_context5, this, this.onContentResumeRequested));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, bind(_context6 = this.onAdEvent).call(_context6, this, this.onAllAdsCompleted));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, bind(_context7 = this.onAdEvent).call(_context7, this, this.onAdLoaded));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, bind(_context8 = this.onAdEvent).call(_context8, this, this.onAdStarted));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, bind(_context9 = this.onAdEvent).call(_context9, this, this.onAdClick));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, bind(_context10 = this.onAdEvent).call(_context10, this, this.onAdComplete));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPED, bind(_context11 = this.onAdEvent).call(_context11, this, this.onAdSkipped));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED,
	    // we wont mix player's pause event with this
	    bind(_context12 = this.onAdPaused).call(_context12, this));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, bind(_context13 = this.onAdEvent).call(_context13, this, this.onAdResumed));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, bind(_context14 = this.onAdEvent).call(_context14, this, this.onVolumeChanged));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, bind(_context15 = this.onAdEvent).call(_context15, this, this.onVolumeMuted));

	    // additional events retriggered to ima player
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_BREAK_READY, bind(_context16 = this.onAdEvent).call(_context16, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.AD_METADATA, bind(_context17 = this.onAdEvent).call(_context17, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, bind(_context18 = this.onAdEvent).call(_context18, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, bind(_context19 = this.onAdEvent).call(_context19, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.INTERACTION, bind(_context20 = this.onAdEvent).call(_context20, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.LINEAR_CHANGED, bind(_context21 = this.onAdEvent).call(_context21, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.LOG, bind(_context22 = this.onAdEvent).call(_context22, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED, bind(_context23 = this.onAdEvent).call(_context23, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.MIDPOINT, bind(_context24 = this.onAdEvent).call(_context24, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, bind(_context25 = this.onAdEvent).call(_context25, this, null));
	    this.adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, bind(_context26 = this.onAdEvent).call(_context26, this, null));
	    this.triggerReady();
	  }
	  initAdsManager() {
	    try {
	      this.adsManager.init(this.width, this.height, this.screenMode);
	      this.adsManager.setVolume(!this.muted_ ? this.volume_ : 0);
	      this.adDisplayContainer.initialize();
	    } catch (adError) {
	      this.onAdError(adError);
	    }
	  }
	  start() {
	    if (this.currentAd) {
	      console.war("Ad warning: ad is already playing");
	      return;
	    }
	    if (!this.hasStarted_) {
	      this.triggerHasStartedEvents();
	    }
	    try {
	      this.adsManager.start();
	    } catch (e) {
	      this.onAdError(e);
	    }
	  }

	  /* TRIGGER HELPER */

	  triggerHasStartedEvents() {
	    this.trigger("canplay");
	    this.trigger("loadedmetadata");
	    this.trigger("volumechange");
	    this.trigger("firstplay");
	    this.trigger("play");
	    this.trigger("playing");
	  }

	  /* THESE CUSTOM METHODS ARE CALLED DIRECTLY BY PLAYER */

	  preroll() {
	    this.contentHasStarted_ = true;
	    if (this.adsManager) {
	      this.initAdsManager();
	      this.autoplay() && this.play() || "";
	    }
	  }
	  postroll() {
	    if (!this.contentCompleted_) {
	      this.contentCompleted_ = true;
	      this.onContentCompleted();
	    }
	  }
	  resize(dimensions) {
	    this.width = dimensions.fullscreen ? window.screen.width : dimensions.width;
	    this.height = dimensions.fullscreen ? window.screen.height : dimensions.height;
	    this.setScreenMode(dimensions.fullscreen);
	    if (this.adsManager) {
	      this.adsManager.resize(this.width, this.height, this.screenMode);
	      this.trigger("resize");
	    }
	  }

	  /* THESE EVENT METHODS MOSTLY HANDLES ADS MANAGER */

	  onOptionsChanged(options) {
	    if (options) {
	      this.options_ = assign(this.source, options);
	    }
	  }
	  onAdsLoaderError(e) {
	    this.onAdError(e, "AdsLoader");
	  }
	  onAdError(e, source) {
	    var type = (source || "Ad") + " error: ";
	    var msg = e.getError !== undefined ? e.getError().getMessage() : e.stack;
	    console.warn("VIDEOJS: " + type + msg);
	    this.trigger("adserror");
	  }
	  onAdsManagerLoaded(e) {
	    this.setAdsManager(e);
	    this.trigger("adsready", this.adsManager.getCuePoints());
	  }
	  onAdLoaded(e) {
	    this.currentAd = e.getAd();
	    let adPosition = 0,
	      totalAds = 0;
	    if (this.currentAd.getAdPodInfo && this.currentAd.getAdPodInfo()) {
	      adPosition = this.currentAd.getAdPodInfo().getAdPosition();
	      totalAds = this.currentAd.getAdPodInfo().getTotalAds();
	    }
	    this.trigger("adchange", {
	      adPosition: adPosition,
	      totalAds: totalAds
	    });
	    this.isLinearAd() ? this.onLinearAdLoaded() : this.onNonLinearAdLoaded();
	  }
	  onLinearAdLoaded() {
	    this.trigger("waiting");
	    this.trigger("ratechange");
	    this.trigger("durationchange");
	  }
	  onNonLinearAdLoaded() {}
	  onContentPauseRequested() {
	    var isJSAd = this.currentAd && this.currentAd.getContentType() === "application/javascript";
	    this.trigger("linearadstarted", !isJSAd || this.source.showControlsForJSAds);
	    this.trigger("waiting");
	  }
	  onContentResumeRequested() {
	    // skip sdk nopostroll/nopreroll calls, we have our own
	    this.trigger("linearadended");
	  }
	  onAdStarted() {
	    this.isLinearAd() ? this.onLinearAdStarted() : this.onNonLinearStarted();
	  }
	  onLinearAdStarted() {
	    this.trigger("playing");
	  }
	  onNonLinearStarted() {
	    this.trigger("nonlinearadstarted");
	  }
	  onAdSkipped() {
	    if (this.paused()) {
	      this.onAdResumed();
	    }
	    this.onAdComplete();
	  }
	  onAdComplete() {
	    this.isLinearAd() ? this.onLinearAdEnded() : this.onNonLinearAdEnded();
	    this.currentAd = null;
	  }
	  onLinearAdEnded() {}
	  onNonLinearAdEnded() {
	    this.trigger("nonlinearadended");
	  }
	  onAllAdsCompleted() {
	    this.ended_ = true;
	    this.trigger("ended");
	    this.reset();
	  }
	  onAdPaused() {
	    this.paused_ = true;
	    this.trigger("pause");
	  }
	  onAdResumed() {
	    this.paused_ = false;
	    this.trigger("play");
	  }
	  onAdClick() {
	    this.pause();
	  }
	  onVolumeChanged() {}
	  onVolumeMuted() {}
	  onContentCompleted() {
	    this.adsLoader && this.adsLoader.contentComplete() || "";
	  }
	  onAdEvent(callback, e) {
	    this.player_.trigger(e);
	    if (typeof callback === "function") {
	      callback.call(this, e);
	    }
	  }

	  // only helper shortcut method
	  isLinearAd() {
	    return this.adsManager && this.currentAd && this.currentAd.isLinear();
	  }
	}
	Ima.isSupported = function () {
	  return true;
	};
	Ima.canPlaySource = function (source) {
	  return this.canPlayType(source);
	};
	Ima.canPlayType = function (source) {
	  return source && source.type === "video/ima";
	};
	videojs__default["default"].registerTech("Ima", Ima);

	const Player = videojs__default["default"].getComponent("Player");

	// Player is subclass of Component so is usable as part of parent player
	// plus is fully customizable and independent from content player
	class ImaPlayer extends Player {
	  constructor(contentPlayer, options) {
	    // serve tag placeholder to player

	    const adPlayerContainer = document.createElement("div");
	    adPlayerContainer.id = contentPlayer.id_ + "_ima";
	    adPlayerContainer.className = "vjs-ima video-js";
	    options.src = options.adTagUrl || options.adsResponse || "placeholder";
	    options.type = "video/ima";

	    // sets basic player
	    // passes src placeholder to tech
	    // sets customized remaining time component
	    super(adPlayerContainer, {
	      controls: false,
	      sources: [options],
	      techOrder: ["ima"],
	      controlBar: {
	        imaRemainingTimeDisplay: {
	          adLabel: options.adLabel || "Advertisement",
	          ofLabel: options.ofLabel || "of"
	        },
	        children: ["playToggle", "volumePanel", "imaRemainingTimeDisplay", "progressControl", "customControlSpacer", "fullscreenToggle"]
	      },
	      children: ["mediaLoader", "loadingSpinner", "controlBar", "errorDisplay"]
	    });
	    this.resizeType = contentPlayer.resizeManager ? "playerresize" : ["resize", "fullscreenchange"];
	    this.hide();

	    // remove it from exposed players in case that somebody
	    // would manipulate with them globally
	    Player.players[this.id_] = null;
	    this.imaOptions = options;

	    // through events we have these values up to date
	    // and exposed for component imaRemainingTimeDisplay
	    this.adPosition = 0;
	    this.totalAds = 0;
	    this.adsReadyTriggered = false;
	    this.noPreroll = false;
	    this.noPostroll = false;
	    this.contentHasStarted_ = false;

	    // we wont toggle content player controls if controls disabled
	    this.contentControlsDisabled = !contentPlayer.controls();
	    this.contentPlayer = contentPlayer;
	    this.isMobile = videojs__default["default"].browser.IS_IOS || videojs__default["default"].browser.IS_ANDROID;
	    if (this.isMobile) this.addClass("vjs-ima-mobile");
	    this.setRemainingTimeVisibility();
	    this.trackContentEvents();

	    // wait a tick to get content info
	    contentPlayer.ready(() => {
	      const mediaElement = this.getContentTechElement();
	      if (!mediaElement) {
	        return;
	      }
	      this.tech_.handleLateInit_({
	        imaPlayer: this,
	        mediaElement,
	        width: contentPlayer.currentWidth(),
	        height: contentPlayer.currentHeight(),
	        volume: contentPlayer.volume(),
	        fullscreen: contentPlayer.isFullscreen(),
	        autoplay: contentPlayer.autoplay(),
	        muted: contentPlayer.muted()
	      });
	      this.handleContentResize_();
	    });
	  }

	  // OVERRIDES default method
	  // we want aditional events on loadTech
	  loadTech_(techName, source) {
	    super.loadTech_.call(this, techName, source);
	    this.trackImaEvents();
	  }

	  // OVERRIDES default method
	  // calls api through contentPlayer
	  requestFullscreen() {
	    if (!this.contentPlayer.isFullscreen()) {
	      this.contentPlayer.requestFullscreen();
	    }
	  }

	  // OVERRIDES default method
	  // calls api through contentPlayer
	  exitFullscreen() {
	    if (this.contentPlayer.isFullscreen()) {
	      this.contentPlayer.exitFullscreen();
	    }
	  }

	  // OVERRIDES default method
	  // we wont reset waiting on timeupdate
	  // because tracker must run also during ads
	  handleTechWaiting_() {
	    this.addClass("vjs-waiting");
	    this.trigger("waiting");
	  }

	  // OVERRIDES default method
	  // there are aditional jobs that needs to be done
	  reset() {
	    this.setContentPlayerToDefault();
	    this.noPreroll = false;
	    this.noPostroll = false;
	    super.reset.call(this);
	    this.handleTechAdsReady_();
	  }

	  /* THESE METHODS ARE PART OF TECH INITIALIZATION */

	  trackContentEvents() {
	    this.on(this.contentPlayer, "seek", this.handleContentSeek_);
	    this.on(this.contentPlayer, "seeked", this.handleContentSeeked_);
	    this.on(this.contentPlayer, "durationchange", this.handleContentDurationChange_);
	    this.on(this.contentPlayer, "timeupdate", this.handleContentTimeUpdate_);
	    this.on(this.contentPlayer, this.resizeType, this.handleContentResize_);
	    this.on(this.contentPlayer, "contentupdate", this.handleContentChanged_);
	    this.on(this.contentPlayer, "readyforpreroll", this.handleContentReadyForPreroll_);
	    this.on(this.contentPlayer, "readyforpostroll", this.handleContentReadyForPostroll_);
	  }
	  trackImaEvents() {
	    // these events are removed together with tech
	    this.on(this.tech_, "adsready", this.handleTechAdsReady_);
	    this.on(this.tech_, "adchange", this.handleTechAdChange_);
	    this.on(this.tech_, "linearadstarted", this.handleTechLinearAdStarted_);
	    this.on(this.tech_, "linearadended", this.handleTechLinearAdEnded_);
	    this.on(this.tech_, "nonlinearadstarted", this.handleTechNonLinearAdStarted_);
	    this.on(this.tech_, "nonlinearadended", this.handleTechNonLinearAdEnded_);
	    this.on(this.tech_, "adserror", this.handleTechAdsError_);
	  }
	  setContentPlayerToDefault() {
	    this.handleTechLinearAdEnded_();
	    this.handleTechNonLinearAdEnded_();
	  }
	  getContentTechElement() {
	    if (!this.contentPlayer.tech_ || !this.contentPlayer.tech_.el_) {
	      return;
	    }
	    if (this.contentPlayer.techName_ !== "Html5") {
	      var _context;
	      forEach(_context = ["canPlayType", "play", "pause"]).call(_context, method => {
	        if (!this.contentPlayer.tech_.el_[method]) {
	          this.contentPlayer.tech_.el_[method] = () => false;
	        }
	      });
	    }
	    return this.contentPlayer.tech_.el_;
	  }
	  setRemainingTimeVisibility() {
	    if (this.imaOptions.showCountdown === false) {
	      this.controlBar.imaRemainingTimeDisplay.hide();
	      return;
	    }
	    this.controlBar.imaRemainingTimeDisplay.show();
	  }

	  /* IMA PLAYER METHODS USABLE FROM GLOBAL SPACE (PUBLIC) */

	  updateOptions(options) {
	    if (this.imaOptions && options) {
	      assign(this.imaOptions, options);
	    }

	    // force next call player.src to reset contrib-ads
	    // even if source is the same
	    this.contentPlayer.ads.contentSrc = "";
	  }

	  /* THESE METHODS CONTROLS CONTENT PLAYER */

	  resumeContent() {
	    if (this.contentHasStarted_ && !this.contentEnded) {
	      this.contentPlayer.play();
	    }
	  }
	  pauseContent() {
	    if (this.contentHasStarted_ && !this.contentEnded) {
	      this.contentPlayer.pause();
	    }
	  }
	  setContentControls(bool) {
	    if (!this.contentControlsDisabled) {
	      this.contentPlayer.controls(bool);
	    }
	  }
	  skipLinearAdMode() {
	    if (this.contentPlayer.ads.isWaitingForAdBreak()) {
	      this.contentPlayer.ads.skipLinearAdMode();
	    }
	  }

	  /* THESE METHODS HANDLES CONTENT PLAYER */

	  handleContentReadyForPreroll_() {
	    this.contentHasStarted_ = true;
	    if (this.noPreroll) {
	      this.skipLinearAdMode();
	    }
	    this.techCall_("preroll");
	    this.noPreroll = true;
	  }
	  handleContentReadyForPostroll_() {
	    // triggers only once per source
	    if (this.noPostroll) {
	      this.skipLinearAdMode();
	    }
	    if (!this.contentEnded) {
	      this.contentEnded = true;
	      this.techCall_("postroll");
	    }
	    this.noPostroll = true;
	  }
	  handleContentChanged_() {
	    this.setContentPlayerToDefault();
	    this.imaOptions.contentMediaElement = this.getContentTechElement();
	    if (!this.imaOptions.contentMediaElement) {
	      return;
	    }
	    this.contentEnded = false;
	    this.noPreroll = false;
	    this.noPostroll = false;
	    this.adsReadyTriggered = false;
	    this.src(this.imaOptions);
	    this.setRemainingTimeVisibility();
	  }
	  handleContentTimeUpdate_() {
	    this.ready(() => {
	      this.tech_.contentTracker.previousTime = this.tech_.contentTracker.currentTime;
	      this.tech_.contentTracker.currentTime = this.contentPlayer.currentTime();
	    });
	  }
	  handleContentResize_() {
	    this.isFullscreen(this.contentPlayer.isFullscreen());
	    this.techCall_("resize", {
	      width: this.contentPlayer.currentWidth(),
	      height: this.contentPlayer.currentHeight(),
	      fullscreen: this.isFullscreen()
	    });
	  }
	  handleContentDurationChange_() {
	    this.ready(() => {
	      this.tech_.contentTracker.duration = this.contentPlayer.duration();
	    });
	  }
	  handleContentSeek_() {
	    this.ready(() => {
	      this.tech_.contentTracker.seeking = true;
	    });
	  }
	  handleContentSeeked_() {
	    this.ready(() => {
	      this.tech_.contentTracker.seeking = false;
	    });
	  }

	  /* THESE METHODS HANDLES IMA TECH */

	  handleTechAdsReady_(e, cuePoints) {
	    this.noPreroll = !cuePoints;
	    this.noPostroll = !cuePoints || !includes(cuePoints).call(cuePoints, -1);
	    if (!this.adsReadyTriggered) {
	      this.adsReadyTriggered = true;
	      this.contentPlayer.trigger("adsready");
	    }
	  }
	  handleTechAdChange_(e, adPodInfo) {
	    this.adPosition = adPodInfo.adPosition;
	    this.totalAds = adPodInfo.totalAds;
	  }
	  handleTechLinearAdStarted_(e, isControlsAllowed) {
	    if (this.contentPlayer.ads.inAdBreak()) {
	      return;
	    }
	    this.volume(this.contentPlayer.volume());
	    this.muted(this.contentPlayer.muted());
	    this.contentPlayer.ads.startLinearAdMode();
	    this.contentPlayer.trigger("ads-ad-started");
	    this.setContentControls(false);
	    this.controls(isControlsAllowed);
	    this.pauseContent();
	    this.show();
	  }
	  handleTechLinearAdEnded_() {
	    if (this.contentPlayer.ads.inAdBreak()) {
	      this.contentPlayer.volume(this.volume());
	      this.contentPlayer.muted(this.muted());
	      this.contentPlayer.ads.endLinearAdMode();
	    } else {
	      // covers silent errors like skippable on IOS
	      this.skipLinearAdMode();
	    }
	    this.controls(false);
	    this.setContentControls(true);
	    this.hide();
	    this.resumeContent();
	  }
	  handleTechNonLinearAdStarted_() {
	    if (!this.contentPlayer.ads.inAdBreak()) {
	      this.skipLinearAdMode();
	    }
	    this.controls(false);
	    this.contentPlayer.addClass("non-linear-ad");
	    this.show();
	  }
	  handleTechNonLinearAdEnded_() {
	    this.contentPlayer.removeClass("non-linear-ad");
	    this.hide();
	  }
	  handleTechAdsError_() {
	    this.hide();
	    this.removeClass("waiting");
	    this.reset();
	  }
	}

	// registers player as normal component
	videojs__default["default"].registerComponent("imaPlayer", ImaPlayer);

	// basic plugin is enough for this purpose
	videojs__default["default"].registerPlugin("ima", function (options) {
	  // inits contrib-ads asap if not initialized yet
	  if (!this.ads) {
	    console.error("ima-player error: contrib-ads must be registered on player.");
	    return;
	  }
	  if (typeof this.ads === "function") {
	    this.ads(assign({
	      debug: options.debug || false,
	      timeout: options.timeout || 5000
	    }, options.contribAdsSettings || {}));
	  }
	  this.ima = this.addChild("imaPlayer", options);
	});

}));
