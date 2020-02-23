import { Module } from '@nestjs/common';
import { ScryfallService } from './scryfall.service';
import { ScryfallController } from './scryfall.controller';

@Module({
  providers: [ScryfallService],
  controllers: [ScryfallController]
})
export class ScryfallModule {}
