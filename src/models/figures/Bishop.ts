import { CellModel } from '../CellModel'
import { ColorsModel } from '../ColorsModel'
import { FigureModel, FigureNames } from './FigureModel'

import blackIcon from '../../assets/bishop-black.svg'
import whiteIcon from '../../assets/bishop-white.svg'


export class Bishop extends FigureModel {
	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.BISHOP
		this.icon = color === ColorsModel.BLACK ? blackIcon : whiteIcon
	}

	canMove(target: CellModel): boolean {
		switch (true) {
			case !super.canMove(target):
				return false
			case this.cell.isEmptyDiagonal(target):
				return true
			default:
				return false
		}
	}
}
