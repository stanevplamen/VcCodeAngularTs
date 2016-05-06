import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

declare var Slick;

@Component({
    templateUrl: 'app/surfs/surfs.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SurfsComponent implements OnInit {
    
    static pazoStatic: string = 'surfs static';


    constructor() {
        console.log(`This is ${SurfsComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {
       
        var grid;
        var columns = [
            { id: "title", name: "Title", field: "title", sortable: true },
            { id: "duration", name: "Duration", field: "duration", sortable: true, formatter: dayFormatter },
            { id: "%", name: "% Complete", field: "percentComplete", sortable: true },
            { id: "start", name: "Start", field: "start", formatter: dateFormatter, sortable: true },
            { id: "finish", name: "Finish", field: "finish", formatter: dateFormatter, sortable: true },
            { id: "effort-driven", name: "Effort Driven", field: "effortDriven", sortable: true }
        ];
        function dayFormatter(row, cell, value, columnDef, dataContext) {
            return value + ' days';
        }
        function dateFormatter(row, cell, value, columnDef, dataContext) {
            return value.getMonth() + '/' + value.getDate() + '/' + value.getFullYear();
        }
        var options = {
            enableCellNavigation: true,
            enableColumnReorder: false,
            multiColumnSort: true
        };
        $(function () {
            var MS_PER_DAY = 24 * 60 * 60 * 1000;
            var data = [];
            for (var i = 0; i < 500; i++) {
            var startDate = new Date(new Date("1/1/1980").getTime() + Math.round(Math.random() * 365 * 25) * MS_PER_DAY);
            var endDate = new Date(startDate.getTime() + Math.round(Math.random() * 365) * MS_PER_DAY);
            data[i] = {
                title: "Task " + i,
                duration: Math.round(Math.random() * 30) + 2,
                percentComplete: Math.round(Math.random() * 100),
                start: startDate,
                finish: endDate,
                effortDriven: (i % 5 == 0)
            };
            }
            console.log('slickgrid data', data, columns, options);
            grid = new Slick.Grid("#myGrid", data, columns, options);
            grid.onSort.subscribe(function (e, args) {
            var cols = args.sortCols;
            data.sort(function (dataRow1, dataRow2) {
                for (var i = 0, l = cols.length; i < l; i++) {
                var field = cols[i].sortCol.field;
                var sign = cols[i].sortAsc ? 1 : -1;
                var value1 = dataRow1[field], value2 = dataRow2[field];
                var result = (value1 == value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                if (result != 0) {
                    return result;
                }
                }
                return 0;
            });
            grid.invalidate();
            grid.render();
            });
        })
       
    }
    

}
