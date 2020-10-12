import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'


class userProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersData: [],
            profilePic: null,
            followers: 0,
            following: 0,
            name: null,
            totRepos: 0,
            reposLink: null,
            location: null,
            realName: null,
            bio: null,
        }
    }

    async getRepositories() {
        const userName = this.props.match.params.usename
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            if (!response.ok) {
                alert('User Not Found')
            } else {
                const data = await response.json()
                console.log(data);
                this.setState({
                    usersData: data,
                    profilePic: data.avatar_url,
                    followers: data.followers,
                    following: data.following,
                    name: data.login,
                    totRepos: data.public_repos,
                    reposLink: data.repos_url,
                    location: data.location,
                    realName: data.name,
                    bio: data.bio
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidMount() {
        this.getRepositories()
    }

    render() {
        return (
            <div className="profile">
                <div className="profileTitle">
                    <h1>{this.state.name}</h1>
                </div>
                <div className='divProfile'>
                    <div className="personal-info">
                        <img className="profilePic" src={this.state.profilePic} alt='profile of the user'></img>
                        <h3 className="userName">{this.state.realName}</h3>
                        <div>
                            <h5 className="profile-info">City: {this.state.location === null ? "Not declared" : this.state.location}</h5>
                            <h5 className="profile-info">Followers: {this.state.followers}</h5>
                            <h5 className="profile-info">following: {this.state.following}</h5>
                        </div>
                    </div>
                    <div className="repos">
                        <h4 className="bio-title">Bio</h4>
                        <p className="bio">{this.state.bio === null ? "There is no bio for this user*" : this.state.bio}</p>
                        <div className="repo-div-profile">
                            <h5 className="public-repos">Pubic Repositories: {this.state.totRepos}</h5>
                            <Link className="repos-link" to={`/github/users/${this.state.name}/repos`}>Show Repositories</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default userProfile
