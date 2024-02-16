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
        -48.460364,
        -48.479446,
        -48.48820197704398,
        -48.47795921720548,
        -48.472369493892835,
        -48.48725110460131,
        -48.48750859665391,
        -48.47205459565467,
        -48.45382044602629,
        -48.44634802513942,
        -48.46465426501525,
        -48.46804751639183
    ]

    const latitudeLugaresVisitados = [
        -1.454331,
        -1.508248,
        -1.446021,
        -1.452473,
        -1.427010,
        -1.388850,
        -1.4371745048368196,
        -1.44919390675062,
        -1.4488962768179456,
        -1.4373583412493558,
        -1.4367040880963087,
        -1.4499421797480159,
        -1.3561474741693542,
        -1.3696913319062018,
        -1.3889987257207463,
        -1.4143981764724147
    ]

    const nomesLugaresVisitados = [
        "Café com Arte<br>- Onde tudo começou (muito Radiohead, Michael Jackson e Artic Monkeys) - 27/05/23",
        "Restaurante da Drika<br>- Passeando com meu amor e amigos - 17/06/23",
        "Shopping Boullevard<br>- Filminho Elementos com meu amor (o mundo quase acaba) - 19/07/23<br>- Lanchando e fazendo Lego - 31/01/24",
        "Museu Emílio Goeldi<br>- Passeando e vendo os bichinhos no Museu - 22/07/23<br>- Passeando no museu com meu amor e o Samuelzinho - 04/02/24",
        "Tacacá do Renato<br>- Levando meu amor pra tomar tacacá antes dela viajar - 26/07/23<br>- Novamente tomando tacacá com meu amor - 06/02/24",
        "Aeroporto Internacional de Val-De-Cans<br>- Chegada do meu amor - 28/01/24",
        "Ver-O-Açaí<br>- Comemorando nosso aniversário de 6 meses - 01/02/24",
        "Livraria Travessia<br>- Olhando e comprando alguns livros após o Museu - 22/07/23",
        "Supermercado Mais Barato<br>- Comendo pizza durante o passeio - 22/07/23",
        "Praça Brasil<br>- Tomando água de Coco e passeando - 02/02/24",
        "Café Plenitude<br>- Encontro na cafeteria com meu amor - 02/02/24",
        "Feira Nippo<br>- Passeando na feirinha com meu amor e o Samuelzinho - 04/02/24",
        "Instituto Albert Einstein<br>- Recebendo Diploma do meu amor - 05/02/24",
        "Parque Shopping<br>- Visitando uma nova lojinha no shopping - 05/02/24",
        "Shopping Grão Pará<br>- Procurando presente pra Dona Rose no shopping - 05/02/24",
        "Prensadão Lanches<br>- Jantando um lanche gigante com meu amor - 05/02/24"
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