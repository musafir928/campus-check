import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('NestJS');

async function bootstrap() {
  const port = process.env.PORT || 3000;

  // for local development we need to put log level on "debug"
  // !!!note: change log level on production, it might cause unexpected cost
  const app = await NestFactory.create(AppModule, { logger: ['debug'] });

  app.useLogger(new Logger('Nest'));
  app.enableCors({ origin: '*' });

  app.setGlobalPrefix('api');

  await app.listen(port, () =>
    logger.log(`app is now listening on port: ${port}`),
  );
}

bootstrap();
