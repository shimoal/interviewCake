// Given the array of IDs, which contains many duplicate integers and one unique integer, find the unique integer.
// The IDs are not guaranteed to be sorted or sequential. Orders aren't always fulfilled in the order they were received, and some deliveries get cancelled before takeoff.

function findMissingDrone(ids) {
  var uniqueIDs = {};

  ids.forEach(function(id) {
    if (!uniqueIDs[id]) {
      uniqueIDs[id] = 1;
    } else {
      delete uniqueIDs[id];
    }

  });

  for (var id in uniqueIDs) {
    return Number(id);
  }

  return null;
}

module.exports = findMissingDrone;
