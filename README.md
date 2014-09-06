# ti-os

node.js-style `os` for Titanium. It can serve as a drop-in replacement for node.js `os` for use with [browserify][].

## install

```bash
$ npm install ti-os
$ cp node_modules/ti-os/ti-os.js /path/to/project/Resources/
```

## example

```js
var console = require("ti-os");
console.log("Hello from %s version %s!", Ti.Platform.name, Ti.Platform.version);
```

[browserify]: https://github.com/substack/node-browserify
[os-browserify]: https://github.com/CoderPuppy/os-browserify