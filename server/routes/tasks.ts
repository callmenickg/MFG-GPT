export default eventHandler(async (event) => {
    async function getBasecampTasks(accountId, projectId) {
        const url = `https://3.basecampapi.com/5719566/buckets/35666650/todosets/6884316300/todolists.json`
      //  https://3.basecampapi.com/5719566/buckets/35666650/todolists/7983935986.json
      //  `https://3.basecampapi.com/5719566/buckets/35666650/todosets/6884316300.json`
       // `https://3.basecampapi.com/${accountId}/projects/${projectId}.json`;
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

    const accountId = '5719566';
    const projectId = '35666650';

    const data = await getBasecampTasks(accountId, projectId);
    return data;
});

