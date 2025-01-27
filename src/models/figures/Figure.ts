import logo from "../../../assets/black-bishop.png"
import { Cell } from "../Cell";
import { Colors } from "../Colors";


export enum FigureNames {
    FIGURE = "Фигура",
    KING = "Король",
    KNIGHT = "Конь",
    PAWN = "Пешка",
    QUEEN = "Ферзь",
    ROOK = "Ладья",
    BISHOP = "Слон"
}


export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell:Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.id = Math.random();
        this.name = FigureNames.FIGURE;
    }

    canMove(target: Cell) : boolean {
        return true;
    }

    moveFigure(target: Cell) {

    }
}