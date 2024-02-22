//Link para enviar os dados para o banco de dados
const apiUrl = 'https://850c-2804-29b8-5096-44bb-2db4-6dc1-f014-3de7.ngrok-free.app/api/receber-report'

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
