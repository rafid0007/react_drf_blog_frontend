import React from 'react';

const PostLoading = (Component) => {
    return (
		({isLoading, ...props}) => {
			if (!isLoading) return <Component {...props}/>
			return (
				<h2 style={{fontSize: '25px'}}>
					Loading!!!
				</h2>
			)
		}
	)
};

export default PostLoading;