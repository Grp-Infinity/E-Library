// ExploreItem.js
import React from "react";
import ExploreBook from "./ExploreBook";

const ExploreItem = ({ book, openPdf }) => {
  return <ExploreBook book={book} openPdf={openPdf} />;
};

export default ExploreItem;