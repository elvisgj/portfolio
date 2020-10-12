import React from 'react'
import ResultTable from './resultTable'
import './resultTable.css'

class Repo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repos: [],
            totalPages: 0,
            currentPage: 1,
            userName: null,
            isLoading: false
        }
    }

    async getRepositories() {
        const query = new URLSearchParams(this.props.location.search)
        const userName = this.props.match.params.user
        const page = query.get('page')
        if (!userName) {
            return this.setState({ repos: [] })
        }
        const queryPage = page ? `?page=${page}` : ''
        this.setState({ userName: userName, isLoading: true })
        try {
            const response = await fetch(`https://api.github.com/users/${userName}/repos${queryPage}`)
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
                this.setState({ repos: data, totalPages: totalPages })
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
                    <h1 className='title'>Repositories of {this.state.userName}</h1>
                </div>
                {
                    this.state.isLoading ? <div className="center-box">
                        <div className="loader"></div>
                    </div> :
                        <div>
                            <ResultTable repos={this.state.repos}
                                totalPages={this.state.totalPages}
                                userName={this.state.userName}
                                currentPage={this.state.currentPage} />
                        </div>
                }

            </div>
        )
    }
}

export default Repo
