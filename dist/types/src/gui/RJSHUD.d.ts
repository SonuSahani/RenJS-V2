import RJS from '../core/RJS';
import { Graphics } from 'phaser-ce';
import RJSMenu from './RJSMenu';
import ChoiceHandler from './elements/ChoiceHandler';
export default class RJSHUD extends RJSMenu {
    mBoxes: {};
    nBoxes: {};
    cHandlers: {
        [key: string]: ChoiceHandler;
    };
    skipClickArea: Phaser.Rectangle[];
    visualChoices: Graphics;
    constructor(game: RJS, config: any);
    createMessageBox(element: any): any;
    createNameBox(element: any): any;
    createChoiceHandler(element: any): ChoiceHandler;
    createButton(element: any): import("./elements/BaseButton").default;
    unsetSkipButtons(): void;
    showName(boxId: any, name: any, color: any): void;
    hideName(boxId: any): void;
    showText(boxId: any, text: any, sfx?: any): Promise<any>;
    hideText(boxId: any): void;
    showChoices(handlerId: any, choices: any): Promise<any>;
    hideChoices(handlerId: any): void;
    showVisualChoices(choices: any): Promise<any>;
    createVisualChoice(choice: any, index: any, resolve: any): void;
    hideVisualChoices(transitionName?: any): Promise<void>;
    ignoreTap(pointer: any): boolean;
    clear(transition?: any): Promise<void>;
    showHUD(): Promise<void>;
    hideHUD(): Promise<void>;
    show(): Promise<void>;
    hide(mute?: boolean): Promise<void>;
    destroy(): void;
}