import React from 'react';
import Items from '../Item/Items';
import './ItemList.css'

const ItemList = ({lista}) => {
	
	return (
		<div  className='CardListContainer'>
			{lista.map((item) => {
				return (
					<div  key={item.id}>
							<Items data={item} />
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
