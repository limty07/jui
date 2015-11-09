var chart = jui.include("chart.builder");

chart("#chart", {
    padding: 100,
    axis : {
        x : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ],
            line : true,
            orient : "bottom"
        },
        y : {
            type : "range",
            domain : "total",
            step : 5,
            line : true,
            orient : "left"
        },
        z : {
            type : "block",
            domain : [ "sales", "profit", "total" ],
            line: true
        },
        data : [
            { sales: 0, profit: 15, total: 20 },
            { sales: 15, profit: 6, total: 20 },
            { sales: 8, profit: 10, total: 20 },
            { sales: 18, profit: 5, total: 20 }
        ],
        depth: 300
    },
    brush : {
        type: "polygon.column",
        target : [ "sales", "profit", "total" ]
    },
    widget : [{
        type : "polygon.rotate"
    }, {
        type : "tooltip"
    }],
    style : {
        gridXAxisBorderWidth: 1,
        gridYAxisBorderWidth: 1,
        gridZAxisBorderWidth: 1
    }
});