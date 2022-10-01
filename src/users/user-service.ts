import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './user-dto';
import { User } from './user-interface';
import { query } from 'express';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private userModel: Model<User>){}

    async getUsers(): Promise<User[]> {
        const query = await this.userModel
        .find()
        .exec();
        return query;
    }
}
