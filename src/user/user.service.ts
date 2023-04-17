import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDTO } from './dto/editUserDTO';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, editUser: EditUserDTO) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...editUser },
    });

    delete user.hash;

    return user;
  }
}
