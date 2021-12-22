import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHoroscopo(body: {signo: string}) {
    let horoscopo;
    if (body.signo == 'sagitário') {
      horoscopo = "esse é dos bons!"
    }
    else {
      horoscopo = "não é dos bons"
    }
    return horoscopo;
  }
}
