import { NextResponse } from "next/server";

let requestCount=0;

export function middleware(){
    requestCount++;
    const res = NextResponse.next();
    console.log(requestCount);
    
    return res;

}
