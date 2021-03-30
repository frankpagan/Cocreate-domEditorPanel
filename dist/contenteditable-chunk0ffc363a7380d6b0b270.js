/*! For license information please see contenteditable-chunk0ffc363a7380d6b0b270.js.LICENSE.txt */
(this.webpackChunkCoCreate_attributes=this.webpackChunkCoCreate_attributes||[]).push([["contenteditable-chunk"],{"../../CoCreateJS/node_modules/@cocreate/contenteditable/src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cocreate_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cocreate/observer */ \"../../CoCreateJS/node_modules/@cocreate/observer/src/index.js\");\n/* harmony import */ var _cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cocreate/crdt */ \"../../CoCreateJS/node_modules/@cocreate/crdt/src/index.js\");\n/* harmony import */ var _cocreate_cursors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cocreate/cursors */ \"../../CoCreateJS/node_modules/@cocreate/cursors/src/index.js\");\n/* harmony import */ var _cocreate_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cocreate/form */ \"../../CoCreateJS/node_modules/@cocreate/form/src/index.js\");\n\n\n\n\n\nclass CoCreateContenteditable {\n\tconstructor(){\n\t\tthis._elements = [];\n\t\tthis._init();\n\t\tthis.from = 0;\n\t\tthis.to = 0;\n\t}\n\t\n\t_init(container){\n\t\tlet mainContainer = container || document;\n\t\tif (!mainContainer.querySelector) {\n\t\t\treturn;\n\t\t}\n\t\tvar elements = mainContainer.querySelectorAll(\"[contentEditable]:not([contentEditable='false'])\");\n\t\t\n\t\tif (elements.length == 0 && mainContainer != document && mainContainer.hasAttribute('contentEditable')) {\n\t\t\telements = [mainContainer];\n\t\t}\n\t\t\n\t\tfor(var el of elements){\n\t\t\tif (_cocreate_observer__WEBPACK_IMPORTED_MODULE_0__.default.getInitialized(el)) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\t_cocreate_observer__WEBPACK_IMPORTED_MODULE_0__.default.setInitialized(el)\n\t\t\tthis._initElement(el);\n\t\t\tthis._elements.push(el);\n\t\t}\n\t}\n\t\n\t_initElement(el){\n\t\t\n\t\tif (!el.matches(\"[contentEditable]:not([contentEditable='false'])\")) {\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tthis._initElementEvents(el);\n\t\tif (_cocreate_form__WEBPACK_IMPORTED_MODULE_3__.default && _cocreate_form__WEBPACK_IMPORTED_MODULE_3__.default.checkID(el)) {\n\t\t\tel.innerHTML = \"\";\n\t\t\tthis._createYDoc(el);\n\t\t} else {\n\t\t\n\t\t\tlet self  = this;\n\t\t\tel.addEventListener('set-document_id', function(e) {\n\t\t\t\tself._createYDoc(this);\n\t\t\t});\n\t\t}\n\t}\n\t\n\t_initElementEvents(el){\n\t\tvar _this = this;\n\t\tel.addEventListener('select', function(e) {\n\t\t\tconsole.log('selection', e)\n\t\t});\n\t\tel.addEventListener('input', function(e) {\n\t\t\t// console.log(e.inputType, e);\n\t\t\tlet selection_info = _this.getSelectionInfo(this);\n\t\t\tlet nowstart = selection_info.start;\n\t\t\tlet nowend = nowstart + 1;\n\t\t\tlet content_text = \"\";\n\t\t\tlet isUpdate = true;\n\n\t\t\tswitch (e.inputType) {\n\t\t\t\tcase 'deleteContentBackward':\n\t\t\t\t\tnowstart --;\n\t\t\t\t\tnowend --;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'deleteContentForward':\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'insertLineBreak':\n\t\t\t\t\tcontent_text = \"\\n\"; \n\t\t\t\t\tnowend ++;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'insertText':\n\t\t\t\t\tcontent_text = e.data || \"\"; \n\t\t\t\t\tbreak;\n\t\t\t\tcase 'deleteByCut':\n\t\t\t\t\tnowend = nowstart;\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\tisUpdate = false;\n\t\t\t\t\tbreak;\n\t\t\t}\n\t\t\t\n\t\t\tif (!isUpdate) return;\n\t\t\n\t\t/*let character_deleted = selection_info.start - selection_info.end;\n\t\t\t/*CoCreateCursors.recalculate_local_cursors(this,character_deleted)\n\t\t\t*/\n\t\t\t//console.log(\" recalculations \",el.textContent,\" [-] \",content_text)\n\t\t\tif (selection_info.is_selected) {\n\t\t\t\t\n\t\t\t\t_this.sendChangeData(this, \"\", selection_info.start, selection_info.end);\n\t\t\t\t\n\t\t\t\tif (content_text.length > 0) {\n\t\t\t\t\t_this.sendChangeData(this, content_text, nowstart, nowend);\n\t\t\t\t}\n\t\t\t\t_this.setSelectionInfo(this, false, this.selectionStart, this.selectionStart);\n\t\t\t} else {\n\t\t\t\t_this.sendChangeData(this, content_text, nowstart, nowend);\t\n\t\t\t}\n\t\t});\n\t\t\n\t\tel.addEventListener('paste', function(e) {\n\t\t\tlet content_text = event.clipboardData.getData('Text');\n\t\t\t// let caret = _this._getCaretPosition(this);\n\t\t\tlet selection_info = _this.getSelectionInfo(this);\n\t\t\t\n\t\t\tif (selection_info.start !== selection_info.end) {\n\t\t\t\t_this.sendChangeData(this, \"\", selection_info.start, selection_info.end, false);\n\t\t\t}\n\t\t\t\n\t\t\t_this.sendChangeData(this, content_text, selection_info.start, selection_info.end, false);\n\t\t\tevent.preventDefault();\n\t\t});\n\n\t\t////  Caret and Selection Status Changes\n\t\tel.addEventListener('keyup', function(e) {\n\t\t\tlet arrows = [37,38,39,40];\n\t\t\tif(arrows.indexOf(e.keyCode)!=-1){\n\t\t\t\t_this.sendPosition(this);\n\t\t\t}\n\t\t});\n\t\tel.addEventListener('keydown', function(e) {\n\t\t\tlet arrows = [37,38,39,40];\n\t\t\tif(arrows.indexOf(e.keyCode)!=-1){\n\t\t\t\t_this.sendPosition(this);\n\t\t\t}\n\t\t\tconst pos = _this._getCaretPosition(el);\n\t\t\t_this.setSelectionInfo(el, pos.from != pos.to, pos.from, pos.to)\n\t\t});\n\t\t\n\t\tel.addEventListener('click', function(e) {\n\t\t\t _this.sendPosition(this);\n\t\t});\n\t\tel.addEventListener('blur', function(e) {\n\t\t\t_this.sendPosition(el, true);\n\t\t});\n\n\t\tel.addEventListener('cocreate-y-update', function(e) {\n\t\t\tvar info = event.detail;\n\t\t\tvar pos = 0;\n\t\t\tvar flag = true;\n\t\n\t\t\tinfo.forEach(item => {\n\t\t\tif (item.retain) {\n\t\t\t\tflag = true;\n\t\t\t\tpos = item.retain;\n\t\t\t}\n\t\t\t\n\t\t\tif (item.insert || item.delete) {\n\t\t\t\tif (flag == false) pos = 0;\n\t\t\t\tflag = false;\n\t\t\t\t\n\t\t\t\tif (item.insert) {\n\t\t\t\t\t_this.insertData(this, item.insert, pos);\n\t\t\t\t} else if (item.delete) {\n\t\t\t\t\t_this.deleteData(this, pos, pos + item.delete);\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}\n\t\t\t});\n\t\t});\n\t}\n\t\n\tsendChangeData(element, content, start, end, isRemove = true) {\n\t\t\n\t\tif(!this._checkConetentEditable(element)) return;\n\t\t\n\t\tif (!this._checkDocumentID(element)) {\n\t\t\t_cocreate_form__WEBPACK_IMPORTED_MODULE_3__.default.request({element: element, nameAttr: \"name\"})\n\t\t\telement.setAttribute('data-document_id', 'pending');\n\t\t\treturn ;\n\t\t}\n\t\t\n\t\tif (element.getAttribute('data-document_id') == 'pending') {\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tconst collection = element.getAttribute('data-collection'),\n\t\t\tdocument_id = element.getAttribute('data-document_id'),\n\t\t\tname = element.getAttribute('name');\n\t\t\n\t\tif (element.getAttribute('data-save_value') == 'false') {\n\t\t\treturn;\n\t\t}\n\t\n\t\tif (content.length > 0) {\n\t\t\tif (isRemove) {\n\t\t\t\tthis.deleteData(element, start, start + content.length);\n\t\t\t}\n\t\t\t_cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.insertText({\n\t\t\t\tcollection, document_id, name,\n\t\t\t\tvalue: content,\n\t\t\t\tposition: start,\n\t\t\t\tattributes: null\n\t\t\t})\n\t\t} else {\n\t\t\t\n\t\t\tif (isRemove) {\n\t\t\t\tthis.insertData(element, \" \".repeat(end - start), start)\n\t\t\t}\n\t\t\t_cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.deleteText({\n\t\t\t\tcollection, document_id, name,\n\t\t\t\tposition: start,\n\t\t\t\tlength: end - start,\n\t\t\t}) \n\t\t}\n\t\n\t\tlet character_count = content.length > 0 ? content.length : -1;\n\t\t_cocreate_cursors__WEBPACK_IMPORTED_MODULE_2__.default.recalculate_local_cursors(element,character_count);\n\t\n\t}\n\t\n\tsetSelectionInfo(e, isSelect, start, end) {\n\t\t\te.setAttribute(\"is_selected\", isSelect);\n\t\t\te.setAttribute(\"selection_start\", start);\n\t\t\te.setAttribute(\"selection_end\", end);\n\t\t\tthis.sendPosition(e);\n\t}\n\t\n\tgetSelectionInfo(e) {\n\t\treturn {\n\t\t\tis_selected: (e.getAttribute(\"is_selected\") === 'true') ? true : false,\n\t\t\tstart: parseInt(e.getAttribute(\"selection_start\")),\n\t\t\tend:parseInt(e.getAttribute(\"selection_end\"))\n\t\t}\n\t}\n\n\tsendPosition(el, isClear){\n\t\tif(!this._checkConetentEditable(el)) return;\n\t\t\n\t\tvar curRange = this._getCaretPosition(el);\n\t\tvar _json = this._getElementInfo(el);\n\t\t\n\t\tif(curRange && !isClear){\n\t\t\t_json['startPosition'] = curRange.from;\n\t\t\t_json['endPositon'] = curRange.to;\n\t\t\t//commented by jean mendoza\n\t\t\t//CoCreate.crdt.sendPosition(_json);\n\t\t\tconst id = this._generateElementID(el)\n\t\t\t_cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.setPositionYJS(id, _json['startPosition'], _json['endPositon']);\n\t\t}else{\n\t\t\tvar _id = this._generateElementID(el);\n\t\t\t_cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.setCursorNull(_id);\n\t\t}\n\t}\n\t//////\n\t\n\t_getElementInfo(el){\n\t\treturn {\n\t\t\tcollection: el.getAttribute('data-collection') || '_',\n\t\t\tdocument_id: el.getAttribute('data-document_id') || '_',\n\t\t\tname: el.getAttribute('name') || '_'\n\t\t};\n\t}\n\t\n\t_createYDoc(el){\n\t\tconst status = _cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.init({\n\t\t\tcollection: el.getAttribute('data-collection'),\n\t\t\tdocument_id: el.getAttribute('data-document_id'),\n\t\t\tname: el.getAttribute('name'),\n\t\t\telement: el,\n\t\t})\n\n\t\t// this.setInitValue(el);\n\t\t// this.elements.push(el)\n\t}\n\t\n\t_generateElementID(el) {\n\t\tvar _eInfo = this._getElementInfo(el);\n\t\treturn _cocreate_crdt__WEBPACK_IMPORTED_MODULE_1__.default.generateID(config.organization_Id, _eInfo.collection, _eInfo.document_id, _eInfo.name);\n\t}\n\t\n\t_checkDocumentID(el){\n\t\tlet document_id = el.getAttribute('data-document_id');\n\t\tif (!document_id || document_id === \"\") return false;\n\n\t\treturn true;\n\t}\n\t\n\t_checkConetentEditable(el){\n\t\tif(!el.isContentEditable) return false;\n\t\t\n\t\tfor(var _el of this._elements){\n\t\t\tif(el.isSameNode(_el)) return true;\n\t\t}\n\t\t\n\t\tthis._initElement(el);\n\t\tthis._elements.push(el);\n\t\treturn true;\n\t}\n\n\t_getCaretPosition(el){\n\t\tif(document.activeElement !== el) return null;\n\t\t\n\t\tvar selection = document.getSelection();\n\t\tif(!selection.rangeCount) return null;\n\t\t\n\t\tvar _range = selection.getRangeAt(0);\n\t\tvar selected = _range.toString().length;\n\t\tvar range = _range.cloneRange();\n\t\trange.selectNodeContents(el);\n\t\trange.setEnd(_range.endContainer, _range.endOffset);\n\t\t\n\t\tvar to = range.toString().length;\n\t\tvar from = selected ? to - selected: to;\n\n\t\treturn {from: from, to: to};\n\t}\n\t\n\t_setCaretPosition(el, from, to){\n\t\tif(document.activeElement !== el) return;\n\t\t\n\t\tvar selection = document.getSelection();\n\t\tvar range = this._cloneRangeByPosition(el, from, to);\n\t\tselection.removeAllRanges();\n\t\tselection.addRange(range);\n\t}\n\t\n\t_cloneRangeByPosition(el, from, to, range){\n\t\tif(!range){\n\t\t\trange = document.createRange();\n\t\t\trange.selectNode(el);\n\t\t\trange.setStart(el, 0);\n\t\t\tthis.from = from;\n\t\t\tthis.to = to;\n\t\t}\n\t\t\n\t\tif(el && (this.from > 0 || this.to > 0)){\n\t\t\tif(el.nodeType === Node.TEXT_NODE){\n\t\t\t\t\n\t\t\t\tif(el.textContent.length < this.from) this.from -= el.textContent.length;\n\t\t\t\telse if(this.from > 0){\n\t\t\t\t\trange.setStart(el, this.from);\n\t\t\t\t\tthis.from = 0;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tif(el.textContent.length < this.to) this.to -= el.textContent.length;\n\t\t\t\telse if(this.to > 0){\n\t\t\t\t\trange.setEnd(el, this.to);\n\t\t\t\t\tthis.to = 0;\n\t\t\t\t}\n\t\t\t}else{\n\t\t\t\tfor(var lp = 0; lp < el.childNodes.length; lp++){\n\t\t\t\t\trange = this._cloneRangeByPosition(el.childNodes[lp], this.from, this.to, range);\n\t\t\t\t\tif(this.from === 0 && this.to === 0) break;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t\n\t\treturn range;\n\t}\n\t\n\t_getPositionFromRange(el, range){\n\t\tvar _range = document.createRange();\n\t\t_range.selectNodeContents(el);\n\t\t\n\t\tvar from = 0, to = 0;\n\t\t\n\t\t_range.setEnd(range.endContainer, range.endOffset);\n\t\tto = _range.toString().length;\n\t\t\n\t\t_range.setEnd(range.startContainer, range.startOffset);\n\t\tfrom = _range.toString().length;\n\t\t\n\t\treturn {from: from, to: to};\n\t}\n\t\n\t\n\t\n\tinsertData(el, content, position){\n\t\tif(!content || content === '') return;\n\t\t\n\t\tvar selection = window.getSelection();\n\t\tvar curCaret = this._getCaretPosition(el);\n\n\t\tvar range = this._cloneRangeByPosition(el, position, position);\n\t\tvar tmp = document.createElement(\"div\");\n\t\tvar frag = document.createDocumentFragment(), node;\n\t\t\n\t\ttmp.innerHTML = content;\n\t\t\n\t\twhile ( (node = tmp.firstChild) ) {\n\t\t\tfrag.appendChild(node);\n\t\t}\n\t\trange.insertNode(frag);\n\n\t\tif (!curCaret) {\n\t\t\tselection.addRange(range);\n\t\t\tselection.removeRange(range);\n\t\t\treturn;\n\t\t}\n\t\t\n\t\tvar pos = this.selectionProcessing(content, curCaret.from, curCaret.to, position, position);\n\t\t\n\t\tthis._setCaretPosition(el, pos.start, pos.end);\n\t\t\n\t\tthis.sendPosition(el);\n\t}\n\t\n\tdeleteData(el, start, end){\n\t\tvar content_length = end - start;\n\t\tif(!content_length) return;\n\t\tvar curCaret = this._getCaretPosition(el);\n\t\tvar selection = window.getSelection();\n\t\tvar range = this._cloneRangeByPosition(el, start, end);\n\t\tif(range) range.deleteContents();\n\t\t\n\t\t\n\t\tif (!curCaret) {\n\t\t\tselection.removeRange(range);\n\t\t\treturn;\n\t\t}\n\n\t\t// if (!curCaret) return;\n\t\tvar pos = this.selectionProcessing(\"\", curCaret.from, curCaret.to, start, end);\n\t\t\n\t\tthis._setCaretPosition(el, pos.start, pos.end);\n\t\tthis.sendPosition(el);\n\t}\n\t\n\tselectionProcessing(content, prev_start, prev_end, start, end) {\n\t\tif (prev_start >= start) {\n\t\t\tif (content == \"\") {\n\t\t\t\tprev_start -= end - start;\n\t\t\t\tprev_end -= end - start;\n\t\t\t\tprev_start = prev_start < start ? start : prev_start;\n\t\t\t} else {\n\t\t\t\tprev_start += content.length;\n\t\t\t\tprev_end += content.length;\n\t\t\t}\n\t\t} {\n\t\t\tif (content == \"\" && prev_end >= start) {\n\t\t\t\tprev_end = (prev_end >= end) ? prev_end - (end - start) : start\n\t\t\t} \n\t\t}\n\t\treturn {start: prev_start, end: prev_end};\n\t}\n\n}\n\nvar g_CoCreateContentEditable = new CoCreateContenteditable();\n\n// CoCreateInit.register('CoCreateText', g_CoCreateContentEditable, g_CoCreateContentEditable._init);\n\n_cocreate_observer__WEBPACK_IMPORTED_MODULE_0__.default.init({ \n\tname: 'CoCreateContentEditableInit', \n\tobserve: ['subtree', 'childList'],\n\tinclude: '[contenteditable][data-collection][data-document_id][name]', \n\tcallback: function(mutation) {\n\t\tg_CoCreateContentEditable._init(mutation.target)\n\t}\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoCreateContenteditable);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5hdHRyaWJ1dGVzLy4uLy4uL0NvQ3JlYXRlSlMvbm9kZV9tb2R1bGVzL0Bjb2NyZWF0ZS9jb250ZW50ZWRpdGFibGUvc3JjL2luZGV4LmpzP2I5NDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFDTTtBQUNFOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxzRUFBK0I7QUFDdEM7QUFDQTtBQUNBLEdBQUcsc0VBQStCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sbURBQVksSUFBSSwyREFBb0I7QUFDMUM7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osK0Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsR0FBRywyREFBb0IsRUFBRSxtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyw4REFBZTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUcsOERBQWU7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0EsRUFBRSxnRkFBaUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxrRUFBbUI7QUFDdEIsR0FBRztBQUNIO0FBQ0EsR0FBRyxpRUFBa0I7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHdEQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOERBQWU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDREQUFxQixFO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsdUJBQXVCIiwiZmlsZSI6Ii4uLy4uL0NvQ3JlYXRlSlMvbm9kZV9tb2R1bGVzL0Bjb2NyZWF0ZS9jb250ZW50ZWRpdGFibGUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvQ3JlYXRlT2JzZXJ2ZXIgZnJvbSAnQGNvY3JlYXRlL29ic2VydmVyJ1xuaW1wb3J0IGNyZHQgZnJvbSAnQGNvY3JlYXRlL2NyZHQnXG5pbXBvcnQgY3Vyc29ycyBmcm9tICdAY29jcmVhdGUvY3Vyc29ycydcbmltcG9ydCBDb0NyZWF0ZUZvcm0gZnJvbSAnQGNvY3JlYXRlL2Zvcm0nXG5cbmNsYXNzIENvQ3JlYXRlQ29udGVudGVkaXRhYmxlIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLl9lbGVtZW50cyA9IFtdO1xuXHRcdHRoaXMuX2luaXQoKTtcblx0XHR0aGlzLmZyb20gPSAwO1xuXHRcdHRoaXMudG8gPSAwO1xuXHR9XG5cdFxuXHRfaW5pdChjb250YWluZXIpe1xuXHRcdGxldCBtYWluQ29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuXHRcdGlmICghbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBlbGVtZW50cyA9IG1haW5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIltjb250ZW50RWRpdGFibGVdOm5vdChbY29udGVudEVkaXRhYmxlPSdmYWxzZSddKVwiKTtcblx0XHRcblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID09IDAgJiYgbWFpbkNvbnRhaW5lciAhPSBkb2N1bWVudCAmJiBtYWluQ29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnY29udGVudEVkaXRhYmxlJykpIHtcblx0XHRcdGVsZW1lbnRzID0gW21haW5Db250YWluZXJdO1xuXHRcdH1cblx0XHRcblx0XHRmb3IodmFyIGVsIG9mIGVsZW1lbnRzKXtcblx0XHRcdGlmIChDb0NyZWF0ZU9ic2VydmVyLmdldEluaXRpYWxpemVkKGVsKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdENvQ3JlYXRlT2JzZXJ2ZXIuc2V0SW5pdGlhbGl6ZWQoZWwpXG5cdFx0XHR0aGlzLl9pbml0RWxlbWVudChlbCk7XG5cdFx0XHR0aGlzLl9lbGVtZW50cy5wdXNoKGVsKTtcblx0XHR9XG5cdH1cblx0XG5cdF9pbml0RWxlbWVudChlbCl7XG5cdFx0XG5cdFx0aWYgKCFlbC5tYXRjaGVzKFwiW2NvbnRlbnRFZGl0YWJsZV06bm90KFtjb250ZW50RWRpdGFibGU9J2ZhbHNlJ10pXCIpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuX2luaXRFbGVtZW50RXZlbnRzKGVsKTtcblx0XHRpZiAoQ29DcmVhdGVGb3JtICYmIENvQ3JlYXRlRm9ybS5jaGVja0lEKGVsKSkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRcdHRoaXMuX2NyZWF0ZVlEb2MoZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XG5cdFx0XHRsZXQgc2VsZiAgPSB0aGlzO1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignc2V0LWRvY3VtZW50X2lkJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRzZWxmLl9jcmVhdGVZRG9jKHRoaXMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdFxuXHRfaW5pdEVsZW1lbnRFdmVudHMoZWwpe1xuXHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0JywgZnVuY3Rpb24oZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3NlbGVjdGlvbicsIGUpXG5cdFx0fSk7XG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlLmlucHV0VHlwZSwgZSk7XG5cdFx0XHRsZXQgc2VsZWN0aW9uX2luZm8gPSBfdGhpcy5nZXRTZWxlY3Rpb25JbmZvKHRoaXMpO1xuXHRcdFx0bGV0IG5vd3N0YXJ0ID0gc2VsZWN0aW9uX2luZm8uc3RhcnQ7XG5cdFx0XHRsZXQgbm93ZW5kID0gbm93c3RhcnQgKyAxO1xuXHRcdFx0bGV0IGNvbnRlbnRfdGV4dCA9IFwiXCI7XG5cdFx0XHRsZXQgaXNVcGRhdGUgPSB0cnVlO1xuXG5cdFx0XHRzd2l0Y2ggKGUuaW5wdXRUeXBlKSB7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZUNvbnRlbnRCYWNrd2FyZCc6XG5cdFx0XHRcdFx0bm93c3RhcnQgLS07XG5cdFx0XHRcdFx0bm93ZW5kIC0tO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdkZWxldGVDb250ZW50Rm9yd2FyZCc6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2luc2VydExpbmVCcmVhayc6XG5cdFx0XHRcdFx0Y29udGVudF90ZXh0ID0gXCJcXG5cIjsgXG5cdFx0XHRcdFx0bm93ZW5kICsrO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdpbnNlcnRUZXh0Jzpcblx0XHRcdFx0XHRjb250ZW50X3RleHQgPSBlLmRhdGEgfHwgXCJcIjsgXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2RlbGV0ZUJ5Q3V0Jzpcblx0XHRcdFx0XHRub3dlbmQgPSBub3dzdGFydDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRpc1VwZGF0ZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoIWlzVXBkYXRlKSByZXR1cm47XG5cdFx0XG5cdFx0LypsZXQgY2hhcmFjdGVyX2RlbGV0ZWQgPSBzZWxlY3Rpb25faW5mby5zdGFydCAtIHNlbGVjdGlvbl9pbmZvLmVuZDtcblx0XHRcdC8qQ29DcmVhdGVDdXJzb3JzLnJlY2FsY3VsYXRlX2xvY2FsX2N1cnNvcnModGhpcyxjaGFyYWN0ZXJfZGVsZXRlZClcblx0XHRcdCovXG5cdFx0XHQvL2NvbnNvbGUubG9nKFwiIHJlY2FsY3VsYXRpb25zIFwiLGVsLnRleHRDb250ZW50LFwiIFstXSBcIixjb250ZW50X3RleHQpXG5cdFx0XHRpZiAoc2VsZWN0aW9uX2luZm8uaXNfc2VsZWN0ZWQpIHtcblx0XHRcdFx0XG5cdFx0XHRcdF90aGlzLnNlbmRDaGFuZ2VEYXRhKHRoaXMsIFwiXCIsIHNlbGVjdGlvbl9pbmZvLnN0YXJ0LCBzZWxlY3Rpb25faW5mby5lbmQpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKGNvbnRlbnRfdGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0X3RoaXMuc2VuZENoYW5nZURhdGEodGhpcywgY29udGVudF90ZXh0LCBub3dzdGFydCwgbm93ZW5kKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRfdGhpcy5zZXRTZWxlY3Rpb25JbmZvKHRoaXMsIGZhbHNlLCB0aGlzLnNlbGVjdGlvblN0YXJ0LCB0aGlzLnNlbGVjdGlvblN0YXJ0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF90aGlzLnNlbmRDaGFuZ2VEYXRhKHRoaXMsIGNvbnRlbnRfdGV4dCwgbm93c3RhcnQsIG5vd2VuZCk7XHRcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGxldCBjb250ZW50X3RleHQgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTtcblx0XHRcdC8vIGxldCBjYXJldCA9IF90aGlzLl9nZXRDYXJldFBvc2l0aW9uKHRoaXMpO1xuXHRcdFx0bGV0IHNlbGVjdGlvbl9pbmZvID0gX3RoaXMuZ2V0U2VsZWN0aW9uSW5mbyh0aGlzKTtcblx0XHRcdFxuXHRcdFx0aWYgKHNlbGVjdGlvbl9pbmZvLnN0YXJ0ICE9PSBzZWxlY3Rpb25faW5mby5lbmQpIHtcblx0XHRcdFx0X3RoaXMuc2VuZENoYW5nZURhdGEodGhpcywgXCJcIiwgc2VsZWN0aW9uX2luZm8uc3RhcnQsIHNlbGVjdGlvbl9pbmZvLmVuZCwgZmFsc2UpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRfdGhpcy5zZW5kQ2hhbmdlRGF0YSh0aGlzLCBjb250ZW50X3RleHQsIHNlbGVjdGlvbl9pbmZvLnN0YXJ0LCBzZWxlY3Rpb25faW5mby5lbmQsIGZhbHNlKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSk7XG5cblx0XHQvLy8vICBDYXJldCBhbmQgU2VsZWN0aW9uIFN0YXR1cyBDaGFuZ2VzXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRsZXQgYXJyb3dzID0gWzM3LDM4LDM5LDQwXTtcblx0XHRcdGlmKGFycm93cy5pbmRleE9mKGUua2V5Q29kZSkhPS0xKXtcblx0XHRcdFx0X3RoaXMuc2VuZFBvc2l0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRsZXQgYXJyb3dzID0gWzM3LDM4LDM5LDQwXTtcblx0XHRcdGlmKGFycm93cy5pbmRleE9mKGUua2V5Q29kZSkhPS0xKXtcblx0XHRcdFx0X3RoaXMuc2VuZFBvc2l0aW9uKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcG9zID0gX3RoaXMuX2dldENhcmV0UG9zaXRpb24oZWwpO1xuXHRcdFx0X3RoaXMuc2V0U2VsZWN0aW9uSW5mbyhlbCwgcG9zLmZyb20gIT0gcG9zLnRvLCBwb3MuZnJvbSwgcG9zLnRvKVxuXHRcdH0pO1xuXHRcdFxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0IF90aGlzLnNlbmRQb3NpdGlvbih0aGlzKTtcblx0XHR9KTtcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0X3RoaXMuc2VuZFBvc2l0aW9uKGVsLCB0cnVlKTtcblx0XHR9KTtcblxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvY3JlYXRlLXktdXBkYXRlJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGluZm8gPSBldmVudC5kZXRhaWw7XG5cdFx0XHR2YXIgcG9zID0gMDtcblx0XHRcdHZhciBmbGFnID0gdHJ1ZTtcblx0XG5cdFx0XHRpbmZvLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5yZXRhaW4pIHtcblx0XHRcdFx0ZmxhZyA9IHRydWU7XG5cdFx0XHRcdHBvcyA9IGl0ZW0ucmV0YWluO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpZiAoaXRlbS5pbnNlcnQgfHwgaXRlbS5kZWxldGUpIHtcblx0XHRcdFx0aWYgKGZsYWcgPT0gZmFsc2UpIHBvcyA9IDA7XG5cdFx0XHRcdGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChpdGVtLmluc2VydCkge1xuXHRcdFx0XHRcdF90aGlzLmluc2VydERhdGEodGhpcywgaXRlbS5pbnNlcnQsIHBvcyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbS5kZWxldGUpIHtcblx0XHRcdFx0XHRfdGhpcy5kZWxldGVEYXRhKHRoaXMsIHBvcywgcG9zICsgaXRlbS5kZWxldGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0XG5cdHNlbmRDaGFuZ2VEYXRhKGVsZW1lbnQsIGNvbnRlbnQsIHN0YXJ0LCBlbmQsIGlzUmVtb3ZlID0gdHJ1ZSkge1xuXHRcdFxuXHRcdGlmKCF0aGlzLl9jaGVja0NvbmV0ZW50RWRpdGFibGUoZWxlbWVudCkpIHJldHVybjtcblx0XHRcblx0XHRpZiAoIXRoaXMuX2NoZWNrRG9jdW1lbnRJRChlbGVtZW50KSkge1xuXHRcdFx0Q29DcmVhdGVGb3JtLnJlcXVlc3Qoe2VsZW1lbnQ6IGVsZW1lbnQsIG5hbWVBdHRyOiBcIm5hbWVcIn0pXG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1kb2N1bWVudF9pZCcsICdwZW5kaW5nJyk7XG5cdFx0XHRyZXR1cm4gO1xuXHRcdH1cblx0XHRcblx0XHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKSA9PSAncGVuZGluZycpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0Y29uc3QgY29sbGVjdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb24nKSxcblx0XHRcdGRvY3VtZW50X2lkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKSxcblx0XHRcdG5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuXHRcdFxuXHRcdGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zYXZlX3ZhbHVlJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XG5cdFx0aWYgKGNvbnRlbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKGlzUmVtb3ZlKSB7XG5cdFx0XHRcdHRoaXMuZGVsZXRlRGF0YShlbGVtZW50LCBzdGFydCwgc3RhcnQgKyBjb250ZW50Lmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHRjcmR0Lmluc2VydFRleHQoe1xuXHRcdFx0XHRjb2xsZWN0aW9uLCBkb2N1bWVudF9pZCwgbmFtZSxcblx0XHRcdFx0dmFsdWU6IGNvbnRlbnQsXG5cdFx0XHRcdHBvc2l0aW9uOiBzdGFydCxcblx0XHRcdFx0YXR0cmlidXRlczogbnVsbFxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0XG5cdFx0XHRpZiAoaXNSZW1vdmUpIHtcblx0XHRcdFx0dGhpcy5pbnNlcnREYXRhKGVsZW1lbnQsIFwiIFwiLnJlcGVhdChlbmQgLSBzdGFydCksIHN0YXJ0KVxuXHRcdFx0fVxuXHRcdFx0Y3JkdC5kZWxldGVUZXh0KHtcblx0XHRcdFx0Y29sbGVjdGlvbiwgZG9jdW1lbnRfaWQsIG5hbWUsXG5cdFx0XHRcdHBvc2l0aW9uOiBzdGFydCxcblx0XHRcdFx0bGVuZ3RoOiBlbmQgLSBzdGFydCxcblx0XHRcdH0pIFxuXHRcdH1cblx0XG5cdFx0bGV0IGNoYXJhY3Rlcl9jb3VudCA9IGNvbnRlbnQubGVuZ3RoID4gMCA/IGNvbnRlbnQubGVuZ3RoIDogLTE7XG5cdFx0Y3Vyc29ycy5yZWNhbGN1bGF0ZV9sb2NhbF9jdXJzb3JzKGVsZW1lbnQsY2hhcmFjdGVyX2NvdW50KTtcblx0XG5cdH1cblx0XG5cdHNldFNlbGVjdGlvbkluZm8oZSwgaXNTZWxlY3QsIHN0YXJ0LCBlbmQpIHtcblx0XHRcdGUuc2V0QXR0cmlidXRlKFwiaXNfc2VsZWN0ZWRcIiwgaXNTZWxlY3QpO1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3Rpb25fc3RhcnRcIiwgc3RhcnQpO1xuXHRcdFx0ZS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3Rpb25fZW5kXCIsIGVuZCk7XG5cdFx0XHR0aGlzLnNlbmRQb3NpdGlvbihlKTtcblx0fVxuXHRcblx0Z2V0U2VsZWN0aW9uSW5mbyhlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzX3NlbGVjdGVkOiAoZS5nZXRBdHRyaWJ1dGUoXCJpc19zZWxlY3RlZFwiKSA9PT0gJ3RydWUnKSA/IHRydWUgOiBmYWxzZSxcblx0XHRcdHN0YXJ0OiBwYXJzZUludChlLmdldEF0dHJpYnV0ZShcInNlbGVjdGlvbl9zdGFydFwiKSksXG5cdFx0XHRlbmQ6cGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJzZWxlY3Rpb25fZW5kXCIpKVxuXHRcdH1cblx0fVxuXG5cdHNlbmRQb3NpdGlvbihlbCwgaXNDbGVhcil7XG5cdFx0aWYoIXRoaXMuX2NoZWNrQ29uZXRlbnRFZGl0YWJsZShlbCkpIHJldHVybjtcblx0XHRcblx0XHR2YXIgY3VyUmFuZ2UgPSB0aGlzLl9nZXRDYXJldFBvc2l0aW9uKGVsKTtcblx0XHR2YXIgX2pzb24gPSB0aGlzLl9nZXRFbGVtZW50SW5mbyhlbCk7XG5cdFx0XG5cdFx0aWYoY3VyUmFuZ2UgJiYgIWlzQ2xlYXIpe1xuXHRcdFx0X2pzb25bJ3N0YXJ0UG9zaXRpb24nXSA9IGN1clJhbmdlLmZyb207XG5cdFx0XHRfanNvblsnZW5kUG9zaXRvbiddID0gY3VyUmFuZ2UudG87XG5cdFx0XHQvL2NvbW1lbnRlZCBieSBqZWFuIG1lbmRvemFcblx0XHRcdC8vQ29DcmVhdGUuY3JkdC5zZW5kUG9zaXRpb24oX2pzb24pO1xuXHRcdFx0Y29uc3QgaWQgPSB0aGlzLl9nZW5lcmF0ZUVsZW1lbnRJRChlbClcblx0XHRcdGNyZHQuc2V0UG9zaXRpb25ZSlMoaWQsIF9qc29uWydzdGFydFBvc2l0aW9uJ10sIF9qc29uWydlbmRQb3NpdG9uJ10pO1xuXHRcdH1lbHNle1xuXHRcdFx0dmFyIF9pZCA9IHRoaXMuX2dlbmVyYXRlRWxlbWVudElEKGVsKTtcblx0XHRcdGNyZHQuc2V0Q3Vyc29yTnVsbChfaWQpO1xuXHRcdH1cblx0fVxuXHQvLy8vLy9cblx0XG5cdF9nZXRFbGVtZW50SW5mbyhlbCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbGxlY3Rpb246IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xsZWN0aW9uJykgfHwgJ18nLFxuXHRcdFx0ZG9jdW1lbnRfaWQ6IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kb2N1bWVudF9pZCcpIHx8ICdfJyxcblx0XHRcdG5hbWU6IGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdfJ1xuXHRcdH07XG5cdH1cblx0XG5cdF9jcmVhdGVZRG9jKGVsKXtcblx0XHRjb25zdCBzdGF0dXMgPSBjcmR0LmluaXQoe1xuXHRcdFx0Y29sbGVjdGlvbjogZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbGxlY3Rpb24nKSxcblx0XHRcdGRvY3VtZW50X2lkOiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG9jdW1lbnRfaWQnKSxcblx0XHRcdG5hbWU6IGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpLFxuXHRcdFx0ZWxlbWVudDogZWwsXG5cdFx0fSlcblxuXHRcdC8vIHRoaXMuc2V0SW5pdFZhbHVlKGVsKTtcblx0XHQvLyB0aGlzLmVsZW1lbnRzLnB1c2goZWwpXG5cdH1cblx0XG5cdF9nZW5lcmF0ZUVsZW1lbnRJRChlbCkge1xuXHRcdHZhciBfZUluZm8gPSB0aGlzLl9nZXRFbGVtZW50SW5mbyhlbCk7XG5cdFx0cmV0dXJuIGNyZHQuZ2VuZXJhdGVJRChjb25maWcub3JnYW5pemF0aW9uX0lkLCBfZUluZm8uY29sbGVjdGlvbiwgX2VJbmZvLmRvY3VtZW50X2lkLCBfZUluZm8ubmFtZSk7XG5cdH1cblx0XG5cdF9jaGVja0RvY3VtZW50SUQoZWwpe1xuXHRcdGxldCBkb2N1bWVudF9pZCA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1kb2N1bWVudF9pZCcpO1xuXHRcdGlmICghZG9jdW1lbnRfaWQgfHwgZG9jdW1lbnRfaWQgPT09IFwiXCIpIHJldHVybiBmYWxzZTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdFxuXHRfY2hlY2tDb25ldGVudEVkaXRhYmxlKGVsKXtcblx0XHRpZighZWwuaXNDb250ZW50RWRpdGFibGUpIHJldHVybiBmYWxzZTtcblx0XHRcblx0XHRmb3IodmFyIF9lbCBvZiB0aGlzLl9lbGVtZW50cyl7XG5cdFx0XHRpZihlbC5pc1NhbWVOb2RlKF9lbCkpIHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRcblx0XHR0aGlzLl9pbml0RWxlbWVudChlbCk7XG5cdFx0dGhpcy5fZWxlbWVudHMucHVzaChlbCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRfZ2V0Q2FyZXRQb3NpdGlvbihlbCl7XG5cdFx0aWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWwpIHJldHVybiBudWxsO1xuXHRcdFxuXHRcdHZhciBzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcblx0XHRpZighc2VsZWN0aW9uLnJhbmdlQ291bnQpIHJldHVybiBudWxsO1xuXHRcdFxuXHRcdHZhciBfcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcblx0XHR2YXIgc2VsZWN0ZWQgPSBfcmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XG5cdFx0dmFyIHJhbmdlID0gX3JhbmdlLmNsb25lUmFuZ2UoKTtcblx0XHRyYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWwpO1xuXHRcdHJhbmdlLnNldEVuZChfcmFuZ2UuZW5kQ29udGFpbmVyLCBfcmFuZ2UuZW5kT2Zmc2V0KTtcblx0XHRcblx0XHR2YXIgdG8gPSByYW5nZS50b1N0cmluZygpLmxlbmd0aDtcblx0XHR2YXIgZnJvbSA9IHNlbGVjdGVkID8gdG8gLSBzZWxlY3RlZDogdG87XG5cblx0XHRyZXR1cm4ge2Zyb206IGZyb20sIHRvOiB0b307XG5cdH1cblx0XG5cdF9zZXRDYXJldFBvc2l0aW9uKGVsLCBmcm9tLCB0byl7XG5cdFx0aWYoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWwpIHJldHVybjtcblx0XHRcblx0XHR2YXIgc2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0dmFyIHJhbmdlID0gdGhpcy5fY2xvbmVSYW5nZUJ5UG9zaXRpb24oZWwsIGZyb20sIHRvKTtcblx0XHRzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cdFx0c2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblx0fVxuXHRcblx0X2Nsb25lUmFuZ2VCeVBvc2l0aW9uKGVsLCBmcm9tLCB0bywgcmFuZ2Upe1xuXHRcdGlmKCFyYW5nZSl7XG5cdFx0XHRyYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG5cdFx0XHRyYW5nZS5zZWxlY3ROb2RlKGVsKTtcblx0XHRcdHJhbmdlLnNldFN0YXJ0KGVsLCAwKTtcblx0XHRcdHRoaXMuZnJvbSA9IGZyb207XG5cdFx0XHR0aGlzLnRvID0gdG87XG5cdFx0fVxuXHRcdFxuXHRcdGlmKGVsICYmICh0aGlzLmZyb20gPiAwIHx8IHRoaXMudG8gPiAwKSl7XG5cdFx0XHRpZihlbC5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpe1xuXHRcdFx0XHRcblx0XHRcdFx0aWYoZWwudGV4dENvbnRlbnQubGVuZ3RoIDwgdGhpcy5mcm9tKSB0aGlzLmZyb20gLT0gZWwudGV4dENvbnRlbnQubGVuZ3RoO1xuXHRcdFx0XHRlbHNlIGlmKHRoaXMuZnJvbSA+IDApe1xuXHRcdFx0XHRcdHJhbmdlLnNldFN0YXJ0KGVsLCB0aGlzLmZyb20pO1xuXHRcdFx0XHRcdHRoaXMuZnJvbSA9IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGlmKGVsLnRleHRDb250ZW50Lmxlbmd0aCA8IHRoaXMudG8pIHRoaXMudG8gLT0gZWwudGV4dENvbnRlbnQubGVuZ3RoO1xuXHRcdFx0XHRlbHNlIGlmKHRoaXMudG8gPiAwKXtcblx0XHRcdFx0XHRyYW5nZS5zZXRFbmQoZWwsIHRoaXMudG8pO1xuXHRcdFx0XHRcdHRoaXMudG8gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0Zm9yKHZhciBscCA9IDA7IGxwIDwgZWwuY2hpbGROb2Rlcy5sZW5ndGg7IGxwKyspe1xuXHRcdFx0XHRcdHJhbmdlID0gdGhpcy5fY2xvbmVSYW5nZUJ5UG9zaXRpb24oZWwuY2hpbGROb2Rlc1tscF0sIHRoaXMuZnJvbSwgdGhpcy50bywgcmFuZ2UpO1xuXHRcdFx0XHRcdGlmKHRoaXMuZnJvbSA9PT0gMCAmJiB0aGlzLnRvID09PSAwKSBicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmFuZ2U7XG5cdH1cblx0XG5cdF9nZXRQb3NpdGlvbkZyb21SYW5nZShlbCwgcmFuZ2Upe1xuXHRcdHZhciBfcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuXHRcdF9yYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWwpO1xuXHRcdFxuXHRcdHZhciBmcm9tID0gMCwgdG8gPSAwO1xuXHRcdFxuXHRcdF9yYW5nZS5zZXRFbmQocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpO1xuXHRcdHRvID0gX3JhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdFxuXHRcdF9yYW5nZS5zZXRFbmQocmFuZ2Uuc3RhcnRDb250YWluZXIsIHJhbmdlLnN0YXJ0T2Zmc2V0KTtcblx0XHRmcm9tID0gX3JhbmdlLnRvU3RyaW5nKCkubGVuZ3RoO1xuXHRcdFxuXHRcdHJldHVybiB7ZnJvbTogZnJvbSwgdG86IHRvfTtcblx0fVxuXHRcblx0XG5cdFxuXHRpbnNlcnREYXRhKGVsLCBjb250ZW50LCBwb3NpdGlvbil7XG5cdFx0aWYoIWNvbnRlbnQgfHwgY29udGVudCA9PT0gJycpIHJldHVybjtcblx0XHRcblx0XHR2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXHRcdHZhciBjdXJDYXJldCA9IHRoaXMuX2dldENhcmV0UG9zaXRpb24oZWwpO1xuXG5cdFx0dmFyIHJhbmdlID0gdGhpcy5fY2xvbmVSYW5nZUJ5UG9zaXRpb24oZWwsIHBvc2l0aW9uLCBwb3NpdGlvbik7XG5cdFx0dmFyIHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0dmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIG5vZGU7XG5cdFx0XG5cdFx0dG1wLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0XG5cdFx0d2hpbGUgKCAobm9kZSA9IHRtcC5maXJzdENoaWxkKSApIHtcblx0XHRcdGZyYWcuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHRcdHJhbmdlLmluc2VydE5vZGUoZnJhZyk7XG5cblx0XHRpZiAoIWN1ckNhcmV0KSB7XG5cdFx0XHRzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuXHRcdFx0c2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0XG5cdFx0dmFyIHBvcyA9IHRoaXMuc2VsZWN0aW9uUHJvY2Vzc2luZyhjb250ZW50LCBjdXJDYXJldC5mcm9tLCBjdXJDYXJldC50bywgcG9zaXRpb24sIHBvc2l0aW9uKTtcblx0XHRcblx0XHR0aGlzLl9zZXRDYXJldFBvc2l0aW9uKGVsLCBwb3Muc3RhcnQsIHBvcy5lbmQpO1xuXHRcdFxuXHRcdHRoaXMuc2VuZFBvc2l0aW9uKGVsKTtcblx0fVxuXHRcblx0ZGVsZXRlRGF0YShlbCwgc3RhcnQsIGVuZCl7XG5cdFx0dmFyIGNvbnRlbnRfbGVuZ3RoID0gZW5kIC0gc3RhcnQ7XG5cdFx0aWYoIWNvbnRlbnRfbGVuZ3RoKSByZXR1cm47XG5cdFx0dmFyIGN1ckNhcmV0ID0gdGhpcy5fZ2V0Q2FyZXRQb3NpdGlvbihlbCk7XG5cdFx0dmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcblx0XHR2YXIgcmFuZ2UgPSB0aGlzLl9jbG9uZVJhbmdlQnlQb3NpdGlvbihlbCwgc3RhcnQsIGVuZCk7XG5cdFx0aWYocmFuZ2UpIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG5cdFx0XG5cdFx0XG5cdFx0aWYgKCFjdXJDYXJldCkge1xuXHRcdFx0c2VsZWN0aW9uLnJlbW92ZVJhbmdlKHJhbmdlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBpZiAoIWN1ckNhcmV0KSByZXR1cm47XG5cdFx0dmFyIHBvcyA9IHRoaXMuc2VsZWN0aW9uUHJvY2Vzc2luZyhcIlwiLCBjdXJDYXJldC5mcm9tLCBjdXJDYXJldC50bywgc3RhcnQsIGVuZCk7XG5cdFx0XG5cdFx0dGhpcy5fc2V0Q2FyZXRQb3NpdGlvbihlbCwgcG9zLnN0YXJ0LCBwb3MuZW5kKTtcblx0XHR0aGlzLnNlbmRQb3NpdGlvbihlbCk7XG5cdH1cblx0XG5cdHNlbGVjdGlvblByb2Nlc3NpbmcoY29udGVudCwgcHJldl9zdGFydCwgcHJldl9lbmQsIHN0YXJ0LCBlbmQpIHtcblx0XHRpZiAocHJldl9zdGFydCA+PSBzdGFydCkge1xuXHRcdFx0aWYgKGNvbnRlbnQgPT0gXCJcIikge1xuXHRcdFx0XHRwcmV2X3N0YXJ0IC09IGVuZCAtIHN0YXJ0O1xuXHRcdFx0XHRwcmV2X2VuZCAtPSBlbmQgLSBzdGFydDtcblx0XHRcdFx0cHJldl9zdGFydCA9IHByZXZfc3RhcnQgPCBzdGFydCA/IHN0YXJ0IDogcHJldl9zdGFydDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZfc3RhcnQgKz0gY29udGVudC5sZW5ndGg7XG5cdFx0XHRcdHByZXZfZW5kICs9IGNvbnRlbnQubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdH0ge1xuXHRcdFx0aWYgKGNvbnRlbnQgPT0gXCJcIiAmJiBwcmV2X2VuZCA+PSBzdGFydCkge1xuXHRcdFx0XHRwcmV2X2VuZCA9IChwcmV2X2VuZCA+PSBlbmQpID8gcHJldl9lbmQgLSAoZW5kIC0gc3RhcnQpIDogc3RhcnRcblx0XHRcdH0gXG5cdFx0fVxuXHRcdHJldHVybiB7c3RhcnQ6IHByZXZfc3RhcnQsIGVuZDogcHJldl9lbmR9O1xuXHR9XG5cbn1cblxudmFyIGdfQ29DcmVhdGVDb250ZW50RWRpdGFibGUgPSBuZXcgQ29DcmVhdGVDb250ZW50ZWRpdGFibGUoKTtcblxuLy8gQ29DcmVhdGVJbml0LnJlZ2lzdGVyKCdDb0NyZWF0ZVRleHQnLCBnX0NvQ3JlYXRlQ29udGVudEVkaXRhYmxlLCBnX0NvQ3JlYXRlQ29udGVudEVkaXRhYmxlLl9pbml0KTtcblxuQ29DcmVhdGVPYnNlcnZlci5pbml0KHsgXG5cdG5hbWU6ICdDb0NyZWF0ZUNvbnRlbnRFZGl0YWJsZUluaXQnLCBcblx0b2JzZXJ2ZTogWydzdWJ0cmVlJywgJ2NoaWxkTGlzdCddLFxuXHRpbmNsdWRlOiAnW2NvbnRlbnRlZGl0YWJsZV1bZGF0YS1jb2xsZWN0aW9uXVtkYXRhLWRvY3VtZW50X2lkXVtuYW1lXScsIFxuXHRjYWxsYmFjazogZnVuY3Rpb24obXV0YXRpb24pIHtcblx0XHRnX0NvQ3JlYXRlQ29udGVudEVkaXRhYmxlLl9pbml0KG11dGF0aW9uLnRhcmdldClcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvQ3JlYXRlQ29udGVudGVkaXRhYmxlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../CoCreateJS/node_modules/@cocreate/contenteditable/src/index.js\n")}}]);