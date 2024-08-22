import React from 'react'
import { NextResponse } from 'next/server'
let products=[
    {
        id:1,
        user_name:"David",
        age:20
    },
    {
        id:2,
        user_name:"Linda",
        age:22
    }
];
export async function GET() {
  return NextResponse.json({
    data:products
  })
}
