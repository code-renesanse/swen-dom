/**
 * 
 * @param {String} type DOM type 
 * @param {String} id DOM id
 * @returns newly created DOM element
 */
export let createElement = (type: string, id: string) => {
    let e = document.createElement(type);
    e.id = id;
    return e;
};