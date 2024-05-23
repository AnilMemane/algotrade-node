import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { KiteService } from './kiteconnect';

@Controller()
export class AppController {
  request_token:string
    api_secret:string
  constructor(private readonly appService: AppService,private readonly kiteService:KiteService) {
    this.request_token="5RiGoRxpS5xg8V6XPVmG9uLSa1vYthQ4"
    this.api_secret="10qzhgg81vsvwy8cijhl6q305lcgu0gt"
    this.getSession()
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  getSession(){
    console.log("inside -----------")
    this.kiteService.generateSession(this.request_token,this.api_secret)
  }
}
