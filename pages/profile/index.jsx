import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

import CardUser from "@/components/CardUser";
import useUserCurrent from "@/hooks/useUserCurrent";
import MainLoading from "@/components/Loading/main";


export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if(!session) {
    return {
      redirect: {
        destination: "/auth",
        pernament: false
      }
    }
  }

  return {
    props: {}
  }
}

const Profile = () => {
  const router = useRouter();
  const { data: currentUser } = useUserCurrent();

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center h-full justify-center">
      {
        !currentUser?.name && <MainLoading/>
      }
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <CardUser name={currentUser?.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
