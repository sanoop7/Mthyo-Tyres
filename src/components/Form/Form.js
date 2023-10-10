import "./Form.css";
import MyFormComponent from "./MyFormComponent";

const Form = () => {
  return (
    <div className="form__section" id="form_sec">
      <div className="form_sec_1" data-aos="fade-down" data-aos-duration="2000">
        <h1
          className="form_head"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          Request A Quote Now!
        </h1>
        <div
          className="form_sec_1_img"
          data-aos="fade-down-right"
          data-aos-duration="1500"
        ></div>
        <div
          className="form_sec_1_desc"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          data-aos-delay="1000"
        >
          Your convenience and comfort is our priority, so we have made it easy
          for you to drop off your
          <span className="form_sec_1_desc_2"> vehicle 24/7.</span>
        </div>
      </div>
      <div className="form_sec_2">
        <MyFormComponent />
      </div>
      <div className="form_sec_3">
        <span>
          Book your preferred time slot now on our website, get a call and
          confirm the price, then visit one of our store nearest to you, finally
          change your tyres instantly
        </span>
      </div>
    </div>
  );
};

export default Form;
