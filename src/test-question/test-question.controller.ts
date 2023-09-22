import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestQuestionService } from './test-question.service';
import { CreateTestQuestionDto } from './dto/create-test-question.dto';
import { UpdateTestQuestionDto } from './dto/update-test-question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('test-question')
@Controller('test-question')
export class TestQuestionController {
  constructor(private readonly testQuestionService: TestQuestionService) {}

  @Post()
  create(@Body() createTestQuestionDto: CreateTestQuestionDto) {
    return this.testQuestionService.create(createTestQuestionDto);
  }

  @Get(':testID')
  findAll(@Param('testID') id: string) {
    return this.testQuestionService.findAll(+id);
  }

  @Get(':testID')
  findAllActive(@Param('testID') id: string) {
    return this.testQuestionService.findAllActive(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testQuestionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestQuestionDto: UpdateTestQuestionDto,
  ) {
    return this.testQuestionService.update(+id, updateTestQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testQuestionService.remove(+id);
  }
}
