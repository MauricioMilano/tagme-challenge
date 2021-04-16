import { Body, Controller, Get, Param, Post, UseGuards, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get('teste')
  getHello(): string {
    return this.userService.getHello();
  }
  @Post('new')
  async createUser(@Body() user: User): Promise<User> {
    console.log(user);
    let result = await this.userService.create(user);
    console.log(result);
    return result;
  }
  @Get('find')
  async find(@Query("name") name:string): Promise<User> {
    try{
      console.log(name)
      const user:User[] = await this.userService.findByUsername(name);
      delete user[0]?.password;
      delete user[0]?.active;
      delete user[0]?.id;
      return user[0];
    }catch(err){
      return err;
    }
  }
}
