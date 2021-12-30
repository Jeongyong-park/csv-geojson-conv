import { parse } from 'csv-parse/sync';
function CSVtoGeoJSON(strCsv, options) {
    const { latitudeColumnName = "Latitude", longitudeColumnName = "Longitude" } = options || {};
    const records = parse(strCsv, { columns: true, trim: true });
    const features = records.map((row) => {
        const feature = { type: "Feature", properties: row, geometry: { type: "Point", coordinates: [row[longitudeColumnName], row[latitudeColumnName]] } };
        return feature;
    });
    const featureCollection = { type: "FeatureCollection", features };
    return featureCollection;
}
export default CSVtoGeoJSON;
//# sourceMappingURL=index.js.map