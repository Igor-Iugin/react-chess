import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import { Board } from './components/Board'
import { BoardModel } from './models/BoardModel'

import styles from './App.module.css'
import { PlayerModel } from './models/PlayerModel'
import { ColorsModel } from './models/ColorsModel'
import { LostFigures } from './components/LostFigures'


const cn = classNames.bind(styles)

function App() {
   const [board, setBoard] = useState(new BoardModel())
   const [whitePlayer, setWhitePlayer] = useState(new PlayerModel(ColorsModel.WHITE))
   const [blackPlayer, setBlackPlayer] = useState(new PlayerModel(ColorsModel.BLACK))
   const [currentPlayer, setCurrentPlayer] = useState<PlayerModel | null>(null)

   function restart() {
      const newBoard = new BoardModel()
      newBoard.init()
      newBoard.addFigures()
      setBoard(newBoard)

      setCurrentPlayer(whitePlayer)
   }

   useEffect(() => {
      restart()
   }, [])

   function swapPlayer() {
      setCurrentPlayer(currentPlayer?.color === ColorsModel.WHITE ? blackPlayer : whitePlayer)
   }

   return (
     <main className={cn('wrapper')}>
        <h2 className={cn('turn')}>
           Ход
           <span>
              {currentPlayer?.color === ColorsModel.WHITE ? 'белых' : 'черных'}
           </span>
        </h2>
        <Board
           board={board}
           setBoard={setBoard}
           currentPlayer={currentPlayer}
           swapPlayer={swapPlayer}
           className={cn('board')}
        />
        <div className={cn('lost')}>
           <LostFigures title='Потерянные черные фигуры' figures={board.lostBlackFigures}/>
           <LostFigures title='Потерянные белые фигуры' figures={board.lostWhiteFigures}/>
        </div>
     </main>
  )
}

export default App;
