import { FC } from 'react'
import classNames from 'classnames/bind'

import { CellProps } from './Cell-props'
import styles from './Cell.module.css'


const cn = classNames.bind(styles)

export const Cell: FC<CellProps> = ({ cell, active, onClick }) => {
	return (
		<button
			className={cn('item', [cell.color], {
				active: active || cell.available
			})}
			onClick={() => onClick(cell)}
		>
			{cell.figure?.icon && <img src={cell.figure.icon} alt={`${cell.figure.name}`} />}
		</button>
	)
}
