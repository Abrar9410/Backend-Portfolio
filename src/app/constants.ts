import { IFrame } from "sanitize-html";


export const excludeFields = ["searchTerm", "sort", "fields", "page", "limit"];

export const sanitizeOptions = Object.freeze({
    // Allow all tags except the truly dangerous ones
    allowedTags: [
        "html", "body", "head", "title", "meta", "link", "base", "header", "footer",
        "main", "section", "article", "aside", "nav", "h1", "h2", "h3", "h4", "h5", "h6",
        "p", "a", "b", "i", "strong", "em", "u", "br", "ul", "ol", "li", "dl", "dt", "dd",
        "blockquote", "pre", "code", "hr", "img", "figure", "figcaption", "table", "tr",
        "td", "th", "thead", "tbody", "tfoot", "caption", "col", "colgroup", "div", "span",
        "address", "cite", "abbr", "mark", "sub", "sup", "del", "ins", "q", "s", "small",
        "big", "time", "progress", "meter", "details", "summary", "data", "code", "var",
        "ruby", "rt", "rp", "span", "wbr", "canvas", "svg", "math", "datalist", "option",
        "optgroup", "fieldset", "legend", "iframe", "audio", "video", "source", "track",
        "param", "form", "input", "button", "select", "label", "fieldset",
    ], // 'false' means allow all standard HTML tags
    disallowedTagsMode: "discard",

    // Remove scripts, styles, and metadata
    nonTextTags: ["script", "style", "textarea", "noscript"],

    // Allow all attributes except inline event handlers (onclick, etc.) and javascript: URLs
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {},
    allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
    allowProtocolRelative: true,

    // Custom function to remove unsafe attributes
    allowedAttributes: false, // allow any normal attributes
    exclusiveFilter(frame: IFrame) {
        // Remove anything with an event handler like onclick, onerror, etc.
        const attrs = Object.keys(frame.attribs || {});
        return attrs.some((attr) => attr.toLowerCase().startsWith("on"));
    }
});