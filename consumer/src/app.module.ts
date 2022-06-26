import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'consumer.nestjs',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'consumer.client-id',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'consumer.consumer.group-id',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
