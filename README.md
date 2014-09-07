# titanium-os

node.js-style `os` for Titanium. It can serve as a drop-in replacement for node.js `os` for use with [browserify][].

## install

```bash
$ npm install titanium-os
$ cp node_modules/titanium-os/titanium-os.js /path/to/project/Resources/
```

## example

```js
var os = require("titanium-os");
console.log(os.platform() + ' is the same as ' + Ti.Platform.name);
```

[browserify]: https://github.com/substack/node-browserify
