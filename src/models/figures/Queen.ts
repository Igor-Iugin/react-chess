import { FigureModel, FigureNames } from './FigureModel'
import { ColorsModel } from '../ColorsModel'
import { CellModel } from '../CellModel'

import blackIcon from '../../assets/queen-black.svg'
import whiteIcon from '../../assets/queen-white.svg'


export class Queen extends FigureModel {
	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.QUEEN
		this.icon = color === ColorsModel.BLACK ? blackIcon : whiteIcon
	}

	canMove(target: CellModel): boolean {
		switch (true) {
			case !super.canMove(target):
				return false
			case this.cell.isEmptyVertical(target):
				return true
			case this.cell.isEmptyHorizontal(target):
				return true
			case this.cell.isEmptyDiagonal(target):
				return true
			default:
				return false
		}
	}
}
