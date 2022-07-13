import { FC } from 'react'
import classNames from 'classnames/bind'

import { LostFiguresProps } from './LostFigures-props'
import styles from './LostFigures.module.css'
import { ColorsModel } from '../../models/ColorsModel'


const cn = classNames.bind(styles)

export const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<div className={cn('wrapper')}>
			<h3>{title}</h3>
			<ul>
				{figures.map(figure => {
					const colorText = figure.color === ColorsModel.BLACK ? 'черных' : 'белых'
					return (
						<li>
							{figure.icon && (
								<img
									src={figure.icon}
									alt={`${figure.name} ${colorText}`}
									width={30}
									height={30}
								/>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
