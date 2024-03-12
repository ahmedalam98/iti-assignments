import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.enum';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    let jwtData = context.switchToHttp().getRequest().header('x-auth-token');
    let decodeData = await this.jwt.verify(jwtData, { secret: 'secret' });
    console.log(requiredRoles);
    if (
      (requiredRoles.includes('admin' as Role) &&
        decodeData.role === 'admin') ||
      (requiredRoles.includes('mod' as Role) && decodeData.role === 'mod')
    ) {
      return true;
    }
    return false;
  }
}
