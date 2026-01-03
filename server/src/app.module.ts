import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { AttendanceModule } from './attendance/attendance.module';
import { CreditsModule } from './credits/credits.module';
import { FrontendMiddleware } from '../frontend.middleware';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'admin'),
      serveRoot: '/admin',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'student'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost/campus',
      { dbName: 'campus' },
    ),
    AuthModule,
    UsersModule,
    EventsModule,
    AttendanceModule,
    CreditsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FrontendMiddleware).forRoutes('*');
  }
}
