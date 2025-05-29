#!/usr/bin/env node

import axios from 'axios';

const updateDuckDNS = async (token, domains) => {
    const url = `https://www.duckdns.org/update?domains=${domains}&token=${token}&ip=`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw new Error('Error updating DuckDNS: ' + error.message);
    }
};

// Always run as CLI
const token = process.env.DUCK_TOKEN;
const domains = process.env.DUCK_DOMAINS;
if (!token || !domains) {
    console.error('DUCK_TOKEN and DUCK_DOMAINS environment variables must be set.');
    process.exit(1);
}
console.log('Running duckup with:', { token, domains });
updateDuckDNS(token, domains)
    .then(result => {
        if (result && result.includes('OK')) {
            console.log('✅ DuckDNS update successful!');
        } else {
            console.log('⚠️ DuckDNS update response:', result);
        }
    })
    .catch(err => {
        console.error(err.message);
        process.exit(1);
    });

export { updateDuckDNS };