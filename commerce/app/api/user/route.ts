import { prisma } from "lib/prisma";
import { NextResponse } from "next/server";


//Postar usuario
export async function POST(req: Request) {
    const { nome, email, password } = await req.json();

    const res = await prisma.user.create({
        data: {
            nome: nome,
            email: email,
            password: password,
        },
    });
    return NextResponse.json(res);
}

//Buscar usuario
export async function GET() {
    const res = await prisma.user.findMany();
    return NextResponse.json(res);
}

export async function DELETE(req: Request) {
    const { id } = await req.json();
    
    const res = await prisma.user.delete({
        where: {
            id: id
        },
    });
    return NextResponse.json(res)
}
