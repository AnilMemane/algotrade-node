import { Injectable } from '@nestjs/common';
import { KiteConnect } from 'kiteconnect';

@Injectable()
export class KiteService {
  private kc: KiteConnect;

  constructor() {
    this.kc = new KiteConnect({
      api_key: 'tdpsoq22bb0p58qs',
    });
  }

  async generateSession(requestToken: string, apiSecret: string): Promise<void> {
    try {
      const response = await this.kc.generateSession(requestToken, apiSecret);
      this.init();
    } catch (err) {
      console.log(err);
    }
  }

  private async init(): Promise<void> {
    try {
      const response = await this.kc.getInstruments("NSE");
      console.log(response)

      const response2 = await this.kc.getLTP("NSE:INFY");
      console.log(response2)


      // You got user's margin details.
    } catch (err) {
      // Something went wrong.
      console.log(err);
    }
  }
}
