import { Field, InputType, Int } from "@nestjs/graphql";
import { IsIn, IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { MemberAuthType, MemberStatus, MemberType } from "../../enums/member.enum";
import { PropertyLocation, PropertyType } from "../../enums/property.enum";
import { ObjectId } from "mongoose";


@InputType()
export class PropertyInput {
    @IsNotEmpty()
    @Length(3, 12)
    @Field(() => PropertyType)
    propertyType: PropertyType;

    @IsNotEmpty()
    @Length(5, 12)
    @Field(() => PropertyLocation)
    propertyLocation: PropertyLocation;

    @IsNotEmpty()
    @Field(() => String)
    propertyAddress: string;

    @IsNotEmpty()
    @Field(() => String)
    propertyTitle: string;

    @IsNotEmpty()
    @Field(() => Number)
    propertyPrice: number;

    @IsNotEmpty()
    @Field(() => Number)
    propertySquare: number;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Field(() => Int)
    propertyBeds: number;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Field(() => Int)
    propertyRooms: number;

    @IsNotEmpty()
    @Field(() => [String])
    propertyImages?: string[];

    @IsOptional()
    @Length(5, 500)
    @Field(() => String, { nullable: true})
    propertyDesc?: string;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyBarter?: boolean;

    @IsOptional()
    @Field(() => Boolean, { nullable: true })
    propertyRent?: boolean;

    memberId?: ObjectId;

    @IsOptional()
    @Field(() => Date, { nullable: true })
    constructedAt?: Date;
}











