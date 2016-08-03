(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	Searchable Table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component
		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchableTable).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: 'handleUserInput',
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its 
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				_react2.default.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(_react2.default.Component);

exports.default = SearchableTable;

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: 'handleChange',
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'form',
				null,
				_react2.default.createElement('input', {
					type: 'text',
					placeholder: 'Search for one keyword...',
					ref: 'filterTextInput',
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	}

	_createClass(Table, [{
		key: 'render',
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(_react2.default.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return _react2.default.createElement(
				'div',
				null,
				sections
			);
		}
	}]);

	return Table;
}(_react2.default.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
	}

	_createClass(Section, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.data.name,
					' = ',
					this.props.data.price,
					' '
				)
			);
		}
	}]);

	return Section;
}(_react2.default.Component);

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchableTable = require('./SearchableTable');

var _SearchableTable2 = _interopRequireDefault(_SearchableTable);

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Filterable CheatSheet Component
/*
 *	Author: JimmyLiao <sjliao@tw.ibm.com>
 *  Inspired by http://jpsierens.com/tutorial-gulp-javascript-2015-react/
 */

_reactDom2.default.render(_react2.default.createElement(_SearchableTable2.default, { data: _data.data }), document.getElementById('searchableTable'));

},{"./SearchableTable":1,"./data":3,"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = exports.data = [{ category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" }, { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" }, { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" }, { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 6S" }, { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }];

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvU2VhcmNoYWJsZVRhYmxlLmpzIiwiYXBwL2FwcC5qcyIsImFwcC9kYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNLQTs7Ozs7Ozs7OzsrZUFMQTs7Ozs7SUFPcUIsZTs7O0FBQ3BCLDRCQUFjO0FBQUE7O0FBRWI7QUFGYTs7QUFHUCxRQUFLLEtBQUwsR0FBYSxFQUFDLFlBQVksRUFBYixFQUFiO0FBSE87QUFJVjs7OztrQ0FDZSxVLEVBQVk7QUFDM0I7QUFDQTtBQUNHLFFBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxVQUFiLEVBQWQ7QUFDSDs7OzJCQUNJO0FBQ1AsVUFDQztBQUFBO0FBQUE7QUFDQyxrQ0FBQyxTQUFEO0FBQ0MsaUJBQVksS0FBSyxLQUFMLENBQVcsVUFEeEI7QUFFZ0Isa0JBQWEsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCO0FBRjdCLE1BREQ7QUFLQyxrQ0FBQyxLQUFEO0FBQ0MsV0FBTSxLQUFLLEtBQUwsQ0FBVyxJQURsQjtBQUVDLGlCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnhCO0FBTEQsSUFERDtBQVlBOzs7O0VBeEIyQyxnQkFBTSxTOztrQkFBOUIsZTs7SUEyQmYsUzs7Ozs7Ozs7Ozs7aUNBQ1U7QUFDZDtBQUNNLFFBQUssS0FBTCxDQUFXLFdBQVg7QUFDQztBQUNHLFFBQUssSUFBTCxDQUFVLGVBQVYsQ0FBMEIsS0FGOUI7QUFJSDs7OzJCQUNJO0FBQ1AsVUFDVTtBQUFBO0FBQUE7QUFDSTtBQUNDLFdBQUssTUFETjtBQUVDLGtCQUFZLDJCQUZiO0FBR0MsVUFBSSxpQkFITDtBQUlDLFlBQVEsS0FBSyxLQUFMLENBQVcsVUFKcEI7QUFLQyxlQUFXLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBREosSUFEVjtBQVdBOzs7O0VBcEJzQixnQkFBTSxTOztJQXVCeEIsSzs7Ozs7Ozs7Ozs7MkJBQ0c7QUFDUCxPQUFJLFdBQVcsRUFBZjtBQUNBLE9BQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUF0QjtBQUNBLFFBQUssT0FBTCxDQUFhLFVBQVMsT0FBVCxFQUFpQjtBQUM3QixRQUFJLFFBQVEsSUFBUixDQUFhLE9BQWIsQ0FBcUIsS0FBSyxLQUFMLENBQVcsVUFBaEMsTUFBZ0QsQ0FBQyxDQUFyRCxFQUF3RDtBQUN2RDtBQUNBO0FBQ0QsYUFBUyxJQUFULENBQWMsOEJBQUMsT0FBRCxJQUFTLEtBQUssUUFBUSxJQUF0QixFQUE0QixNQUFNLE9BQWxDLEdBQWQ7QUFDQSxJQUxZLENBS1gsSUFMVyxDQUtOLElBTE0sQ0FBYjtBQU1BLFVBQ0M7QUFBQTtBQUFBO0FBQU07QUFBTixJQUREO0FBR0E7Ozs7RUFia0IsZ0JBQU0sUzs7SUFnQnBCLE87Ozs7Ozs7Ozs7OzJCQUNHO0FBQ1AsVUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBSSxVQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLElBQXBCO0FBQUE7QUFBNkIsVUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixLQUE3QztBQUFBO0FBQUE7QUFERCxJQUREO0FBS0E7Ozs7RUFQb0IsZ0JBQU0sUzs7Ozs7QUNwRTVCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7QUFWQTs7Ozs7QUFXQSxtQkFBUyxNQUFULENBQWlCLDJEQUFpQixnQkFBakIsR0FBakIsRUFBaUQsU0FBUyxjQUFULENBQXdCLGlCQUF4QixDQUFqRDs7Ozs7Ozs7QUNYTyxJQUFNLHNCQUFPLENBQ2xCLEVBQUMsVUFBVSxnQkFBWCxFQUE2QixPQUFPLFFBQXBDLEVBQThDLFNBQVMsSUFBdkQsRUFBNkQsTUFBTSxVQUFuRSxFQURrQixFQUVsQixFQUFDLFVBQVUsZ0JBQVgsRUFBNkIsT0FBTyxPQUFwQyxFQUE2QyxTQUFTLElBQXRELEVBQTRELE1BQU0sVUFBbEUsRUFGa0IsRUFHbEIsRUFBQyxVQUFVLGdCQUFYLEVBQTZCLE9BQU8sUUFBcEMsRUFBOEMsU0FBUyxLQUF2RCxFQUE4RCxNQUFNLFlBQXBFLEVBSGtCLEVBSWxCLEVBQUMsVUFBVSxhQUFYLEVBQTBCLE9BQU8sU0FBakMsRUFBNEMsU0FBUyxLQUFyRCxFQUE0RCxNQUFNLFdBQWxFLEVBSmtCLEVBS2xCLEVBQUMsVUFBVSxhQUFYLEVBQTBCLE9BQU8sU0FBakMsRUFBNEMsU0FBUyxJQUFyRCxFQUEyRCxNQUFNLFNBQWpFLEVBTGtCLENBQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLypcbipcdFNlYXJjaGFibGUgVGFibGVcbipcdFxuKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoYWJsZVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHQvLyBJbml0aWFsIHN0YXRlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtmaWx0ZXJUZXh0OiAnJ31cbiAgICB9XG4gICAgaGFuZGxlVXNlcklucHV0KGZpbHRlclRleHQpIHtcbiAgICBcdC8vIFdoZW4gdGhlcmUncyBhIGNoYW5nZSBpbiB0aGUgc3RhdGUsIHRoZSBjb21wb25lbnQgYW5kIGFsbCBpdHMgXG4gICAgXHQvLyBzdWItY29tcG9uZW50cyBnZXQgdXBkYXRlZC5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmlsdGVyVGV4dDogZmlsdGVyVGV4dH0pO1xuICAgIH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTZWFyY2hCYXIgXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICBvblVzZXJJbnB1dD17dGhpcy5oYW5kbGVVc2VySW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0XHQ8VGFibGUgXG5cdFx0XHRcdFx0ZGF0YT17dGhpcy5wcm9wcy5kYXRhfSBcblx0XHRcdFx0XHRmaWx0ZXJUZXh0PXt0aGlzLnN0YXRlLmZpbHRlclRleHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGhhbmRsZUNoYW5nZSgpIHtcblx0XHQvLyBwYXNzaW5nIGZpbHRlciBkYXRhIHVwIGJ5IHVzaW5nIGEgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5wcm9wcy5vblVzZXJJbnB1dChcbiAgICAgICAgXHQvLyByZWYgaXMgbGlrZSB0aGUgaWRcbiAgICAgICAgICAgIHRoaXMucmVmcy5maWx0ZXJUZXh0SW5wdXQudmFsdWVcbiAgICAgICAgKTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgXHR0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIG9uZSBrZXl3b3JkLi4uXCIgXG4gICAgICAgICAgICAgICAgXHRyZWY9XCJmaWx0ZXJUZXh0SW5wdXRcIlxuICAgICAgICAgICAgICAgIFx0dmFsdWU9IHt0aGlzLnByb3BzLmZpbHRlclRleHR9XG4gICAgICAgICAgICAgICAgXHRvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG5cdH1cbn1cblxuY2xhc3MgVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRsZXQgc2VjdGlvbnMgPSBbXTtcblx0XHRsZXQgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24ocHJvZHVjdCl7XG5cdFx0XHRpZiAocHJvZHVjdC5uYW1lLmluZGV4T2YodGhpcy5wcm9wcy5maWx0ZXJUZXh0KSA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0c2VjdGlvbnMucHVzaCg8U2VjdGlvbiBrZXk9e3Byb2R1Y3QubmFtZX0gZGF0YT17cHJvZHVjdH0gLz4pO1xuXHRcdH0uYmluZCh0aGlzKSlcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PntzZWN0aW9uc308L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8cD57dGhpcy5wcm9wcy5kYXRhLm5hbWV9ID0ge3RoaXMucHJvcHMuZGF0YS5wcmljZX0gPC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufSIsIi8qXG4gKlx0QXV0aG9yOiBKaW1teUxpYW8gPHNqbGlhb0B0dy5pYm0uY29tPlxuICogIEluc3BpcmVkIGJ5IGh0dHA6Ly9qcHNpZXJlbnMuY29tL3R1dG9yaWFsLWd1bHAtamF2YXNjcmlwdC0yMDE1LXJlYWN0L1xuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZWFyY2hhYmxlVGFibGUgZnJvbSAnLi9TZWFyY2hhYmxlVGFibGUnO1xuaW1wb3J0IHtkYXRhfSBmcm9tICcuL2RhdGEnO1xuXG4vLyBGaWx0ZXJhYmxlIENoZWF0U2hlZXQgQ29tcG9uZW50XG5SZWFjdERPTS5yZW5kZXIoIDxTZWFyY2hhYmxlVGFibGUgZGF0YT17ZGF0YX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaGFibGVUYWJsZScpICk7XG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IFtcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQ0OS45OVwiLCBzdG9ja2VkOiB0cnVlLCBuYW1lOiBcIkZvb3RiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiU3BvcnRpbmcgR29vZHNcIiwgcHJpY2U6IFwiJDkuOTlcIiwgc3RvY2tlZDogdHJ1ZSwgbmFtZTogXCJCYXNlYmFsbFwifSxcbiAge2NhdGVnb3J5OiBcIlNwb3J0aW5nIEdvb2RzXCIsIHByaWNlOiBcIiQyOS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJCYXNrZXRiYWxsXCJ9LFxuICB7Y2F0ZWdvcnk6IFwiRWxlY3Ryb25pY3NcIiwgcHJpY2U6IFwiJDM5OS45OVwiLCBzdG9ja2VkOiBmYWxzZSwgbmFtZTogXCJpUGhvbmUgNlNcIn0sXG4gIHtjYXRlZ29yeTogXCJFbGVjdHJvbmljc1wiLCBwcmljZTogXCIkMTk5Ljk5XCIsIHN0b2NrZWQ6IHRydWUsIG5hbWU6IFwiTmV4dXMgN1wifVxuXTtcbiJdfQ==
