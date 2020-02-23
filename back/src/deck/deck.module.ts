import { Module } from '@nestjs/common';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';

@Module({
  providers: [DeckService],
  controllers: [DeckController]
})
export class DeckModule {}
