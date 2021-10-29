let graph = {};

graph['you'] = ['alice', 'bob', 'clarie'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['clarie'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function person_is_seller(name) {
	return name[name.length - 1] == 'm';
}

function search(name) {
	let search_queue = [];
	search_queue = search_queue.concat(graph[name]);
	let searched = [];

	while (search_queue) {
		person = search_queue.shift();
		if (!searched.includes(person)) {
			if (person_is_seller(person)) {
				console.log(person + ' is a mango seller!');
				return true;
			} else {
				search_queue = search_queue.concat(graph[person]);
				searched.push(person);
			}
		}
	}
	return false;
}

search('you');
