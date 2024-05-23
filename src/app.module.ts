import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KiteService } from './kiteconnect';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,KiteService],
})
export class AppModule {}
