const axios = require('axios')
const GITHUB_REPO_QUERY_URL = 'https://api.github.com/search/repositories'

module.exports = {
  repoQuery: (req, res) => {
    const { q, page, sort } = req.query
    const url = `${GITHUB_REPO_QUERY_URL}?q=${q}&page=${page}&sort=${sort}`

    if (!(q && page)) {
      return res.status(400).json({
        error: 'Query and page params are required.'
      })
    }
    
    return axios.get(url)
      .then(response => res.status(200).json(response.data))
      .catch(error => res.status(500).json({ error }))
  },
}
