import fs from 'fs';
import path from 'path';

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'types.json')));

const names = {};
const oids = {};
const descriptions = {};

for (let type of raw) {
  names[type.oid] = type.name;
  oids[type.name] = type.oid;
  descriptions[type.name] = type.description;
}

const api = { names: names,
              oids: oids,
              descriptions: descriptions };

export default api;
