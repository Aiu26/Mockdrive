import React from 'react';

export const Options = ({ options, id, selectedOption, setSelectedOption }) => {
	console.log(selectedOption);
	return options.map((option, index) => {
		return (
			<div className='option'>
				<input
					type='radio'
					id={`${id}-${index}`}
					name={id}
					value={index}
					checked={selectedOption === index}
					onChange={(e) => {
						setSelectedOption(Number(e.target.value));
					}}
				/>
				<label htmlFor={`${id}-${index}`}>{option}</label>
			</div>
		);
	});
};
