// https://github.com/mleibman/SlickGrid/
// https://mleibman.github.io/SlickGrid/examples/

import { Directive, ElementRef, Input, OnInit } from 'angular2/core';

declare var Slick;

@Directive({
    selector: '[slickgrid-widget]'
})
export class SlickGridDirective implements OnInit {
    
    @Input('slickgrid-widget') data: any;
    grid: any;
    
    constructor(private el: ElementRef) {

    }
    
     ngOnInit(): void {
     
        this.data.data = $.extend({
            enableCellNavigation: true,
            enableColumnReorder: false,
            multiColumnSort: true
        }, this.data.data );
        
      this.grid = new Slick.Grid("#myGrid", this.data.data , this.data.columns , this.data.options);
            this.grid.onSort.subscribe(function (e, args) {
            var cols = args.sortCols;
            this.data.data .sort(function (dataRow1, dataRow2) {
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
            this.grid.invalidate();
            this.grid.render();
            });
    }

}