import React, { useEffect, useState } from 'react';
import { Options } from './Options';
import { Result } from './Result';

export const Question = ({ item, changeQuestion }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	useEffect(() => {
		if (selectedOption)
			setTimeout(() => {
				setSelectedOption(null);
				changeQuestion();
			}, 1000);
	}, [selectedOption]);
	return (
		<div className='question-card'>
			<h1>{item.question}</h1>
			<Options
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
				options={item.options}
				id={item.id}
			/>
			<Result
				selectedOption={selectedOption}
				correctAnswer={item.correctAnswer}
			/>
		</div>
	);
};
