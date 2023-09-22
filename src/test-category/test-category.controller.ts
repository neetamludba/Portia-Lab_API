import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TestCategoryService } from './test-category.service';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('test-category')
@Controller('test-category')
export class TestCategoryController {
  constructor(private readonly testCategoryService: TestCategoryService) {}

  @Post()
  create(@Body() createTestCategoryDto: CreateTestCategoryDto) {
    return this.testCategoryService.create(createTestCategoryDto);
  }

  @Get()
  findAll() {
    return this.testCategoryService.findAll();
  }

  @Get('/active')
  findAllActive() {
    return this.testCategoryService.findAllActive();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestCategoryDto: UpdateTestCategoryDto,
  ) {
    return this.testCategoryService.update(+id, updateTestCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testCategoryService.remove(+id);
  }
}
