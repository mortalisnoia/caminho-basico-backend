
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Zoeira de áries', () => {
    let body = { "signo": 'Áries' };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Não sei bem o que quero, só sei que quero JÁ!');
  });

  it('Zoeira de touro', () => {
    let body = { "signo": "Touro" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Amor numa cabana? Só se for 5 ESTRELAS');
  });

  it('Zoeira de gêmeos', () => {
    let body = { "signo": "Gêmeos" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Odeio fofocas… Mas… já te contei a última?');
  });

  it('Zoeira de câncer', () => {
    let body = { "signo": "Câncer" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Lar… Meu doce LAR!');
  });

  it('Zoeira de leão', () => {
    let body = { "signo": "Leão" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Antigamente EU era vaidoso, mas agora me curei e estou PERFEITO!');
  });

  it('Zoeira de virgem', () => {
    let body = { "signo": "Virgem" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Já te disse que sou SUPER DEMOCRATA… mas porque você ainda não fez o que eu MANDEI?');
  });

  it('Zoeira de libra', () => {
    let body = { "signo": "Libra" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('A justiça tarda mas não falha, pois está sempre COMIGO');
  });

  it('Zoeira de escorpião', () => {
    let body = { "signo": "Escorpião" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Sou super LIBERAL… mas onde você foi, MESMO?');
  });

  it('Zoeira de sagitário', () => {
    let body = { "signo": "Sagitário" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Já te disse 1.000.000 de vezes que NUNCA EXAGERO!');
  });

  it('Zoeira de capricórnio', () => {
    let body = { "signo": "Capricórnio" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('HOJE assumi o cargo de vice-diretor de uma empresa que ORGANIZAREI, e será sucesso daqui a 10 ANOS');
  });

  it('Zoeira de aquário', () => {
    let body = { "signo": "Aquário" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Já estou guardando grana, para construir a NOSSA bela casa lá na LUA');
  });

  it('Zoeira de peixes', () => {
    let body = { "signo": "Peixes" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Ontem tinha DÚVIDAS, hoje… NÃO SEI!');
  });

  it('Zoeira de peixes', () => {
    let body = { "signo": "Deve dar erro" };
    return request(app.getHttpServer())
      .post('/')
      .send(body)
      .expect(201)
      .expect('Você não tem ideia do que está fazendo aqui, né??');
  });

});