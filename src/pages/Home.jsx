import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ShowList from "../components/ShowList";

export const loader = async () => {
  console.log("loader chala");
  // const [showsData, setShowsData] = useState({
  //   showData: null,
  //   isError: false,
  //   errorMsg: "",
  // });
  const endpoint = "https://api.tvmaze.com/search/shows?q=all";
  try {
    const response = await axios.get(endpoint);
    return {
      showData: response.data,
      isError: false,
      errorMsg: "",
    };
  } catch (error) {
    return {
      showData: error.response.data,
      isError: true,
      errorMsg: "",
    };
  }
};

function Home() {
  const responseData = useLoaderData();
  return (
    <div>
      {!responseData?.isError && <ShowList results={responseData.showData} />}
    </div>
  );
}

export default Home;
