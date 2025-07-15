import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";



const client = new PrismaClient();


export async function GET(){
    const user = await client.user.findUnique({
  where: {
    id: 1,
   },
  })

   return NextResponse.json({
      user
   })
}

export async function POST(req: NextRequest){

    const body = await req.json();
    console.log(body)

    await client.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    });

    return NextResponse.json({ 
       
        mas: "user create"
    })
}