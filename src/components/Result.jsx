import React from 'react';

export const Result = ({ correctAnswer, selectedOption }) => {
	if (selectedOption !== null)
		return (
			<div>
				{selectedOption === correctAnswer
					? 'Correct Answer'
					: 'Incorrect Answer'}
			</div>
		);
};
