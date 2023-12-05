import React, { useState, useEffect } from 'react';
import {
  fetchDestinations,
  fetchEntityChildren,
  fetchEntityLiveData,
} from '../utils/api-utils'; // Asegúrate de tener la ruta correcta

const ParquesComponent = () => {
  const [parques, setParques] = useState([]);

  useEffect(() => {
    const cargarParques = async () => {
      try {
        const destinationsResponse = await fetchDestinations();
        console.log('Destinations Response:', destinationsResponse);
  
        if (destinationsResponse.destinations && Array.isArray(destinationsResponse.destinations)) {
          const parquesPromises = destinationsResponse.destinations.map(async (destination) => {
            try {
              const childrenResponse = await fetchEntityChildren(destination.id);
              console.log('Children Response for', destination.name, ':', childrenResponse);
  
              // Verifica si la respuesta tiene la propiedad 'children'
              if (childrenResponse.children && Array.isArray(childrenResponse.children)) {
                const parqueInfoPromises = childrenResponse.children.map(async (parque) => {
                  const liveData = await fetchEntityLiveData(parque.id);
                  console.log('Live data for', parque.name, ':', liveData);
  
                  return {
                    id: parque.id,
                    name: parque.name,
                    description: parque.description,
                    image: liveData.image_url,
                  };
                });
  
                return Promise.all(parqueInfoPromises);
              } else {
                console.error('La respuesta de fetchEntityChildren no tiene la propiedad "children" o no es un array:', childrenResponse);
                return [];
              }
            } catch (childrenError) {
              console.error('Error al cargar children:', childrenError);
              return [];
            }
          });
  
          const allParques = await Promise.all(parquesPromises);
          setParques(allParques.flat());
        } else {
          console.error('La respuesta de fetchDestinations no tiene la propiedad "destinations" o no es un array:', destinationsResponse);
        }
      } catch (error) {
        console.error('Error al cargar los parques:', error);
      }
    };
  
    cargarParques();
  }, []);
  
  
  
  
  

  return (
    <div>
      {parques.map((parque) => (
        <div key={parque.id}>
          <img src={parque.image} alt={parque.name} />
          <h3>{parque.name}</h3>
          <p>{parque.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ParquesComponent;
