import Model, { attr } from '@ember-data/model';

export default class RizzpieModel extends Model {
  constructor(title, timeframe) {
    this.title = title;
    this.timeframe = timeframe;
  }
  title;
  timeframe;
  discription;
  ingrediense;
  steps;
}
