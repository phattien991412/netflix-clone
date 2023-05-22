import useFavorites from "@/hooks/useFavorites";
import useUserCurrent from "@/hooks/useUserCurrent";
import { NotificationToast } from "@/modules/Notification";
import axios from "axios";
import React, { useCallback, useMemo, useState } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai"

const FavoriteButton = ({ movieId, setLoading }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useUserCurrent();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    setLoading(true);
    let response;

    if (isFavorite) {
      response = await axios.put("api/favorites", { movieId });
    } else {
      response = await axios.post("api/favorites", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds
    });
    mutateFavorites();
    setLoading(false);
    NotificationToast.fire({
      toast: true,
      position: "top-right",
      icon: "success",
      title: `${isFavorite ? "Remove from Favorite success" : "Add to Favorite success"}`
    });
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
