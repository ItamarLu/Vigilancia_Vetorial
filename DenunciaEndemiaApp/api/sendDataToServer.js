const apiUrl = 'https://08d2-2804-248-fa9a-fc00-bd28-fc0d-b41a-c228.ngrok-free.app/api/receber-report'

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
