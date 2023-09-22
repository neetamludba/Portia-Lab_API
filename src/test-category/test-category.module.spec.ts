import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestCategory } from './entities/test-category.entity';
import { TestCategoryController } from './test-category.controller';
import { TestCategoryService } from './test-category.service';
import { testCategoryProviders } from './entities/test-category.providers';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { Dialect } from 'sequelize/types';

describe('Test Category E2E TEST', () => {
  let controller: TestCategoryController;
  let activeCategory: TestCategory;
  let inActiveCategory: TestCategory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.TEST_DB_HOST,
          port: Number(process.env.TEST_DB_PORT),
          username: process.env.TEST_DB_USER,
          password: process.env.TEST_DB_PASS,
          database: process.env.TEST_DB_NAME,
          autoLoadModels: true,
          synchronize: true,
          models: [TestCategory],
        }),
        SequelizeModule.forFeature([TestCategory]),
      ],
      controllers: [TestCategoryController],
      providers: [TestCategoryService, ...testCategoryProviders],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<TestCategoryController>(TestCategoryController);
  });

  it('Test Category => Create', async () => {
    let dto = new CreateTestCategoryDto();

    expect(controller.create(dto)).rejects.toThrow();

    dto.name = 'SCRUM';
    expect(controller.create(dto)).rejects.toThrow();

    dto.companyID = 1;
    activeCategory = await controller.create(dto);
    expect(activeCategory).toBeTruthy;

    dto.name = 'PMP';
    dto.active = false;
    inActiveCategory = await controller.create(dto);
    expect(inActiveCategory).toBeTruthy;
  });

  it('Test Category => Update', () => {
    let dto = new UpdateTestCategoryDto();

    dto.name = ('SCRUM - ' + new Date().toString()).substring(0, 44);
    expect(
      controller.update(activeCategory.categoryID.toString(), dto),
    ).resolves.toBeTruthy();
  });

  it('Test Category => Find All', async () => {
    let categories = await controller.findAll();

    expect(categories).toBeTruthy;
    expect(categories.length).toBeGreaterThanOrEqual(1);
  });

  it('Test Category => Find All Active', async () => {
    let categories = await controller.findAllActive();

    expect(categories).toBeTruthy;
    expect(categories.length).toBeGreaterThanOrEqual(1);
  });

  it('Test Category => Find One', () => {
    expect(controller.findOne(activeCategory.categoryID.toString())).resolves
      .toBeTruthy;
  });

  it('Test Category => Delete', () => {
    expect(controller.remove(inActiveCategory.categoryID.toString())).resolves
      .toBeTruthy;
  });
});
