const apiUrl = 'https://1496-2001-12f0-79d-806e-6df2-1958-f438-4ae9.ngrok-free.app/api/receber-report'

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
