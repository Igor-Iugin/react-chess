import { FigureModel, FigureNames } from './FigureModel'
import { ColorsModel } from '../ColorsModel'
import { CellModel } from '../CellModel'

import blackIcon from '../../assets/rook-black.svg'
import whiteIcon from '../../assets/rook-white.svg'


export class Rook extends FigureModel {
	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.ROOK
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
			default:
				return false
		}
	}
}
