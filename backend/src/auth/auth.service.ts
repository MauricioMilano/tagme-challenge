import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(userName: string, userPassword: string) {
    const user = await this.userService.findByUsername(userName);
    console.log(user);
    if (user[0].password === userPassword) {
      const payload = { id: user[0]._id, name: user[0].name };
      return {
        token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
