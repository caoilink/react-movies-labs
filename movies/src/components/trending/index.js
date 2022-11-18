const ParentComponent = (props) => {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [columns, setColumns] = useState([]);
   
    const getData = async () => {
      await axios.get("https://reqres.in/api/users?page=1").then((resp) => {
      let data = resp.data.data.sort((a, b) =>
       a.first_name.localeCompare(b.first_name)
     );
      let cols = Object.keys(data[0]).map((key) => {
        return {
          Header: key.toUpperCase(),
          accessor: key
        };
      });
      setUserData(data);
      setColumns(cols);
      setLoading(false);
    }

      
   useEffect(() => {
    setLoading(true);
    getData();
   }, []);
   
   return(
    <TableComponent columns={columns} userData={userData} />
   )}