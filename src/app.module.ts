import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kevin123:sxSgvegbAh3gms0v@mobilecourse.uoe9b0c.mongodb.net/MobileAppCourse' 
         ),
         UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

