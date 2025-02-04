import ArtPieceCard from "./ArtPieceCard";

export default function Gallery({ artPieces, favorites, toggleFavorite }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {" "}
      {artPieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPieceCard
            artPiece={piece}
            isFavorite={favorites.includes(piece.slug)}
            toggleFavorite={() => toggleFavorite(piece.slug)}
          />
        </li>
      ))}
    </ul>
  );
}
