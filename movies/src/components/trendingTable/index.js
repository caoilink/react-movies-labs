import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getTrendingMovies } from '../../api/tmdb-api';

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'overview', headerName: 'Overview', width: 600 }
]

const DataGridTrending = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
   // fetch(getTrendingMovies())
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={100}
      />
    </div>
  )
}

export default DataGridTrending;