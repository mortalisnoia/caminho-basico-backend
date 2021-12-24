import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as request from 'supertest';
describe('AppController', () => {
  let appController: AppController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
    appController = app.get<AppController>(AppController);
  });
  describe('root', () => {
    it('Zoeira de áries', () => {
      let body = { "signo": 'Áries' };
      expect(appController.getThisHoroscopo(body)).toBe('Não sei bem o que quero, só sei que quero JÁ!');
    });
    it('Zoeira de touro', () => {
      let body = { "signo": "Touro" };
      expect(appController.getThisHoroscopo(body)).toBe('Amor numa cabana? Só se for 5 ESTRELAS');
    });
    it('Zoeira de gêmeos', () => {
      let body = { "signo": "Gêmeos" };
      expect(appController.getThisHoroscopo(body)).toBe('Odeio fofocas… Mas… já te contei a última?');
    });
    it('Zoeira de câncer', () => {
      let body = { "signo": "Câncer" };
      expect(appController.getThisHoroscopo(body)).toBe('Lar… Meu doce LAR!');
    });
    it('Zoeira de leão', () => {
      let body = { "signo": "Leão" };
      expect(appController.getThisHoroscopo(body)).toBe('Antigamente EU era vaidoso, mas agora me curei e estou PERFEITO!');
    });
    it('Zoeira de virgem', () => {
      let body = { "signo": "Virgem" };
      expect(appController.getThisHoroscopo(body)).toBe('Já te disse que sou SUPER DEMOCRATA… mas porque você ainda não fez o que eu MANDEI?');
    });
    it('Zoeira de libra', () => {
      let body = { "signo": "Libra" };
      expect(appController.getThisHoroscopo(body)).toBe('A justiça tarda mas não falha, pois está sempre COMIGO');
    });
    it('Zoeira de escorpião', () => {
      let body = { "signo": "Escorpião" };
      expect(appController.getThisHoroscopo(body)).toBe('Sou super LIBERAL… mas onde você foi, MESMO?');
    });
    it('Zoeira de sagitário', () => {
      let body = { "signo": "Sagitário" };
      expect(appController.getThisHoroscopo(body)).toBe('Já te disse 1.000.000 de vezes que NUNCA EXAGERO!');
    });
    it('Zoeira de capricórnio', () => {
      let body = { "signo": "Capricórnio" };
      expect(appController.getThisHoroscopo(body)).toBe('HOJE assumi o cargo de vice-diretor de uma empresa que ORGANIZAREI, e será sucesso daqui a 10 ANOS');
    });
    it('Zoeira de aquário', () => {
      let body = { "signo": "Aquário" };
      expect(appController.getThisHoroscopo(body)).toBe('Já estou guardando grana, para construir a NOSSA bela casa lá na LUA');
    });
    it('Zoeira de peixes', () => {
      let body = { "signo": "Peixes" };
      expect(appController.getThisHoroscopo(body)).toBe('Ontem tinha DÚVIDAS, hoje… NÃO SEI!');
    });
  });
});