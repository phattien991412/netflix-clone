import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    await serverAuth(req, res);

    const listMovies = await prismadb.movie.findMany();

    return res.status(200).json(listMovies);
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}