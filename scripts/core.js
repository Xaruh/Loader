/**
 * Core
 * @constructor
 */
function Core() {
	this.areParameters      = areParameters;
	this.existsParameter    = existsParameter;
	this.existsVariable     = existsVariable;
	this.generateParameters = generateParameters;
	this.getHash            = getHash;
	this.getHost            = getHost;
	this.getParameter       = getParameter;
	this.getParameters      = getParameters;
	this.getPort            = getPort;
	this.getProtocol        = getProtocol;
	this.getSearch          = getSearch;
	this.getWindow          = getWindow;
	this.initialize         = initialize;
	this.isHash             = isHash;
	this.isHost             = isHost;
	this.isLocation         = isLocation;
	this.isParameter        = isParameter;
	this.isPort             = isPort;
	this.isProtocol         = isProtocol;
	this.isSearch           = isSearch;
	this.isVariable         = isVariable;
	this.isWindow           = isWindow;
	this.setHash            = setHash;
	this.setHost            = setHost;
	this.setLocation        = setLocation;
	this.setParameter       = setParameter;
	this.setParameters      = setParameters;
	this.setPort            = setPort;
	this.setProtocol        = setProtocol;
	this.setSearch          = setSearch;
	this.setWindow          = setWindow;
	this.tryToEmbedFile     = tryToEmbedFile;
	this.tryToEmbedScript   = tryToEmbedScript;
	this.tryToEmbedSheet    = tryToEmbedSheet;
	this.tryToOpenSource    = tryToOpenSource;

	const FUNCTION = "function";
	const HASH     = "hash";
	const HOST     = "host";
	const PORT     = "port";
	const PROTOCOL = "protocol";
	const SEARCH   = "search";
	const STRING   = "string";

	var hash       = "";
	var host       = "";
	var location   = {};
	var parameters = {};
	var port       = "";
	var protocol   = "";
	var search     = "";
	var validator  = {};
	var window     = {};

	/**
	 * areParameters
	 * @param Parameters
	 * @returns {boolean}
	 */
	function areParameters(Parameters) {
		if(false === validator.isArray(Parameters)) {
			return false;
		}

		for(var Parameter in Parameters) {
			if(true === Parameters.hasOwnProperty(Parameter)) {
				if(false === isParameter(Parameter)) {
					return false;
				}

				if(false === validator.isString(Parameters[Parameter])) {
					return false;
				}
			}
		}

		return true;
	}

	/**
	 * existsParameter
	 * @param Parameter
	 * @returns {boolean}
	 */
	function existsParameter(Parameter) {
		if(false === isParameter(Parameter)) {
			return false;
		}

		if(false === parameters.hasOwnProperty(Parameter)) {
			return false;
		}

		return true;
	}

	/**
	 * existsParameter
	 * @param Variable
	 * @returns {boolean}
	 */
	function existsVariable(Variable) {
		if(false === isVariable(Variable)) {
			return false;
		}

		if(false === window.hasOwnProperty(Variable)) {
			return false;
		}

		return true;
	}

	/**
	 * generateParameters
	 * @param Search
	 * @returns {boolean|object}
	 */
	function generateParameters(Search) {
		if(false === isSearch(Search)) {
			return false;
		}

		Search = Search.substr(1);
		Search = Search.split("&");

		var Parameters = {};

		var Amount = Search.length;
		for(var Position = 0; Position < Amount; ++ Position) {
			var Parameter = Search[Position].split("=");

			if(2 !== Parameter.length) {
				continue;
			}

			Parameters[Parameter[0]] = Parameter[1];
		}

		return Parameters;
	}

	/**
	 * getHash
	 * @returns {string}
	 */
	function getHash() {
		return hash;
	}

	/**
	 * getHost
	 * @returns {string}
	 */
	function getHost() {
		return host;
	}

	/**
	 * getParameter
	 * @param Parameter
	 * @returns {boolean|string}
	 */
	function getParameter(Parameter) {
		if(false === existsParameter(Parameter)) {
			return false;
		}

		return parameters[Parameter];
	}

	/**
	 * getParameters
	 * @returns {object}
	 */
	function getParameters() {
		return parameters;
	}

	/**
	 * getPort
	 * @returns {string}
	 */
	function getPort() {
		return port;
	}

	/**
	 * getProtocol
	 * @returns {string}
	 */
	function getProtocol() {
		return protocol;
	}

	/**
	 * getSearch
	 * @returns {string}
	 */
	function getSearch() {
		return search;
	}

	/**
	 * getWindow
	 * @returns {object}
	 */
	function getWindow() {
		return window;
	}

	/**
	 * initialize
	 * @param Location
	 * @param Window
	 * @returns {boolean}
	 */
	function initialize(Location, Window) {
		hash       = "";
		host       = "";
		location   = {};
		parameters = {};
		port       = "";
		protocol   = "";
		search     = "";
		validator  = new Validator();
		window     = {};

		if(false === setLocation(Location)) {
			return false;
		}

		if(false === setWindow(Window)) {
			return false;
		}

		if(false === setHash(Location[HASH])) {
			return false;
		}

		if(false === setHost(Location[HOST])) {
			return false;
		}

		if(false === setPort(Location[PORT])) {
			return false;
		}

		if(false === setProtocol(Location[PROTOCOL])) {
			return false;
		}

		if(false === setSearch(Location[SEARCH])) {
			return false;
		}

		var Search     = getSearch();
		var Parameters = generateParameters(Search);

		if(false === Parameters) {
			return false;
		}

		if(false === setParameters(Parameters)) {
			return false;
		}

		return true;
	}

	/**
	 * isHash
	 * @param Hash
	 * @returns {boolean}
	 */
	function isHash(Hash) {
		if(false === validator.isString(Hash)) {
			return false;
		}

		return true;
	}

	/**
	 * isHost
	 * @param Host
	 * @returns {boolean}
	 */
	function isHost(Host) {
		if(false === validator.isString(Host)) {
			return false;
		}

		return true;
	}

	/**
	 * isLocation
	 * @param Location
	 * @returns {boolean}
	 */
	function isLocation(Location) {
		if(false === validator.isObject(Location)) {
			return false;
		}

		if(Location.hasOwnProperty(Location[HASH])) {
			return false;
		}

		if(Location.hasOwnProperty(Location[HOST])) {
			return false;
		}

		if(Location.hasOwnProperty(Location[PORT])) {
			return false;
		}

		if(Location.hasOwnProperty(Location[PROTOCOL])) {
			return false;
		}

		if(Location.hasOwnProperty(Location[SEARCH])) {
			return false;
		}

		if(false === isHash(Location[HASH])) {
			return false;
		}

		if(false === isHost(Location[HOST])) {
			return false;
		}

		if(false === isPort(Location[PORT])) {
			return false;
		}

		if(false === isProtocol(Location[PROTOCOL])) {
			return false;
		}

		if(false === isSearch(Location[SEARCH])) {
			return false;
		}

		return true;
	}

	/**
	 * isParameter
	 * @param Parameter
	 * @returns {boolean}
	 */
	function isParameter(Parameter) {
		if(false === validator.isString(Parameter)) {
			return false;
		}

		return true;
	}

	/**
	 * isPort
	 * @param Port
	 * @returns {boolean}
	 */
	function isPort(Port) {
		if(false === validator.isString(Port)) {
			return false;
		}

		return true;
	}

	/**
	 * isProtocol
	 * @param Protocol
	 * @returns {boolean}
	 */
	function isProtocol(Protocol) {
		if(false === validator.isString(Protocol)) {
			return false;
		}

		return true;
	}

	/**
	 * isSearch
	 * @param Search
	 * @returns {boolean}
	 */
	function isSearch(Search) {
		if(false === validator.isString(Search)) {
			return false;
		}

		return true;
	}

	/**
	 * isVariable
	 * @param Variable
	 * @returns {boolean}
	 */
	function isVariable(Variable) {
		if(false === validator.isString(Variable)) {
			return false;
		}

		return true;
	}

	/**
	 * isWindow
	 * @param Window
	 * @returns {boolean}
	 */
	function isWindow(Window) {
		if(false === validator.isObject(Window)) {
			return false;
		}

		return true;
	}

	/**
	 * setHash
	 * @param Hash
	 * @returns {boolean}
	 */
	function setHash(Hash) {
		if(false === isHash(Hash)) {
			return false;
		}

		hash = Hash;

		return true;
	}

	/**
	 * setHost
	 * @param Host
	 * @returns {boolean}
	 */
	function setHost(Host) {
		if(false === isHost(Host)) {
			return false;
		}

		host = Host;

		return true;
	}

	/**
	 * setLocation
	 * @param Location
	 * @returns {boolean}
	 */
	function setLocation(Location) {
		if(false === isLocation(Location)) {
			return false;
		}

		location = Location;

		return true;
	}

	/**
	 * setParameter
	 * @param Parameter
	 * @param Value
	 * @returns {boolean}
	 */
	function setParameter(Parameter, Value) {
		if(false === isParameter(Parameter)) {
			return false;
		}

		if(false === validator.isString(Value)) {
			return false;
		}

		parameters[Parameter] = Value;

		return true;
	}

	/**
	 * setParameters
	 * @param Parameters
	 * @returns {boolean}
	 */
	function setParameters(Parameters) {
		if(false === areParameters(Parameters)) {
			return false;
		}

		parameters = Parameters;

		return true;
	}

	/**
	 * setPort
	 * @param Port
	 * @returns {boolean}
	 */
	function setPort(Port) {
		if(false === isPort(Port)) {
			return false;
		}

		port = Port;

		return true;
	}

	/**
	 * setProtocol
	 * @param Protocol
	 * @returns {boolean}
	 */
	function setProtocol(Protocol) {
		if(false === isProtocol(Protocol)) {
			return false;
		}

		protocol = Protocol;

		return true;
	}

	/**
	 * setSearch
	 * @param Search
	 * @returns {boolean}
	 */
	function setSearch(Search) {
		if(false === isSearch(Search)) {
			return false;
		}

		search = Search;

		return true;
	}

	/**
	 * setWindow
	 * @param Window
	 * @returns {boolean}
	 */
	function setWindow(Window) {
		if(false === isWindow(Window)) {
			return false;
		}

		window = Window;

		return true;
	}

	/**
	 * tryToEmbedSheet
	 * @param Source
	 * @param ErrorCallback
	 * @param SuccessCallback
	 * @returns {boolean}
	 */
	function tryToEmbedFile(Source, ErrorCallback, SuccessCallback) {
		if(STRING !== typeof(Source)) {
			return false;
		}

		if(FUNCTION !== typeof(ErrorCallback)) {
			return false;
		}

		if(FUNCTION !== typeof(SuccessCallback)) {
			return false;
		}

		return tryToOpenSource(Source, ErrorCallback, function() {
			var Request = new XMLHttpRequest();
			Request.open("GET", Source);
			Request.send();
			Request.onload = function() {
				if(Request.status !== 200) {
					ErrorCallback();

					return false;
				} else {
					var Main       = document.querySelector("body");
					var File       = document.createElement("div");
					File.innerHTML = Request.response;
					Main.insertBefore(File, Main.firstChild);

					SuccessCallback();

					return true;
				}
			};
		});

	}

	/**
	 * tryToEmbedScript
	 * @param Source
	 * @param ErrorCallback
	 * @param SuccessCallback
	 * @returns {boolean}
	 */
	function tryToEmbedScript(Source, ErrorCallback, SuccessCallback) {
		if(STRING !== typeof(Source)) {
			return false;
		}

		if(FUNCTION !== typeof(ErrorCallback)) {
			return false;
		}

		if(FUNCTION !== typeof(SuccessCallback)) {
			return false;
		}

		return tryToOpenSource(Source, ErrorCallback, function() {
			var Script    = document.createElement("script");
			Script.src    = Source;
			Script.onload = function() {
				SuccessCallback();

				return true;
			};

			document.querySelector("head").appendChild(Script);
		});
	}

	/**
	 * tryToEmbedSheet
	 * @param Source
	 * @param ErrorCallback
	 * @param SuccessCallback
	 * @returns {boolean}
	 */
	function tryToEmbedSheet(Source, ErrorCallback, SuccessCallback) {
		if(STRING !== typeof(Source)) {
			return false;
		}

		if(FUNCTION !== typeof(ErrorCallback)) {
			return false;
		}

		if(FUNCTION !== typeof(SuccessCallback)) {
			return false;
		}

		return tryToOpenSource(Source, ErrorCallback, function() {
			var Script    = document.createElement("link");
			Script.href   = Source;
			Script.rel    = "stylesheet";
			Script.onload = function() {
				SuccessCallback();

				return true;
			};

			document.querySelector("head").appendChild(Script);
		});
	}

	/**
	 * tryToOpenSource
	 * @param Source
	 * @param ErrorCallback
	 * @param SuccessCallback
	 * @returns {boolean}
	 */
	function tryToOpenSource(Source, ErrorCallback, SuccessCallback) {
		if(STRING !== typeof(Source)) {
			return false;
		}

		if(FUNCTION !== typeof(ErrorCallback)) {
			return false;
		}

		if(FUNCTION !== typeof(SuccessCallback)) {
			return false;
		}

		var Request = new XMLHttpRequest();
		Request.open("GET", Source);
		Request.send();
		Request.onload = function() {
			if(Request.status !== 200) {
				ErrorCallback();

				return false;
			} else {
				SuccessCallback();

				return true;
			}
		};

		return true;
	}
}

/**
 * embedFile
 */
function embedFile() {
	core.tryToEmbedFile(FILE, function() {
		return false;
	}, function() {
		var Menu = document.querySelector("#loaderMenu");

		var Map    = loader.getMap();
		var Amount = Map.length;
		for(var Stream = 0; Stream < Amount; ++ Stream) {
			var File   = loader.getParameter(Stream, "url");
			var Format = loader.getParameter(Stream, "itag");

			var List = document.querySelector("#loaderList").cloneNode(true);
			List.removeAttribute("id");
			List.querySelector("span").innerHTML = loader.translateFormat(Format);
			Menu.appendChild(List);

			List.querySelector("button").setAttribute("loaderFile", File);
			List.querySelector("button").addEventListener("click", function(List) {
				var File = "";
				if(List.target.hasAttribute("loaderFile")) {
					File = List.target.getAttribute("loaderFile");
				} else {
					File = List.target.parentElement.getAttribute("loaderFile");
				}

				var URL        = File.slice(0, File.indexOf("?"));
				var Parameters = File.replace(URL, "");
				Parameters     = core.generateParameters(Parameters);

				var Inputs       = document.querySelector("#loaderFormInputs");
				Inputs.innerHTML = "";

				for(var Parameter in Parameters) {
					if(false === Parameters.hasOwnProperty(Parameter)) {
						continue;
					}

					var Input   = document.createElement("input");
					Input.type  = "hidden";
					Input.name  = Parameter;
					Input.value = unescape(Parameters[Parameter]);

					Inputs.appendChild(Input);
				}

				document.querySelector("#loaderForm").setAttribute("action", URL);
			});
		}

		return true;
	});
}

/**
 * embedLoader
 */
function embedLoader() {
	core.tryToEmbedScript(LOADER, function() {
		return false;
	}, function() {
		var loader = new Loader;

		if(false === loader.initialize()) {
			return false;
		}

		window.loader = loader;

		embedSheet();

		return true;
	});
}

/**
 * embedSheet
 */
function embedSheet() {
	core.tryToEmbedSheet(SHEET, function() {
		return false;
	}, function() {
		embedFile();

		return true;
	});
}

/**
 * embedValidator
 */
function embedValidator() {
	core.tryToEmbedScript(VALIDATOR, function() {
		return false;
	}, function() {
		if(false === core.initialize(location, window)) {
			return false;
		}

		window.validator = new Validator;

		embedLoader();

		return true;
	});
}

const DOMAIN    = "https://raw.githubusercontent.com/Xaruh/Loader/master/";
const FILE      = DOMAIN + "files/loader.html";
const LOADER    = DOMAIN + "scripts/loader.js";
const SHEET     = DOMAIN + "sheets/loader.css";
const VALIDATOR = DOMAIN + "scripts/validator.js";

var core = new Core();
embedValidator();
