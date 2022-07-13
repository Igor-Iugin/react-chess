import { FC, Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import { BoardProps } from './Board-props'
import styles from './Board.module.css'
import { Cell } from '../Cell'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { CellModel } from '../../models/CellModel'


const cn = classNames.bind(styles)

export const Board: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer, className }) => {
	const [selectedCell, setSelectedCell] = useState<CellModel | null>(null)
	const [ref] = useAutoAnimate<HTMLDivElement>()

	function handleClick(cell: CellModel) {
		if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
			selectedCell.move(cell)
			swapPlayer()
			setSelectedCell(null)
		} else if (cell.figure) {
			if (cell.figure?.color === currentPlayer?.color)
			setSelectedCell(cell)
		}
	}

	function updateBoard() {
		setBoard(board.getCopy())
	}

	function highlightCells() {
		board.highlightCells(selectedCell)
		updateBoard()
	}

	useEffect(() => {
		highlightCells()
	}, [selectedCell])


	return (
		<div className={cn(className, 'container')} ref={ref}>
			{board.cells.map((row, index) => (
				<Fragment key={index}>
					{row.map(cell => (
						<Cell
							cell={cell}
							key={cell.id}
							onClick={handleClick}
							active={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
						/>
					))}
				</Fragment>
			))}
		</div>
	)
}
