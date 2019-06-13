import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ( { user, loading, repos, getUser, getUserRepos, match } ) => {
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    //    eslint-disable-next-line
    }, []);

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

    if ( loading ) return <Spinner/>;
    return <Fragment>
        <Link to={ '/' } className={ 'btn btn-light' }>Back to Search</Link>
        Hireable: { ' ' }
        { hireable ? <i className={ 'fas fa-check text-success' }/> :
            <i className={ 'fas fa-times-circle text-danger' }/> }
        <div className="card grid-2">
            <div className="all-center">
                <img src={ avatar_url } className={ 'rounded-img' } style={ { width: '150px' } } alt={ name }/>
                <h1>{ name }</h1>
                <p>
                    Location: { location }
                </p>
            </div>
            <div>
                { bio && <Fragment>
                    <h3>Bio:</h3>
                    <p>
                        { bio }
                    </p>
                </Fragment> }
                <a target={ '_blank' } href={ html_url } className={ 'btn btn-dark my-1' }>Visit Github Profile</a>
                <ul>
                    { login && <li>
                        <strong>Username: </strong> { login }
                    </li> }
                    { company && <li>
                        <strong>Company: </strong> { company }
                    </li> }
                    { blog && <li>
                        <strong>Website: </strong> { blog }
                    </li> }
                </ul>
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: { followers }</div>
            <div className="badge badge-success">Following: { following }</div>
            <div className="badge badge-light">Public Repos: { public_repos }</div>
            <div className="badge badge-dark">Public Gists: { public_gists }</div>
        </div>
        <Repos
            repos={ repos }
        />
    </Fragment>;
};

export default User;
