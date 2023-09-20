async function sendPostRequest(data) {
    const url = '/'; // Replace with your server's URL

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const responseData = await response.text();
        return responseData; // Display the server's response
      } else {
        alert('Error: Unable to send POST request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


async function getChatbotReply(user_message) {
    let req = new Object();

    req.message = user_message;
    req.sender = "user";

    let res = await sendPostRequest(req);
    return res;
}