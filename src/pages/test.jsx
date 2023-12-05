const ParkInfo = ({ name, description, budgets, images }) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <h4>Budgets</h4>
    <ul>
      {budgets.map((budget, index) => (
        <li key={index}>{budget}</li>
      ))}
    </ul>
    <h4>Images</h4>
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Park Image ${index + 1}`} />
      ))}
    </div>
  </div>
);

export default ParkInfo;
