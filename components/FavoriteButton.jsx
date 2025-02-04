import Image from "next/image";
import { Heart } from "@/assets/heart";

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      <Heart isFavorite={isFavorite} />
      {/* <Image
        src={isFavorite ? "/assets/heart.svg" : "/assets/fillheart.svg"}
        alt={isFavorite ? "Unfavorite" : "Favorite"}
        width={24}
        height={24}
      /> */}
    </button>
  );
}
