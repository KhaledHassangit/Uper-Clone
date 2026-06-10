import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "@/store/uberSlices";
import { ORS_API_KEY } from "@/config";


const MapContent = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const dispatch = useAppDispatch();

  const mapRef = useRef<MapView>(null);
  const [routeCoords, setRouteCoords] = useState<any[]>([]);

  const region = origin?.location
    ? {
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }
    : undefined;

  useEffect(() => {
    if (!origin || !destination) return;

    const getRoute = async () => {
      try {
        const response = await fetch(
          "https://api.openrouteservice.org/v2/directions/driving-car/geojson",
          {
            method: "POST",
            headers: {
              Authorization: ORS_API_KEY,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              coordinates: [
                [origin.location.lng, origin.location.lat],
                [destination.location.lng, destination.location.lat],
              ],
            }),
          },
        );

        const data = await response.json();
        console.log("ORS RESPONSE:", data);

        const coords = data?.features?.[0]?.geometry?.coordinates || [];

        // ORS returns [lng, lat] so we convert it
        const formatted = coords.map((c: any) => ({
          latitude: c[1],
          longitude: c[0],
        }));

        setRouteCoords(formatted);

        // optional travel info
        const summary = data?.features?.[0]?.properties?.summary;

        dispatch(setTravelTimeInformation(summary));
      } catch (error) {
        console.log("ORS error:", error);
      }
    };

    getRoute();
  }, [origin, destination,dispatch]);

  return (
    <MapView ref={mapRef} style={{ flex: 1 }} initialRegion={region}>
      {/* ROUTE LINE */}
      {routeCoords.length > 0 && (
        <Polyline
          coordinates={routeCoords}
          strokeWidth={4}
          strokeColor="black"
        />
      )}

      {/* ORIGIN */}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          identifier="origin"
        />
      )}

      {/* DESTINATION */}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default MapContent;
