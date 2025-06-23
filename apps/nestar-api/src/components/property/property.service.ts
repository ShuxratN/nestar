import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from '../../libs/enums/common.enum';
import { Property } from '../../libs/dto/property/property';
import { PropertyInput } from '../../libs/dto/property/property.input';
import { MemberService } from '../member/member.service';


@Injectable()
export class PropertyService {
    constructor(@InjectModel('Property') private readonly propertyModel: Model<Property>,
    private memberService: MemberService,

) {}

    public async createProperty(input: PropertyInput): Promise<Property> {
        try {
         const result = await this.propertyModel.create(input);
         await this.memberService.memberStatsEditor({
            _id: result.memberId,
            targetKey: 'memberProperties',
            modifier: 1,
         });
        // increase memberProperties
            return result ;
        } catch (err) {
             console.log('Error, service:model :', err.message);
             throw new BadGatewayException(Message.CREATE_FAILED);
        }
    }
}
