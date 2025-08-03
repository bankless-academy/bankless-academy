// export const revalidate = 3600 // revalidate the data at most every hour

import { BigQuery } from '@google-cloud/bigquery';

export const fetchBE = async (url: string) => {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const text = await res.text()
  try {
    return JSON.parse(text)
  } catch (error) {
    return text
  }
}

export const fetchGitcoinDonations = async (address: string): Promise<number> => {
  try {
    const bigquery = new BigQuery({
      credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS),
      projectId: 'civic-nation-467912-q1',
    });

    // Define a simple query
    const query = `SELECT count(*) FROM \`civic-nation-467912-q1.gitcoin.all_donations\` where donor_address ="${address}"`;

    // Execute the query
    const [rows] = await bigquery.query(query);

    // Return the count from the first row
    return rows[0]?.f0_ || 0;
  } catch (error) {
    console.error('Error executing BigQuery:', error);
    return 0;
  }
};
