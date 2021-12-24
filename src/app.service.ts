import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHoroscopo(body: { signo: string }) {
    let horoscopo;
    if (body.signo == 'Áries') {
      horoscopo = "Não sei bem o que quero, só sei que quero JÁ!"
    }

    else if (body.signo == 'Touro') {
      horoscopo = "Amor numa cabana? Só se for 5 ESTRELAS"
    }
    else if (body.signo == 'Gêmeos') {
      horoscopo = "Odeio fofocas… Mas… já te contei a última?"
    }
    else if (body.signo == 'Câncer') {
      horoscopo = "Lar… Meu doce LAR!"
    }
    else if (body.signo == 'Leão') {
      horoscopo = "Antigamente EU era vaidoso, mas agora me curei e estou PERFEITO!"
    }
    else if (body.signo == 'Virgem') {
      horoscopo = "Já te disse que sou SUPER DEMOCRATA… mas porque você ainda não fez o que eu MANDEI?"
    }
    else if (body.signo == 'Libra') {
      horoscopo = "A justiça tarda mas não falha, pois está sempre COMIGO"
    }
    else if (body.signo == 'Escorpião') {
      horoscopo = "Sou super LIBERAL… mas onde você foi, MESMO?"
    }
    else if (body.signo == 'Sagitário') {
      horoscopo = "Já te disse 1.000.000 de vezes que NUNCA EXAGERO!"
    }
    else if (body.signo == 'Capricórnio') {
      horoscopo = "HOJE assumi o cargo de vice-diretor de uma empresa que ORGANIZAREI, e será sucesso daqui a 10 ANOS"
    }
    else if (body.signo == 'Aquário') {
      horoscopo = "Já estou guardando grana, para construir a NOSSA bela casa lá na LUA"
    }
    else if (body.signo == 'Peixes') {
      horoscopo = "Ontem tinha DÚVIDAS, hoje… NÃO SEI!"
    }
    else {
      horoscopo = "Você não tem ideia do que está fazendo aqui, né??"
    }
    return horoscopo;
  }
}