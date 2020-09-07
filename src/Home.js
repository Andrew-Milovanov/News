import React from "react";
import s from "./Home.module.css";
import { NavLink } from "react-router-dom";
import "./Main.css";

const Home = () => {
  return (
    <section>
      <div className={"banner"}>
        <div className={s.content}>
          <div className={s.photo}>
            <div>
              <h1>some slick phrase would go in here</h1>
              <h1>to sum up what the business</h1>
              <h1>actually does and stands for</h1>
            </div>
          </div>
          <div className={s.information}>
            <div>
              <h2>services wo offer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ullamcorper diam urna, ac vulputate ex consequat
                non.convallis urna lacinia. Donec vitae rutrum purus, sit amet
                commodo tortor.
              </p>
              <p>
                Praesent nec odio diam. Maecenas ac blandit massa. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Pellentesque nunc est, mollis a ante ac,
                elementum molestie sem. Curabitur lobortis, augue sit amet
                elementum viverra, metus est tincidunt arcu, vitae ultrices nunc
                nunc nec ante. Suspendisse at congue purus. Ut vitae est erat.
                Aliquam quam mauris, convallis ut tempor nec, varius at ex. Sed
                ut ante ante.
              </p>
              <ul>
                <li>
                  <NavLink to="/services" className={s.button}>
                    Read More
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h2>how we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ullamcorper diam urna, ac vulputate ex consequat
                non.convallis urna lacinia. Donec vitae rutrum purus, sit amet
                commodo tortor.
              </p>
              <p>
                Praesent nec odio diam. Maecenas ac blandit massa. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Pellentesque nunc est, mollis a ante ac,
                elementum molestie sem. Curabitur lobortis, augue sit amet
                elementum viverra, metus est tincidunt arcu, vitae ultrices nunc
                nunc nec ante. Suspendisse at congue purus. Ut vitae est erat.
                Aliquam quam mauris, convallis ut tempor nec, varius at ex. Sed
                ut ante ante.
              </p>
              <p>
                Pellentesque vehicula eleifend nisl, id fringilla lectus posuere
                eget. Vestibulum convallis id orci ac faucibus.
              </p>
              <ul>
                <li>
                  <NavLink to="/work" className={s.button}>
                    Read More
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.dop_content}>
          <div className={s.container}></div>
          <div>
            <p>
              Clean, elegant typography matched with sharp lines and precise
              spacing leads to a professional look and feel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
