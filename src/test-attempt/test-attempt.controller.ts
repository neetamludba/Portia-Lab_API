import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TestAttemptService } from './test-attempt.service';
import { CreateTestAttemptDto } from './dto/create-test-attempt.dto';

@ApiTags('test-attempt')
@Controller('test-attempt')
export class TestAttemptController {
  constructor(private readonly testAttemptService: TestAttemptService) {}

  @Post()
  create(@Body() createTestAttemptDto: CreateTestAttemptDto) {
    return this.testAttemptService.create(createTestAttemptDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testAttemptService.findOne(+id);
  }

  @Get('/forassignment/:id')
  findOneForAssignment(@Param('id') id: string) {
    return this.testAttemptService.findOneForAssignment(+id);
  }

  @Get('/fortest/:id')
  findAllForTest(@Param('id') id: string) {
    return this.testAttemptService.findAllForTest(+id);
  }
}
