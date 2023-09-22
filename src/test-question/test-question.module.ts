import { Module } from '@nestjs/common';
import { TestQuestionService } from './test-question.service';
import { TestQuestionController } from './test-question.controller';
import { testQuestionProvider } from './entities/test-question.providers';

@Module({
  controllers: [TestQuestionController],
  providers: [TestQuestionService, ...testQuestionProvider],
})
export class TestQuestionModule {}
