# nextUpdateLib
Документация my lib на JavaScript:

core.js {
	$(selector) - return new $.prototype.init(selector);
	init(selector) - return this;  
	$.prototype.init.prototype = $.prototype;
	window.$ = $
}

lib.js {
import core.js
more imports:
  1) display.js(show(), hide(), toggle())
  2) classes.js(addClass(),removeClass(),toggleClass(),hasClass())
  3) attributes.js(setAttribute(),getAttribute(),hasAttribute(),removeAttribute())
  4) handlers.js (on(), off(), click())
  5) actions.js (html(), eq(), index(), find(), log())
  export default $;
}

1) display.js {
  show() - ‘element.style.display = ‘ ‘
  hide() - ‘element.style.display = ‘none‘
  toggle() - ‘element.style.display = ‘ ‘ or ‘element.style.display = ‘none‘
}
2) classes.js {
	addClass(...classNames) - return this; this.classList.add(...classNames)
  removeClass(...classNames) - return this; this.classList.remove(...classNames)
  toggleClass(className) - return this; this.classList.toggle(className)
  hasClass(className) - return true or false;
}
3) attributes.js {
  setAttribute(attrName, attrValue) - return this; el.setAttribute(attrName, attrValue)
  getAttribute(attrName) - return this or this[i].getAttribute(attrName)
  hasAttribute(attrName) - return false or true
  removeAttribute(attrName) - return this
}
4) handlers.js {
  on(eventHandler, callback) - return this; addEventListener(eventHandler, callback)
	off(eventHandler, callback) - return this; removeEventListener(eventHandler, callback)
	click(callback) - return this; addEventListener(‘click’, callback) or elem.click()
}
5) actions.js {
  html(content) - ‘innerHTML = content;’ or ‘return innerHTML;’
  eq(i) - return swap =  this[i]
  index(selector) - return childs.findIndex(function)
  find(selector) - return this; 
  log() - console.log(this);
}


