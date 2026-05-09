import { useParams, Link } from "react-router-dom";
import nftData from "../data/nftData";

function NFTDetails() {
  const { id } = useParams();

  const nft = nftData.find(
    (item) => item.id === Number(id)
  );

  if (!nft) {
    return <h1>NFT Not Found</h1>;
  }

  return (
    <div className="details-page">
      <img src={nft.image} alt={nft.name} />
      <div className="details-content">
        <h1>{nft.name}</h1>
        <p className="details-artist">
          Artist: {nft.artist}
        </p>
        <p className="description">
          {nft.description}
        </p>

        <h2>{nft.price} ETH</h2>

        <Link to="/">
          <button className="back-btn">
            Back
          </button>
        </Link>

      </div>
    </div>
  );
}

export default NFTDetails;
