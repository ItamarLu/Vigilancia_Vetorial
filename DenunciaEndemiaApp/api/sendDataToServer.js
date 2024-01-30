const apiUrl = 'https://d73f-2001-12f0-79d-8000-5ce1-bb58-b86f-df87.ngrok-free.app'

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
