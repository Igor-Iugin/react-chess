import { HTMLAttributes } from 'react'
import { BoardModel } from '../../models/BoardModel'
import { PlayerModel } from '../../models/PlayerModel'


export interface BoardProps extends HTMLAttributes<HTMLDivElement> {
	board: BoardModel
	setBoard: (board: BoardModel) => void
	currentPlayer: PlayerModel | null
	swapPlayer: () => void
}
