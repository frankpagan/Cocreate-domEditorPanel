/*! For license information please see toggle-chunk0ffc363a7380d6b0b270.js.LICENSE.txt */
(this.webpackChunkCoCreate_attributes=this.webpackChunkCoCreate_attributes||[]).push([["toggle-chunk"],{"../../CoCreateJS/node_modules/@cocreate/toggle/src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CoCreateToggle = {\n\t\n\tinit: function() {\n\t\tthis.initElement(document, 'toggle');\n\t\tthis.initElement(document, 'hover');\n\t},\n\t\n\tinitElement: function(container, prefix) {\n\t\tthis.__initElementEvent(container || document, prefix)\n\t},\n\t\n\t__initElementEvent: function(mainContainer, prefix) {\n\t\t\n\t\tconst self = this;\n\t\tlet eventNames = []; \n\t\t\n\t\tif (prefix === 'toggle') eventNames = ['click']\n\t\tif (prefix === 'hover') eventNames = ['mouseover', 'mouseout'];\n\t\n\t\teventNames.forEach((event_name) => {\n\t\t\tmainContainer.addEventListener(event_name, function(event) {\n\t\t\t\tconst target = event.target.closest(`[data-${prefix}]`);\n\t\t\t\tif(target) {\n\t\t\t\t\tself.__changeElementStatus(target, prefix)\n\t\t\t\t}\n\t\t\t});\n\t\t})\n\t},\n\t\n\t__changeElementStatus: function(element, prefix) {\n\t\tconst self =this;\n\t\tlet values = element.dataset[prefix].split(',');\n\t\tif (!values || values.length == 0) {\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tlet target_attribute = element.dataset[`${prefix}_attribute`] || 'class';\n\t\tlet targetSelector = element.dataset[`${prefix}_target`];\n\t\tlet targetClosest = element.dataset[`${prefix}_closest`];\n\t\t\n\t\tlet targetElements = [element]\n\t\tif (typeof(targetClosest) != 'undefined') {\n\t\t\ttargetElements = [element.closest(targetClosest)];\n\t\t}\n\t\t\n\t\tif (targetSelector) {\n\t\t\ttargetElements = document.querySelectorAll(targetSelector);\n\t\t}\n\n\t\tvalues = values.map(x => x.trim())\n\t\ttargetElements.forEach((el) => self.setValue(el, target_attribute, values));\n\t},\n\t\n\tsetValue: function(element, attrName, values) {\n\t\tif (element.getAttribute(attrName) === null) {\n\t\t\treturn;\n\t\t}\n\t\tlet attrValues = element.getAttribute(attrName).split(' ').map(x => x.trim());\n\t\tlet oldValue = values.filter(x => attrValues.includes(x))[0] || '';\n\t\tlet newValue = this.__getNextValue(values, oldValue)\n\t\t\n\t\tif (attrName === 'class') {\n\t\t\tif (oldValue != '') {\n\t\t\t\telement.classList.remove(oldValue);\n\t\t\t\tif (values.length === 1) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tif (newValue != '') {\n\t\t\t\telement.classList.add(newValue);\n\t\t\t}\n\t\t} else {\n\t\t\telement.setAttribute(attrName, newValue);\n\t\t}\n\t},\n\n\t__getNextValue: function(values, val) {\n\t\tlet size = values.length;\n\t\tlet nn = values.indexOf(val);\n\t\tif (nn == -1) {\n\t\t\treturn values[0];\n\t\t} else {\n\t\t\treturn values[(nn + 1) % size];\n\t\t}\n\t}\n}\n\nCoCreateToggle.init();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoCreateToggle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hdHRyaWJ1dGVzLy4uLy4uL0NvQ3JlYXRlSlMvbm9kZV9tb2R1bGVzL0Bjb2NyZWF0ZS90b2dnbGUvc3JjL2luZGV4LmpzPzdlMGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQSxzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsT0FBTztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0QyxPQUFPO0FBQ25ELDBDQUEwQyxPQUFPO0FBQ2pELHlDQUF5QyxPQUFPOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsY0FBYyIsImZpbGUiOiIuLi8uLi9Db0NyZWF0ZUpTL25vZGVfbW9kdWxlcy9AY29jcmVhdGUvdG9nZ2xlL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlVG9nZ2xlID0ge1xuXHRcblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5pbml0RWxlbWVudChkb2N1bWVudCwgJ3RvZ2dsZScpO1xuXHRcdHRoaXMuaW5pdEVsZW1lbnQoZG9jdW1lbnQsICdob3ZlcicpO1xuXHR9LFxuXHRcblx0aW5pdEVsZW1lbnQ6IGZ1bmN0aW9uKGNvbnRhaW5lciwgcHJlZml4KSB7XG5cdFx0dGhpcy5fX2luaXRFbGVtZW50RXZlbnQoY29udGFpbmVyIHx8IGRvY3VtZW50LCBwcmVmaXgpXG5cdH0sXG5cdFxuXHRfX2luaXRFbGVtZW50RXZlbnQ6IGZ1bmN0aW9uKG1haW5Db250YWluZXIsIHByZWZpeCkge1xuXHRcdFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBldmVudE5hbWVzID0gW107IFxuXHRcdFxuXHRcdGlmIChwcmVmaXggPT09ICd0b2dnbGUnKSBldmVudE5hbWVzID0gWydjbGljayddXG5cdFx0aWYgKHByZWZpeCA9PT0gJ2hvdmVyJykgZXZlbnROYW1lcyA9IFsnbW91c2VvdmVyJywgJ21vdXNlb3V0J107XG5cdFxuXHRcdGV2ZW50TmFtZXMuZm9yRWFjaCgoZXZlbnRfbmFtZSkgPT4ge1xuXHRcdFx0bWFpbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50X25hbWUsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KGBbZGF0YS0ke3ByZWZpeH1dYCk7XG5cdFx0XHRcdGlmKHRhcmdldCkge1xuXHRcdFx0XHRcdHNlbGYuX19jaGFuZ2VFbGVtZW50U3RhdHVzKHRhcmdldCwgcHJlZml4KVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXHRcblx0X19jaGFuZ2VFbGVtZW50U3RhdHVzOiBmdW5jdGlvbihlbGVtZW50LCBwcmVmaXgpIHtcblx0XHRjb25zdCBzZWxmID10aGlzO1xuXHRcdGxldCB2YWx1ZXMgPSBlbGVtZW50LmRhdGFzZXRbcHJlZml4XS5zcGxpdCgnLCcpO1xuXHRcdGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRcblx0XHRsZXQgdGFyZ2V0X2F0dHJpYnV0ZSA9IGVsZW1lbnQuZGF0YXNldFtgJHtwcmVmaXh9X2F0dHJpYnV0ZWBdIHx8ICdjbGFzcyc7XG5cdFx0bGV0IHRhcmdldFNlbGVjdG9yID0gZWxlbWVudC5kYXRhc2V0W2Ake3ByZWZpeH1fdGFyZ2V0YF07XG5cdFx0bGV0IHRhcmdldENsb3Nlc3QgPSBlbGVtZW50LmRhdGFzZXRbYCR7cHJlZml4fV9jbG9zZXN0YF07XG5cdFx0XG5cdFx0bGV0IHRhcmdldEVsZW1lbnRzID0gW2VsZW1lbnRdXG5cdFx0aWYgKHR5cGVvZih0YXJnZXRDbG9zZXN0KSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGFyZ2V0RWxlbWVudHMgPSBbZWxlbWVudC5jbG9zZXN0KHRhcmdldENsb3Nlc3QpXTtcblx0XHR9XG5cdFx0XG5cdFx0aWYgKHRhcmdldFNlbGVjdG9yKSB7XG5cdFx0XHR0YXJnZXRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0U2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdHZhbHVlcyA9IHZhbHVlcy5tYXAoeCA9PiB4LnRyaW0oKSlcblx0XHR0YXJnZXRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gc2VsZi5zZXRWYWx1ZShlbCwgdGFyZ2V0X2F0dHJpYnV0ZSwgdmFsdWVzKSk7XG5cdH0sXG5cdFxuXHRzZXRWYWx1ZTogZnVuY3Rpb24oZWxlbWVudCwgYXR0ck5hbWUsIHZhbHVlcykge1xuXHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkgPT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGF0dHJWYWx1ZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSkuc3BsaXQoJyAnKS5tYXAoeCA9PiB4LnRyaW0oKSk7XG5cdFx0bGV0IG9sZFZhbHVlID0gdmFsdWVzLmZpbHRlcih4ID0+IGF0dHJWYWx1ZXMuaW5jbHVkZXMoeCkpWzBdIHx8ICcnO1xuXHRcdGxldCBuZXdWYWx1ZSA9IHRoaXMuX19nZXROZXh0VmFsdWUodmFsdWVzLCBvbGRWYWx1ZSlcblx0XHRcblx0XHRpZiAoYXR0ck5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdGlmIChvbGRWYWx1ZSAhPSAnJykge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUob2xkVmFsdWUpO1xuXHRcdFx0XHRpZiAodmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAobmV3VmFsdWUgIT0gJycpIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld1ZhbHVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIG5ld1ZhbHVlKTtcblx0XHR9XG5cdH0sXG5cblx0X19nZXROZXh0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlcywgdmFsKSB7XG5cdFx0bGV0IHNpemUgPSB2YWx1ZXMubGVuZ3RoO1xuXHRcdGxldCBubiA9IHZhbHVlcy5pbmRleE9mKHZhbCk7XG5cdFx0aWYgKG5uID09IC0xKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWzBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzWyhubiArIDEpICUgc2l6ZV07XG5cdFx0fVxuXHR9XG59XG5cbkNvQ3JlYXRlVG9nZ2xlLmluaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVUb2dnbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../CoCreateJS/node_modules/@cocreate/toggle/src/index.js\n")}}]);