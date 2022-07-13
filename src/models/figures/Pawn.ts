import { FigureModel, FigureNames } from './FigureModel'
import { ColorsModel } from '../ColorsModel'
import { CellModel } from '../CellModel'

import blackIcon from '../../assets/pawn-black.svg'
import whiteIcon from '../../assets/pawn-white.svg'


export class Pawn extends FigureModel {
	private isFirstStep: boolean = true

	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.PAWN
		this.icon = color === ColorsModel.BLACK ? blackIcon : whiteIcon
	}

	move(target: CellModel) {
		super.move(target)
		this.isFirstStep = false
	}

	canMove(target: CellModel): boolean {
		const isWhite = this.cell.figure?.color === ColorsModel.WHITE
		const direction = isWhite ? 1 : -1
		const firstStepDirection = isWhite ? 2 : -2

		const isOffsetXOnly = target.x === this.cell.x
		const isOffsetByOneStep = target.y === this.cell.y + direction
		const isOffsetByTwoSteps = target.y === this.cell.y + firstStepDirection
		const isAttackingCells = (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)

		switch (true) {
			/* Step distance and direction */
			case (isOffsetByOneStep || (this.isFirstStep && isOffsetByTwoSteps))
			&& isOffsetXOnly
			&& this.cell.board.getCell(target.x, target.y).isEmpty():
				return true
			/* Direction of attack */
			case isOffsetByOneStep && isAttackingCells && this.cell.isEnemy(target):
				return true
			default:
				return false
		}
	}
}
