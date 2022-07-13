import { ColorsModel } from '../ColorsModel'
import icon from '../../assets/bishop-black.svg'
import { CellModel } from '../CellModel'


export enum FigureNames {
	FIGURE = '',
	BISHOP = 'Слон',
	KING  = 'Король',
	KNIGHT  = 'Конь',
	PAWN  = 'Пешка',
	QUEEN  = 'Королева',
	ROOK  = 'Ладья'
}

export class FigureModel {
	readonly id: number

	public color: ColorsModel
	public icon: typeof icon | null
	public name: FigureNames
	public cell: CellModel

	constructor(color: ColorsModel, cell: CellModel) {
		this.color = color
		this.cell = cell
		this.cell.figure = this
		this.icon = null
		this.name = FigureNames.FIGURE
		this.id = Math.random()
	}

	canMove(target: CellModel): boolean {
		if (target.figure?.color === this.color)
			return false
		return target.figure?.name !== FigureNames.KING;
	}
	move(target: CellModel) {}
}
