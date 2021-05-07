import { Module } from '@nestjs/common';
import { CatsModule } from './rest/cat/cats.module'

@Module({
  imports: [ CatsModule ],
})
export class AppModule {}
