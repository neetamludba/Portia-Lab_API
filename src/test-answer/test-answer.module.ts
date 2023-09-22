import { Module } from '@nestjs/common';
import { TestAnswerService } from './test-answer.service';
import { TestAnswerController } from './test-answer.controller';

@Module({
  controllers: [TestAnswerController],
  providers: [TestAnswerService]
})
export class TestAnswerModule {}
