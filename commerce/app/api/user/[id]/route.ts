import { prisma } from "lib/prisma";

export async function PATCH(req:Request) {
    const {  nome , password } = await req.json();
    const data = await data.json
    const res = await prisma.user.update({
        where: {
            nome: nome,
            password: password
        },
});
}