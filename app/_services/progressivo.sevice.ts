import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {WebSocketService} from './../_services/websocket.service';

const WEBSOCKET_URL = 'ws://localhost:8009';

export interface Progress {
    idtreno: string;
    progressivo: string ;
}

@Injectable()
export class ProgressiveService {
    public messages: Subject<string>;

    constructor(wsService: WebSocketService) {

        this.messages = <Subject<string>>wsService
            .connect(WEBSOCKET_URL)
            .map((response: MessageEvent): string => {
                let data = JSON.parse(response.data);
                var data1 = JSON.parse(response.data);
                return response.data;
            });
    }
}
