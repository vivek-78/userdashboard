import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
export async function POST(request: NextRequest) {
  const body = await request.json();
  const prisma = new PrismaClient()
  try{
      const newUser = await prisma.user.create({
        data: {
          userId: body.userId,
          country: body.country,
          postalCode: body.postalCode,
          clerkUserId: body.clerkUserID,
          street: body.street,
          state: body.state,
          number: body.number,
          city: body.city
        },
      });
      return NextResponse.json(newUser, { status: 201 }).
  }
  catch(err){
    return NextResponse.json({ status: 404 }).
  }
}
