import fs from "fs";
import path from "path";
const filepath = path.join(__dirname, "/metric.data.json");

const bufferInMiliSecond = 3600000;

async function getRecords(key = "") {
  let ret = require(filepath);
  if (key) {
    const now = Date.now();
    const keyData = ret[key];

    if (keyData) {
      ret = keyData.filter((e) => now - e.timeStamp < bufferInMiliSecond);
    } else {
      ret = [];
    }
  }

  return ret;
}
async function updateRecords(key, value) {
  try {
    const records = await getRecords();
    const record = { value, timeStamp: Date.now() };
    if (records[key]) {
      records[key].push(record);
    } else {
      records[key] = [record];
    }

    fs.writeFile(filepath, JSON.stringify(records), (err) => {
      if (err) throw new Error(err);
    });
  } catch (error) {
    console.log(error);

    throw new Error(error.message);
  }
  return true;
}
export const db = {
  getRecords,
  updateRecords,
  clean: console.log,
};
