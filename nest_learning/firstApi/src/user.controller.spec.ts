import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../src/controllers/user.controller';
import { AppService } from '../src/services/app.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [AppService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('users', () => {
    const userDto = {
      name: 'vini',
      age: 29,
      password: 'password',
    };

    describe('Quando o usuário é criado com sucesso', () => {
      it('retorna uma mensagem contando "usuário criado com sucesso"', () => {
        expect(userController.create(userDto)).toBe(
          `${userDto.name} criado com sucesso`,
        );
      });
    });
  });
});
