import React from 'react';

const UserItem = ({user: {avatar_url, html_url, login}}) => {
    return (
        <div className={'card text-center'}>
            <img src={avatar_url} className={'round-img'} alt="" style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div>
                <a target="_blank" rel="noopener noreferrer" href={html_url}
                   className="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    );
};

export default UserItem;
