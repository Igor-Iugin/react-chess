import { HTMLAttributes } from 'react'
import { FigureModel } from '../../models/figures/FigureModel'


export interface LostFiguresProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	figures: FigureModel[]
}
