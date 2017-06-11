import React, { Component } from 'react';
import './App.css';
import RepoList from './RepoList'


class Profile extends Component {
  render() {
    return (
      <div className="container">
  						 <div className="row">
  						 		<div className="col-md-4">
  									<img className="thumbnail" style={{width:"100%"}} src={this.props.userData.avatar_url} />
  								</div>
  								<div className="col-md-8">
  									<h3>{this.props.userData.name}</h3>
  									<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Github Page</a>
  								</div>
  						 </div>
  						 <div className="row">
  						 		<div className="col-md-12">
  									<span className="label label-primary">{this.props.userData.public_repos} Repos</span>
  									<span className="label label-success">{this.props.userData.public_gists} Public Gists</span>
  									<span className="label label-info">{this.props.userData.followers} Followers</span>
  									<span className="label label-danger">{this.props.userData.following} Following</span>
  								</div>
  						 </div>
  						 <br />
  						 <div className="row">
  							 	<div className="col-md-12">
  									<ul className="list-group">
  										<li className="list-group-item"><strong>Username: </strong>{this.props.userData.login}</li>
  										<li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
  										<li className="list-group-item"><strong>Email Address: </strong>{this.props.userData.email}</li>
  									</ul>
  								</div>





<hr />
        <h3>User Repositories</h3>
        <RepoList userRepos={this.props.userRepos} />
      </div>





  					</div>
    );
  }
}

export default Profile;
