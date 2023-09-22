import { Module } from '@nestjs/common';
import { TestAttemptService } from './test-attempt.service';
import { TestAttemptController } from './test-attempt.controller';
import { testAttemptProviders } from './entities/test-attempt.providers';
import { testProviders } from '../test/entities/test.providers';
import { userProviders } from '../user/entities/user.providers';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';

@Module({
  controllers: [TestAttemptController],
  providers: [
    TestAttemptService,
    ...testAttemptProviders,
    ...testProviders,
    ...userProviders,
    ...testQuestionProvider,
  ],
  exports: [TestAttemptService],
})
export class TestAttemptModule {}
