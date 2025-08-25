import { Module } from '@nestjs/common';
import { SendDataController } from './controller/send-data.controller';

@Module({
  controllers: [SendDataController]
})
export class FormModule {}
