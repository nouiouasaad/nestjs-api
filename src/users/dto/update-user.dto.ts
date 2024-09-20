import { IsDate} from "class-validator";
import { BaseUserDto } from "./base-user.dto";

export class UpdateUserDto extends BaseUserDto {
    @IsDate()
    readonly updatedAt: Date;
}