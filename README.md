# titanium-os

node.js-style `os` for Titanium. It can serve as a drop-in replacement for node.js `os` for use with [browserify][].

## install

```bash
$ npm install titanium-os
$ cp node_modules/titanium-os/titanium-os.js /path/to/project/Resources/
```

## example

```js
var console = require("titanium-os");
console.log("Hello from %s version %s!", Ti.Platform.name, Ti.Platform.version);
```

[browserify]: https://github.com/substack/node-browserify
[os-browserify]: https://github.com/CoderPuppy/os-browserify