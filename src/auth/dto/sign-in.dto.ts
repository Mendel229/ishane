import { IsString, IsEmail } from 'class-validator';

export class SignInDto {
    @IsEmail()
    mail: string;

    @IsString()
    mdp: string;
}
