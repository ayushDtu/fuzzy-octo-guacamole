// require('dotenv').config()
const express = require('express')
// can use import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/portfolio', (req, res) => {
    res.send('<a>https://whimsicalayush.netlify.app</a>')
}) 

app.get('/name', (req, res) => {
  res.send('ayush jha')
}) 

const githubData = {
  "login": "ayushDtu",
  "id": 133810993,
  "node_id": "U_kgDOB_nLMQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/133810993?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ayushDtu",
  "html_url": "https://github.com/ayushDtu",
  "followers_url": "https://api.github.com/users/ayushDtu/followers",
  "following_url": "https://api.github.com/users/ayushDtu/following{/other_user}",
  "gists_url": "https://api.github.com/users/ayushDtu/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ayushDtu/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ayushDtu/subscriptions",
  "organizations_url": "https://api.github.com/users/ayushDtu/orgs",
  "repos_url": "https://api.github.com/users/ayushDtu/repos",
  "events_url": "https://api.github.com/users/ayushDtu/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ayushDtu/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ayush Jha",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-05-16T19:22:12Z",
  "updated_at": "2024-06-10T12:55:07Z"
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/login', (req,res) =>{
    res.send('<h1>Pleas login at website</h1>')
})

app.get('/install', (req,res) => {
    res.send('Installing')
})

app.get('/github', (req,res) => {
  res.json(githubData)
})