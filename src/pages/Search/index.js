import React, { useRef, useState, useEffect } from "react";
import Header from "../../components/header";

import mapboxgl from 'mapbox-gl'; 

import PropertyImage01 from "../../assets/propertyShow01.png";
import filterIcon from "../../assets/filter2.svg";
import bedIcon from "../../assets/bed-1.svg";
import rulerIcon from "../../assets/ruler-1.svg";
import carIcon from "../../assets/car-1.svg";
import showerIcon from "../../assets/shower-1.svg";

import "./styles.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const SearchPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-5.192103);
  const [lat, setLat] = useState(-37.3477149);
  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [lat, lng],
      zoom: zoom,
    });
  });

  return (
    <div>
      <Header />
      <div className="search-page-container">
        <div className="search-page-left-block-container">
          <div className="breadcrumb">
            <span className="breadcrumb-item">
              Procurar imóveis >{" "}
              <span className="breadcrumb-local">Natal - RN</span>
            </span>

            <button className="breadcrumb-button-filter">
              <img src={filterIcon} alt="Filter icon" />
              Filtrar Imóveis
            </button>
          </div>

          <div className="property-items-container">
            <article className="property-item">
              <img src={PropertyImage01} alt="Property 01" />
              <div className="type-price">
                <p>Apartamento</p>
                <span className="price">
                  R$ 2.200<span className="price-green">/mês</span>
                </span>
              </div>
              <h5>
                Rua Inácio Luís da Costa, Parque São Domingos, N° 34, São Paulo{" "}
              </h5>
              <ul className="some-properties-info">
                <li className="some-properties-info-item">
                  <img src={bedIcon} alt="bed icon" />
                  <span>3</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={showerIcon} alt="shower icon" />
                  <span>2</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={carIcon} alt="car icon" />
                  <span>1</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={rulerIcon} alt="ruler icon" />
                  <span>120 m²</span>
                </li>
              </ul>
            </article>

            <article className="property-item">
              <img src={PropertyImage01} alt="Property 01" />
              <div className="type-price">
                <p>Apartamento</p>
                <span className="price">
                  R$ 2.200<span className="price-green">/mês</span>
                </span>
              </div>
              <h5>
                Rua Inácio Luís da Costa, Parque São Domingos, N° 34, São Paulo{" "}
              </h5>
              <ul className="some-properties-info">
                <li className="some-properties-info-item">
                  <img src={bedIcon} alt="bed icon" />
                  <span>3</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={showerIcon} alt="shower icon" />
                  <span>2</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={carIcon} alt="car icon" />
                  <span>1</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={rulerIcon} alt="ruler icon" />
                  <span>120 m²</span>
                </li>
              </ul>
            </article>

            <article className="property-item">
              <img src={PropertyImage01} alt="Property 01" />
              <div className="type-price">
                <p>Apartamento</p>
                <span className="price">
                  R$ 2.200<span className="price-green">/mês</span>
                </span>
              </div>
              <h5>
                Rua Inácio Luís da Costa, Parque São Domingos, N° 34, São Paulo{" "}
              </h5>
              <ul className="some-properties-info">
                <li className="some-properties-info-item">
                  <img src={bedIcon} alt="bed icon" />
                  <span>3</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={showerIcon} alt="shower icon" />
                  <span>2</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={carIcon} alt="car icon" />
                  <span>1</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={rulerIcon} alt="ruler icon" />
                  <span>120 m²</span>
                </li>
              </ul>
            </article>

            <article className="property-item">
              <img src={PropertyImage01} alt="Property 01" />
              <div className="type-price">
                <p>Apartamento</p>
                <span className="price">
                  R$ 2.200<span className="price-green">/mês</span>
                </span>
              </div>
              <h5>
                Rua Inácio Luís da Costa, Parque São Domingos, N° 34, São Paulo{" "}
              </h5>
              <ul className="some-properties-info">
                <li className="some-properties-info-item">
                  <img src={bedIcon} alt="bed icon" />
                  <span>3</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={showerIcon} alt="shower icon" />
                  <span>2</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={carIcon} alt="car icon" />
                  <span>1</span>
                </li>

                <li className="some-properties-info-item">
                  <img src={rulerIcon} alt="ruler icon" />
                  <span>120 m²</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
        <div className="search-page-right-block-container">
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
