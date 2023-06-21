import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
// import Menu from "../../components/Menu";
import { Container, Modal } from "react-bootstrap";
import "./index.css";

const Home = (props) => {
  // const [modalShow, setModalShow] = useState(false);
  // const [isNotification, setNotification] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  // const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.user);
  // const { dataAll, dataToday, dataWeek } = useSelector(
  //   (state) => state.history
  // );
  // const { token20k, token50k, token100k } = useSelector((state) => state.topup);
  // const { token } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   dispatch(getHistory(token));
  //   dispatch(chargeTopup20k(token));
  //   dispatch(chargeTopup50k(token));
  //   dispatch(chargeTopup100k(token));
  // }, []);

  // const splitPhone = (phone) => {
  //   if (phone) {
  //     const newPhone = phone.split("").map((item, index) => {
  //       if (index === 2 || index === 6) {
  //         return item + "-";
  //       } else {
  //         return item;
  //       }
  //     });

  //     return newPhone;
  //   } else {
  //     return "";
  //   }
  // };

  // const handleGraph = (stats) => {
  //   let income = 0;
  //   let expense = 0;
  //   dataAll.forEach((item) => {
  //     if (item.receiver === data.name || item.name) {
  //       income += item.amount;
  //     } else {
  //       expense += item.amount;
  //     }
  //   });

  //   if (stats === "income") {
  //     return income;
  //   } else {
  //     return expense;
  //   }
  // };

  return (
    <Fragment>
      <Navbar />
      <Container className="d-flex mt-5 px-0">
        <div className="content-main">
          <div className="d-flex align-items-start d-sm-none mb-4 px-3">
            {/* <div onClick={() => setIsMobile(false)}>
              <img className="mr-3" src={Back} alt="back" />
            </div> */}
            <p style={{ fontSize: "20px" }} className="bold">
              Transaction
            </p>
          </div>
          <div className="bottom-panel">
            {/* <div className="chart px-3">
              <div className="top">
                <div className="left">
                  <img src={Income} alt="" />
                  <p className="small">Income</p>
                  <p className="text bold">Rp{handleGraph("income")}</p>
                </div>
                <div className="right">
                  <img src={Expense} alt="" />
                  <p className="small">Expense</p>
                  <p className="text bold">Rp{handleGraph("expense")}</p>
                </div>
              </div>
              <p className="text bold mb-3 mt-5">In This Week</p>
              <div className="bottom mb-5">
                {/* <MyChart /> */}
          </div>
        </div>{" "}
        <div className="history">
          <div className="desc">
            <span className="text bold desc-title">Transaction History</span>
            {/* <Link to="/dashboard/history" className="small primary">
                  See all
                </Link> */}
          </div>
          <div className="d-flex flex-column">ini data</div>
        </div>
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
