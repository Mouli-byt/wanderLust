   
         mapboxgl.accessToken = mapToken;

         const map = new mapboxgl.Map({
         container: 'map', 
         style: "mapbox://styles/mapbox/streets-v12",
         center: listing.geometry.coordinates, 
         zoom: 9 ,
         });
   
    

        const marker = new mapboxgl.Marker({ color:"red"})
        .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.location}</h4> <p>Exact Location will be provided after booking</p>`))
        .addTo(map);

        

    //      map.on('load', () => {
    //     // Load an image from an external URL.
    //     map.loadImage(
    //         `https://images.unsplash.com/photo-1604937455095-ef2fe3d46fcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    //         (error, image) => {
    //             if (error) throw error;

    //             // Add the image to the map style.
    //             map.addImage('cat', image);

    //             // Add a data source containing one point feature.
    //             map.addSource('point', {
    //                 'type': 'geojson',
    //                 'data': {
    //                     'type': 'FeatureCollection',
    //                     'features': [
    //                         {
    //                             'type': 'Feature',
    //                             'geometry': {
    //                                 'type': 'Point',
    //                                 'coordinates': listing.geometry.coordinates
    //                             }
    //                         }
    //                     ]
    //                 }
    //             });

    //             // Add a layer to use the image to represent the data.
    //             map.addLayer({
    //                 'id': 'points',
    //                 'type': 'symbol',
    //                 'source': 'point', // reference the data source
    //                 'layout': {
    //                     'icon-image': 'cat', // reference the image
    //                     'icon-size': 0.10
    //                 }
    //             });
    //         }
    //     );
    // });