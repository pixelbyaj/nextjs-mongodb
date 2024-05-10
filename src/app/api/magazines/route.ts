import Magazine, { IMagazine } from "./magazine"
export const dynamic = 'force-dynamic' // defaults to auto

export async function GET(request: Request) {
    try {
        const data = await Magazine.find({});
        return Response.json({ message: data });
    } catch (error) {
        console.error(error);
        return Response.json({ message: null });
    }

}

export async function POST(request: Request) {
    const body: IMagazine = await request.json();
    console.log(body)
    const magazine = await Magazine.create({
        title: body.title,
        image: body.image,
        articles: body.articles
    });
    
    return Response.json(magazine);

}
