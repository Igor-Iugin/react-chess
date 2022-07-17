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
		return super.canMove(target);
	}
}
