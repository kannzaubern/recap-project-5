import Image from "next/image";

export default function ArtPieces({ title, image, artist }) {
  return (
    <main>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={400} height={300} />
      <h3>{artist}</h3>
    </main>
  );
}
