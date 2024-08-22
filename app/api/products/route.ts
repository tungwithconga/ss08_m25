import React from 'react'
import { NextResponse } from 'next/server'
/*
 Các phương thức làm việc với API
 1,GET:Lấy về
 2,POST:Thêm vào
 3,PUT:Cập nhật tất cả
 4,PATCH:Sửa 1 phần
 5,DELETE:Xóa 
 Tên của function là tên của phương thưc và viết hoa hết lên
*/
//Data lay tu dau
let products=[
    {
        id:1,
        name:"Product 1",
        price:100
    },
    {
        id:2,
        name:"Product 2",
        price:200
    },
    {
        id:3,
        name:"Product 3",
        price:300
    }
];
export async function GET() {
  return NextResponse.json({
    message:"Lay danh sach san pham thanh cong !",
    data:products
  })
  
}
