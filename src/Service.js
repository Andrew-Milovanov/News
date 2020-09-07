import React from "react";
import s from "./Services.module.css";

const Service = () => {
  return (
    <section>
      <div className={s.banner}>
        <div className={s.content}>
          <div className={s.photo}></div>
          <div className={s.information}>
            <h2>our services. from one amazin thing to another,we do it all</h2>
            <div className={s.text}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ullamcorper diam urna, ac vulputate ex consequat
                  non.convallis urna lacinia. Donec vitae rutrum purus, sit amet
                  commodo tortor.
                </p>
                <p>
                  Praesent nec odio diam. Maecenas ac blandit massa. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Pellentesque nunc est, mollis a ante
                  ac, elementum molestie sem. Curabitur lobortis, augue sit amet
                  elementum viverra, metus est tincidunt arcu, vitae ultrices
                  nunc nunc nec ante. Suspendisse at congue purus. Ut vitae est
                  erat. Aliquam quam mauris, convallis ut tempor nec, varius at
                  ex. Sed ut ante ante.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ullamcorper diam urna, ac vulputate ex consequat
                  non.convallis urna lacinia. Donec vitae rutrum purus, sit amet
                  commodo tortor.
                </p>
                <p>
                  Praesent nec odio diam. Maecenas ac blandit massa. Class
                  aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Pellentesque nunc est, mollis a ante
                  ac, elementum molestie sem. Curabitur lobortis, augue sit amet
                  elementum viverra, metus est tincidunt arcu, vitae ultrices
                  nunc nunc nec ante. Suspendisse at congue purus. Ut vitae est
                  erat. Aliquam quam mauris, convallis ut tempor nec, varius at
                  ex. Sed ut ante ante.
                </p>
                <p>
                  Pellentesque vehicula eleifend nisl, id fringilla lectus
                  posuere eget. Vestibulum convallis id orci ac faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={s.dop_content}>
          <div className={s.container}>
            <h2>Selected a service</h2>
            <ul>
              <li>Some amazing service</li>
              <li>And another one</li>
              <li>A service noone else offers</li>
              <li>Some amazing service</li>
              <li>And another one</li>
              <li>A service noone else offers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
