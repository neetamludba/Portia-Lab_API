import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { testProviders } from './entities/test.providers';
import { DatabaseModule } from '../core/database/database.module';
import { TestQuestionModule } from '../test-question/test-question.module';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';

@Module({
  imports: [DatabaseModule, TestQuestionModule],
  controllers: [TestController],
  providers: [TestService, ...testProviders, ...testQuestionProvider],
  exports: [TestService],
})
export class TestModule {}
