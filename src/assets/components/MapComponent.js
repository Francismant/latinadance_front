const MapComponent = () => {
    const mapEmbedURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.858539873962!2d3.060824076870052!3d50.6483182730968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a7abd67061f%3A0xfef0df2f540da10c!2s16%20Rue%20Paul%20Ramadier%2C%2059800%20Lille!5e0!3m2!1sfr!2sfr!4v1696153284061!5m2!1sfr!2sfr"

    return (
        <div style={{ width: '450px', height: '300px' }}>
            <iframe
                title="Google Maps"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={mapEmbedURL}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default MapComponent;
