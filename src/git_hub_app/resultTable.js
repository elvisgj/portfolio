import React from 'react'
import './resultTable.css'
import { RepoInfo } from './RepoInfo'
import PaginationRepos from './PaginationRepos'

class ResultTable extends React.Component {

    render() {
        if (this.props.repos.length === 0) {
            return <div className="title-one">No repositories to show</div>
        }
        let repos = this.props.repos.map(item => <RepoInfo key={item.id} item={item} />)

        return (
            <div>
                <div className="container">{repos}</div>
                {
                    this.props.totalPages !== 0 && <PaginationRepos
                        totalPages={this.props.totalPages}
                        userName={this.props.userName}
                        currentPage={this.props.currentPage} />
                }


            </div>
        )
    }



}

export default ResultTable
