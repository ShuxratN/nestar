import { Mutation, Resolver } from '@nestjs/graphql';
import { MemberService } from './member.service';

@Resolver()
export class MemberResolver {
    constructor(private readonly memberService: MemberService) {}

    @Mutation(() => String)
    public async signup(): Promise<String> {
        console.log("Mutation: signup");
        return "signup executed"
    }

    @Mutation(() => String)
    public async login(): Promise<String> {
        console.log("Mutation: login");
        return "login executed"
    }

    @Mutation(() => String)
    public async updateMember(): Promise<String> {
        console.log("Mutation: updateMember");
        return "updateMember executed"
    }
}
