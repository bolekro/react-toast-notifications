'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContainer = undefined;

var _emotion = require('emotion');

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTransitionGroup = require('react-transition-group');

var _ToastElement = require('./ToastElement');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var placements = {
  'top-left': { top: 0, left: 0 },
  'top-center': { top: 0, left: '50%', transform: 'translateX(-50%)' },
  'top-right': { top: 0, right: 0 },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-center': { bottom: 0, left: '50%', transform: 'translateX(-50%)' },
  'bottom-right': { bottom: 0, right: 0 }
};

var ToastContainer = exports.ToastContainer = function ToastContainer(_ref) {
  var children = _ref.children,
      placement = _ref.placement;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _emotion.css)(_extends({
        boxSizing: 'border-box',
        maxHeight: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        zIndex: 1050,
        padding: _ToastElement.gutter,
        pointerEvents: _react.Children.count(children) ? 'auto' : 'none',
        position: 'fixed'
      }, placements[placement]), '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub2FzdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkkiLCJmaWxlIjoiLi4vc3JjL1RvYXN0Q29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcclxuXHJcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4vdHlwZXMnO1xyXG5pbXBvcnQgeyBndXR0ZXIgfSBmcm9tICcuL1RvYXN0RWxlbWVudCc7XHJcblxyXG5jb25zdCBwbGFjZW1lbnRzID0ge1xyXG4gICd0b3AtbGVmdCc6IHsgdG9wOiAwLCBsZWZ0OiAwIH0sXHJcbiAgJ3RvcC1jZW50ZXInOiB7IHRvcDogMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH0sXHJcbiAgJ3RvcC1yaWdodCc6IHsgdG9wOiAwLCByaWdodDogMCB9LFxyXG4gICdib3R0b20tbGVmdCc6IHsgYm90dG9tOiAwLCBsZWZ0OiAwIH0sXHJcbiAgJ2JvdHRvbS1jZW50ZXInOiB7IGJvdHRvbTogMCwgbGVmdDogJzUwJScsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknIH0sXHJcbiAgJ2JvdHRvbS1yaWdodCc6IHsgYm90dG9tOiAwLCByaWdodDogMCB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVG9hc3RDb250YWluZXJQcm9wcyA9IHsgY2hpbGRyZW46IE5vZGUsIHBsYWNlbWVudDogUGxhY2VtZW50IH07XHJcblxyXG5leHBvcnQgY29uc3QgVG9hc3RDb250YWluZXIgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHBsYWNlbWVudCxcclxufTogVG9hc3RDb250YWluZXJQcm9wcykgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNzcz17e1xyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG4gICAgICB6SW5kZXg6IDEwNTAsXHJcbiAgICAgIHBhZGRpbmc6IGd1dHRlcixcclxuICAgICAgcG9pbnRlckV2ZW50czogQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID8gJ2F1dG8nIDogJ25vbmUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgLi4ucGxhY2VtZW50c1twbGFjZW1lbnRdLFxyXG4gICAgfX1cclxuICA+XHJcbiAgICA8VHJhbnNpdGlvbkdyb3VwIGNvbXBvbmVudD17bnVsbH0+e2NoaWxkcmVufTwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iXX0= */')
    },
    _react2.default.createElement(
      _reactTransitionGroup.TransitionGroup,
      { component: null },
      children
    )
  );
};