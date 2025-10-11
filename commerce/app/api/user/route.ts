export async function POST(req: Request) {
    const { nome, email, password } = await req.json()
}