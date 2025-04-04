import * as fs from 'fs';

const data = JSON.parse(fs.readFileSync(process.argv[2]));

data.update_url = 'https://raw.githubusercontent.com/'
    + (process.env.GITHUB_REPOSITORY || 'imputnet/ublock-origin-crx')
    + '/refs/heads/main/update.xml';

fs.writeFileSync(process.argv[2], JSON.stringify(data, null, 2));
