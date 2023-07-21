// errorHandler.js
// errorHandler.js
export const handleAPIError = (error) => {
    if (error.response) {
      // Error de respuesta de la API (ej: 4xx o 5xx status codes)
      console.error('Error en la respuesta de la API de YouTube:', error.response.data);
      throw new Error('Error en la respuesta de la API de YouTube');
    } else if (error.request) {
      // No se recibió respuesta de la API (puede indicar un problema de conexión)
      console.error('No se pudo obtener una respuesta de la API de YouTube:', error.request);
  
      // Manejar específicamente el error "Failure when receiving data from the peer"
      if (error.message.includes('Failure when receiving data from the peer')) {
        console.log('Verifica el api key'); // Mostrar tu mensaje personalizado
      }
  
      throw new Error('No se pudo obtener una respuesta de la API de YouTube');
    } else {
      // Otros errores (por ejemplo, errores de sintaxis en la solicitud)
      console.error('Error al obtener datos de YouTube:', error.message);
      throw new Error('Error al obtener datos de YouTube');
    }
  };
  
  