import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScryfallModule } from './scryfall/scryfall.module';
import { DeckModule } from './deck/deck.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ScryfallModule, DeckModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
