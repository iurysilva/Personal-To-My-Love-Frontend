import Plot from 'react-plotly.js';
import "./MapComponent.css";
import React, { useState } from 'react';
import { useEffect } from 'react';

const MapComponent = () => {
    const [data, setData] = useState({})

    const longitudeLugaresVisitados = [
        -48.486996,
        -48.491698,
        -48.488995,
        -48.477432,
        -48.460364
    ]

    const latitudeLugaresVisitados = [
        -1.454331,
        -1.508248,
        -1.446021,
        -1.452473,
        -1.427010
    ]

    const nomesLugaresVisitados = [
        "Café com Arte - 27/05/23",
        "Restaurante da Drika - 17/06/23",
        "Shopping Boullevard - 19/07/23",
        "Museu Emílio Goeldi - 22/07/23",
        "Tacacá do Renato - 26/07/23"
    ]

    useEffect(() => {
        setData([
            {
                lon: longitudeLugaresVisitados,
                lat: latitudeLugaresVisitados,
                type: "scattermapbox",
                marker: {color: "red", size: 8},
                name: "",
                hovertemplate: nomesLugaresVisitados
            }
        ])
      }, [])

    return (
    <div className="Map-Component">
        <Plot
            data= {data}
            layout={{
                autosize: true,
                dragmode: "zoom",
                mapbox: { style: "open-street-map", center: { lat: -1.443831, lon: -48.476240 }, zoom: 11 },
                showlegend: false,
                margin: {l: 0, r: 0, t: 0, b: 0}
            }}
            config={{displayModeBar: false}}
            useResizeHandler={true}
            style={{width: "100%", height: "600px"}}/>
      </div>
    );
  }

export default MapComponent;