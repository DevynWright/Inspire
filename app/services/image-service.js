import store from "../store.js";
import Image from "../models/image.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImageAsync(){
    let res = await imgApi.get();
    store.commit("image", new Image((res.data)));
    console.log("from store img", store.State.image)
  }
}

const imageService = new ImageService();
export default imageService;
