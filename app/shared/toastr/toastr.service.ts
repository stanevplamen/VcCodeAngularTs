// https://github.com/CodeSeven/toastr
// http://codeseven.github.io/toastr/demo.html

import { Injectable, OnInit } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

declare var toastr;

@Injectable()
export class ToastrService  {

    constructor() { }

    show(type:string, message, options?: any) {
        toastr.options = jQuery.extend({
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "1000",
            "hideDuration": "2000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }, options);
                
      toastr[type](message);       
    }
}
