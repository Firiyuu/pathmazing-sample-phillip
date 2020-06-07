import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersService} from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';




import config from './config/keys';

@Module({
  imports: [ItemsModule, UsersModule, MongooseModule.forRoot(config.mongoURI), SharedModule, AuthModule],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService, ItemsService, UsersService, AuthService],
})
export class AppModule {}
