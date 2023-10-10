import { useParams } from "react-router-dom";

const SearchView = () => {
  const param = useParams();
  console.log(param.query);
  return <div>SORRY !!, Under Uaintenance</div>;
};

export default SearchView;
