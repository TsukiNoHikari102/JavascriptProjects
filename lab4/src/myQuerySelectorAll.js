function myQuerySelectorAll(selector, context = document) 
{
  const parts = selector.trim().split(/\s+/);
  const results = [];

  function matchesPart(node, part) 
  {
    if (!node || node.nodeType !== 1) return false; 

    const subParts = part.match(/([a-zA-Z]+)|(\.[a-zA-Z0-9-]+)|(\#[a-zA-Z0-9-]+)/g) || [];
    return subParts.every(subPart => {
      if (subPart.startsWith('.')) {
        return node.classList && node.classList.contains(subPart.slice(1));
      } else if (subPart.startsWith('#')) {
        return node.id === subPart.slice(1);
      } else {
        return node.tagName && node.tagName.toLowerCase() === subPart.toLowerCase();
      }
    });
  }

  function traverse(node, selectorParts, partIndex) 
  {
    if (!node || partIndex >= selectorParts.length) return;

    if (matchesPart(node, selectorParts[partIndex])) {
      if (partIndex === selectorParts.length - 1) {
        results.push(node);
      } else {
        for (const child of node.children) {
          traverse(child, selectorParts, partIndex + 1);
        }
      }
    }

    for (const child of node.children) {
      traverse(child, selectorParts, partIndex);
    }
  }

  traverse(context, parts, 0);
  return results;
}

module.exports = myQuerySelectorAll;