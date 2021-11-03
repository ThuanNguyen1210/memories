import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';

import useStyles from './styles';

const Paginate = ({ page }) => {
	const { numberOfPages } = useSelector((state) => state.posts);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (page) dispatch(getPosts(page));
	}, [page]);
	return (
		<Pagination
			classes={{ url: classes.ul }}
			count={numberOfPages}
			showFirstButton
			showLastButton
			page={Number(page) || 1}
			variant='outlined'
			color='primary'
			shape='rounded'
			renderItem={(item) => (
				<PaginationItem {...item} color='primary' component={Link} to={`/posts?page=${item.page}`} />
			)}
		/>
	);
};

export default Paginate;
