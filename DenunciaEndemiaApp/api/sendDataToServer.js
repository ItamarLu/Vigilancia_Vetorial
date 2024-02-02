const apiUrl = 'https://60b6-2001-12f0-79d-8067-e1bd-b5f7-5a85-ba94.ngrok-free.app/api/receber-report'

export const sendDataToServer = async (data) => {
  try {
    await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.error('Error sending data:', error)
  }
}
