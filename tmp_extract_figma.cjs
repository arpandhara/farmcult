const fs = require('fs');
const dataStr = fs.readFileSync('C:/Users/suman/.gemini/antigravity/brain/7fdc6092-25cf-4156-a324-d65795d548dd/.system_generated/steps/35/output.txt', 'utf8');

// The output might not be pure JSON if the tool adds extra text at the beginning like "The output was large and was saved to: ..."
// Wait, the tool response says: "The output was large and was saved to: file:///C:/..."
// So the file AT that location IS the pure JSON. 
let data;
try {
  data = JSON.parse(dataStr);
} catch (e) {
  console.log("Not valid JSON", e.message);
  process.exit(1);
}

const images = [];
function traverse(node) {
  if (!node) return;
  if (node.fills && Array.isArray(node.fills)) {
    for (const fill of node.fills) {
      if (fill.type === 'IMAGE') {
        images.push({
          id: node.id,
          name: node.name,
          imageRef: fill.imageRef
        });
      }
    }
  }
  if (node.children) {
    node.children.forEach(traverse);
  }
}

if (data.nodes) {
  Object.values(data.nodes).forEach(n => traverse(n.document));
} else {
  traverse(data);
}

console.log(JSON.stringify(images, null, 2));
