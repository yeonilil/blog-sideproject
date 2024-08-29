import { NextApiRequest, NextApiResponse } from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const proxy = createProxyMiddleware({
    target: 'http://localhost:8000', // 프록시할 서버의 URL
    changeOrigin: true,
    pathRewrite: {
      '^/api/proxy': '/', // /api/proxy로 시작하는 경로를 타겟 서버의 루트로 변경
    },
  });

  return proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}
