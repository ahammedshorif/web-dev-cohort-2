import { NextResponse} from "next/server";

export function GET(){
    return NextResponse.json({
        mas:"you are login"
    })

}