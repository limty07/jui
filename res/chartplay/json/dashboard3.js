var chart = jui.include("chart.builder");

var dataSource = [
    { title : "Nike", value : 103902, max : 200000 },
    { title : "Adidas", value : 112352, max : 200000 },
    { title : "Converse", value : 121823, max : 200000 },
    { title : "Puma", value : 154092, max : 200000 }
];

var dataSource2 = [
    { date: "Jan", nike: 25, adidas: 42, converse: 51, puma: 69 },
    { date: "Feb", nike: 15, adidas: 43, converse: 53, puma: 58 },
    { date: "Mar", nike: 26, adidas: 30, converse: 47, puma: 54 },
    { date: "Apr", nike: 21, adidas: 50, converse: 60, puma: 48 },
    { date: "May", nike: 24, adidas: 31, converse: 48, puma: 70 },
    { date: "Jun", nike: 26, adidas: 48, converse: 52, puma: 74 },
    { date: "Jul", nike: 33, adidas: 55, converse: 75, puma: 98 },
    { date: "Aug", nike: 25, adidas: 46, converse: 52, puma: 70 },
    { date: "Sep", nike: 15, adidas: 48, converse: 55, puma: 72 },
    { date: "Oct", nike: 25, adidas: 32, converse: 47, puma: 68 },
    { date: "Nov", nike: 22, adidas: 50, converse: 60, puma: 49 },
    { date: "Dec", nike: 24, adidas: 38, converse: 48, puma: 69 }
];

chart("#chart", {
    padding : {
        top : 100
    },
    height : 400,
    series : {
        nike : {
            text : "Nike"
        },
        adidas : {
            text : "Adidas"
        },
        converse : {
            text : "Converse"
        },
        puma : {
            text : "Puma"
        }
    },
    axis : [{
        data : dataSource,
        area : {
            height : "40%"
        }
    }, {
        data : dataSource2,
        x : {
            type : "block",
            domain : "date",
            full : true
        },
        y : {
            type : "range",
            domain : [ 0, 100 ],
            step : 4,
            line : true,
            hide : true
        },
        area : {
            height : "40%",
            y : "42%"
        }
    }],
    brush : [{
        type : "bargauge",
        axis : 0,
        format : function(v) {
            return "$" + (v / 1000).toFixed(1) + "K";
        }
    }, {
        type : "line",
        target : [ "nike", "adidas", "converse", "puma" ],
        symbol : "curve",
        axis : 1,
        animate : true
    }, {
        type : "scatter",
        target : [ "nike", "adidas", "converse", "puma" ],
        size : 5,
        axis : 1
    }],
    widget : [{
        type : "title",
        text : "Company Performance",
        align : "start",
        dy : 50
    }, {
        type : "tooltip",
        brush : 2,
        all : true
    }],
    style : {
        titleFontSize : "16px",
        titleFontWeight : "bold"
    }
});