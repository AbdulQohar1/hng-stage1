const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  return res.json({
    slack_name: req.query.slack_name,
    'current_day': 'Sunday', 
    'utc_time': new Date().toISOString().split('.')[0]+'Z',
    track: req.query.track,
    'age': 25,
    'github_filename_url': 'https://github.com/AbdulQohar1/hng-stage1/tree/main/stage1',
    'github_repo_url': 'https://github.com/AbdulQohar1/hng-stage1',
    'status_code': 200,
  });
})

app.listen(3000, () => console.log('listen on port 3000....'))