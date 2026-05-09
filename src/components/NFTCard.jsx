import { Link } from "react-router-dom";
import "../styles/app.css"
function NFTCard({ nft }) {
  return (
    <div className="card">
      <img src={nft.image} alt={nft.name}/>
      <div className="card-content">
        <h3>{nft.name}</h3>
        <p className="artist">{nft.artist}</p>
        <div className="card-bottom">
          <span>{nft.price} ETH</span>

          <Link to={`/nft/${nft.id}`}>
            <button>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
