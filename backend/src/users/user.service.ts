import { User } from './user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  getHello(): string {
    return 'Tá funcionando';
  }
  async create(doc: User) {
    try {
      const result = await new this.userModel(doc).save();
      console.log(
        'UserService :: CreateUser :: result :: ' +
          JSON.stringify(result, null, 2),
      );
      return result;
    } catch (err) {
      console.error('UserService :: CreateUser :: Error :: ' + err);
    }
  }
  async findByUsername(name: string): Promise<User[]> {
    try {
      const result = await this.userModel.find({ name: name }).exec();
      console.log(
        'UserService :: findByUser :: result :: ' +
          JSON.stringify(result, null, 2),
      );
      return result;
    } catch (err) {
      console.error('UserService :: findByUser :: Error :: ' + err);
    }
  }
}
