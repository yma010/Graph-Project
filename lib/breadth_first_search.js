function breadthFirstSearch(startingNode, targetVal) {
 let q = [ startingNode ];
 let v = new Set();

 while(q.length) {
     let node = q.shift();
     if(v.has(node)) continue;
     v.add(node);
     if(node.val === targetVal) return node;

     q.push(...node.neighbors);
 }

 return null;``
}

module.exports = {
    breadthFirstSearch
};