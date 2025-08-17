import CardComponent from "./CardComponent";
import rest_obj_list from "../../utils/data";
import { useEffect, useState } from "react";
import { swiggy_api_link } from "../../utils/links";

const BodyComponent = () => {
  let [my_list, setmy_list] = useState([]);
  let [search_data, setsearch_data] = useState("");
  let [filter_data, setfilter_data] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(swiggy_api_link);
      const res_json = await data.json();

      const restaurants =
        res_json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setmy_list(restaurants);
      setfilter_data(restaurants);
      console.log(restaurants);
    } catch (err) {
      console.log(err);
    }
  };

  if (my_list?.length === 0) {
    {
      return <h1>Loading page ..........</h1>;
    }
  }

  return (
    <div>
      <div className="filter_section">
        <div className="search_container">
          <input
            type="text"
            value={search_data}
            onChange={(e) => {
              setsearch_data(e.target.value);
            }}
          ></input>
          <button
            className="btn_search"
            onClick={() => {
              const filterd_data = my_list?.filter((rest) => {
                return rest?.info?.name?.toLowerCase()?.includes(search_data);
              });
              setfilter_data(filterd_data);
              setsearch_data("");
            }}
          >
            Search
          </button>
        </div>
        <button
          id="search-btn"
          onClick={() => {
            const result_list = my_list?.filter(
              (rest) => rest?.info?.avgRating > 4.2
            );
            setfilter_data(result_list);
          }}
        >
          top rated resturant
        </button>
      </div>

      <div id="card-container">
        {filter_data?.map((rest) => (
          <CardComponent key={rest?.info?.id} rest_obj={rest} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
