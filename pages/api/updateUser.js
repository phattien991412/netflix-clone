import prismadb from "@/lib/prismadb"
import serverAuth from "@/lib/serverAuth";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end()
    }

    try {
        const { currentUser } = await serverAuth(req, res);
        const updateUser = await prismadb.user.update({
            where: {
                email: currentUser.email
            },
            data: {
                name: req.body.data
            }
        })

        return res.status(200).json(updateUser)
    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}