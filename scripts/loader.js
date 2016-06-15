/**
 * Loader
 * @constructor
 */
function Loader() {
	this.addStream        = addStream;
	this.areArguments     = areArguments;
	this.areTags          = areTags;
	this.deleteStream     = deleteStream;
	this.existsArgument   = existsArgument;
	this.existsStream     = existsStream;
	this.existsTag        = existsTag;
	this.existsParameter  = existsParameter;
	this.existsPlayer     = existsPlayer;
	this.generateMap      = generateMap;
	this.generateStream   = generateStream;
	this.getArgument      = getArgument;
	this.getArguments     = getArguments;
	this.getAuthor        = getAuthor;
	this.getConfiguration = getConfiguration;
	this.getIdentifier    = getIdentifier;
	this.getLength        = getLength;
	this.getMap           = getMap;
	this.getParameter     = getParameter;
	this.getPlayer        = getPlayer;
	this.getStream        = getStream;
	this.getTag           = getTag;
	this.getTags          = getTags;
	this.getThumbnail     = getThumbnail;
	this.getTitle         = getTitle;
	this.getViews         = getViews;
	this.initialize       = initialize;
	this.isArgument       = isArgument;
	this.isAuthor         = isAuthor;
	this.isConfiguration  = isConfiguration;
	this.isIdentifier     = isIdentifier;
	this.isLength         = isLength;
	this.isMap            = isMap;
	this.isParameter      = isParameter;
	this.isPlayer         = isPlayer;
	this.isTag            = isTag;
	this.isThumbnail      = isThumbnail;
	this.isTitle          = isTitle;
	this.isViews          = isViews;
	this.onYouTube        = onYouTube;
	this.setArgument      = setArgument;
	this.setArguments     = setArguments;
	this.setAuthor        = setAuthor;
	this.setConfiguration = setConfiguration;
	this.setIdentifier    = setIdentifier;
	this.setLength        = setLength;
	this.setMap           = setMap;
	this.setParameter     = setParameter;
	this.setPlayer        = setPlayer;
	this.setStream        = setStream;
	this.setTag           = setTag;
	this.setTags          = setTags;
	this.setThumbnail     = setThumbnail;
	this.setTitle         = setTitle;
	this.setViews         = setViews;
	this.translateFormat  = translateFormat;

	const ADAPTIVE       = "adaptive_fmts";
	const AUTHOR         = "author";
	const ARGUMENTS      = "args";
	const CONFIGURATION  = "config";
	const FORMAT         = "itag";
	const FORMAT_5       = "FLV (240p)";
	const FORMAT_6       = "FLV (270p)";
	const FORMAT_13      = "3GP";
	const FORMAT_17      = "3GP (144p)";
	const FORMAT_18      = "MP4 (360p)";
	const FORMAT_22      = "MP4 (720p)";
	const FORMAT_34      = "FLV (360p)";
	const FORMAT_35      = "FLV (480p)";
	const FORMAT_36      = "3GP (240p)";
	const FORMAT_37      = "MP4 (1080p)";
	const FORMAT_38      = "MP4 (3072p)";
	const FORMAT_43      = "WEBM (360p)";
	const FORMAT_44      = "WEBM (480p)";
	const FORMAT_45      = "WEBM (720p)";
	const FORMAT_46      = "WEBM (1080p)";
	const FORMAT_82      = "[3D] MP4 (360p)";
	const FORMAT_83      = "[3D] MP4 (480p)";
	const FORMAT_84      = "[3D] MP4 (720p)";
	const FORMAT_85      = "[3D] MP4 (1080p)";
	const FORMAT_92      = "[HLS] MP4 (240p)";
	const FORMAT_93      = "[HLS] MP4 (360p)";
	const FORMAT_94      = "[HLS] MP4 (480p)";
	const FORMAT_95      = "[HLS] MP4 (720p)";
	const FORMAT_96      = "[HLS] MP4 (1080p)";
	const FORMAT_100     = "[3D] WEBM (360p)";
	const FORMAT_101     = "[3D] WEBM (480p)";
	const FORMAT_102     = "[3D] WEBM (720p)";
	const FORMAT_132     = "[HLS] MP4 (240p)";
	const FORMAT_133     = "[DASH] MP4 (240p)";
	const FORMAT_134     = "[DASH] MP4 (360p)";
	const FORMAT_135     = "[DASH] MP4 (480p)";
	const FORMAT_136     = "[DASH] MP4 (720p)";
	const FORMAT_137     = "[DASH] MP4 (1080p)";
	const FORMAT_138     = "[DASH] MP4 (2160p)";
	const FORMAT_139     = "M4A (48Kbps)";
	const FORMAT_140     = "M4A (128Kbps)";
	const FORMAT_141     = "M4A (256Kbps)";
	const FORMAT_151     = "[HLS] MP4 (720p)";
	const FORMAT_167     = "[DASH] WEBM (360p)";
	const FORMAT_168     = "[DASH] WEBM (480p)";
	const FORMAT_169     = "[DASH] WEBM (720p)";
	const FORMAT_170     = "[DASH] WEBM (1080p)";
	const FORMAT_171     = "[DASH] WEBM (128Kbps)";
	const FORMAT_172     = "[DASH] WEBM (256Kbps)";
	const FORMAT_218     = "[DASH] WEBM (480p)";
	const FORMAT_219     = "[DASH] WEBM (144p)";
	const FORMAT_242     = "[DASH] WEBM (240p)";
	const FORMAT_243     = "[DASH] WEBM (360p)";
	const FORMAT_244     = "[DASH] WEBM (480p)";
	const FORMAT_245     = "[DASH] WEBM (480p)";
	const FORMAT_246     = "[DASH] WEBM (480p)";
	const FORMAT_247     = "[DASH] WEBM (720p)";
	const FORMAT_248     = "[DASH] WEBM (1080p)";
	const FORMAT_264     = "[DASH] MP4 (1440p)";
	const FORMAT_266     = "[DASH] MP4 (2160p)";
	const FORMAT_271     = "[DASH] WEBM (1440p)";
	const FORMAT_272     = "[DASH] WEBM (2160p)";
	const FORMAT_298     = "[DASH] MP4 (720p)";
	const FORMAT_299     = "[DASH] MP4 (1080p)";
	const FORMAT_302     = "[DASH] MP4 (2160p)";
	const FORMAT_303     = "[DASH] WEBM (1080p)";
	const FORMAT_308     = "[DASH] WEBM (1440p)";
	const FORMAT_313     = "[DASH] WEBM (2160p)";
	const FORMAT_315     = "[DASH] WEBM (2160p)";
	const FORMAT_DEFAULT = "Unbekannt";
	const IDENTIFIER     = "video_id";
	const LENGTH         = "length_seconds";
	const STREAM         = "url_encoded_fmt_stream_map";
	const TAGS           = "keywords";
	const TAG_SEPARATOR  = ",";
	const THUMBNAIL      = "thumbnail_url";
	const TITLE          = "title";
	const URL            = "url";
	const VIEWS          = "view_count";
	const YOUTUBE        = "www.youtube.com";
	const YOUTUBE_PLAYER = "ytplayer";

	var author     = "";
	var identifier = "";
	var length     = "";
	var core       = {};
	var map        = [];
	var player     = {
		CONFIGURATION: {
			ARGUMENTS: {}
		}
	};
	var tags       = [];
	var thumbnail  = "";
	var title      = "";
	var validator  = {};
	var views      = "";

	/**
	 * addStream
	 * @param Stream
	 * @returns {boolean}
	 */
	function addStream(Stream) {
		if(false === isStream(Stream)) {
			return false;
		}

		map.push(Stream);

		return true;
	}

	/**
	 * areArguments
	 * @param Arguments
	 * @returns {boolean}
	 */
	function areArguments(Arguments) {
		if(false === validator.isObject(Arguments)) {
			return false;
		}

		var Amount = Arguments.length;
		for(var Argument = 0; Argument < Amount; ++ Argument) {
			if(false === isArgument(Arguments[Argument])) {
				return false;
			}
		}

		return true;
	}

	/**
	 * areTags
	 * @param Tags
	 * @returns {boolean}
	 */
	function areTags(Tags) {
		if(false === validator.isArray(Tags)) {
			return false;
		}

		var Amount = Tags.length;
		for(var Tag = 0; Tag < Amount; ++ Tag) {
			if(false === isTag(Tags[Tag])) {
				return false;
			}
		}

		return true;
	}

	/**
	 * deleteStream
	 * @param Index
	 * @returns {boolean}
	 */
	function deleteStream(Index) {
		if(false === validator.isNumber(Index)) {
			return false;
		}

		map.splice(Index, 1);

		return true;
	}

	/**
	 * existsArgument
	 * @param Argument
	 * @returns {boolean}
	 */
	function existsArgument(Argument) {
		if(false === isArgument(Argument)) {
			return false;
		}

		var Arguments = getArguments();
		if(false === Arguments.hasOwnProperty(Argument)) {
			return false;
		}

		return true;
	}

	/**
	 * existsTag
	 * @param Tag
	 * @returns {boolean}
	 */
	function existsTag(Tag) {
		if(false === isTag(Tag)) {
			return false;
		}

		var Tags = getTags();

		var Amount = Tags.length;
		for(var Position = 0; Position < Amount; ++ Position) {
			if(Tags[Position] === Tag) {
				return true;
			}
		}

		return false;
	}

	/**
	 * existsParameter
	 * @param Stream
	 * @param Parameter
	 * @returns {boolean}
	 */
	function existsParameter(Stream, Parameter) {
		if(false === isStream(Stream)) {
			return false;
		}

		if(false === isParameter(Parameter)) {
			return false;
		}

		if(false === Stream.hasOwnProperty(Parameter)) {
			return false;
		}

		return true;
	}

	/**
	 * existsPlayer
	 * @returns {boolean}
	 */
	function existsPlayer() {
		if(false === core.existsVariable(YOUTUBE_PLAYER)) {
			return false;
		}

		return true;
	}

	/**
	 * existsStream
	 * @param Index
	 * @returns {boolean}
	 */
	function existsStream(Index) {
		if(false === validator.isNumber(Index)) {
			return false;
		}

		if(true === validator.isUndefined(map[Index])) {
			return false;
		}

		return true;
	}

	/**
	 * generateMap
	 * @returns {boolean|object}
	 */
	function generateMap() {
		var Adaptive = getArgument(ADAPTIVE);
		var Stream   = getArgument(STREAM);

		var Streams = [Adaptive, Stream];
		Streams     = Streams.join(',');
		Streams     = Streams.split(',');
		var Map     = [];

		var Amount = Streams.length;
		for(var Position = 0; Position < Amount; ++ Position) {
			Stream = generateStream(Streams[Position]);

			if(false === isStream(Stream)) {
				return false;
			}

			Stream[URL] = unescape(Stream[URL]);

			Map.push(Stream);
		}

		return Map;
	}

	/**
	 * generateStream
	 * @param Search
	 * @returns {boolean|object}
	 */
	function generateStream(Search) {
		if(false === core.isSearch(Search)) {
			return false;
		}

		Search = Search.split("&");

		var Parameters = {};

		var Amount = Search.length;
		for(var Position = 0; Position < Amount; ++ Position) {
			var Parameter = Search[Position].split("=");

			if(2 !== Parameter.length) {
				return false;
			}

			Parameters[Parameter[0]] = Parameter[1];
		}

		return Parameters;
	}

	/**
	 * getArgument
	 * @param Argument
	 * @returns {boolean|*}
	 */
	function getArgument(Argument) {
		if(false === existsArgument(Argument)) {
			return false;
		}

		return player[CONFIGURATION][ARGUMENTS][Argument];
	}

	/**
	 * getArguments
	 * @returns {object}
	 */
	function getArguments() {
		return player[CONFIGURATION][ARGUMENTS];
	}

	/**
	 * getAuthor
	 * @returns {string}
	 */
	function getAuthor() {
		return author;
	}

	/**
	 * getConfiguration
	 * @returns {object}
	 */
	function getConfiguration() {
		return player[CONFIGURATION];
	}

	/**
	 * getIdentifier
	 * @returns {string}
	 */
	function getIdentifier() {
		return identifier;
	}

	/**
	 * getLength
	 * @returns {string}
	 */
	function getLength() {
		return length;
	}

	/**
	 * getMap
	 * @returns {Array}
	 */
	function getMap() {
		return map;
	}

	/**
	 * getParameter
	 * @param Index
	 * @param Parameter
	 * @returns {boolean|*}
	 */
	function getParameter(Index, Parameter) {
		if(false === validator.isNumber(Index)) {
			return false;
		}

		if(false === isParameter(Parameter)) {
			return false;
		}

		return map[Index][Parameter];
	}

	/**
	 * getPlayer
	 * @returns {object}
	 */
	function getPlayer() {
		return player;
	}

	/**
	 * getStream
	 * @param Index
	 * @returns {boolean|*}
	 */
	function getStream(Index) {
		if(false === existsStream(Index)) {
			return false;
		}

		return map[Index];
	}

	/**
	 * getTag
	 * @returns {Array}
	 */
	function getTag() {
		return tags;
	}

	/**
	 * getTags
	 * @returns {Array}
	 */
	function getTags() {
		return tags;
	}

	/**
	 * getThumbnail
	 * @returns {string}
	 */
	function getThumbnail() {
		return thumbnail;
	}

	/**
	 * getTitle
	 * @returns {string}
	 */
	function getTitle() {
		return title;
	}

	/**
	 * getViews
	 * @returns {string}
	 */
	function getViews() {
		return views;
	}

	/**
	 * initialize
	 * @returns {boolean}
	 */
	function initialize() {

		author     = "";
		identifier = "";
		length     = "";
		core       = new Core;
		map        = [];
		player     = {
			CONFIGURATION: {
				ARGUMENTS: {}
			}
		};
		tags       = [];
		thumbnail  = "";
		title      = "";
		validator  = new Validator;
		views      = "";

		if(false === core.initialize(location, window)) {
			return false;
		}

		if(false === onYouTube()) {
			return false;
		}

		if(false === existsPlayer()) {
			return false;
		}

		var Window = core.getWindow();
		if(false === setPlayer(Window[YOUTUBE_PLAYER])) {
			return false;
		}

		var Author = getArgument(AUTHOR);
		if(false === setAuthor(Author)) {
			return false;
		}

		var Identifier = getArgument(IDENTIFIER);
		if(false === setIdentifier(Identifier)) {
			return false;
		}

		var Length = getArgument(LENGTH);
		if(false === setLength(Length)) {
			return false;
		}

		var Tags = getArgument(TAGS);
		Tags     = Tags.split(TAG_SEPARATOR);

		var Amount = Tags.length;
		for(var Tag = 0; Tag < Amount; ++ Tag) {
			if(false === setTag(Tags[Tag])) {
				return false;
			}
		}

		var Thumbnail = getArgument(THUMBNAIL);
		if(false === setThumbnail(Thumbnail)) {
			return false;
		}

		var Title = getArgument(TITLE);
		if(false === setTitle(Title)) {
			return false;
		}

		var Views = getArgument(VIEWS);
		if(false === setViews(Views)) {
			return false;
		}

		var Map = generateMap();
		if(false === setMap(Map)) {
			return false;
		}

		return true;
	}

	/**
	 * isArgument
	 * @param Argument
	 * @returns {boolean}
	 */
	function isArgument(Argument) {
		if(false === validator.isString(Argument)) {
			return false;
		}

		return true;
	}

	/**
	 * isAuthor
	 * @param Author
	 * @returns {boolean}
	 */
	function isAuthor(Author) {
		if(false === validator.isString(Author)) {
			return false;
		}

		return true;
	}

	/**
	 * isConfiguration
	 * @param Configuration
	 * @returns {boolean}
	 */
	function isConfiguration(Configuration) {
		if(false === validator.isObject(Configuration)) {
			return false;
		}

		if(false === Configuration.hasOwnProperty(ARGUMENTS)) {
			return false;
		}

		if(false === areArguments(Configuration[ARGUMENTS])) {
			return false;
		}

		return true;
	}

	/**
	 * isIdentifier
	 * @param Identifier
	 * @returns {boolean}
	 */
	function isIdentifier(Identifier) {
		if(false === validator.isString(Identifier)) {
			return false;
		}

		return true;
	}

	/**
	 * isLength
	 * @param Length
	 * @returns {boolean}
	 */
	function isLength(Length) {
		if(false === validator.isString(Length)) {
			return false;
		}

		return true;
	}

	/**
	 * isMap
	 * @param Map
	 * @returns {boolean}
	 */
	function isMap(Map) {
		if(false === validator.isArray(Map)) {
			return false;
		}

		var Amount = Map.length;
		for(var Stream = 0; Stream < Amount; ++ Stream) {
			if(false === isStream(Map[Stream])) {
				return false;
			}
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
	 * isPlayer
	 * @param Player
	 * @returns {boolean}
	 */
	function isPlayer(Player) {
		if(false === validator.isObject(Player)) {
			return false;
		}

		if(false === Player.hasOwnProperty(CONFIGURATION)) {
			return false;
		}

		if(false === isConfiguration(Player[CONFIGURATION])) {
			return false;
		}

		return true;
	}

	/**
	 * isStream
	 * @param Stream
	 * @returns {boolean}
	 */
	function isStream(Stream) {
		if(false === validator.isObject(Stream)) {
			return false;
		}

		if(false === Stream.hasOwnProperty(FORMAT)) {
			return false;
		}

		if(false === Stream.hasOwnProperty(URL)) {
			return false;
		}

		return true;
	}

	/**
	 * isTag
	 * @param Tag
	 * @returns {boolean}
	 */
	function isTag(Tag) {
		if(false === validator.isString(Tag)) {
			return false;
		}

		return true;
	}

	/**
	 * isThumbnail
	 * @param Thumbnail
	 * @returns {boolean}
	 */
	function isThumbnail(Thumbnail) {
		if(false === validator.isString(Thumbnail)) {
			return false;
		}

		return true;
	}

	/**
	 * isTitle
	 * @param Title
	 * @returns {boolean}
	 */
	function isTitle(Title) {
		if(false === validator.isString(Title)) {
			return false;
		}

		return true;
	}

	/**
	 * isViews
	 * @param Views
	 * @returns {boolean}
	 */
	function isViews(Views) {
		if(false === validator.isString(Views)) {
			return false;
		}

		return true;
	}

	/**
	 * onYouTube
	 * @returns {boolean}
	 */
	function onYouTube() {
		var Host = core.getHost();
		if(YOUTUBE === Host) {
			return true;
		}

		return false;
	}

	/**
	 * setArgument
	 * @param Argument
	 * @param Value
	 * @returns {boolean}
	 */
	function setArgument(Argument, Value) {
		if(false === existsArgument(Argument)) {
			return false;
		}

		var Arguments       = getArguments();
		Arguments[Argument] = Value;

		if(false === setArguments(Arguments)) {
			return false;
		}

		return true;
	}

	/**
	 * setArguments
	 * @param Arguments
	 * @returns {boolean}
	 */
	function setArguments(Arguments) {
		if(false === areArguments(Arguments)) {
			return false;
		}

		var Configuration        = getConfiguration();
		Configuration[ARGUMENTS] = Arguments;

		if(false === setConfiguration(Configuration)) {
			return false;
		}

		return true;
	}

	/**
	 * setAuthor
	 * @param Author
	 * @returns {boolean}
	 */
	function setAuthor(Author) {
		if(false === isAuthor(Author)) {
			return false;
		}

		author = Author;

		return true;
	}

	/**
	 * setConfiguration
	 * @param Configuration
	 * @returns {boolean}
	 */
	function setConfiguration(Configuration) {
		if(false === isConfiguration(Configuration)) {
			return false;
		}

		var Player            = getPlayer();
		Player[CONFIGURATION] = Configuration;

		if(false === setPlayer(Player)) {
			return false;
		}

		return true;
	}

	/**
	 * setIdentifier
	 * @param Identifier
	 * @returns {boolean}
	 */
	function setIdentifier(Identifier) {
		if(false === isIdentifier(Identifier)) {
			return false;
		}

		identifier = Identifier;

		return true;
	}

	/**
	 * setLength
	 * @param Length
	 * @returns {boolean}
	 */
	function setLength(Length) {
		if(false === isLength(Length)) {
			return false;
		}

		length = Length;

		return true;
	}

	/**
	 * setMap
	 * @param Map
	 * @returns {boolean}
	 */
	function setMap(Map) {
		if(false === isMap(Map)) {
			return false;
		}

		map = Map;

		return true;
	}

	/**
	 * setParameter
	 * @param Index
	 * @param Parameter
	 * @param Value
	 * @returns {boolean}
	 */
	function setParameter(Index, Parameter, Value) {
		if(false === existsStream(Index)) {
			return false;
		}

		if(false === existsParameter(map[Index], Parameter)) {
			return false;
		}

		map[Index][Parameter] = Value;

		return true;
	}

	/**
	 * setPlayer
	 * @param Player
	 */
	function setPlayer(Player) {
		if(false === isPlayer(Player)) {
			return false;
		}

		player = Player;

		return true;
	}

	/**
	 * setStream
	 * @param Index
	 * @param Stream
	 * @returns {boolean}
	 */
	function setStream(Index, Stream) {
		if(false === validator.isNumber(Index)) {
			return false;
		}

		if(false === isStream(Stream)) {
			return false;
		}

		map.splice(Index, 1, Stream);

		return true;
	}

	/**
	 * setTag
	 * @param Tag
	 * @returns {boolean}
	 */
	function setTag(Tag) {
		if(true === existsTag(Tag)) {
			return false;
		}

		var Tags = getTags();
		Tags.push(Tag);

		if(false === setTags(Tags)) {
			return false;
		}

		return true;
	}

	/**
	 * setTags
	 * @param Tags
	 * @returns {boolean}
	 */
	function setTags(Tags) {
		if(false === areTags(Tags)) {
			return false;
		}

		tags = Tags;

		return true;
	}

	/**
	 * setThumbnail
	 * @param Thumbnail
	 * @returns {boolean}
	 */
	function setThumbnail(Thumbnail) {
		if(false === isThumbnail(Thumbnail)) {
			return false;
		}

		thumbnail = Thumbnail;

		return true;
	}

	/**
	 * setTitle
	 * @param Title
	 * @returns {boolean}
	 */
	function setTitle(Title) {
		if(false === isTitle(Title)) {
			return false;
		}

		title = Title;

		return true;
	}

	/**
	 * setViews
	 * @param Views
	 * @returns {boolean}
	 */
	function setViews(Views) {
		if(false === isViews(Views)) {
			return false;
		}

		views = Views;

		return true;
	}

	/**
	 * translateFormat
	 * @param Format
	 * @returns {boolean|string}
	 */
	function translateFormat(Format) {
		if(false === validator.isString(Format)) {
			return false;
		}

		switch(Format) {
			case "5":
				return FORMAT_5;
			case "6":
				return FORMAT_6;
			case "13":
				return FORMAT_13;
			case "17":
				return FORMAT_17;
			case "18":
				return FORMAT_18;
			case "22":
				return FORMAT_22;
			case "34":
				return FORMAT_34;
			case "35":
				return FORMAT_35;
			case "36":
				return FORMAT_36;
			case "37":
				return FORMAT_37;
			case "38":
				return FORMAT_38;
			case "43":
				return FORMAT_43;
			case "44":
				return FORMAT_44;
			case "45":
				return FORMAT_45;
			case "46":
				return FORMAT_46;
			case "82":
				return FORMAT_82;
			case "83":
				return FORMAT_83;
			case "84":
				return FORMAT_84;
			case "85":
				return FORMAT_85;
			case "92":
				return FORMAT_92;
			case "93":
				return FORMAT_93;
			case "94":
				return FORMAT_94;
			case "95":
				return FORMAT_95;
			case "96":
				return FORMAT_96;
			case "100":
				return FORMAT_100;
			case "101":
				return FORMAT_101;
			case "102":
				return FORMAT_102;
			case "132":
				return FORMAT_132;
			case "133":
				return FORMAT_133;
			case "134":
				return FORMAT_134;
			case "135":
				return FORMAT_135;
			case "136":
				return FORMAT_136;
			case "137":
				return FORMAT_137;
			case "138":
				return FORMAT_138;
			case "139":
				return FORMAT_139;
			case "140":
				return FORMAT_140;
			case "141":
				return FORMAT_141;
			case "151":
				return FORMAT_151;
			case "167":
				return FORMAT_167;
			case "168":
				return FORMAT_168;
			case "169":
				return FORMAT_169;
			case "170":
				return FORMAT_170;
			case "171":
				return FORMAT_171;
			case "172":
				return FORMAT_172;
			case "218":
				return FORMAT_218;
			case "219":
				return FORMAT_219;
			case "242":
				return FORMAT_242;
			case "243":
				return FORMAT_243;
			case "244":
				return FORMAT_244;
			case "245":
				return FORMAT_245;
			case "246":
				return FORMAT_246;
			case "247":
				return FORMAT_247;
			case "248":
				return FORMAT_248;
			case "264":
				return FORMAT_264;
			case "266":
				return FORMAT_266;
			case "271":
				return FORMAT_271;
			case "272":
				return FORMAT_272;
			case "298":
				return FORMAT_298;
			case "299":
				return FORMAT_299;
			case "302":
				return FORMAT_302;
			case "303":
				return FORMAT_303;
			case "308":
				return FORMAT_308;
			case "313":
				return FORMAT_313;
			case "315":
				return FORMAT_315;
			default:
				return FORMAT_DEFAULT;
		}
	}
}