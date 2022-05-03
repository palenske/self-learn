import { Injectable } from '@nestjs/common';

interface user {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloUser(): string {
    return 'Hello User!';
  }

  create(user: user): string {
    return `${user.name} criado com sucesso`;
  }
}
