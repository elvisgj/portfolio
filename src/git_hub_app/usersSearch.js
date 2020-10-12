import React from 'react'
import UsersResults from './usersResults'
import './Users.css'
import { Link } from 'react-router-dom'

class usersSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            users: [],
            totalPages: 0,
            currentPage: 1,
            userName: null,
            isLoading: false
        }
        this.textInput = this.textInput.bind(this)
    }

    textInput(e) {
        this.setState({ input: e.target.value })
    }

    async getRepositories() {
        const query = new URLSearchParams(this.props.location.search)
        const userName = query.get('user_name')
        const page = query.get('page')
        if (!userName) {
            return this.setState({ repos: [] })
        }
        const queryPage = page ? `&page=${page}` : ''
        this.setState({ userName: userName, isLoading: true })
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${userName}${queryPage}`)
            if (!response.ok) {
                alert('User Not Found')
            } else {
                let totalPages = 0
                if (response.headers.has('Link')) {
                    const link = response.headers.get('Link')
                    const regex = /page=(\d+)>; rel="last"/
                    const num = link.match(regex)
                    totalPages = !num ? parseInt(page) : parseInt(num[1])
                }
                const data = await response.json()
                this.setState({ users: data.items, totalPages: totalPages })
            }
        } catch (e) {
            console.log(e);
        }
        this.setState({ isLoading: false, currentPage: !page ? 1 : page })

    }
    componentDidMount() {
        this.getRepositories()
    }

    componentDidUpdate(before) {
        if (before.location.search !== this.props.location.search) {
            this.getRepositories()
        }
    }


    render() {
        return (
            <div className='div'>
                <div>
                    <h1 className='search-title'>Search GitHub Users</h1>
                </div>
                <div className='title'>
                    <input
                        placeholder="Type the GitHub User"
                        onInput={this.textInput}>
                    </input>
                    <Link to={`/github?user_name=${this.state.input}`}
                        className='button'
                    >Search</Link>
                </div>
                {
                    this.state.isLoading ? <div className="center-box">
                        <div className="loader"></div>
                    </div> :
                        <div>
                            <UsersResults users={this.state.users}
                                totalPages={this.state.totalPages}
                                userName={this.state.userName}
                                currentPage={this.state.currentPage} />
                        </div>
                }

            </div>
        )
    }
}

export default usersSearch
