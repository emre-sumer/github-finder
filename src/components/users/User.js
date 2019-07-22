import React, { Component } from 'react'

export class User extends Component {

    componentDidMount(){
        // path="/user/:login"
        this.props.getUser(this.props.match.params.login)
        console.log('componentDidMount')
    }
    render() {
        const { name,avatar_url,location,bio,blog,login,html_url,followers,
        following, public_repos,public_gists, hirable}=this.props.user;
        const {loading}=this.props;

        console.log('render')
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User
