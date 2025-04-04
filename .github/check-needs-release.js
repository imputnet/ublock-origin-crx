#!/usr/bin/env node

const getLatestRelease = async (repo) => {
    const response = await fetch('https://api.github.com/repos/' + repo + '/releases');
    if (!response.ok) throw "response is not ok";

    const data = await response.json();
    if (!Array.isArray(data)) throw "invalid data";

    return data.find(r => !r.draft && !r.prerelease);
}

const checkNewRelease = async () => {
    const ublock_release = await getLatestRelease('gorhill/uBlock');
    const our_release = await getLatestRelease(process.env.GITHUB_REPOSITORY || 'imputnet/ublock-origin-crx');

    const needs_release = !our_release || new Date(ublock_release.published_at) > new Date(our_release.published_at);
    const sources = ublock_release.assets.find(a => a.name.endsWith('chromium.zip'));
    if (needs_release && sources) {
        console.log('TAG_NAME=' + ublock_release.tag_name);
    }
}

checkNewRelease();
