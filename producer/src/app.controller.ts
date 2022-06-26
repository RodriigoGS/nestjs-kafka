import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('producer.nestjs') private readonly client: ClientKafka,
  ) {}

  @Get('kafka-emmit')
  kafkaEmmit() {
    return this.client.emit('xpto.start', { foo: 'bar' });
  }
}
