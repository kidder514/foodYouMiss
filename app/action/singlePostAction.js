import axios from "axios";


export const openImgLayer = (imgs,imgIndex) => {
	document.body.style.overflow = "hidden";
    return {
    	type: "OPEN_IMG_LAYER",
    	imgLayerIsOpen:true,
    	imgs,
    	imgIndex
    }
}

export const closeImgLayer = () => {
	document.body.style.overflow = "initial";
    return {
    	type: "CLOSE_IMG_LAYER",
    	imgLayerIsOpen:false,
    	imgs:"",
    	imgIndex:""
    }
}