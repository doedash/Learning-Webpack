export function element(tagName, className = "", children, id = "") {
  const node = document.createElement(tagName);
  node.className = className;
  node.id = id;
}
