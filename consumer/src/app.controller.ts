import { Controller } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('xpto.start')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const response =
      `Receiving a new message from topic: medium.rocks: ` +
      JSON.stringify(context.getMessage().value);
    console.log(response);

    return response;
  }
}
