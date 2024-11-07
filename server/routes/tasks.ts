export default eventHandler(async (event) => {

    const accountId = process.env.ACCOUNT_ID
    const projectId = process.env.PROJECT_ID

    async function getBasecampTasks(accountId, projectId) {
        const url = `https://3.basecampapi.com/${accountId}/buckets/${projectId}/todosets/6884316300/todolists.json`
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.BASECAMP_TOKEN}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'YourAppName (your-email@example.com)' // Replace with your app's name and contact email
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to retrieve tasks:', error);
            return { error: error.message };
        }
    }

    const data = await getBasecampTasks(accountId, projectId);
    return data;
});

