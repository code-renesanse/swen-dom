/**
 *
 * @param {String} type DOM type
 * @param {String} id DOM id
 * @returns newly created DOM element
 */
export const createElement = (type: string, id: string): Element => {
  const e = document.createElement(type);
  e.id = id;
  return e;
};
