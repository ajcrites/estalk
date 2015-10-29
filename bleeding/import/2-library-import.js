import defaultStreamStuff, {Transform, Writable as Writer} from "stream";
import defaultHttpStuff, * as otherHttpStuff from "http";

console.log(undefined !== defaultStreamStuff, undefined !== Transform, undefined !== Writer);
console.log(undefined !== defaultHttpStuff, undefined !== otherHttpStuff);
