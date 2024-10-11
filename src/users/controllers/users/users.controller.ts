import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDto } from './dtos/createUser.Dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-user/validate-user.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
constructor(private userService: UsersService){

}

    @Get()
    getUsers() {
       return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData:CreateUserDto){
    console.log(userData.age.toPrecision());
     return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number){
        const user = this.userService.fetchUserById(id);
        if(!user) throw new HttpException('User Not Found',HttpStatus.BAD_REQUEST)
        return user;
    }
}


