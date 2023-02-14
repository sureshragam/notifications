const Notification = (props) => {
  const { className, name, imageUrl } = props;
  //  Write your code here.
  return (
    <div className={className}>
      <img src={imageUrl} />
      <p>{name} Message</p>
    </div>
  );
};
const img1 = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png";
const img2 = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png";
const img3 = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png";
const img4 = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png";

const element = (
  //  Write your code here.

  <div className="card">
    <h1 className="heading">Notifications</h1>
    <Notification className="info" name="Information" imageUrl={img1} />
    <Notification className="success" name="Success" imageUrl={img2} />
    <Notification className="warn" name="Warning" imageUrl={img3} />
    <Notification className="error" name="Error" imageUrl={img4} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
