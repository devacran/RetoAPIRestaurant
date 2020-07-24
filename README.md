Endpoints

Creación de API RESTFull:

Descripción del escenario:

Se necesita un API para la estructura de creación de opciones de menú para un restaurant, dicho menú deberá tener los siguientes atributos:

- ID
- Nombre
- Descripción de ingredientes
- Precio
- Estado (Disponible o no disponible)

Deberá:

- Mostrar todas las opciones de menú

  - Endpoint https://apir-estaurant.devacran.vercel.app/api/menu

- Buscar una opción de menú en específica indicando el ID.

  - Endpoint https://apir-estaurant.devacran.vercel.app/api/menu/dish/12345678
  - id's disponibles en el mock para consultar: 12345678, 123456987, 1234567

- Para los datos utilizaremos datos Mocks de opciones de menú

- Implementar códigos de respuesta de HTTP

Finalmente agregar los EndPoints con los cuales se puede hacer los request.
