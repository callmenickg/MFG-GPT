export default defineEventHandler((event) => {
    const authorizationHeader = event.headers.get("Authorization");
    console.log(authorizationHeader)

    if (!authorizationHeader) {
        setResponseStatus(event, 401);
        return { error: "No Authorization has been provided. Try again. -NBG" }
    }
    
    const authorizationToken = authorizationHeader.split("Bearer " ).slice(-1)[0]

    if (authorizationToken !== process.env.GPT_KEY) {
        setResponseStatus(event, 401); 
        return { error: "Not authorized buddy, try again?"}
    }
})