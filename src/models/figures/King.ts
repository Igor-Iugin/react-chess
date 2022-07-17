import { FigureModel, FigureNames } from './FigureModel'
import { ColorsModel } from '../ColorsModel'
import { CellModel } from '../CellModel'

import blackIcon from '../../assets/king-black.svg'
import whiteIcon from '../../assets/king-white.svg'


export class King extends FigureModel {
	private isFirstStep: boolean = true

	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.KING
		this.icon = color === ColorsModel.BLACK ? blackIcon : whiteIcon
	}

	move(target: CellModel) {
		super.move(target)
		this.isFirstStep = false
	}

	canMove(target: CellModel): boolean {
		const isOffsetX = target.x === this.cell.x + 1 || target.x === this.cell.x - 1
		const isOffsetY = target.y === this.cell.y + 1 || target.y === this.cell.y - 1
		const isEmpty = this.cell.board.getCell(target.x, target.y).isEmpty()

		switch (true) {
			/* Offset X & Y */
			case ((isOffsetX && target.y === this.cell.y) || (isOffsetY && target.x === this.cell.x)) && isEmpty:
				return true
			/* Diagonal offset */
			case isOffsetX && isOffsetY && isEmpty:
				return true
			default:
				return false
		}
	}
}
