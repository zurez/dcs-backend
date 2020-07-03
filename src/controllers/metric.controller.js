import { validationResult, param } from "express-validator";
import { MetricService } from "../services/metric.service";

class MetricController {
  constructor() {
    this.service = new MetricService();
    this.getMetricSum = this.getMetricSum.bind(this);
    this.postMetricSum = this.postMetricSum.bind(this);
  }
  async getMetricSum(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const ret = await this.service.handleGetMetric(req.params);
      return res.send(ret);
    } catch (error) {
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }

  async postMetricSum(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const params = { key: req.params.key, value: req.body.value };
      const ret = await this.service.handlePostMetric(params);
      return res.send(ret);
    } catch (error) {
      return res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
}

export default MetricController;
