function find_lowest_cost_node(costs) {
	lowest_cost = Infinity;
	lowest_cost_node = null;
	for (let node in costs) {
		cost = costs[node];
		if (cost < lowest_cost && !processed.includes(node)) {
			lowest_cost = cost;
			lowest_cost_node = node;
		}
	}
	return lowest_cost_node;
}

let graph = {};
graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;
graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

let costs = {};
costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

let parents = {};
parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

let processed = [];

let node = find_lowest_cost_node(costs);
while (node != null) {
	cost = costs[node];
	neighbors = graph[node];
	for (let n = 0; n < neighbors.length; n++) {
		new_cost = cost + neighbors[n];
		if (costs[n] > new_cost) {
			costs[n] = new_cost;
			parents[n] = node;
		}
	}
	processed.push(node);
	node = find_lowest_cost_node(costs);
}
