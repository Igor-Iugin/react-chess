import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import { Board } from './components/Board'
import { BoardModel } from './models/BoardModel'

import styles from './App.module.css'


const cn = classNames.bind(styles)

function App() {
   const [board, setBoard] = useState(new BoardModel())

   useEffect(() => {
      restart()
   }, [])



   function restart() {
      const newBoard = new BoardModel()
      newBoard.init()
      setBoard(newBoard)
   }

   return (
     <main className={cn('wrapper')}>
        <Board board={board} setBoard={setBoard} />
     </main>
  )
}

export default App;
