import React from 'react'
import './Users.css'
import { UserList } from './userList'
import PaginationUserSearch from './PaginationUserSearch'

class usersResults extends React.Component {

    render() {
        if (this.props.users.length === 0) {
            return <div className="sub-title">No users to show</div>
        }
        const users = this.props.users.map(item => <UserList key={item.id} item={item} />)

        return (
            <div>
                <div className='sub-title'>Users founded</div>
                <div className="grid-users">{users}</div>
                {
                    this.props.totalPages !== 0 && <PaginationUserSearch
                        totalPages={this.props.totalPages}
                        userName={this.props.userName}
                        currentPage={this.props.currentPage} />
                }


            </div>
        )
    }



}

export default usersResults
