import { Component, OnInit }  from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {DatepickerDirective} from '../shared/datepicker/datepicker.directive';

declare var BootstrapDialog;

@Component({
    templateUrl: 'app/bikes/bikes.component.html',
    directives: [ROUTER_DIRECTIVES, DatepickerDirective]
})
export class BikesComponent implements OnInit {
    
    static pazoStatic: string = 'bikes static';
    dateValue:string
    constructor() {
        console.log(`This is ${BikesComponent.pazoStatic}`);
        this.dateValue = "3/13/1983";
    }

    toggleImage(): void {
 
    }
    
    ngOnInit(): void {
        
    }
    
    onDateClicked(dateString){
        
        console.log(dateString);
        console.log(this.dateValue);
    }
    
    showModal(message: string): void {
        //https://nakupanda.github.io/bootstrap3-dialog/
        BootstrapDialog.show({
            title: 'Default Title',
            message: 'Click buttons below.',
            buttons: [{
                label: 'Title 1',
                action: function(dialog) {
                    dialog.setTitle('Title 1');
                }
            }, {
                label: 'Title 2',
                action: function(dialog) {
                    dialog.setTitle('Title 2');
                }
            }]
        });
        
    }
    
    showModalComplex():void {
        
        BootstrapDialog.show({
            title: 'More dialog sizes',
            message: 'Hi Apple!',
            buttons: [{
                label: 'Normal',
                action: function(dialog){
                    dialog.setTitle('Normal');
                    dialog.setSize(BootstrapDialog.SIZE_NORMAL);
                }
            }, {
                label: 'Small',
                action: function(dialog){
                    dialog.setTitle('Small');
                    dialog.setSize(BootstrapDialog.SIZE_SMALL);
                }
            }, {
                label: 'Wide',
                action: function(dialog){
                    dialog.setTitle('Wide');
                    dialog.setSize(BootstrapDialog.SIZE_WIDE);
                }
            }, {
                label: 'Large',
                action: function(dialog){
                    dialog.setTitle('Large');
                    dialog.setSize(BootstrapDialog.SIZE_LARGE);
                }
            }]
        });
    }
    
    showModalOther():void{
        BootstrapDialog.show({
            message: 'I send ajax request!',
            draggable: true,
            buttons: [{
                icon: 'glyphicon glyphicon-send',
                label: 'Send ajax request',
                cssClass: 'btn-primary',
                autospin: true,
                action: function(dialogRef){
                    dialogRef.enableButtons(false);
                    dialogRef.setClosable(false);
                    dialogRef.getModalBody().html('Dialog closes in 5 seconds.');
                    setTimeout(function(){
                        dialogRef.close();
                    }, 5000);
                }
            }, {
                label: 'Close',
                action: function(dialogRef){
                    dialogRef.close();
                }
            }]
        });
    }
}
