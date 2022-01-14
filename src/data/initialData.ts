import ChartCategory from "../constants/chart/ChartCategories";
import ChartType from "../constants/chart/ChartTypes";
import Chart from "../store/ChartStore";
import InitialChartNames from "./InitialChartNames";

const LINE_CHARTS = [
    new Chart(ChartCategory.REVENUE, ChartType.LINE, InitialChartNames.REVENUE_EVERY_DAY, []),
    new Chart(ChartCategory.PROFIT, ChartType.LINE, InitialChartNames.PROFIT_EVERY_WEEK, []),
    new Chart(ChartCategory.SELLER, ChartType.GRAPH, InitialChartNames.TOP_SELLERS, []),
    new Chart(ChartCategory.AD, ChartType.PIE, InitialChartNames.TOP_ADS, []),
]

export default LINE_CHARTS
