import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TestAssignmentService } from './test-assignment.service';
import { CreateTestAssignmentDto } from './dto/create-test-assignment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('test-assignment')
@Controller('test-assignment')
export class TestAssignmentController {
  constructor(private readonly testAssignmentService: TestAssignmentService) {}

  @Post()
  create(@Body() createTestAssignmentDto: CreateTestAssignmentDto) {
    return this.testAssignmentService.create(createTestAssignmentDto);
  }

  @Get()
  findAll() {
    return this.testAssignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testAssignmentService.findOne(+id);
  }

  @Get('/fortest/:id')
  findAllForTest(@Param('id') id: string) {
    return this.testAssignmentService.findAllForTest(+id);
  }

  @Get('/foruser/:id')
  findAllForUser(@Param('id') id: string) {
    return this.testAssignmentService.findAllForUser(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testAssignmentService.remove(+id);
  }
}
