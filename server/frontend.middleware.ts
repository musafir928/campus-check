import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { join } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const clientPath = join(__dirname, '..', 'dist/client');
    const uyPath = join(__dirname, '..', 'dist/uy');

    if (req.url.startsWith('/uy')) {
      // Serve index.html for any unknown route in the `uy` app
      if (!req.url.includes('.') && req.method === 'GET') {
        res.sendFile(join(uyPath, 'index.html'));
      } else {
        next();
      }
    } else if (!req.url.startsWith('/api')) {
      // Serve React app for any unknown route not starting with `/api`
      if (!req.url.includes('.') && req.method === 'GET') {
        res.sendFile(join(clientPath, 'index.html'));
      } else {
        next();
      }
    } else {
      next();
    }
  }
}
