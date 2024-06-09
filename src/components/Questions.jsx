import React from 'react';
import { useState } from 'react';
import { Question } from './Question';
export const Questions = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [list, setList] = useState([
		{
			id: 1,
			question: 'Which of these is a yoga pose?',
			options: ['Jumping Jack', 'Warrior Pose', 'Push-up', 'Squat'],
			correctAnswer: 1,
		},
		{
			id: 2,
			question: 'What is the main purpose of practicing yoga?',
			options: [
				'To run faster',
				'To lift heavy weights',
				'To improve flexibility and relaxation',
				'To swim better',
			],
			correctAnswer: 2,
		},
		{
			id: 3,
			question: 'Which of these is not a type of yoga pose?',
			options: ['Cobra Pose', 'Chair Pose', 'Bicycle Pose', 'Tree Pose'],
			correctAnswer: 2,
		},
		{
			id: 4,
			question: 'What should you focus on while doing yoga?',
			options: [
				'Your breath and posture',
				'Watching TV',
				'Eating snacks',
				'Running around',
			],
			correctAnswer: 0,
		},
		{
			id: 5,
			question: 'Which animal is a yoga pose named after?',
			options: ['Elephant', 'Cat', 'Lion', 'Tiger'],
			correctAnswer: 1,
		},
		{
			id: 6,
			question: 'What is a benefit of doing yoga?',
			options: [
				'It makes you sleepy',
				'It helps you become more flexible',
				'It makes you run faster',
				'It helps you watch more TV',
			],
			correctAnswer: 1,
		},
		{
			id: 7,
			question:
				'Which of these poses is used to relax at the end of a yoga session?',
			options: ['Mountain Pose', 'Warrior Pose', 'Child’s Pose', 'Plank Pose'],
			correctAnswer: 2,
		},
		{
			id: 8,
			question: 'How often should you practice yoga to see benefits?',
			options: ['Once a month', 'Every day', 'Once a year', 'Never'],
			correctAnswer: 1,
		},
		{
			id: 9,
			question: 'Which part of your body do you often stretch in yoga?',
			options: ['Your hair', 'Your teeth', 'Your muscles', 'Your shoes'],
			correctAnswer: 2,
		},
		{
			id: 10,
			question:
				'What do you call the end part of a yoga session where you lie still and relax?',
			options: ['Warm-up', 'Workout', 'Savasana', 'Jumping Jacks'],
			correctAnswer: 2,
		},
	]);

	return (
		<Question
			item={list[currentQuestion]}
			changeQuestion={() => {
				setCurrentQuestion((prevQuestion) => {
					if (prevQuestion < list.length - 1) return prevQuestion + 1;
					else return 0;
				});
			}}
		/>
	);
};
