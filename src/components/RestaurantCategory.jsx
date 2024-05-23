<<<<<<< HEAD
import React from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};
	return (
		<div className='w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 '>
			<div
				className='flex justify-between font-bold text-lg cursor-pointer'
				onClick={handleClick}
			>
				<span>
					{category.title} ({category.itemCards.length})
				</span>
				<span>⬇ </span>
			</div>
			{showItems && <ItemList items={category.itemCards} />}
		</div>
	);
};

export default RestaurantCategory;
=======
import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};
	return (
		<div className='w-6/12 mx-auto my-5 bg-gray-50 shadow-lg p-4 '>
			<div
				className='flex justify-between font-bold text-lg cursor-pointer'
				onClick={handleClick}
			>
				<span>
					{category.title} ({category.itemCards.length})
				</span>
				<span>⬇ </span>
			</div>
			{showItems && <ItemList items={category.itemCards} />}
		</div>
	);
};

export default RestaurantCategory;
>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
