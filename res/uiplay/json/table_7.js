jui.ready([ "uix.table" ], function(table) {
    table_7 = table("#table_7", {
        fields: [ "name", "age", "location" ],
        data: [
            { name: "Hong", age: "20", location: "Ilsan" },
            { name: "Jung", age: "30", location: "Seoul" },
            { name: "Park", age: "15", location: "Yeosu" },
            { name: "Kang", age: "32", location: "Seoul" },
            { name: "Song", age: "12", location: "Gwangju" },
            { name: "Yoon", age: "22", location: "Damyang" },
            { name: "Kim", age: "33", location: "Busan" },
            { name: "Hwang", age: "21", location: "Seoul" }
        ],
        resize: true,
        sort: [ 0, 1, 2 ],
        scroll: true,
        scrollHeight: 150,
        event: {
            sort: function(column, e) {
                var className = {
                    "desc": "icon-arrow1",
                    "asc": "icon-arrow3"
                }[column.order];

                $(column.element).children("i").remove();
                $(column.element).append("<i class='" + className + "'></i>");
            }
        }
    });
});