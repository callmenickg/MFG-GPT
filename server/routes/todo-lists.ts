// // Replace with your Basecamp project ID, account ID, and access token
// const projectId = '35666650';
// const accountId = '5719566';
// const basecampToken = 'YOUR_ACCESS_TOKEN';

// async function getTodoSetsAndTasks() {
//   try {
//     // Fetch all to-do sets
//     const todoSetsResponse = await fetch(`https://3.basecampapi.com/${accountId}/buckets/${projectId}/todosets.json`, {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${basecampToken}`,
//         'Content-Type': 'application/json',
//         'User-Agent': 'YourAppName (yourname@example.com)'  // Customize with your app and contact details
//       }
//     });

//     if (!todoSetsResponse.ok) throw new Error('Failed to fetch to-do sets');

//     const todoSets = await todoSetsResponse.json();

//     // Fetch tasks for each to-do set
//     const todoSetsWithTasks = await Promise.all(todoSets.map(async (todoSet) => {
//       const tasksResponse = await fetch(`https://3.basecampapi.com/${accountId}/buckets/${projectId}/todosets/${todoSet.id}/todos.json`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${basecampToken}`,
//           'Content-Type': 'application/json',
//           'User-Agent': 'YourAppName (yourname@example.com)'
//         }
//       });

//       if (!tasksResponse.ok) throw new Error('Failed to fetch tasks');

//       const tasks = await tasksResponse.json();

//       // Add the tasks to the corresponding to-do set
//       return {
//         ...todoSet,
//         tasks: tasks
//       };
//     }));

//     // Return the complete JSON data of to-do sets with their tasks
//     return todoSetsWithTasks;

//   } catch (error) {
//     console.error('Error:', error);
//     return { error: error.message };
//   }
// }

// // Call the function and log the JSON response
// getTodoSetsAndTasks().then((data) => console.log(JSON.stringify(data, null, 2)));
