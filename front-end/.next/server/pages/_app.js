/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/AuthContext.tsx":
/*!****************************************!*\
  !*** ./src/components/AuthContext.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authService */ \"./src/services/authService.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_authService__WEBPACK_IMPORTED_MODULE_3__]);\n_services_authService__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ AuthContext,AuthProvider auto */ \n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const decodeJWT = (token)=>{\n        const base64Url = token.split(\".\")[1];\n        const base64 = base64Url.replace(/-/g, \"+\").replace(/_/g, \"/\");\n        const jsonPayload = decodeURIComponent(atob(base64).split(\"\").map((c)=>{\n            return \"%\" + (\"00\" + c.charCodeAt(0).toString(16)).slice(-2);\n        }).join(\"\"));\n        return JSON.parse(jsonPayload);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (token) {\n            setToken(token);\n            const decoded = decodeJWT(token);\n            setUser(decoded);\n        }\n    }, []);\n    const login = async (credentials, redirectCallback)=>{\n        const response = await (0,_services_authService__WEBPACK_IMPORTED_MODULE_3__.login)(credentials.username, credentials.password);\n        const token = response.data.jwt;\n        localStorage.setItem(\"token\", token);\n        setToken(token);\n        const decoded = decodeJWT(token);\n        setUser(decoded);\n        redirectCallback();\n    };\n    const logout = (redirectCallback)=>{\n        localStorage.removeItem(\"token\");\n        setToken(null);\n        setUser(null);\n        redirectCallback();\n    };\n    const register = async (username, password, redirectCallback)=>{\n        await (0,_services_authService__WEBPACK_IMPORTED_MODULE_3__.register)(username, password);\n        redirectCallback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            token,\n            login,\n            logout,\n            register\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/orito/Desktop/interview/my-online-learning-platform/front-end/src/components/AuthContext.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BdXRoQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMyRDtBQUVuQjtBQUNxRDtBQUU3RixNQUFNUSw0QkFBY1Isb0RBQWFBLENBQU07QUFFdkMsTUFBTVMsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDL0QsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFNO0lBQ3RDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHYiwrQ0FBUUEsQ0FBZ0I7SUFDbEQsTUFBTWMsU0FBU1osc0RBQVNBO0lBRXhCLE1BQU1hLFlBQVksQ0FBQ0g7UUFDakIsTUFBTUksWUFBWUosTUFBTUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JDLE1BQU1DLFNBQVNGLFVBQVVHLE9BQU8sQ0FBQyxNQUFNLEtBQUtBLE9BQU8sQ0FBQyxNQUFNO1FBQzFELE1BQU1DLGNBQWNDLG1CQUFtQkMsS0FBS0osUUFBUUQsS0FBSyxDQUFDLElBQUlNLEdBQUcsQ0FBQ0MsQ0FBQUE7WUFDaEUsT0FBTyxNQUFNLENBQUMsT0FBT0EsRUFBRUMsVUFBVSxDQUFDLEdBQUdDLFFBQVEsQ0FBQyxHQUFFLEVBQUdDLEtBQUssQ0FBQyxDQUFDO1FBQzVELEdBQUdDLElBQUksQ0FBQztRQUNSLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ1Y7SUFDcEI7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsUUFBUW1CLGFBQWFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJcEIsT0FBTztZQUNUQyxTQUFTRDtZQUNULE1BQU1xQixVQUFVbEIsVUFBVUg7WUFDMUJELFFBQVFzQjtRQUNWO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTTlCLFFBQVEsT0FBTytCLGFBQWtCQztRQUNyQyxNQUFNQyxXQUFXLE1BQU1oQyw0REFBWUEsQ0FBQzhCLFlBQVlHLFFBQVEsRUFBRUgsWUFBWUksUUFBUTtRQUM5RSxNQUFNMUIsUUFBUXdCLFNBQVNHLElBQUksQ0FBQ0MsR0FBRztRQUMvQlQsYUFBYVUsT0FBTyxDQUFDLFNBQVM3QjtRQUM5QkMsU0FBU0Q7UUFDVCxNQUFNcUIsVUFBVWxCLFVBQVVIO1FBQzFCRCxRQUFRc0I7UUFDUkU7SUFDRjtJQUVBLE1BQU1PLFNBQVMsQ0FBQ1A7UUFDZEosYUFBYVksVUFBVSxDQUFDO1FBQ3hCOUIsU0FBUztRQUNURixRQUFRO1FBQ1J3QjtJQUNGO0lBRUEsTUFBTTlCLFdBQVcsT0FBT2dDLFVBQWtCQyxVQUFrQkg7UUFDMUQsTUFBTTdCLCtEQUFlQSxDQUFDK0IsVUFBVUM7UUFDaENIO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzVCLFlBQVlxQyxRQUFRO1FBQUNDLE9BQU87WUFBRW5DO1lBQU1FO1lBQU9UO1lBQU91QztZQUFRckM7UUFBUztrQkFDakVJOzs7Ozs7QUFHUDtBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW9ubGluZS1sZWFybmluZy1wbGF0Zm9ybS8uL3NyYy9jb21wb25lbnRzL0F1dGhDb250ZXh0LnRzeD85M2Q1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBsb2dpbiBhcyBsb2dpblNlcnZpY2UsIHJlZ2lzdGVyIGFzIHJlZ2lzdGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XG5cbmNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGRlY29kZUpXVCA9ICh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgYmFzZTY0VXJsID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcbiAgICBjb25zdCBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgvLS9nLCAnKycpLnJlcGxhY2UoL18vZywgJy8nKTtcbiAgICBjb25zdCBqc29uUGF5bG9hZCA9IGRlY29kZVVSSUNvbXBvbmVudChhdG9iKGJhc2U2NCkuc3BsaXQoJycpLm1hcChjID0+IHtcbiAgICAgIHJldHVybiAnJScgKyAoJzAwJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikpLnNsaWNlKC0yKTtcbiAgICB9KS5qb2luKCcnKSk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblBheWxvYWQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldFRva2VuKHRva2VuKTtcbiAgICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVKV1QodG9rZW4pO1xuICAgICAgc2V0VXNlcihkZWNvZGVkKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9IGFzeW5jIChjcmVkZW50aWFsczogYW55LCByZWRpcmVjdENhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsb2dpblNlcnZpY2UoY3JlZGVudGlhbHMudXNlcm5hbWUsIGNyZWRlbnRpYWxzLnBhc3N3b3JkKTtcbiAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEuand0O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICBzZXRUb2tlbih0b2tlbik7XG4gICAgY29uc3QgZGVjb2RlZCA9IGRlY29kZUpXVCh0b2tlbik7XG4gICAgc2V0VXNlcihkZWNvZGVkKTtcbiAgICByZWRpcmVjdENhbGxiYWNrKCk7XG4gIH07XG5cbiAgY29uc3QgbG9nb3V0ID0gKHJlZGlyZWN0Q2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcbiAgICBzZXRUb2tlbihudWxsKTtcbiAgICBzZXRVc2VyKG51bGwpO1xuICAgIHJlZGlyZWN0Q2FsbGJhY2soKTtcbiAgfTtcblxuICBjb25zdCByZWdpc3RlciA9IGFzeW5jICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCByZWRpcmVjdENhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgYXdhaXQgcmVnaXN0ZXJTZXJ2aWNlKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgcmVkaXJlY3RDYWxsYmFjaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHRva2VuLCBsb2dpbiwgbG9nb3V0LCByZWdpc3RlciB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQXV0aENvbnRleHQsIEF1dGhQcm92aWRlciB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImxvZ2luIiwibG9naW5TZXJ2aWNlIiwicmVnaXN0ZXIiLCJyZWdpc3RlclNlcnZpY2UiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJ0b2tlbiIsInNldFRva2VuIiwicm91dGVyIiwiZGVjb2RlSldUIiwiYmFzZTY0VXJsIiwic3BsaXQiLCJiYXNlNjQiLCJyZXBsYWNlIiwianNvblBheWxvYWQiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhdG9iIiwibWFwIiwiYyIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInNsaWNlIiwiam9pbiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWNvZGVkIiwiY3JlZGVudGlhbHMiLCJyZWRpcmVjdENhbGxiYWNrIiwicmVzcG9uc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsImp3dCIsInNldEl0ZW0iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthContext */ \"./src/components/AuthContext.tsx\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.css */ \"./src/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_components_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// src/pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/orito/Desktop/interview/my-online-learning-platform/front-end/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/orito/Desktop/interview/my-online-learning-platform/front-end/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUNvQztBQUNqQztBQUV4QixTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFPO0lBQzFDLHFCQUNFLDhEQUFDSCxpRUFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LW9ubGluZS1sZWFybmluZy1wbGF0Zm9ybS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9wYWdlcy9fYXBwLnRzeFxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoQ29udGV4dCc7XG5pbXBvcnQgJy4uL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBhbnkpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/authService.ts":
/*!*************************************!*\
  !*** ./src/services/authService.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   register: () => (/* binding */ register)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API_URL = \"http://localhost:8080/api/auth\";\nconst login = (username, password)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${API_URL}/login`, {\n        username,\n        password\n    });\n};\nconst register = (username, password)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`${API_URL}/register`, {\n        username,\n        password\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aFNlcnZpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFVBQVU7QUFFVCxNQUFNQyxRQUFRLENBQUNDLFVBQWtCQztJQUN0QyxPQUFPSixrREFBVSxDQUFDLENBQUMsRUFBRUMsUUFBUSxNQUFNLENBQUMsRUFBRTtRQUFFRTtRQUFVQztJQUFTO0FBQzdELEVBQUU7QUFFSyxNQUFNRSxXQUFXLENBQUNILFVBQWtCQztJQUN6QyxPQUFPSixrREFBVSxDQUFDLENBQUMsRUFBRUMsUUFBUSxTQUFTLENBQUMsRUFBRTtRQUFFRTtRQUFVQztJQUFTO0FBQ2hFLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1vbmxpbmUtbGVhcm5pbmctcGxhdGZvcm0vLi9zcmMvc2VydmljZXMvYXV0aFNlcnZpY2UudHM/NGRjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvYXV0aCc7XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAke0FQSV9VUkx9L2xvZ2luYCwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gYXhpb3MucG9zdChgJHtBUElfVVJMfS9yZWdpc3RlcmAsIHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9VUkwiLCJsb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwb3N0IiwicmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/authService.ts\n");

/***/ }),

/***/ "./src/globals.css":
/*!*************************!*\
  !*** ./src/globals.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();