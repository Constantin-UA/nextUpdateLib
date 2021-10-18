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
display.js(show(), hide(), toggle())
classes.js(addClass(),removeClass(),toggleClass(),hasClass())
attributes.js(setAttribute(),getAttribute(),hasAttribute(),removeAttribute())
handlers.js (on(), off(), click())
actions.js (html(), eq(), index(), find(), log())
effects.js (fadeIn(), fadeOut(), \_animateOverTime())
}

1. display.js {
   show() - ‘element.style.display = ‘ ‘
   hide() - ‘element.style.display = ‘none‘
   toggle() - ‘element.style.display = ‘ ‘ or ‘element.style.display = ‘none‘
   }
2. classes.js {
   addClass(...classNames) - return this; this.classList.add(...classNames)
   removeClass(...classNames) - return this; this.classList.remove(...classNames)
   toggleClass(className) - return this; this.classList.toggle(className)
   hasClass(className) - return true or false;
   }
3. attributes.js {
   setAttribute(attrName, attrValue) - return this; el.setAttribute(attrName, attrValue)
   getAttribute(attrName) - return this or this[i].getAttribute(attrName)
   hasAttribute(attrName) - return false or true
   removeAttribute(attrName) - return this
   }
4. handlers.js {
   on(eventHandler, callback) - return this; addEventListener(eventHandler, callback)
   off(eventHandler, callback) - return this; removeEventListener(eventHandler, callback)
   click(callback) - return this; addEventListener(‘click’, callback) or elem.click()
   }
5. actions.js {
   html(content) - ‘innerHTML = content;’ or ‘return innerHTML;’
   eq(i) - return swap = this[i]
   index(selector) - return childs.findIndex(function);
   find(selector) - return this;
   log() - console.log(this);
   closest(selector) - return this; this[i] = this[i].closest(selector);
   siblings() - return this; this[counter] = arr[j].parentNode.children;
   }
6. effects.js {
   fadeIn(dur, display, cb) - this.style.display = ‘block’; opacity (0 -> 1)
   fadeOut(dur,cb) - this.style.display = ‘none’; opacity (0 <- 1)
   animateOverTime(dur,cb,fin) - return \_animateOverTime;
   }
