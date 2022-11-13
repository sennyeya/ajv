(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{402:function(t,a,e){"use strict";e.r(a);var s=e(13),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats repository"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"ajv-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajv-formats"}},[t._v("#")]),t._v(" ajv-formats")]),t._v(" "),a("p",[t._v("JSON Schema formats for Ajv")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://travis-ci.org/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://travis-ci.org/ajv-validator/ajv-formats.svg?branch=master",alt:"Build Status"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/npm/v/ajv-formats.svg",alt:"npm"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://gitter.im/ajv-validator/ajv",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/gitter/room/ajv-validator/ajv.svg",alt:"Gitter"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://github.com/sponsors/epoberezkin",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://img.shields.io/badge/$-sponsors-brightgreen",alt:"GitHub Sponsors"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ESM/TypeScript import")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ajv "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" addFormats "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Node.js require:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addFormats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formats"}},[t._v("#")]),t._v(" Formats")]),t._v(" "),a("p",[t._v("The package defines these formats:")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("date")]),t._v(": full-date according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc3339#section-5.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("time")]),t._v(": time (time-zone is mandatory).")]),t._v(" "),a("li",[a("em",[t._v("date-time")]),t._v(": date-time (time-zone is mandatory).")]),t._v(" "),a("li",[a("em",[t._v("iso-time")]),t._v(": time with optional time-zone.")]),t._v(" "),a("li",[a("em",[t._v("iso-date-time")]),t._v(": date-time with optional time-zone.")]),t._v(" "),a("li",[a("em",[t._v("duration")]),t._v(": duration from "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339#appendix-A",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("uri")]),t._v(": full URI.")]),t._v(" "),a("li",[a("em",[t._v("uri-reference")]),t._v(": URI reference, including full and relative URIs.")]),t._v(" "),a("li",[a("em",[t._v("uri-template")]),t._v(": URI template according to "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6570",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6570"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("url")]),t._v(" (deprecated): "),a("a",{attrs:{href:"https://url.spec.whatwg.org/#concept-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("URL record"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("email")]),t._v(": email address.")]),t._v(" "),a("li",[a("em",[t._v("hostname")]),t._v(": host name according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc1034#section-3.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC1034"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("ipv4")]),t._v(": IP address v4.")]),t._v(" "),a("li",[a("em",[t._v("ipv6")]),t._v(": IP address v6.")]),t._v(" "),a("li",[a("em",[t._v("regex")]),t._v(": tests whether a string is a valid regular expression by passing it to RegExp constructor.")]),t._v(" "),a("li",[a("em",[t._v("uuid")]),t._v(": Universally Unique IDentifier according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc4122",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC4122"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("json-pointer")]),t._v(": JSON-pointer according to "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc6901",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6901"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("relative-json-pointer")]),t._v(": relative JSON-pointer according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/draft-luff-relative-json-pointer-00",target:"_blank",rel:"noopener noreferrer"}},[t._v("this draft"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("byte")]),t._v(": base64 encoded data according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("int32")]),t._v(": signed 32 bits integer according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("int64")]),t._v(": signed 64 bits according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("float")]),t._v(": float according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("double")]),t._v(": double according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("password")]),t._v(": password string according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("binary")]),t._v(": binary string according to the "),a("a",{attrs:{href:"https://spec.openapis.org/oas/v3.0.0#data-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("openApi 3.0.0 specification"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("See regular expressions used for format validation and the sources that were used in "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("formats.ts"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Please note")]),t._v(": JSON Schema draft-07 also defines formats "),a("code",[t._v("iri")]),t._v(", "),a("code",[t._v("iri-reference")]),t._v(", "),a("code",[t._v("idn-hostname")]),t._v(" and "),a("code",[t._v("idn-email")]),t._v(" for URLs, hostnames and emails with international characters. These formats are available in "),a("a",{attrs:{href:"https://github.com/luzlab/ajv-formats-draft2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats-draft2019"),a("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),a("h2",{attrs:{id:"keywords-to-compare-values-formatmaximum-formatminimum-and-formatexclusivemaximum-formatexclusiveminimum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords-to-compare-values-formatmaximum-formatminimum-and-formatexclusivemaximum-formatexclusiveminimum"}},[t._v("#")]),t._v(" Keywords to compare values: "),a("code",[t._v("formatMaximum")]),t._v(" / "),a("code",[t._v("formatMinimum")]),t._v(" and "),a("code",[t._v("formatExclusiveMaximum")]),t._v(" / "),a("code",[t._v("formatExclusiveMinimum")])]),t._v(" "),a("p",[t._v("These keywords allow to define minimum/maximum constraints when the format keyword defines ordering ("),a("code",[t._v("compare")]),t._v(" function in format definition).")]),t._v(" "),a("p",[t._v("These keywords are added to ajv instance when ajv-formats is used without options or with option "),a("code",[t._v("keywords: true")]),t._v(".")]),t._v(" "),a("p",[t._v("These keywords apply only to strings. If the data is not a string, the validation succeeds.")]),t._v(" "),a("p",[t._v("The value of keywords "),a("code",[t._v("formatMaximum")]),t._v("/"),a("code",[t._v("formatMinimum")]),t._v(" and "),a("code",[t._v("formatExclusiveMaximum")]),t._v("/"),a("code",[t._v("formatExclusiveMinimum")]),t._v(" should be a string or "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/validation.md#data-reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("$data reference"),a("OutboundLink")],1),t._v(". This value is the maximum (minimum) allowed value for the data to be valid as determined by "),a("code",[t._v("format")]),t._v(" keyword. If "),a("code",[t._v("format")]),t._v(" keyword is not present schema compilation will throw exception.")]),t._v(" "),a("p",[t._v("When these keyword are added, they also add comparison functions to formats "),a("code",[t._v('"date"')]),t._v(", "),a("code",[t._v('"time"')]),t._v(" and "),a("code",[t._v('"date-time"')]),t._v(". User-defined formats also can have comparison functions. See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/api.md#api-addformat",target:"_blank",rel:"noopener noreferrer"}},[t._v("addFormat"),a("OutboundLink")],1),t._v(" method.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formatMinimum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-06"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formatExclusiveMaximum")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-27"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" validDataList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-06"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-26"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invalidDataList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-02-05"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-12-27"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("p",[t._v("Options can be passed via the second parameter. Options value can be")]),t._v(" "),a("ol",[a("li",[t._v("The list of format names that will be added to ajv instance:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("Please note")]),t._v(": when ajv encounters an undefined format it throws exception (unless ajv instance was configured with "),a("code",[t._v("strict: false")]),t._v(" option). To allow specific undefined formats they have to be passed to ajv instance via "),a("code",[t._v("formats")]),t._v(" option with "),a("code",[t._v("true")]),t._v(" value:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formats"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// to ignore "date" and "time" formats in schemas.')]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Format validation mode (default is "),a("code",[t._v('"full"')]),t._v(") with optional list of format names and "),a("code",[t._v("keywords")]),t._v(" option to add additional format comparison keywords:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fast"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("or")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fast"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formats")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"date"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keywords")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("In "),a("code",[t._v('"fast"')]),t._v(" mode the following formats are simplified: "),a("code",[t._v('"date"')]),t._v(", "),a("code",[t._v('"time"')]),t._v(", "),a("code",[t._v('"date-time"')]),t._v(", "),a("code",[t._v('"iso-time"')]),t._v(", "),a("code",[t._v('"iso-date-time"')]),t._v(", "),a("code",[t._v('"uri"')]),t._v(", "),a("code",[t._v('"uri-reference"')]),t._v(", "),a("code",[t._v('"email"')]),t._v(". For example, "),a("code",[t._v('"date"')]),t._v(", "),a("code",[t._v('"time"')]),t._v(" and "),a("code",[t._v('"date-time"')]),t._v(" do not validate ranges in "),a("code",[t._v('"fast"')]),t._v(" mode, only string structure, and other formats have simplified regular expressions.")]),t._v(" "),a("h2",{attrs:{id:"tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tests"}},[t._v("#")]),t._v(" Tests")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" submodule update "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--init")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);