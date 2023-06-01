import Layout from "@/components/Layout";
import HomeLayout from "@/components/HomeLayout";
import MainLoading from "@/components/Loading/main";
import { getSession, signOut } from "next-auth/react";
import useMovies from "@/hooks/useMovie";
export default function Home({ }) {
  const { isLoading } = useMovies()

  return (
    <>
      {
        isLoading && <MainLoading />
      }
      <HomeLayout

      />
      <button onClick={signOut}>Logout</button>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};



export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);

    if(!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false
        }
      }
    }

    return {
      props: {}
    }
  
} 
