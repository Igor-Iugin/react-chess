import { HTMLAttributes } from 'react'
import { CellModel } from '../../models/CellModel'


export interface CellProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
	cell: CellModel
	active: boolean
	onClick: (cell: CellModel) => void
}
