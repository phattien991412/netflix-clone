import prismadb from '@/lib/prismadb';
import serverAuth from "@/lib/serverAuth";

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);

      const { movieId } = req.body;
  
      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });
  
      if (!existingMovie) {
        throw new Error('Invalid ID');
      }
  
      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: {
            push: movieId
          }
        }
      });
  
      return res.status(200).json(user);
    }

    if (req.method === 'PUT') {
      const { currentUser } = await serverAuth(req, res);

      const { movieId } = req.body;

      const existingMovies = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });

      if (!existingMovies) {
        throw new Error('Invalid ID');
      }

      const updatedFavoriteIds = currentUser.favoriteIds.filter(id => id !== existingMovies.id);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        }
      });

      return res.status(200).json(updatedUser);
    }
    
    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}