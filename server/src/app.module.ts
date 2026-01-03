import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { AttendanceModule } from './attendance/attendance.module';
import { CreditsModule } from './credits/credits.module';

@Module({
  imports: [AuthModule, UsersModule, EventsModule, AttendanceModule, CreditsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
