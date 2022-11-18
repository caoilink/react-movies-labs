//import './TrendingHomePage.css';
import { TableRow } from "@mui/material";
import React from "react";
import DataGridTrending from '../components/trendingTable';

function TrendingHomePage() {
  return (
    <div className="TrendingHomePage">
      <DataGridTrending/>
    </div>
  );
}

export default TrendingHomePage;

