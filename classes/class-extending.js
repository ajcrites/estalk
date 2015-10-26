let Transform = require("stream").Transform;

class TransformStreamImpl extends Transform {
    _transform(chunk, enc, callback) {
        this.push(this.reverse(chunk));
        callback();
    }
    reverse(chunk) {
        return chunk.reverse();
    }
}

process.stdin
    .pipe(new TransformStreamImpl)
    .pipe(process.stdout);
