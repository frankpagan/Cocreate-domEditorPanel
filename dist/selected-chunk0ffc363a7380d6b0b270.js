/*! For license information please see selected-chunk0ffc363a7380d6b0b270.js.LICENSE.txt */
(this.webpackChunkCoCreate_attributes=this.webpackChunkCoCreate_attributes||[]).push([["selected-chunk"],{"../../CoCreateJS/node_modules/@cocreate/selected/src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CoCreateSelected = {\n\n\n\t// init: function() {\n\t// \tthis.initElement(document);\n\t// },\n\n\t// initElement: function(container) {\n\t// \tlet mainContainer = container || document;\n\n\t// \tif (!mainContainer.querySelectorAll) {\n\t// \t\treturn;\n\t// \t}\n\n\t// \tlet elements = mainContainer.querySelectorAll(`[data-selected]`);\n\t// \tif (elements.length === 0 && mainContainer != document && mainContainer.hasAttribute(`[data-selected]`)) {\n\t// \t\telements = [mainContainer];\n\t// \t}\n\t// \tconst self = this;\n\t// \telements.forEach((element) => self.__initElementEvent(element));\n\t// },\n\n\t// __initElementEvent: function(element) {\n\t// \tconst selectedValue = element.getAttribute('data-selected') || \"\";\n\t// \tlet values = selectedValue.split(',');\n\t// \tif (!values || values.length === 0) {\n\t// \t\treturn;\n\t// \t}\n\t// \tvalues = values.map(x => x.trim())\n\n\t// \tconst self = this;\n\n\t// \t// if (CoCreate.observer.getInitialized(element)) {\n\t// \t// \treturn;\n\t// \t// }\n\t// \t// CoCreate.observer.setInitialized(element)\n\t// \telement['co_initialized_'] = true;\n\n\t// \telement.addEventListener('click', function() {\n\t// \t\tself.__changeElementStatus(element, values)\n\t// \t});\n\n\t// \tdocument.addEventListener('click', function(event) {\n\t// \t\tif (!element.hasAttribute(\"data-selected_group\") && !element.contains(event.target)) {\n\n\t// \t\t\tself.__removeSelectedStatus(element, values);\n\t// \t\t}\n\t// \t})\n\t// },\n\n\t// __changeElementStatus: function(element, values) {\n\t// \tlet target_attribute = element.dataset[`selected_attribute`] || 'class';\n\t// \tlet elements = this.__getTargetElements(element);\n\t// \tconst self = this;\n\n\t// \tlet selectedGroup = element.dataset['selected_group'];\n\t// \tlet group = selectedGroup ? `[data-selected_group=\"${selectedGroup}\"]` : ':not([data-selected_group])';\n\n\t// \tlet previouSelected = document.querySelector('[data-selected]' + group + '[selected]');\n\n\t// \t// if (previouSelected.isSameNode(element)) {\n\t// \t// \treturn ;\n\t// \t// }\n\n\t// \tif (previouSelected) {\n\t// \t\tlet previousValues = previouSelected.dataset['selected'].split(',').map(x => x.trim());\n\t// \t\tthis.__removeSelectedStatus(previouSelected, previousValues)\n\t// \t}\n\n\t// \tvalues = values.map(x => x.trim());\n\t// \telements.forEach((el) => {\n\t// \t\tself.setValue(el, target_attribute, values);\n\t// \t})\n\t// },\n\n\t// __removeSelectedStatus: function(element, values) {\n\t// \tlet attrName = element.dataset[`selected_attribute`] || 'class';\n\n\t// \tlet elements = this.__getTargetElements(element);\n\n\t// \telements.forEach(el => {\n\t// \t\tif (attrName === 'class') {\n\t// \t\t\tlet attrValues = (el.getAttribute(attrName) || \"\").split(' ').map(x => x.trim());\n\t// \t\t\tlet currentValue = values.filter(x => attrValues.includes(x))[0] || '';\n\t// \t\t\tif (currentValue) {\n\t// \t\t\t\tel.classList.remove(currentValue);\n\t// \t\t\t}\n\t// \t\t}\n\t// \t\telse {\n\t// \t\t\tel.setAttribute(attrName, \"\");\n\t// \t\t}\n\t// \t\tel.removeAttribute('selected');\n\t// \t})\n\n\t// },\n\n\t// setValue: function(element, attrName, values) {\n\t// \tlet currentAttrValue = element.getAttribute(attrName) || \"\";\n\t// \tlet attrValues = currentAttrValue;\n\t// \tif (attrName === 'class') {\n\t// \t\tattrValues = currentAttrValue.split(' ').map(x => x.trim());\n\t// \t}\n\n\t// \tlet oldValue = values.filter(x => attrValues.includes(x))[0] || '';\n\t// \tlet newValue = this.__getNextValue(values, oldValue)\n\n\t// \telement.setAttribute('selected', \"\")\n\n\t// \tif (oldValue === newValue) {\n\t// \t\treturn;\n\t// \t}\n\n\t// \tif (attrName === 'class') {\n\t// \t\tif (oldValue != '') {\n\t// \t\t\telement.classList.remove(oldValue);\n\t// \t\t}\n\t// \t\tif (newValue != '') {\n\t// \t\t\telement.classList.add(newValue);\n\t// \t\t}\n\t// \t}\n\t// \telse {\n\t// \t\telement.setAttribute(attrName, newValue);\n\t// \t}\n\t// },\n\n\t// __getTargetElements: function(element) {\n\t// \tlet targetSelector = element.dataset[`selected_target`];\n\t// \tlet elements = [element];\n\t// \tif (targetSelector) {\n\t// \t\telements = Array.from(document.querySelectorAll(targetSelector));\n\t// \t\telements.push(element)\n\t// \t}\n\t// \treturn elements;\n\t// },\n\n\t// __getNextValue: function(values, val) {\n\t// \tlet size = values.length;\n\t// \tlet nn = values.indexOf(val);\n\t// \tif (nn == -1) {\n\t// \t\treturn values[0];\n\t// \t}\n\t// \telse {\n\t// \t\treturn values[(nn + 1) % size];\n\t// \t}\n\t// },\n\n\tconfig: function({\n\t\tsrcDocument,\n\t\tdestDocument,\n\t\twrap,\n\t\tcallback = () => '',\n\t\tselector,\n\t\ttarget,\n\t\tsrcAttribute,\n\t\tdestAttribute,\n\t\ttype = \"post\",\n\t\teventType = \"click\",\n\t}) {\n\n\t\tsrcDocument.addEventListener(eventType, (e) => {\n\t\t\tif (e.target.matches(selector) || (srcAttribute && e.target.hasAttribute(srcAttribute))) {\n\t\t\t\tlet targets = destDocument.querySelectorAll(target);\n\t\t\t\ttargets.forEach((target) => {\n\t\t\t\t\tlet value = e.target.getAttribute(srcAttribute);\n\t\t\t\t\tif (wrap) value = wrap.replace(\"$1\", value);\n\t\t\t\t\tif (destAttribute)\n\t\t\t\t\t\ttarget.setAttribute(destAttribute, value);\n\t\t\t\t\tcallback(e.target, target)\n\t\t\t\t});\n\t\t\t}\n\t\t\tif (type === \"cut\") e.target.removeAttribute(srcAttribute);\n\t\t});\n\t},\n\n\n\tselected: function selected() {\n\t\tfunction activate(ds, el) {\n\t\t\tif (ds[\"selected_attribute\"])\n\t\t\t\tel.setAttribute(ds[\"selected_attribute\"], ds[\"selected\"]);\n\t\t\telse {\n\t\t\t\tel.classList.add(ds[\"selected\"]);\n\t\t\t\tel.setAttribute('selected', '')\n\t\t\t}\n\t\t}\n\n\t\tfunction deactiave(ds, el) {\n\t\t\tif (ds[\"selected_attribute\"])\n\t\t\t\tel.removeAttribute(ds[\"selected_attribute\"], ds[\"selected\"]);\n\t\t\telse {\n\t\t\t\tel.classList.remove(ds[\"selected\"]);\n\t\t\t\tel.removeAttribute('selected', '');\n\t\t\t}\n\t\t}\n\n\t\tfunction getSelected(el) {\n\t\t\twhile (!el.dataset['selected'])\n\t\t\t\tif (el.parentElement)\n\t\t\t\t\tel = el.parentElement;\n\t\t\t\telse\n\t\t\t\t\treturn false;\n\t\t\treturn el;\n\n\t\t}\n\t\tdocument.addEventListener(\"click\", (e) => {\n\t\t\tlet el = getSelected(e.target);\n\t\t\tif (!el) return;\n\n\t\t\tlet ds = el.dataset;\n\t\t\tlet group = ds['selected_group'] ? `,[data-selected_group=\"${ds[\"selected_group\"] || 'null'}\"]` : ''\n\t\t\tdocument.querySelectorAll(` [data-selected]:not([data-selected_group])${group}`)\n\t\t\t\t.forEach((el) => {\n\t\t\t\t\tlet ds = el.dataset;\n\t\t\t\t\tdeactiave(el.dataset, el)\n\t\t\t\t\tif (ds[\"selected_target\"])\n\t\t\t\t\t\tdocument.querySelectorAll(ds[\"selected_target\"]).forEach((el) => deactiave(ds, el));\n\t\t\t\t});\n\t\t\tactivate(ds, el);\n\t\t\tif (ds[\"selected_target\"])\n\t\t\t\tdocument.querySelectorAll(ds[\"selected_target\"]).forEach((el) => activate(ds, el));\n\t\t});\n\t}\n\n}\n\n\n\nCoCreateSelected.selected()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoCreateSelected);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hdHRyaWJ1dGVzLy4uLy4uL0NvQ3JlYXRlSlMvbm9kZV9tb2R1bGVzL0Bjb2NyZWF0ZS9zZWxlY3RlZC9zcmMvaW5kZXguanM/MmVjMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7OztBQUdBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRCxjQUFjOztBQUV4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRUFBZ0UsK0JBQStCO0FBQy9GLDJFQUEyRSxNQUFNO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7O0FBSUE7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUMiLCJmaWxlIjoiLi4vLi4vQ29DcmVhdGVKUy9ub2RlX21vZHVsZXMvQGNvY3JlYXRlL3NlbGVjdGVkL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvQ3JlYXRlU2VsZWN0ZWQgPSB7XG5cblxuXHQvLyBpbml0OiBmdW5jdGlvbigpIHtcblx0Ly8gXHR0aGlzLmluaXRFbGVtZW50KGRvY3VtZW50KTtcblx0Ly8gfSxcblxuXHQvLyBpbml0RWxlbWVudDogZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdC8vIFx0bGV0IG1haW5Db250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQ7XG5cblx0Ly8gXHRpZiAoIW1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCkge1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblxuXHQvLyBcdGxldCBlbGVtZW50cyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtc2VsZWN0ZWRdYCk7XG5cdC8vIFx0aWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCAmJiBtYWluQ29udGFpbmVyICE9IGRvY3VtZW50ICYmIG1haW5Db250YWluZXIuaGFzQXR0cmlidXRlKGBbZGF0YS1zZWxlY3RlZF1gKSkge1xuXHQvLyBcdFx0ZWxlbWVudHMgPSBbbWFpbkNvbnRhaW5lcl07XG5cdC8vIFx0fVxuXHQvLyBcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHQvLyBcdGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHNlbGYuX19pbml0RWxlbWVudEV2ZW50KGVsZW1lbnQpKTtcblx0Ly8gfSxcblxuXHQvLyBfX2luaXRFbGVtZW50RXZlbnQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0Ly8gXHRjb25zdCBzZWxlY3RlZFZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnKSB8fCBcIlwiO1xuXHQvLyBcdGxldCB2YWx1ZXMgPSBzZWxlY3RlZFZhbHVlLnNwbGl0KCcsJyk7XG5cdC8vIFx0aWYgKCF2YWx1ZXMgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblx0Ly8gXHR2YWx1ZXMgPSB2YWx1ZXMubWFwKHggPT4geC50cmltKCkpXG5cblx0Ly8gXHRjb25zdCBzZWxmID0gdGhpcztcblxuXHQvLyBcdC8vIGlmIChDb0NyZWF0ZS5vYnNlcnZlci5nZXRJbml0aWFsaXplZChlbGVtZW50KSkge1xuXHQvLyBcdC8vIFx0cmV0dXJuO1xuXHQvLyBcdC8vIH1cblx0Ly8gXHQvLyBDb0NyZWF0ZS5vYnNlcnZlci5zZXRJbml0aWFsaXplZChlbGVtZW50KVxuXHQvLyBcdGVsZW1lbnRbJ2NvX2luaXRpYWxpemVkXyddID0gdHJ1ZTtcblxuXHQvLyBcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0Ly8gXHRcdHNlbGYuX19jaGFuZ2VFbGVtZW50U3RhdHVzKGVsZW1lbnQsIHZhbHVlcylcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0Ly8gXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNlbGVjdGVkX2dyb3VwXCIpICYmICFlbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblxuXHQvLyBcdFx0XHRzZWxmLl9fcmVtb3ZlU2VsZWN0ZWRTdGF0dXMoZWxlbWVudCwgdmFsdWVzKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9KVxuXHQvLyB9LFxuXG5cdC8vIF9fY2hhbmdlRWxlbWVudFN0YXR1czogZnVuY3Rpb24oZWxlbWVudCwgdmFsdWVzKSB7XG5cdC8vIFx0bGV0IHRhcmdldF9hdHRyaWJ1dGUgPSBlbGVtZW50LmRhdGFzZXRbYHNlbGVjdGVkX2F0dHJpYnV0ZWBdIHx8ICdjbGFzcyc7XG5cdC8vIFx0bGV0IGVsZW1lbnRzID0gdGhpcy5fX2dldFRhcmdldEVsZW1lbnRzKGVsZW1lbnQpO1xuXHQvLyBcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdC8vIFx0bGV0IHNlbGVjdGVkR3JvdXAgPSBlbGVtZW50LmRhdGFzZXRbJ3NlbGVjdGVkX2dyb3VwJ107XG5cdC8vIFx0bGV0IGdyb3VwID0gc2VsZWN0ZWRHcm91cCA/IGBbZGF0YS1zZWxlY3RlZF9ncm91cD1cIiR7c2VsZWN0ZWRHcm91cH1cIl1gIDogJzpub3QoW2RhdGEtc2VsZWN0ZWRfZ3JvdXBdKSc7XG5cblx0Ly8gXHRsZXQgcHJldmlvdVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsZWN0ZWRdJyArIGdyb3VwICsgJ1tzZWxlY3RlZF0nKTtcblxuXHQvLyBcdC8vIGlmIChwcmV2aW91U2VsZWN0ZWQuaXNTYW1lTm9kZShlbGVtZW50KSkge1xuXHQvLyBcdC8vIFx0cmV0dXJuIDtcblx0Ly8gXHQvLyB9XG5cblx0Ly8gXHRpZiAocHJldmlvdVNlbGVjdGVkKSB7XG5cdC8vIFx0XHRsZXQgcHJldmlvdXNWYWx1ZXMgPSBwcmV2aW91U2VsZWN0ZWQuZGF0YXNldFsnc2VsZWN0ZWQnXS5zcGxpdCgnLCcpLm1hcCh4ID0+IHgudHJpbSgpKTtcblx0Ly8gXHRcdHRoaXMuX19yZW1vdmVTZWxlY3RlZFN0YXR1cyhwcmV2aW91U2VsZWN0ZWQsIHByZXZpb3VzVmFsdWVzKVxuXHQvLyBcdH1cblxuXHQvLyBcdHZhbHVlcyA9IHZhbHVlcy5tYXAoeCA9PiB4LnRyaW0oKSk7XG5cdC8vIFx0ZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0Ly8gXHRcdHNlbGYuc2V0VmFsdWUoZWwsIHRhcmdldF9hdHRyaWJ1dGUsIHZhbHVlcyk7XG5cdC8vIFx0fSlcblx0Ly8gfSxcblxuXHQvLyBfX3JlbW92ZVNlbGVjdGVkU3RhdHVzOiBmdW5jdGlvbihlbGVtZW50LCB2YWx1ZXMpIHtcblx0Ly8gXHRsZXQgYXR0ck5hbWUgPSBlbGVtZW50LmRhdGFzZXRbYHNlbGVjdGVkX2F0dHJpYnV0ZWBdIHx8ICdjbGFzcyc7XG5cblx0Ly8gXHRsZXQgZWxlbWVudHMgPSB0aGlzLl9fZ2V0VGFyZ2V0RWxlbWVudHMoZWxlbWVudCk7XG5cblx0Ly8gXHRlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcblx0Ly8gXHRcdGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzJykge1xuXHQvLyBcdFx0XHRsZXQgYXR0clZhbHVlcyA9IChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpIHx8IFwiXCIpLnNwbGl0KCcgJykubWFwKHggPT4geC50cmltKCkpO1xuXHQvLyBcdFx0XHRsZXQgY3VycmVudFZhbHVlID0gdmFsdWVzLmZpbHRlcih4ID0+IGF0dHJWYWx1ZXMuaW5jbHVkZXMoeCkpWzBdIHx8ICcnO1xuXHQvLyBcdFx0XHRpZiAoY3VycmVudFZhbHVlKSB7XG5cdC8vIFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShjdXJyZW50VmFsdWUpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRlbHNlIHtcblx0Ly8gXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBcIlwiKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdGVsLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcblx0Ly8gXHR9KVxuXG5cdC8vIH0sXG5cblx0Ly8gc2V0VmFsdWU6IGZ1bmN0aW9uKGVsZW1lbnQsIGF0dHJOYW1lLCB2YWx1ZXMpIHtcblx0Ly8gXHRsZXQgY3VycmVudEF0dHJWYWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSB8fCBcIlwiO1xuXHQvLyBcdGxldCBhdHRyVmFsdWVzID0gY3VycmVudEF0dHJWYWx1ZTtcblx0Ly8gXHRpZiAoYXR0ck5hbWUgPT09ICdjbGFzcycpIHtcblx0Ly8gXHRcdGF0dHJWYWx1ZXMgPSBjdXJyZW50QXR0clZhbHVlLnNwbGl0KCcgJykubWFwKHggPT4geC50cmltKCkpO1xuXHQvLyBcdH1cblxuXHQvLyBcdGxldCBvbGRWYWx1ZSA9IHZhbHVlcy5maWx0ZXIoeCA9PiBhdHRyVmFsdWVzLmluY2x1ZGVzKHgpKVswXSB8fCAnJztcblx0Ly8gXHRsZXQgbmV3VmFsdWUgPSB0aGlzLl9fZ2V0TmV4dFZhbHVlKHZhbHVlcywgb2xkVmFsdWUpXG5cblx0Ly8gXHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCBcIlwiKVxuXG5cdC8vIFx0aWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblxuXHQvLyBcdGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzJykge1xuXHQvLyBcdFx0aWYgKG9sZFZhbHVlICE9ICcnKSB7XG5cdC8vIFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShvbGRWYWx1ZSk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRpZiAobmV3VmFsdWUgIT0gJycpIHtcblx0Ly8gXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKG5ld1ZhbHVlKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHR9XG5cdC8vIFx0ZWxzZSB7XG5cdC8vIFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgbmV3VmFsdWUpO1xuXHQvLyBcdH1cblx0Ly8gfSxcblxuXHQvLyBfX2dldFRhcmdldEVsZW1lbnRzOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdC8vIFx0bGV0IHRhcmdldFNlbGVjdG9yID0gZWxlbWVudC5kYXRhc2V0W2BzZWxlY3RlZF90YXJnZXRgXTtcblx0Ly8gXHRsZXQgZWxlbWVudHMgPSBbZWxlbWVudF07XG5cdC8vIFx0aWYgKHRhcmdldFNlbGVjdG9yKSB7XG5cdC8vIFx0XHRlbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRTZWxlY3RvcikpO1xuXHQvLyBcdFx0ZWxlbWVudHMucHVzaChlbGVtZW50KVxuXHQvLyBcdH1cblx0Ly8gXHRyZXR1cm4gZWxlbWVudHM7XG5cdC8vIH0sXG5cblx0Ly8gX19nZXROZXh0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlcywgdmFsKSB7XG5cdC8vIFx0bGV0IHNpemUgPSB2YWx1ZXMubGVuZ3RoO1xuXHQvLyBcdGxldCBubiA9IHZhbHVlcy5pbmRleE9mKHZhbCk7XG5cdC8vIFx0aWYgKG5uID09IC0xKSB7XG5cdC8vIFx0XHRyZXR1cm4gdmFsdWVzWzBdO1xuXHQvLyBcdH1cblx0Ly8gXHRlbHNlIHtcblx0Ly8gXHRcdHJldHVybiB2YWx1ZXNbKG5uICsgMSkgJSBzaXplXTtcblx0Ly8gXHR9XG5cdC8vIH0sXG5cblx0Y29uZmlnOiBmdW5jdGlvbih7XG5cdFx0c3JjRG9jdW1lbnQsXG5cdFx0ZGVzdERvY3VtZW50LFxuXHRcdHdyYXAsXG5cdFx0Y2FsbGJhY2sgPSAoKSA9PiAnJyxcblx0XHRzZWxlY3Rvcixcblx0XHR0YXJnZXQsXG5cdFx0c3JjQXR0cmlidXRlLFxuXHRcdGRlc3RBdHRyaWJ1dGUsXG5cdFx0dHlwZSA9IFwicG9zdFwiLFxuXHRcdGV2ZW50VHlwZSA9IFwiY2xpY2tcIixcblx0fSkge1xuXG5cdFx0c3JjRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS50YXJnZXQubWF0Y2hlcyhzZWxlY3RvcikgfHwgKHNyY0F0dHJpYnV0ZSAmJiBlLnRhcmdldC5oYXNBdHRyaWJ1dGUoc3JjQXR0cmlidXRlKSkpIHtcblx0XHRcdFx0bGV0IHRhcmdldHMgPSBkZXN0RG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpO1xuXHRcdFx0XHR0YXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuXHRcdFx0XHRcdGxldCB2YWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShzcmNBdHRyaWJ1dGUpO1xuXHRcdFx0XHRcdGlmICh3cmFwKSB2YWx1ZSA9IHdyYXAucmVwbGFjZShcIiQxXCIsIHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoZGVzdEF0dHJpYnV0ZSlcblx0XHRcdFx0XHRcdHRhcmdldC5zZXRBdHRyaWJ1dGUoZGVzdEF0dHJpYnV0ZSwgdmFsdWUpO1xuXHRcdFx0XHRcdGNhbGxiYWNrKGUudGFyZ2V0LCB0YXJnZXQpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGUgPT09IFwiY3V0XCIpIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShzcmNBdHRyaWJ1dGUpO1xuXHRcdH0pO1xuXHR9LFxuXG5cblx0c2VsZWN0ZWQ6IGZ1bmN0aW9uIHNlbGVjdGVkKCkge1xuXHRcdGZ1bmN0aW9uIGFjdGl2YXRlKGRzLCBlbCkge1xuXHRcdFx0aWYgKGRzW1wic2VsZWN0ZWRfYXR0cmlidXRlXCJdKVxuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoZHNbXCJzZWxlY3RlZF9hdHRyaWJ1dGVcIl0sIGRzW1wic2VsZWN0ZWRcIl0pO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoZHNbXCJzZWxlY3RlZFwiXSk7XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJylcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBkZWFjdGlhdmUoZHMsIGVsKSB7XG5cdFx0XHRpZiAoZHNbXCJzZWxlY3RlZF9hdHRyaWJ1dGVcIl0pXG5cdFx0XHRcdGVsLnJlbW92ZUF0dHJpYnV0ZShkc1tcInNlbGVjdGVkX2F0dHJpYnV0ZVwiXSwgZHNbXCJzZWxlY3RlZFwiXSk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShkc1tcInNlbGVjdGVkXCJdKTtcblx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBnZXRTZWxlY3RlZChlbCkge1xuXHRcdFx0d2hpbGUgKCFlbC5kYXRhc2V0WydzZWxlY3RlZCddKVxuXHRcdFx0XHRpZiAoZWwucGFyZW50RWxlbWVudClcblx0XHRcdFx0XHRlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRyZXR1cm4gZWw7XG5cblx0XHR9XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRsZXQgZWwgPSBnZXRTZWxlY3RlZChlLnRhcmdldCk7XG5cdFx0XHRpZiAoIWVsKSByZXR1cm47XG5cblx0XHRcdGxldCBkcyA9IGVsLmRhdGFzZXQ7XG5cdFx0XHRsZXQgZ3JvdXAgPSBkc1snc2VsZWN0ZWRfZ3JvdXAnXSA/IGAsW2RhdGEtc2VsZWN0ZWRfZ3JvdXA9XCIke2RzW1wic2VsZWN0ZWRfZ3JvdXBcIl0gfHwgJ251bGwnfVwiXWAgOiAnJ1xuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIFtkYXRhLXNlbGVjdGVkXTpub3QoW2RhdGEtc2VsZWN0ZWRfZ3JvdXBdKSR7Z3JvdXB9YClcblx0XHRcdFx0LmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRzID0gZWwuZGF0YXNldDtcblx0XHRcdFx0XHRkZWFjdGlhdmUoZWwuZGF0YXNldCwgZWwpXG5cdFx0XHRcdFx0aWYgKGRzW1wic2VsZWN0ZWRfdGFyZ2V0XCJdKVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChkc1tcInNlbGVjdGVkX3RhcmdldFwiXSkuZm9yRWFjaCgoZWwpID0+IGRlYWN0aWF2ZShkcywgZWwpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRhY3RpdmF0ZShkcywgZWwpO1xuXHRcdFx0aWYgKGRzW1wic2VsZWN0ZWRfdGFyZ2V0XCJdKVxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGRzW1wic2VsZWN0ZWRfdGFyZ2V0XCJdKS5mb3JFYWNoKChlbCkgPT4gYWN0aXZhdGUoZHMsIGVsKSk7XG5cdFx0fSk7XG5cdH1cblxufVxuXG5cblxuQ29DcmVhdGVTZWxlY3RlZC5zZWxlY3RlZCgpXG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlU2VsZWN0ZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../CoCreateJS/node_modules/@cocreate/selected/src/index.js\n")}}]);