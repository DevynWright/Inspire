import ImageService from "../services/image-service.js";
import store from "../store.js"
import Image from "../models/image.js"
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
function _drawImage(){
    let template =store.State.image.url;
    document.body.style.backgroundImage =` url("${template}")`;
    console.log("drawimage")
}
export default class ImageController {
    constructor(){
        store.subscribe("image", _drawImage)
        ImageService.getImageAsync();
    }
}
