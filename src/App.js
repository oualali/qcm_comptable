import React, { useState } from 'react';

export default function App() {
	const questions = [
		
		{
			questionText: 'Avant, Cindy était aide-soignante. Après deux années à avoir exercé ce métier, elle décide de se reconvertir et de suivre une formation en ligne pour devenir développeuse. Quelles soft skills a t-elle dû mobiliser le plus pour accomplir ce projet ?',
			answerOptions: [
				{ answerText: 'La définition d’objectifs', isCorrect: false },
				{ answerText: 'La réflexivité', isCorrect: false },
				{ answerText: 'La capacité à apprendre', isCorrect: false },
				{ answerText: 'La créativité', isCorrect: false },
				{ answerText: 'La capacité à gérer son temps', isCorrect: true },

				
			],
		},
		{
			questionText: 'Dans son prochain job de développeuse, dans quelles situations Cindy devra t-elle particulièrement faire preuve d’intelligence émotionnelle ?',
			answerOptions: [
				{ answerText: 'Commenter le code d’un autre développeur.', isCorrect: true },
				{ answerText: 'Faire des recherches sur Internet pour trouver des solutions techniques, pour résoudre certains bugs. ', isCorrect: false },
				{ answerText: 'Gérer son stress, s’adapter à son nouvel environnement de travail.', isCorrect: true },
			],
		},
		{
			questionText: 'Vous essayez d’expliquer à Cindy ce qu’est l’intelligence émotionnelle et commencez à parler des neurones miroirs… Quels exemples pouvez-vous utiliser pour illustrer cette notion ?',
			answerOptions: [
				{ answerText: 'Si tu es en train de discuter avec quelqu’un et que tu changes ton attitude, l’attitude de ton interlocuteur changera aussi, grâce à l’effet des neurones miroirs.', isCorrect: false },
				{ answerText: 'Si tu observes quelqu’un qui se fait mal, tes neurones miroirs peuvent s’activer et générer la même émotion, comme si tu étais toi-même en train de souffrir.', isCorrect: false },
				{ answerText: 'Si tu es face à une personne qui se met en colère, tu vas certainement développer une réaction contraire et garder une posture apaisée, grâce aux neurones miroirs qui entraînent un effet d’opposition.', isCorrect: false },
				{ answerText: 'Si tu observes quelqu’un en train de réaliser une action, tu la mémorises et tu es capable de la reproduire sans même t’en rendre compte. C’est le cas des enfants qui apprennent à marcher. ', isCorrect: true },
			],
		},
		{
			questionText: 'Cindy commence à regarder le référentiel de compétences d’OpenClassrooms et s’interroge sur la soft skill “collaboration”. Elle vous demande quelles sont, d’après vous, les deux situations qu’elle a vécues qui illustrent au mieux cette compétence ? ',
			
			answerOptions: [
				{ answerText: 'J’ai été amenée à faire des compétitions de judo, pendant deux années, à haut niveau. Ces compétitions m’ont amenée à faire de nombreuses rencontres dans le milieu du sport.', isCorrect: false },
				{ answerText: 'J’ai été vendeuse pendant plusieurs mois, pour une marque de vêtements. J’accueillais les clients, leur permettais d’identifier les articles dont ils avaient le plus besoin.', isCorrect: false },
				{ answerText: 'J’ai été amenée à résoudre un conflit entre mes collègues, dans mon précédent emploi. Il y avait régulièrement des conflits sur la gestion des congés, j’étais médiatrice pour essayer de trouver un terrain d’entente. ', isCorrect: true },
				{ answerText: 'J’ai réalisé un événement associatif avec trois amis, l’année dernière. Mon rôle était de contacter des artistes qui souhaiteraient participer à l’événement. J’ai donc sollicité tout mon réseau et j’ai demandé l’avis de tous mes proches, pour identifier les artistes qui pourraient être motivés.', isCorrect: false },
			],
		},
	
		{
			questionText: 'Lesquels de ces comportements prouvent que Cindy a su développer et affirmer son sens critique ? ',
			
			answerOptions: [
				{ answerText: 'Dès qu\'elle arrive dans une nouvelle entreprise, Cindy adopte une posture critique, elle propose des changements de pratiques radicaux et osés.', isCorrect: false },
				{ answerText: 'Lorsqu\'il s\'agit de changer une méthode ou une pratique dans son équipe, Cindy soulève des questions pertinentes et ciblées pour approfondir et orienter les réflexions.', isCorrect: true },
				{ answerText: 'Avant de prendre une décision, Cindy écoute et intègre différents points de vue pour se forger son opinion. ', isCorrect: false },
				{ answerText: 'Cindy partage ses apprentissages et ses connaissances avec son équipe, elle documente ses recherches pour que celles-ci puissent bénéficier à tous.', isCorrect: false },
			],
		},











		{
			questionText: 'Donner les 4 notions principales qui définissent la comptabilité générale ?',
			
			answerOptions: [
				{ answerText: 'Analyse des coûts, calcul des écarts, le coût de revient, système informatique', isCorrect: false },
				{ answerText: 'Système d\'information, mémoire, flux, techniques', isCorrect: true },
			],
		},
		{
			questionText: 'Citer les étapes de la création d\'une entreprise ?',
			
			answerOptions: [
				{ answerText: 'Réunir des fonds, acquir des facteurs de production, consommer les facteurs de production, commercialiser et créer de nouvelles richesses', isCorrect: true },
				{ answerText: 'Immobiliser des ressources, produire, créer des richesses et capitaliser', isCorrect: false },
				{ answerText: 'Emprunter, produire, s\'enrichir et ré investir', isCorrect: false },

			],
		},
		{
			questionText: 'Quels sont les conséquences des décalages de flux physiques et flux monétaires ?',
			
			answerOptions: [
				{ answerText: 'dettes, trésorerie', isCorrect: false },
				{ answerText: 'stock /dettes /créances', isCorrect: false },
				{ answerText: 'dettes, immobilisation et capital', isCorrect: true },

			],
		},
		{
			questionText: 'Quelles sont les 3 finalités comptables ?',
			
			answerOptions: [
				{ answerText: 'Prudence', isCorrect: false },
				{ answerText: 'Nominalisme', isCorrect: false },
				{ answerText: 'Spécialisation', isCorrect: false },
				{ answerText: 'L\'image fidèle', isCorrect: true },

			],
		},
		{
			questionText: 'Quel est l\'organe législatif en terme de comptabilité? ',
			
			answerOptions: [
				{ answerText: 'OEC', isCorrect: false },
				{ answerText: 'CNC', isCorrect: false },
				{ answerText: 'CRC', isCorrect: true },
				{ answerText: 'AMF', isCorrect: false },

			],
		},
		

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Votre score {score} sur {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
