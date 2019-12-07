const numRegions = (graph) => {
    let v = new Set();
    let regions = 0;

    for (let node in graph){
        if (isNewRegion(node, graph, v)) regions++;
    }

    return regions;
}

const isNewRegion = (node, graph, visited) => {
        if (visited.has(node)) return false;

        visited.add(node);

        graph[node].forEach((neighbor) => {
            isNewRegion(neighbor, graph, visited);
        });

        return true;
    };

module.exports = {
    numRegions
};