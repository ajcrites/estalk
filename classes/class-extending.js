let Transform = require("stream").Transform;

class TransformStreamImpl extends Transform {
    _transform(chunk, enc, callback) {
        this.push(chunk.reverse());
        callback();
    }
}

process.stdin
    .pipe(new TransformStreamImpl)
    .pipe(process.stdout);
