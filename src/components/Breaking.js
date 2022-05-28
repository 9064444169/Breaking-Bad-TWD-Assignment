import React, { Component } from 'react'
import './breaking.css'

class Breaking extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    async componentDidMount(){
        const url="https://www.breakingbadapi.com/api/characters";
        const response=await fetch(url);
        const posts=await response.json()
        console.log(posts)
        this.setState({
             posts
        })
    }

    
  render() {
      const { posts }=this.state;
    return (
        <>
            <h1 className="header">★彡 𝐵𝑅𝐸𝒜𝒦𝐼𝒩𝒢 𝐵𝒜𝒟 彡★</h1>
            <div className="content">
                {
                    posts && posts.map((post) => (
                        <div className="container">
                        <div className="main">
                        <img className="image" src={post.img} alt={post.name} />
                        <h3 key={post.char_id}>Name: {post.name}</h3>
                        <h3>Birthday: {post.birthday}</h3>
                        <h3>Nickname: {post.nickname}</h3>
                        <h3>Status: {post.status}</h3>
                        </div>
                        </div>
                
                ))}
            </div>
            
         
      </>

    )
  }
}

export default Breaking
