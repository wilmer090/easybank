import React from "react";
import budgeting from "../assets/img/icon-budgeting.svg";
import online from "../assets/img/icon-online.svg";
import onboarding from "../assets/img/icon-onboarding.svg";
import API from "../assets/img/icon-api.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import InfoBox from "../components/InfoBox";
import currentBg from "../assets/img/image-currency.jpg";
import restaurantBg from "../assets/img/image-restaurant.jpg";
import planeBg from "../assets/img/image-plane.jpg";
import confettiBg from "../assets/img/image-confetti.jpg";
import phones from "../assets/img/image-mockups.png";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <>
      <section className="home_top very_light_gray ">
        <div className="home_background_image">
          <img src={`${phones}`} alt="" className="home_main_image" />
        </div>

        <div className="home_top_content center-item body-margin ">
          <h1 className="home_main_header light-text">
            Next generation <br />
            digital banking
          </h1>
          <p style={{ textAlign: "justify", wordBreak: "break-all" }}>
            Take your financial life online. Your EasyBank account will be
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button title={"Request Invite"} />
        </div>
      </section>
      <section className="light_grayish_blue body-margin center-text">
        <div className="info_box_header">
          <h1 className="light-text">Why choose Easybank?</h1>
          <p style={{ textAlign: "justify", wordBreak: "break-all" }}>
            We leverage Open Baking to turn your bank account into your
            financial hub. Control finances like never before.
          </p>
        </div>
        <div className="info_box_wrapper">
          <InfoBox
            thumbNail={`${online}`}
            header={"Online Banking"}
            text={
              "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            }
          />
          <InfoBox
            thumbNail={`${budgeting}`}
            header={"Simple Budgeting"}
            text={
              "See excatly where your money goes each month. Receive notifications when you are close to hitting your limits."
            }
          />
          <InfoBox
            thumbNail={`${onboarding}`}
            header={"Fast Onboarding"}
            text={
              "We do not do branches. Open your account in minutes online and start taking control of your finances right away."
            }
          />
          <InfoBox
            thumbNail={`${API}`}
            header={"Open API"}
            text={
              "Manage your saving, investments, pensions and much more from one account. Tracking your money has never been easier."
            }
          />
        </div>
      </section>
      <section className="very_light_gray body-margin">
        <div className="home_articles_title">
          <h1 className="light-text">Latest Articles</h1>
        </div>
        <div className="card_section">
          <Card
            thumbNail={currentBg}
            author={"Claire Robinson"}
            title={"Receive money in any currency with no fees"}
            text={
              "The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single..."
            }
          />
          <Card
            thumbNail={restaurantBg}
            author={"Wilson Hutton"}
            title={"Treat yourself without worrying about money"}
            text={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            }
          />
          <Card
            thumbNail={planeBg}
            author={"Wilson Hutton"}
            title={"Take your Easkbank card wherever you go"}
            text={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            }
          />
          <Card
            thumbNail={confettiBg}
            author={"Claire Robinson"}
            title={"Our invite-only Beta accounts are now live!"}
            text={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
            }
          />
        </div>
      </section>
    </>
  );
};

export default Home;
