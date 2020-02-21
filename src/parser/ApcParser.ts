import {Terminal} from "../Terminal";
import {Parser} from "./Parser";

export class ApcParser {

    private terminal: Terminal;
    private parser: Parser;

    constructor(terminal: Terminal, parser: Parser) {
        this.terminal = terminal;
        this.parser = parser;
    }

    /**
     * 解析Apc参数
     * @param params
     */
    parse(params: any[]) {

    }
}