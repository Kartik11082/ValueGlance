import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./FinancialDataTable.css";

const FinancialDataTable = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data);
    const [filters, setFilters] = useState({
        startDate: "",
        endDate: "",
        minRevenue: "",
        maxRevenue: "",
        minNetIncome: "",
        maxNetIncome: "",
    });

    useEffect(() => {
        applyFilters();
    }, [data]);

    const [sortConfig, setSortConfig] = useState({
        key: "date",
        direction: "ascending",
    });

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        let filtered = data;
        if (filters.startDate)
            filtered = filtered.filter(
                (item) => new Date(item.date) >= new Date(filters.startDate)
            );
        if (filters.endDate)
            filtered = filtered.filter(
                (item) => new Date(item.date) <= new Date(filters.endDate)
            );
        if (filters.minRevenue)
            filtered = filtered.filter(
                (item) => item.revenue >= parseFloat(filters.minRevenue)
            );
        if (filters.maxRevenue)
            filtered = filtered.filter(
                (item) => item.revenue <= parseFloat(filters.maxRevenue)
            );
        if (filters.minNetIncome)
            filtered = filtered.filter(
                (item) => item.netIncome >= parseFloat(filters.minNetIncome)
            );
        if (filters.maxNetIncome)
            filtered = filtered.filter(
                (item) => item.netIncome <= parseFloat(filters.maxNetIncome)
            );

        setFilteredData(filtered);
    };

    const sortData = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }

        const sorted = [...filteredData].sort((a, b) => {
            if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
            if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
            return 0;
        });

        setSortConfig({ key, direction });
        setFilteredData(sorted);
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Filters</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <input
                        type="date"
                        name="startDate"
                        value={filters.startDate}
                        onChange={handleFilterChange}
                        placeholder="Start Date"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="date"
                        name="endDate"
                        value={filters.endDate}
                        onChange={handleFilterChange}
                        placeholder="End Date"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="minRevenue"
                        value={filters.minRevenue}
                        onChange={handleFilterChange}
                        placeholder="Min Revenue"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="maxRevenue"
                        value={filters.maxRevenue}
                        onChange={handleFilterChange}
                        placeholder="Max Revenue"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="minNetIncome"
                        value={filters.minNetIncome}
                        onChange={handleFilterChange}
                        placeholder="Min Net Income"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="number"
                        name="maxNetIncome"
                        value={filters.maxNetIncome}
                        onChange={handleFilterChange}
                        placeholder="Max Net Income"
                        className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    onClick={applyFilters}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Apply Filters
                </button>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full border-collapse text-left text-sm bg-white">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th
                                className="border-b-8 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("date")}
                            >
                                Date
                            </th>
                            <th
                                className="border-b-2 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("revenue")}
                            >
                                Revenue
                            </th>
                            <th
                                className="border-b-2 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("netIncome")}
                            >
                                Net Income
                            </th>
                            <th
                                className="border-b-2 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("grossProfit")}
                            >
                                Gross Profit
                            </th>
                            <th
                                className="border-b-2 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("eps")}
                            >
                                EPS
                            </th>
                            <th
                                className="border-b-2 border-gray-200 px-4 py-2 cursor-pointer"
                                onClick={() => sortData("operatingIncome")}
                            >
                                Operating Income
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{item.date}</td>
                                <td className="px-4 py-2">{item.revenue}</td>
                                <td className="px-4 py-2">{item.netIncome}</td>
                                <td className="px-4 py-2">{item.grossProfit}</td>
                                <td className="px-4 py-2">{item.eps}</td>
                                <td className="px-4 py-2">{item.operatingIncome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

FinancialDataTable.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            revenue: PropTypes.number.isRequired,
            netIncome: PropTypes.number.isRequired,
            grossProfit: PropTypes.number.isRequired,
            eps: PropTypes.number.isRequired,
            operatingIncome: PropTypes.number.isRequired,
        })
    ).isRequired,
};
export default FinancialDataTable;
