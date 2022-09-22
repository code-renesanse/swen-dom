import { API } from "swen-types";
import { getDomFromReference } from "../../getters";
import { clearAnimation } from "../clearAnimation";
import { setAnimation } from "../setters";

/**
 * 
 * @param {DOMElement} dom 
 * @param {Sketchfab API object} api - JSON object holding all application data 
 */
export let addPopOutAnimationToDOM = (dom: HTMLElement, api: API) => {
    setAnimation(dom, 'pop-out', api ? `${api.animationSpeed}ms` : '100ms', 'linear');
};

/**
 * 
 * @param {String} alertText - text message to be dispalyed
 * @param {String} affectedDomElementId - DOM element id
 * @param {Sketchfab API object} api - JSON object holding all application data  
 */
export let playPopupNotValidAnimation = (alertText: string, affectedDomElementId: string, api: API) => {
    let dom = getDomFromReference(affectedDomElementId);
    addPopOutAnimationToDOM(dom, api);
    setTimeout(() => {
        clearAnimation(dom);
        setTimeout(() => {
            alert(alertText);
        }, 250);
    }, api.animationSpeed);  
};