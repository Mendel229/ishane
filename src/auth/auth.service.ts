import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(mail: string, mdp: string): Promise<{ access_token: string }> {
        const user = await this.userService.findOne(mail);
        if (user.mdp !== mdp) {
            throw new UnauthorizedException();
        }
        const payload = {sub: user.id,  mail: user.mail};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
