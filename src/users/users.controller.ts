import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user-service';

@Controller('users')
export class UsersController {

    constructor( private usersService: UsersService ){}

    @Get()
    async getUsers(){
        return await this.usersService.getUsers();
    }
}
