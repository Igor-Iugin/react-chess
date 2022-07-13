import { FigureModel, FigureNames } from './FigureModel'
import { ColorsModel } from '../ColorsModel'
import { CellModel } from '../CellModel'

import blackIcon from '../../assets/knight-black.svg'
import whiteIcon from '../../assets/knight-white.svg'


export class Knight extends FigureModel {
	constructor(color: ColorsModel, cell: CellModel) {
		super(color, cell)
		this.name = FigureNames.KNIGHT
		this.icon = color === ColorsModel.BLACK ? blackIcon : whiteIcon
	}

	canMove(target: CellModel): boolean {
		const dx = Math.abs(this.cell.x - target.x)
		const dy = Math.abs(this.cell.y - target.y)
		switch (true) {
			case !super.canMove(target):
				return false
			case (dx === 1 && dy === 2) || (dx === 2 && dy === 1):
				return true
			default:
				return false
		}
	}
}
