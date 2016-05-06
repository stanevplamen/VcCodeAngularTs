import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {SlickGridDirective} from '../shared/slickgrid/slickgrid.directive';

declare var Slick;

@Component({
    templateUrl: 'app/surfs/surfs.component.html',
    styleUrls: ['app/surfs/slickgrid.example.css'],
    directives: [ROUTER_DIRECTIVES, SlickGridDirective]
})
export class SurfsComponent implements OnInit {
    
    static pazoStatic: string = 'surfs static';
    columns: any[];
    data:any[];

    constructor() {
        console.log(`This is ${SurfsComponent.pazoStatic}`);
    }

    toggleImage(): void {
 
    }

    ngOnInit(): void {

        this.columns = [
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

        var MS_PER_DAY = 24 * 60 * 60 * 1000;
        this.data = [];
        for (var i = 0; i < 500; i++) {
            var startDate = new Date(new Date("1/1/1980").getTime() + Math.round(Math.random() * 365 * 25) * MS_PER_DAY);
            var endDate = new Date(startDate.getTime() + Math.round(Math.random() * 365) * MS_PER_DAY);
            this.data[i] = {
                title: "Task " + i,
                duration: Math.round(Math.random() * 30) + 2,
                percentComplete: Math.round(Math.random() * 100),
                start: startDate,
                finish: endDate,
                effortDriven: (i % 5 == 0)
            };
        }
        console.log('slickgrid data', this.data, this.columns);
       
    }
    

}
