import ChartCategory from "../constants/chart/ChartCategories";
import ChartType from "../constants/chart/ChartTypes";

class Chart<Type> {
  private readonly _category;

  private readonly _type;

  private readonly _name;

  private _data;

  constructor(
    category: ChartCategory,
    type: ChartType,
    name: string,
    data: Type[] = []
  ) {
    this._category = category;
    this._type = type;
    this._name = name;
    this._data = data;
  }

  public get category() {
    return this._category;
  }

  public get type() {
    return this._type;
  }

  public get name() {
    return this._name;
  }

  get data() {
    return this._data;
  }

  set data(chartData: Type[]) {
    this._data = chartData;
  }
}

export default Chart;
