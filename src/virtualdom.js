/**
 * @auth sce
 * @date 18-6-24
 * @desc 虚拟DOM
 * */

var handler = {};


/**
 * 判断对象是否是字符串
 * @param value
 * @returns {boolean}
 */
handler.isString = function (value) {
  return Object.prototype.toString.call(value) === '[object String]';
};

/**
 * 判断对象是否是数组
 * @param value
 * @returns {boolean}
 */
handler.isArray = function (value) {
  return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]';
};


/**
 * 原生DOM的属性
 */
var _DOM_PROPS_ = ['class', 'id', 'style']

/**
 * 生成一个Element对象
 * @param type
 * @param props
 * @param children
 * @returns {{type: *, props: *, children: *}}
 */
function Element (type, props, children) {
  return {
    type: type,
    props: props,
    children: children
  }
}


var VirtualDom = function() {

};
/**
 * 构造Element对象
 * @param targetName
 * @param props
 * @param children
 */
VirtualDom.createElement = function (targetName, props, children) {
  var childArray = [];
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    handler.isArray(children) ? childArray = children: childArray.push(children);
  } else if (childrenLength > 1) {
    for(var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
  }
  return Element(targetName, props, childArray);
};

/**
 * 渲染视图
 * @param element
 * @param selector
 * @returns {{}}
 */
VirtualDom.renderDOM = function (element, selector) {
  var _render = function (ele) {
    if(!ele) return;
    var _ele = document.createElement(ele.type);
    var props = ele.props || {};
    var children = ele.children || [];
    Object.keys(props).forEach(function(item) {
      _ele.setAttribute(item, props[item])
    });
    var _child;
    children.forEach(function(child) {
      _child = handler.isString(child) ? document.createTextNode(child) :
        _render(child);
      _ele.appendChild(_child);
    });
    return _ele;
  }
  selector.appendChild(_render(element));
  return element;
};

window.VirtualDom = VirtualDom;