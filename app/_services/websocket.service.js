"use strict";
var Rx = require('rxjs/Rx');
var core_1 = require('@angular/core');
core_1.Injectable();
var WebSocketService = (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function (url) {
        if (!this.socket) {
            this.socket = this.create(url);
        }
        return this.socket;
    };
    WebSocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = Rx.Observable.create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    log.debug(JSON.stringify(data));
                    ws.send(JSON.stringify(data));
                }
            },
        };
        return Rx.Subject.create(observer, observable);
    };
    return WebSocketService;
}());
exports.WebSocketService = WebSocketService;
//# sourceMappingURL=websocket.service.js.map