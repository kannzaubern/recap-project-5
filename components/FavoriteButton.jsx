import { Heart } from "@/assets/heart";

export default function FavoriteButton({ isFavorite, onClick }) {
  return <Heart isFavorite={isFavorite} onClick={onClick} />;
}
