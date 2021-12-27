import { Injectable } from '@nestjs/common';
import * as text from './horoscopo.json';

@Injectable()
export class AppService {
  getHoroscopo(body: { signo: string }) {
    let horoscopo;
    if (body.signo == 'Áries') {
      horoscopo = text.aries;
    }
    else if (body.signo == 'Touro') {
      horoscopo = text.touro;
    }
    else if (body.signo == 'Gêmeos') {
      horoscopo = text.gemeos;
    }
    else if (body.signo == 'Câncer') {
      horoscopo = text.cancer;
    }
    else if (body.signo == 'Leão') {
      horoscopo = text.leao
    }
    else if (body.signo == 'Virgem') {
      horoscopo = text.virgem;
    }
    else if (body.signo == 'Libra') {
      horoscopo = text.libra;
    }
    else if (body.signo == 'Escorpião') {
      horoscopo = text.escorpiao;
    }
    else if (body.signo == 'Sagitário') {
      horoscopo = text.sagitario;
    }
    else if (body.signo == 'Capricórnio') {
      horoscopo = text.capricornio;
    }
    else if (body.signo == 'Aquário') {
      horoscopo = text.aquario;
    }
    else if (body.signo == 'Peixes') {
      horoscopo = text.peixes;
    }
    else {
      horoscopo = text.erro;
    }
    return horoscopo;
  }
}