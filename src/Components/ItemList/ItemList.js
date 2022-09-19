import React from 'react';
import Items from '../Item/Items';
import {Link} from 'react-router-dom'

const ItemList = ({items}) => {


	return (
		<div>
			{items.map((item) => {
				return (
					<div key={item.id}>
						<Link to={`/detail/${item.id}`}>
							<Items data={item} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
