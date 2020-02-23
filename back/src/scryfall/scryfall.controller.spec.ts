import { Test, TestingModule } from '@nestjs/testing';
import { ScryfallController } from './scryfall.controller';

describe('Scryfall Controller', () => {
  let controller: ScryfallController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScryfallController],
    }).compile();

    controller = module.get<ScryfallController>(ScryfallController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
