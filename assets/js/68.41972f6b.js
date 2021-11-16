(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{527:function(t,a,s){"use strict";s.r(a);var e=s(53),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"standalone-validation-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standalone-validation-code"}},[t._v("#")]),t._v(" Standalone validation code")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#usage-with-cli"}},[t._v("Usage with CLI")])]),s("li",[s("a",{attrs:{href:"#usage-from-code"}},[t._v("Usage from code")]),s("ul",[s("li",[s("a",{attrs:{href:"#requirement-at-runtime"}},[t._v("Requirement at runtime")])])])]),s("li",[s("a",{attrs:{href:"#configuration-and-limitations"}},[t._v("Configuration and limitations")])])])]),s("p"),t._v(" "),s("p",[t._v("Ajv supports generating standalone modules with exported validation function(s), with one default export or multiple named exports, that are pre-compiled and can be used without Ajv. It is useful for several reasons:")]),t._v(" "),s("ul",[s("li",[t._v("to reduce the browser bundle size - Ajv is not included in the bundle (although if you have a large number of schemas the bundle can become bigger - when the total size of generated validation code is bigger than Ajv code).")]),t._v(" "),s("li",[t._v("to reduce the start-up time - the validation and compilation of schemas will happen during build time.")]),t._v(" "),s("li",[t._v("to avoid dynamic code evaluation with Function constructor (used for schema compilation) - when it is prohibited by the browser page "),s("RouterLink",{attrs:{to:"/security.html#content-security-policy"}},[t._v("Content Security Policy")]),t._v(".")],1)]),t._v(" "),s("p",[t._v("This functionality in Ajv v7 supersedes deprecated package ajv-pack that can be used with Ajv v6. All schemas, including those with recursive references, formats and user-defined keywords are supported, with few "),s("a",{attrs:{href:"#configuration-and-limitations"}},[t._v("limitations")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"usage-with-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-cli"}},[t._v("#")]),t._v(" Usage with CLI")]),t._v(" "),s("p",[t._v("In most cases you would use this functionality via "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-cli"),s("OutboundLink")],1),t._v(" (>= 4.0.0) to generate module that exports validation function.")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g ajv-cli\najv compile -s schema.json -o validate_schema.js\n")])])]),s("p",[s("code",[t._v("validate_schema.js")]),t._v(" will contain the module exporting validation function that can be bundled into your application.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-cli"),s("OutboundLink")],1),t._v(" docs for additional information.")]),t._v(" "),s("h2",{attrs:{id:"usage-from-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-from-code"}},[t._v("#")]),t._v(" Usage from code")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ajv\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// version >= v7.0.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this option is required to generate standalone code")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" standaloneCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv/dist/standalone"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/object.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  properties"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      pattern"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^[a-z]+$"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. generate module with a single default export (CommonJS and ESM compatible):")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" validate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" moduleCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("standaloneCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. pass map of schema IDs to generate multiple exports,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it avoids code duplication if schemas are mutually recursive or have some share elements:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" moduleCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("standaloneCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  validateObject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/object.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. or generate module with all schemas added to the instance (excluding meta-schemas),")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export names would use schema IDs (or keys passed to addSchema method):")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" moduleCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("standaloneCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// now you can")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// write module code to file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/validate.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... or require module from string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireFromString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"require-from-string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" standaloneValidate "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireFromString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for a single default export")]),t._v("\n")])])]),s("h3",{attrs:{id:"requirement-at-runtime"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirement-at-runtime"}},[t._v("#")]),t._v(" Requirement at runtime")]),t._v(" "),s("p",[t._v("To run the standalone generated functions, the Ajv package should still be a run-time dependency for most schemas, but generated modules can only depend on code in "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/tree/master/lib/runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("runtime"),s("OutboundLink")],1),t._v(" folder, so the whole Ajv will not be included in the bundle (or executed) if you require the modules with standalone validation code from your application code.")]),t._v(" "),s("h2",{attrs:{id:"configuration-and-limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-and-limitations"}},[t._v("#")]),t._v(" Configuration and limitations")]),t._v(" "),s("p",[t._v("To support standalone code generation:")]),t._v(" "),s("ul",[s("li",[t._v("Ajv option "),s("code",[t._v("source.code")]),t._v(" must be set to "),s("code",[t._v("true")])]),t._v(" "),s("li",[t._v("only "),s("code",[t._v("code")]),t._v(" and "),s("code",[t._v("macro")]),t._v(" user-defined keywords are supported (see "),s("RouterLink",{attrs:{to:"/keywords.html"}},[t._v("User defined keywords")]),t._v(").")],1),t._v(" "),s("li",[t._v("when "),s("code",[t._v("code")]),t._v(" keywords define variables in shared scope using "),s("code",[t._v("gen.scopeValue")]),t._v(", they must provide "),s("code",[t._v("code")]),t._v(" property with the code snippet. See source code of pre-defined keywords for examples in "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/lib/vocabularies",target:"_blank",rel:"noopener noreferrer"}},[t._v("vocabularies folder"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("if formats are used in standalone code, ajv option "),s("code",[t._v("code.formats")]),t._v(" should contain the code snippet that will evaluate to an object with all used format definitions - it can be a call to "),s("code",[t._v('require("...")')]),t._v(" with the correct path (relative to the location of saved module):")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" myFormats "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./my-formats"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ajv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  formats"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myFormats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    formats"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('require("./my-formats")')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("If you only use formats from "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),s("OutboundLink")],1),t._v(" this option will be set by this package automatically.")])])}),[],!1,null,null,null);a.default=n.exports}}]);