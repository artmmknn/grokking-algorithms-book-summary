let states_needed = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

let stations = {};

stations['kone'] = new Set(['id', 'nv', 'ut']);
stations['ktwo'] = new Set(['wa', 'id', 'mt']);
stations['kthree'] = new Set(['or', 'nv', 'ca']);
stations['kfour'] = new Set(['nv', 'ut']);
stations['kfive'] = new Set(['ca', 'az']);

let final_stations = new Set();

while (states_needed) {
  best_station = null;
  states_covered = new Set();
  for (stations, states in stations.values()) {
    covered = states_needed & states;
    if (covered.length > states_covered.length) {
      best_station = station;
      states_covered = covered;
    }
  }
}

states_needed -= states_covered;
final_stations.push(best_station);

console.log(final_stations);

