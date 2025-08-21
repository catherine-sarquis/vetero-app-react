import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.city} is ${response.data.temperature.current} and I wonder if this will work`
    );
  }

  const apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=c3ae07f646b904bce9d83oat69c5764d`;
  axios.get(apiURL).then(handleResponse);
}
