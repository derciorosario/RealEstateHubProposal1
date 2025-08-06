import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { sampleProperties } from '../data/sampleProperties';

const ExploreProperties = () => {
    return (
        <div>
            <h1>Explore Properties</h1>
            <div className="property-list">
                {sampleProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default ExploreProperties;