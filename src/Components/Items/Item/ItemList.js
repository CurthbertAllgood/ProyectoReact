import React from 'react';
import ItemCard from '../ItemCard';
import {Link} from 'react-router-dom'

const ItemList = ({items}) => {


	return (
		<div>
			{items.map((item) => {
				return (
					<div key={item}>
						<Link to={`/detail/${item.id}`}>
							<ItemCard data={item} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
