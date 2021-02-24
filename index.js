// Code your solution here
function findMatching(drivers, string){
   return drivers.filter(name => name.toLowerCase() == string.toLowerCase() );
}

function fuzzyMatch(drivers, string) {
    return drivers.filter (name => name.startsWith(string) == string.startsWith(string));
}

function matchName(drivers, string) {
    return drivers.filter(drivers => drivers.name == string)
}