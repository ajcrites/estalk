import defaultStreamStuff, {Transform, Writable as Writer} from "stream";
import http, * as otherHttpStuff from "http";

console.log(undefined !== defaultStreamStuff, undefined !== Transform, undefined !== Writer);
console.log(undefined !== http, undefined !== otherHttpStuff);
