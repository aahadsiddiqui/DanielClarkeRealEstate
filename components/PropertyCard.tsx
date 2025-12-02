"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Square, Heart, Star } from "lucide-react";

interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  image: string;
  featured?: boolean;
  rating?: number;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-lavender/20 hover:border-rose/40">
      <div className="relative h-64 overflow-hidden bg-dim/10">
        {!imageError ? (
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-midnight/20 to-rose/20 flex items-center justify-center">
            <span className="text-dim text-lg">Property Image</span>
          </div>
        )}
        {property.featured && (
          <div className="absolute top-4 left-4 bg-rose text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-4 right-4 rounded-full bg-white/90 hover:bg-white ${
            isFavorite ? "text-rose" : "text-dim"
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
        {property.rating && (
          <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-midnight">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {property.rating}
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-midnight mb-2 group-hover:text-rose transition-colors">
          {property.title}
        </h3>
        <div className="flex items-center text-dim text-sm mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.address}</span>
        </div>
        <div className="text-2xl font-bold text-midnight mb-4">
          {formatPrice(property.price)}
        </div>
        <div className="flex items-center gap-4 text-sm text-dim">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button className="flex-1 bg-midnight hover:bg-midnight/90 text-lavender">
          View Details
        </Button>
        <Button variant="outline" className="border-midnight text-midnight hover:bg-midnight hover:text-lavender">
          Schedule Tour
        </Button>
      </CardFooter>
    </Card>
  );
}

