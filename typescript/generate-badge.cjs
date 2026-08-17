const fs = require('fs');

async function updateBadge() {
  try {
    // 1. Read Vitest's exported JSON file
    const rawData = fs.readFileSync('vitest-results.json', 'utf8');
    const results = JSON.parse(rawData);


    // 2. Extract Vitest metrics

    const problemsTotal = results.numTotalTestSuites / 2;
    const problemsPassed = results.numPassedTestSuites / 2;
    const problemsFailed = results.numFailedTestSuites / 2;

    // 3. Format your badge string structure
    let message = `${problemsPassed}/${problemsTotal} passed`;

    // 4. Set color indicator based on percent of success
    const percent = (problemsPassed / problemsFailed) * 100;
    const color =
      percent === 100 ? 'brightgreen' :
      percent >= 80 ? 'green' :
      percent >= 60 ? 'yellowgreen' :
      percent >= 40 ? 'yellow' :
      percent >= 20 ? 'orange' :
      'red';

    // 5. Structure the standard Shields.io schema
    const badgePayload = {
      schemaVersion: 1,
      label: 'TypeScript Tests',
      message: message,
      color: color
    };

    // 6. Direct HTTP patch to update your personal Gist file
    const response = await fetch(`https://api.github.com/gists/${process.env.GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${process.env.GIST_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'leet-coder-ts-badge.json': {
            content: JSON.stringify(badgePayload, null, 2)
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`GitHub API returned error: ${response.status} - ${errorText}`);
    }

    console.log('Vitest dynamic badge generated successfully!');
  } catch (error) {
    console.error('Badge generation failure:', error.message);
    process.exit(1);
  }
}

updateBadge();
