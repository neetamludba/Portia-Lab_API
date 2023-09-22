import { Module } from '@nestjs/common';
import { TestAssignmentService } from './test-assignment.service';
import { TestAssignmentController } from './test-assignment.controller';
import { testAssignmentProviders } from './entities/test-assignment.providers';
import { userProviders } from '../user/entities/user.providers';
import { testProviders } from '../test/entities/test.providers';
import { testAttemptProviders } from '../test-attempt/entities/test-attempt.providers';

@Module({
  controllers: [TestAssignmentController],
  providers: [
    TestAssignmentService,
    ...testAssignmentProviders,
    ...userProviders,
    ...testProviders,
    ...testAttemptProviders,
  ],
})
export class TestAssignmentModule {}
