//Link para enviar os dados para o banco de dados
const apiUrl = 'https://6a0b-2001-12f0-79d-8000-950e-b769-c4ff-8773.ngrok-free.app/api/receber-report'

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
