import { NextResponse } from "next/server";
import { URL } from 'url';

export async function POST(req){
    
    const body = await req.json();
    console.log(body);

    return NextResponse.json(body);
}