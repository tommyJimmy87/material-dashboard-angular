"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var websocket_service_1 = require('./../../_services/websocket.service');
var progressivo_sevice_1 = require('./../../_services/progressivo.sevice');
var TableComponent = (function () {
    function TableComponent(progressiveService) {
        var _this = this;
        this.progressiveService = progressiveService;
        this.messages = new Array();
        progressiveService.messages.subscribe(function (msg) {
            try {
                var message = JSON.parse(JSON.parse(msg));
                var founded = false;
                _this.messages.forEach(function (element) {
                    if (element.idtreno === message.idtreno) {
                        founded = true;
                        element.progressivo = message.progressivo;
                    }
                });
                if (!founded) {
                    _this.messages.push(message);
                }
            }
            catch (error) {
            }
        });
    }
    TableComponent = __decorate([
        core_1.Component({
            selector: 'table-cmp',
            moduleId: module.id,
            //template: ,
            templateUrl: 'table.component.html',
            providers: [progressivo_sevice_1.ProgressiveService, websocket_service_1.WebSocketService]
        }), 
        __metadata('design:paramtypes', [progressivo_sevice_1.ProgressiveService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map