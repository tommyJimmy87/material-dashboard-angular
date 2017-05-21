import { Component } from '@angular/core';
import {Subject} from 'rxjs/Rx'
import {WebSocketService} from './../../_services/websocket.service';
import {ProgressiveService,Progress} from './../../_services/progressivo.sevice';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    //template: ,
    templateUrl: 'table.component.html',
    providers: [ProgressiveService,WebSocketService]
})

export class TableComponent{

    messages: Progress[] = new Array();

    constructor(private progressiveService: ProgressiveService) {
        progressiveService.messages.subscribe(msg => {
            try {
                var message = JSON.parse(JSON.parse(msg));
                var founded = false;
                this.messages.forEach(element => {
                    if(element.idtreno === message.idtreno){
                        founded = true;
                        element.progressivo = message.progressivo;
                    }
                });
                if(!founded){
                    this.messages.push(message);
                }
            } catch (error) {
            }
        });
    }

}
