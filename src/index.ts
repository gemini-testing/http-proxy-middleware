import { HttpProxyMiddleware } from './http-proxy-middleware';

function proxy(context, opts) {
  return new HttpProxyMiddleware(context, opts);
}

export = proxy;
