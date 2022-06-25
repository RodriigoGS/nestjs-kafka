import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'producer.nestjs',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer.client-id',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'producer.consumer.group-id',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
