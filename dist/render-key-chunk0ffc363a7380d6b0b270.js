/*! For license information please see render-key-chunk0ffc363a7380d6b0b270.js.LICENSE.txt */
(this.webpackChunkCoCreate_attributes=this.webpackChunkCoCreate_attributes||[]).push([["render-key-chunk"],{"../../CoCreateJS/node_modules/@cocreate/render-key/src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cocreate_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cocreate/api */ \"../../CoCreateJS/node_modules/@cocreate/api/src/index.js\");\n\n\nconst CoCreateRenderKey = {\n\tid: 'key',\n\tactions: [\n\t\t'renderKey'\n\t],\n\t\n\taction_renderKey: function(element) {\n\t\tconst container = element.closest(\"form\") || document;\n\t\tlet data = _cocreate_api__WEBPACK_IMPORTED_MODULE_0__.default.getFormData(this.id, 'renderKey',  container);\n\t\tconsole.log(data)\n\t\t_cocreate_api__WEBPACK_IMPORTED_MODULE_0__.default.render('renderKey', {data: data});\n\t}\n}\n\n\n_cocreate_api__WEBPACK_IMPORTED_MODULE_0__.default.init({\n\tname: CoCreateRenderKey.id,\n\tmodule: CoCreateRenderKey\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hdHRyaWJ1dGVzLy4uLy4uL0NvQ3JlYXRlSlMvbm9kZV9tb2R1bGVzL0Bjb2NyZWF0ZS9yZW5kZXIta2V5L3NyYy9pbmRleC5qcz8zNGNiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDhEQUF1QjtBQUNwQztBQUNBLEVBQUUseURBQWtCLGVBQWUsV0FBVztBQUM5QztBQUNBOzs7QUFHQSx1REFBZ0I7QUFDaEI7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiLi4vLi4vQ29DcmVhdGVKUy9ub2RlX21vZHVsZXMvQGNvY3JlYXRlL3JlbmRlci1rZXkvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvQ3JlYXRlQXBpIGZyb20gJ0Bjb2NyZWF0ZS9hcGknXG5cbmNvbnN0IENvQ3JlYXRlUmVuZGVyS2V5ID0ge1xuXHRpZDogJ2tleScsXG5cdGFjdGlvbnM6IFtcblx0XHQncmVuZGVyS2V5J1xuXHRdLFxuXHRcblx0YWN0aW9uX3JlbmRlcktleTogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQuY2xvc2VzdChcImZvcm1cIikgfHwgZG9jdW1lbnQ7XG5cdFx0bGV0IGRhdGEgPSBDb0NyZWF0ZUFwaS5nZXRGb3JtRGF0YSh0aGlzLmlkLCAncmVuZGVyS2V5JywgIGNvbnRhaW5lcik7XG5cdFx0Y29uc29sZS5sb2coZGF0YSlcblx0XHRDb0NyZWF0ZUFwaS5yZW5kZXIoJ3JlbmRlcktleScsIHtkYXRhOiBkYXRhfSk7XG5cdH1cbn1cblxuXG5Db0NyZWF0ZUFwaS5pbml0KHtcblx0bmFtZTogQ29DcmVhdGVSZW5kZXJLZXkuaWQsXG5cdG1vZHVsZTogQ29DcmVhdGVSZW5kZXJLZXlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../CoCreateJS/node_modules/@cocreate/render-key/src/index.js\n")}}]);