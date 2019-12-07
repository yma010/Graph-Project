const maxValue = (node, visited=new Set()) => {
    if (visited.has(node)) return -Infinity;
    visited.add(node);
    let Maxes = node.neighbors.map((neighbors) => maxValue(neighbors, visited));
    return Math.max(node.val, ...Maxes)
}

module.exports = {
    maxValue
};