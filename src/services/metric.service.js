import { db } from "../database/db";

export class MetricService {
  async handleGetMetric({ key }) {
    let ret = { value: 0 };
    try {
      const data = await db.getRecords(key);

      if (data && data.length > 0) {
        const total = data.reduce((s, e) => (s += e.value), 0);

        ret = { value: Math.round(total) };
      }
      return ret;
    } catch (error) {
      // Log it somewhere
      //   console.log(error);
    }

    return ret;
  }

  async handlePostMetric({ key, value }) {
    const ret = await db.updateRecords(key, value);
    return {};
  }
}
