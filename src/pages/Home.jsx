import { useState } from "react";
import nftData from "../data/nftData";
import NFTCard from "../components/NFTCard";
import FilterBar from "../components/FilterBar";
import "../styles/app.css";

function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  let filteredNFTs = nftData.filter((nft) =>
    nft.artist.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOrder === "low") {
    filteredNFTs.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredNFTs.sort((a, b) => b.price - a.price);
  }

  if (sortOrder === "az") {
    filteredNFTs.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="container">

      <FilterBar
        search={search}
        setSearch={setSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="gallery">
        {filteredNFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} /> ))}
      </div>

    </div>
  );
}

export default Home;


