import axios from "axios";
export async function getIP() {
  return await axios.get(`http://api.ipstack.com/check?access_key=${process.env.REACT_APP_IP_STACK_API}`);
}
