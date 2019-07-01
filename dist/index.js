"use strict";
const http_proxy_middleware_1 = require("./http-proxy-middleware");
function proxy(context, opts) {
    return new http_proxy_middleware_1.HttpProxyMiddleware(context, opts);
}
module.exports = proxy;
