<<<<<<< HEAD
import React from 'react';
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ items }) => {
	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		//dispatch an action
		dispatch(addItem(item))
	};

	return (
		<div>
			{items.map(item => (
				<div
					key={item.card.info.id}
					className='p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between'
				>
					<div className='w-9/12'>
						<div className='py-2'>
							<span>{item.card.info.name}</span>
							<span>
								{' '}
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}{' '}
							</span>
						</div>
						<p className='text-sm'>{item.card.info.description}</p>
					</div>
					<div className='w-3/12 p-4'>
						<div className='absolute'>
							<button className='p-2 mx-14 bg-white text-green-700 shadow-xl rounded' onClick={() => handleAddItem(item)}>
								Add +
							</button>
						</div>
						<img src={CDN_URL + item.card.info.imageId} />
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
=======
import React from 'react';
import { CDN_URL } from '../utils/constants';
// const ItemList = ({ items }) => {
// 	console.log(items);
// 	return <div>list</div>;
// };

// export default ItemList;

const ItemList = ({ items }) => {
	return (
		<div>
			{items.map(item => (
				<div
					key={item.card.info.id}
					className='p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between'
				>
					<div className='w-9/12'>
						<div className='py-2'>
							<span>{item.card.info.name}</span>
							<span>
								{' '}
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}{' '}
							</span>
						</div>
						<p className='text-sm'>{item.card.info.description}</p>
					</div>
					<div className='w-3/12 p-4'>
						<div className='absolute'>
							<button className='p-2 mx-14 bg-white text-green-700 shadow-xl rounded'>
								Add +
							</button>
						</div>
						<img src={CDN_URL + item.card.info.imageId} />
					</div>
				</div>
			))}
		</div>
	);
};

export default ItemList;
>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
