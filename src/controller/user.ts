import { Controller } from 'express-ext';
import { User, UserFilter, UserService } from '../metadata/user';

export class UserController extends Controller<User, string, UserFilter> {
  constructor(log: (msg: string) => void, userService: UserService) {
    super(log, userService);
  }
}
