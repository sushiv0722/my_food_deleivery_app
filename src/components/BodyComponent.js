import CardComponent from "./CardComponent";
import rest_obj_list from "../../utils/data";
import { useState } from "react";

const BodyComponent = () => {
  let [my_list, setmy_list] = useState(rest_obj_list);
  return (
    <div>
      <button
        id="search-btn"
        onClick={() => {
          const result_list = my_list.filter((rest) => rest.ratings > 4.5);
          setmy_list(result_list);
        }}
      >
        top rated resturant
      </button>

      <div id="card-container">
        {my_list.map((rest) => (
          <CardComponent key={rest.id} rest_obj={rest} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
