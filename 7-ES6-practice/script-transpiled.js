'use strict';
/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var city = function city() {
	var CommunityItem = function () {
		function CommunityItem(name, buildYear) {
			_classCallCheck(this, CommunityItem);

			this.name = name;
			this.buildYear = buildYear;
		}

		_createClass(CommunityItem, [{
			key: 'calcAge',
			value: function calcAge() {
				var now = new Date();
				return now.getFullYear() - this.buildYear;
			}
		}]);

		return CommunityItem;
	}();

	var Park = function (_CommunityItem) {
		_inherits(Park, _CommunityItem);

		function Park(name, buildYear, area, treeNumber) {
			_classCallCheck(this, Park);

			var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, buildYear));

			_this.name = name;
			_this.buildYear = buildYear;
			_this.area = area;
			_this.treeNumber = treeNumber;
			_this.age = _this.calcAge();
			return _this;
		}

		_createClass(Park, [{
			key: 'treeDensity',
			value: function treeDensity() {
				var treeDensity = Math.round(this.treeNumber / this.area);
				return this.name + ' has ' + treeDensity + ' tree density';
			}
		}]);

		return Park;
	}(CommunityItem);

	var Street = function (_CommunityItem2) {
		_inherits(Street, _CommunityItem2);

		function Street(name, buildYear, length) {
			var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'normal';

			_classCallCheck(this, Street);

			var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, buildYear));

			_this2.name = name;
			_this2.buildYear = buildYear;
			_this2.length = length;
			_this2.size = size;
			return _this2;
		}

		return Street;
	}(CommunityItem);

	var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

	var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 'big'), new Street('Evergreen Street', 2008, 2.7, 'small'), new Street('4th Street', 2015, 5.8), new Street('Sunset Boulevard', 1982, 20.5, 'huge')];

	var calculateAverage = function calculateAverage(comItem, averageOf) {
		return Math.round(comItem.reduce(function (prev, curr) {
			return prev + curr[averageOf];
		}, 0) / comItem.length);
	};

	var thousandTreeParks = function thousandTreeParks() {
		return allParks.filter(function (park) {
			return park.treeNumber >= 1000;
		});
	};

	var calcTotal = function calcTotal(comItem, totalOf) {
		return comItem.reduce(function (prev, curr) {
			return prev + curr[totalOf];
		}, 0);
	};

	var parkStat = function parkStat() {
		console.info('---- PARKS ----');
		allParks.forEach(function (park) {
			return console.info(park.treeDensity());
		});

		console.info('Average park age: ' + calculateAverage(allParks, 'age') + ' years');

		thousandTreeParks().forEach(function (park) {
			return console.info(park.name + ' has more than 1000 tree');
		});
	};

	var streetStat = function streetStat() {
		console.info('---- STREETS ----');
		console.info('Average length of streets: ' + calculateAverage(allStreets, 'length') + ' km');
		console.info('Total length of streets are ' + calcTotal(allStreets, 'length') + ' km');

		allStreets.forEach(function (street) {
			return console.info(street.name + ' is a ' + street.size + ' street');
		});
	};

	return {
		parkStat: parkStat,
		streetStat: streetStat
	};
};

city().parkStat();
city().streetStat();
