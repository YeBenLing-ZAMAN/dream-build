import React from "react";
import NextTopLoader from "nextjs-toploader";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#52ab98"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #52ab98,0 0 5px #52ab98"
      zIndex={1600}
    />
  );
};

export default TopLoader;
