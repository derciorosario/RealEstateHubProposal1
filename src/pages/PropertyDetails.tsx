import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { sampleProperties } from '../data/sampleProperties';

const PropertyDetails = () => {
    const { id } = useParams();
    const property = sampleProperties.find(prop => prop.id === id);

    if (!property) {
        return <div>Property not found</div>;
    }

    return (
        <div>
            <h1>{property.title}</h1>
            <p>{property.description}</p>
            <p>Price: ${property.price}</p>
            <p>Location: {property.location}</p>
            <div className="gallery">
                {property.images.map((image, index) => (
                    <img key={index} src={image} alt={property.title} />
                ))}
            </div>
        </div>
    );
};

export default PropertyDetails;