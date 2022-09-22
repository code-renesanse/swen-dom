import { getImageFromImageDictionary } from "swen-dictionary";
import { API } from "swen-types";
import { addClass } from "../class";
import { createElement } from "../create";

/**
 * 
 * @param {String} modelId - model identificator 
 * @param {String} alt - image alt  
 * @returns img HTML element
 */
 export let createImageHolder = (modelId: string, alt: string, api: API) => {
    let id = `card-img-${document.getElementsByTagName('img').length}`;
    let cardImg = createElement('img', id) as HTMLImageElement;
    let imgRef = getImageFromImageDictionary(modelId, api);
    imgRef ? imgRef = 'https://via.placeholder.com/512x256.png' : '';
    cardImg.src = imgRef;
    cardImg.alt = alt;
    addClass(cardImg, [
        'w-100',
        'h-100'
    ]);
    return cardImg;
};