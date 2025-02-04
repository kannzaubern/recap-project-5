import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceCard({ artPiece, isFavorite, toggleFavorite }) {
  return (
    <Card>
      {/* Favorite Button */}
      <FavoriteWrapper>
        <FavoriteButton isFavorite={isFavorite} onClick={toggleFavorite} />
      </FavoriteWrapper>

      {/* Image */}
      <Link href={`/artdetails/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name || "Artwork"}
          width={600}
          height={300}
          objectFit="cover"
        />
      </Link>

      {/* Card Content */}
      <Content>
        <Title>{artPiece.name}</Title>
        <Subtitle>{artPiece.artist}</Subtitle>
      </Content>
    </Card>
  );
}

// Styled components
const Card = styled.div`
  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  max-height: 450px;
  margin: 16px auto;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0;
`;
