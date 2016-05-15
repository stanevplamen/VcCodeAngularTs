import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { ControlGroup, Control } from 'angular2/common';

interface ValidationResult {
 [key:string]:boolean;
}

@Injectable()
export class NumericValidator {
 
    static isNumeric(control: Control): ValidationResult { 
        var val = control.value ;
        
        if ( !(!isNaN(parseFloat(val)) && isFinite(val)) ){
            return { valid : false };
        }
        
    return null;
    }
}