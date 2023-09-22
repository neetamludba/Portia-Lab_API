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
import { TestAnswerService } from './test-answer.service';
import { CreateTestAnswerDto } from './dto/create-test-answer.dto';
import { UpdateTestAnswerDto } from './dto/update-test-answer.dto';

@ApiTags('test-answer')
@Controller('test-answer')
export class TestAnswerController {
  constructor(private readonly testAnswerService: TestAnswerService) {}

  @Post()
  create(@Body() createTestAnswerDto: CreateTestAnswerDto) {
    return this.testAnswerService.create(createTestAnswerDto);
  }

  @Get()
  findAll() {
    return this.testAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestAnswerDto: UpdateTestAnswerDto,
  ) {
    return this.testAnswerService.update(+id, updateTestAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testAnswerService.remove(+id);
  }
}
