import { useParams } from "react-router-dom";
import Search from "../components/Search";

const SearchView = () => {
  const param = useParams();
  console.log(param.query);
  return <div>SORRY !!, Under Uaintenance</div>;
};

export default SearchView;
