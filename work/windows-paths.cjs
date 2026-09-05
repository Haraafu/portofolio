// Use Windows-native path resolution only inside the authorized project.
const fs = require('node:fs');
const path = require('node:path');
const original = fs.realpathSync;
const root = 'D:/falah/Documents/Projackssss/portofolio'.replaceAll('/', path.sep).toLowerCase();
function nativeProjectPath(value, options) {
  const resolved = path.resolve(String(value)).toLowerCase();
  return resolved === root || resolved.startsWith(root + path.sep)
    ? original.native(value, options) : original(value, options);
}
nativeProjectPath.native = original.native;
fs.realpathSync = nativeProjectPath;
