import React, { useEffect, useState } from 'react';
import Card from './Card';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://star-furniture-server-rakibul58.vercel.app/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    return (
        <div className='px-10'>
            <div className='text-center'>
                <h4 className='font-bold text-primary text-3xl'>Comments</h4>
                <h1 className='text-5xl'>Still not convinced? Checkout some of our customer reviews</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
                {
                    comments.map(comment => <Card
                        comment={comment} key={comment._id}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Comments;