import { CellModel } from './CellModel'
import { ColorsModel } from './ColorsModel'

import { Pawn } from './figures/Pawn'
import { King } from './figures/King'
import { Bishop } from './figures/Bishop'
import { Queen } from './figures/Queen'
import { Rook } from './figures/Rook'
import { Knight } from './figures/Knight'
import { FigureModel } from './figures/FigureModel'


export class BoardModel {
	public cells: CellModel[][] = []
	public lostBlackFigures: FigureModel[] = []
	public lostWhiteFigures: FigureModel[] = []


	public init() {
		for (let i = 0; i < 8; i++) {
			const row: CellModel[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new CellModel(this, j, i, ColorsModel.BLACK, null))
				} else {
					row.push(new CellModel(this, j, i, ColorsModel.WHITE, null))
				}
			}
			this.cells.push(row)
		}
	}

	public getCell(x: number, y: number): CellModel {
		return this.cells[y][x]
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new Pawn(ColorsModel.WHITE, this.getCell(i, 1))
			new Pawn(ColorsModel.BLACK, this.getCell(i, 6))
		}
	}

	private addKings() {
		new King(ColorsModel.WHITE, this.getCell(3, 0))
		new King(ColorsModel.BLACK, this.getCell(4, 7))
	}

	private addBishops() {
		new Bishop(ColorsModel.WHITE, this.getCell(5, 0))
		new Bishop(ColorsModel.WHITE, this.getCell(2, 0))
		new Bishop(ColorsModel.BLACK, this.getCell(2, 7))
		new Bishop(ColorsModel.BLACK, this.getCell(5, 7))
	}

	private addRooks() {
		new Rook(ColorsModel.WHITE, this.getCell(0, 0))
		new Rook(ColorsModel.WHITE, this.getCell(7, 0))
		new Rook(ColorsModel.BLACK, this.getCell(0, 7))
		new Rook(ColorsModel.BLACK, this.getCell(7, 7))
	}

	private addQueens() {
		new Queen(ColorsModel.WHITE, this.getCell(4, 0))
		new Queen(ColorsModel.BLACK, this.getCell(3, 7))
	}

	private addKnights() {
		new Knight(ColorsModel.WHITE, this.getCell(1, 0))
		new Knight(ColorsModel.WHITE, this.getCell(6, 0))
		new Knight(ColorsModel.BLACK, this.getCell(1, 7))
		new Knight(ColorsModel.BLACK, this.getCell(6, 7))
	}

	public addFigures() {
		this.addPawns()
		this.addKings()
		this.addBishops()
		this.addRooks()
		this.addQueens()
		this.addKnights()
	}

	public highlightCells(selectedCell: CellModel | null) {
		for (let i = 0; i < this.cells.length; i++) {
			const row = this.cells[i]
			for (let j = 0; j < row.length; j++) {
				const target = row[j]
				target.available = !!selectedCell?.figure?.canMove(target)
			}
		}
	}

	public getCopy(): BoardModel {
		const newBoard = new BoardModel()
		newBoard.cells = this.cells
		newBoard.lostWhiteFigures = this.lostWhiteFigures
		newBoard.lostBlackFigures = this.lostBlackFigures
		return newBoard
	}
}
