import React, { useEffect } from "react";
import "../Stylesheets/Sharingan.css";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Sharingan = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#eye-container",
        start: "top center", 
        duration: 4,
        ease: "power1.out",
        toggleActions: "play none none pause",
      }
    });
    tl.fromTo(".st2", { fill: "black" }, { fill: "#ff0606" }, "-=.2");
    tl.fromTo(
      ".spin-leftEye",
      { rotation: 0 },
      { rotation: 2400, duration: 2, transformOrigin: "40.7% 46.9%" },
      "-=0.2"
    );
    tl.fromTo(
      ".spin-rightEye",
      { rotation: 0 },
      { rotation: -2400, duration: 2, transformOrigin: "58% 48%" },
      "-=2"
    );
    tl.fromTo(
      ".eyePointer2",
      { visibility: "hidden" },
      { autoAlpha: 1, duration: 1 },
      "-=1.5"
    );
    tl.fromTo(
      ".eyePointer3",
      { visibility: "hidden" },
      { autoAlpha: 1, duration: 1 },
      "-=2"
    );
  }, []);
  return (
    <section id="Sharingan">
      <div id="eye-container">
        <div id="left-eye">
          <svg
            version="1.1"
            className="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            style={{ enableBackground: "new 0 0 1920 1080" }}
            space="preserve"
          >
            <g>
              <g>
                <rect
                  x="212.8"
                  y="103.8"
                  className="st0"
                  width="1543.7"
                  height="832.3"
                />
                <g>
                  <g>
                    <g id="Layer_3">
                      <circle
                        id="_x3C_eyeBorder_x3E_"
                        className="st1"
                        cx="993"
                        cy="484.7"
                        r="337.1"
                      />
                    </g>
                    <g id="Layer_4">
                      <circle
                        id="_x3C_RedColor_x3E_"
                        className="st2"
                        cx="992.8"
                        cy="485.5"
                        r="337.1"
                      />
                    </g>
                    <g>
                      <g className="spin-leftEye">
                        <circle
                          id="_x3C_Path_id_x3D__x22_circle_x22__x3E_"
                          className="st3"
                          cx="993.4"
                          cy="477.9"
                          r="213.2"
                        />
                        <g className="eyePointer3">
                          <ellipse
                            transform="matrix(0.8016 -0.5979 0.5979 0.8016 -223.4522 693.6299)"
                            cx="933.3"
                            cy="683.5"
                            rx="47.2"
                            ry="45.6"
                          />
                          <path
                            d="M817.7,717.4c-42.9-14.8,124.2,30.4,111.9-47.3c-3.6-23.1,65.4-14.2,44.1,35.7c-9.4,21.9-22.7,30.9-51.4,32.9
								C893.6,740.8,843.6,726.3,817.7,717.4z"
                          />
                        </g>
                        <g className="eyePointer2">
                          <ellipse
                            transform="matrix(1.152237e-02 -0.9999 0.9999 1.152237e-02 719.7392 1660.2511)"
                            cx="1199.6"
                            cy="466.1"
                            rx="45.6"
                            ry="47.2"
                          />
                          <path
                            d="M1311.8,509.1c25.1,37.8-80.2-99.5-117.6-30.3c-11.1,20.6-60.7-28.5-13.3-55.1c20.8-11.8,36.8-10.8,60.8,5
								C1265.7,444.3,1296.6,486.2,1311.8,509.1z"
                          />
                        </g>
                        <g className="eyePointer1">
                          <ellipse
                            transform="matrix(0.8208 -0.5713 0.5713 0.8208 -57.6515 536.2618)"
                            cx="825.8"
                            cy="360"
                            rx="45.6"
                            ry="47.2"
                          />
                          <path
                            d="M795.6,243.6c16.3-42.4-34.5,123.1,43.7,113.4c23.2-2.9,12.1,65.8-37.2,42.9c-21.6-10-30.1-23.7-31.2-52.4
								C769.7,318.7,785.8,269.1,795.6,243.6z"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <ellipse
                        id="_x3C_eyeMiddle_x3E_"
                        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -47.7127 841.8151)"
                        cx="992.3"
                        cy="478.5"
                        rx="61"
                        ry="61"
                      />
                    </g>
                    <path
                      className="mangekyo st4"
                      d="M1172.6,588c0,0,50.1-54.7,61-149.1
					s-53.5-220.3-168.5-250.3c0,0-28.5,8.4-62.9,72.9c0,0-73.2-13.2-122.9,6.2s-141,58.7-168,168.6c-27.1,110,8.8,122.3,8.8,122.3
					s32.1,23.8,86.2,13.7c0,0,23.4,88.6,116.2,138.3s171.9,28.9,171.9,28.9s68.5-16.2,104.3-55.5
					C1198.8,684.1,1216,654.2,1172.6,588z M1003.8,427c28.8,7.9,45.8,37.7,37.9,66.6s-37.7,45.8-66.6,37.9
					c-28.9-7.9-45.8-37.7-37.9-66.6C945.1,436,974.9,419.1,1003.8,427z M810.3,472.4c0,0-6.3-87.5,63.7-141.1
					c0,0,42.3-40.4,108.1-40.6c0,0-47.3,125.2-45.1,130.8C937.1,421.5,861,439.3,810.3,472.4z M967.4,655
					c-108.1-15.6-128.3-81.5-128.3-81.5c48.1-18.9,123.8-25.2,123.8-25.2l17.5,4.9c16.9,2.2,99,82.1,99,82.1
					C1017.2,667.8,967.4,655,967.4,655z M1153.9,559.4c-30.8-60.9-91-109.9-91-109.9c17.1-50.2,24.1-129.9,24.1-129.9
					c51.7,27.1,78.3,89.4,78.3,89.4C1197.9,463.2,1153.9,559.4,1153.9,559.4z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    id="eyeLayout"
                    className="st5"
                    d="M0,1080V0h1922.5v1080H0z M400.1,194.6
				c-47.4,0-96.8,1.4-146.2,3.7h-2l0.3,2c0.3,1,29.3,117.9,96.4,247.4c62.4,119.3,171.1,274,335.7,333
				c156.8,74.6,472.7,80.8,703.4,85.2c139,2.7,249.1,4.8,289.7,19.8h0.3h56.2l-25.2-58.3c-6.5-17.4-68.5-170.7-255.9-322.4
				C1278,363.3,953.6,194.6,400.1,194.6z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div id="right-eye">
          <svg
            version="1.1"
            className="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            style={{ enableBackground: "new 0 0 1920 1080" }}
            space="preserve"
          >
            <g>
              <g>
                <rect
                  x="166"
                  y="103.8"
                  className="st0"
                  width="1543.7"
                  height="832.3"
                />
                <g>
                  <g>
                    <g id="Layer_3">
                      <circle
                        id="_x3C_eyeBorder_x3E_"
                        className="st1"
                        cx="929.5"
                        cy="484.7"
                        r="337.1"
                      />
                    </g>
                    <g id="Layer_4">
                      <circle
                        id="_x3C_RedColor_x3E_"
                        className="st2"
                        cx="929.7"
                        cy="485.5"
                        r="337.1"
                      />
                    </g>
                    <g>
                      <g className="spin-rightEye">
                        <circle
                          id="_x3C_Path_id_x3D__x22_circle_x22__x3E_"
                          className="st3"
                          cx="929.1"
                          cy="477.9"
                          r="213.2"
                        />
                        <g className="eyePointer3">
                          <ellipse
                            transform="matrix(0.5979 -0.8016 0.8016 0.5979 -150.0656 1067.7954)"
                            cx="989.2"
                            cy="683.5"
                            rx="45.6"
                            ry="47.2"
                          />
                          <path
                            d="M1000.2,738.7c-28.7-2-42-11-51.4-32.9c-21.3-49.9,47.7-58.8,44.1-35.7c-12.3,77.7,154.8,32.5,111.9,47.3
								C1078.9,726.3,1028.9,740.8,1000.2,738.7z"
                          />
                        </g>
                        <g className="eyePointer2">
                          <ellipse
                            transform="matrix(0.9999 -1.152510e-02 1.152510e-02 0.9999 -5.3237 8.3622)"
                            cx="722.9"
                            cy="466.1"
                            rx="47.2"
                            ry="45.6"
                          />
                          <path
                            d="M680.8,428.7c24-15.8,40-16.8,60.8-5c47.4,26.6-2.2,75.7-13.3,55.1c-37.4-69.2-142.7,68.1-117.6,30.3
								C625.9,486.2,656.8,444.3,680.8,428.7z"
                          />
                        </g>
                        <g className="eyePointer1">
                          <ellipse
                            transform="matrix(0.5713 -0.8208 0.8208 0.5713 174.7362 1054.5171)"
                            cx="1096.8"
                            cy="360"
                            rx="47.2"
                            ry="45.6"
                          />
                          <path
                            d="M1151.6,347.5c-1.1,28.7-9.6,42.4-31.2,52.4c-49.3,22.9-60.4-45.8-37.2-42.9c78.2,9.7,27.4-155.8,43.7-113.4
								C1136.7,269.1,1152.8,318.7,1151.6,347.5z"
                          />
                        </g>
                      </g>
                    </g>
                    <g>
                      <ellipse
                        id="_x3C_eyeMiddle_x3E_"
                        cx="930.2"
                        cy="478.5"
                        rx="61"
                        ry="61"
                      />
                    </g>
                    <path
                      className="mangekyo st4"
                      d="M723.8,684c35.8,39.3,104.3,55.5,104.3,55.5
					s79.1,20.8,171.9-28.9s116.2-138.3,116.2-138.3c54.1,10.1,86.2-13.7,86.2-13.7s35.9-12.3,8.8-122.3
					c-27-109.9-118.3-149.2-168-168.6c-49.7-19.4-122.9-6.2-122.9-6.2c-34.4-64.5-62.9-72.9-62.9-72.9
					c-115,30-179.4,155.9-168.5,250.3s61,149.1,61,149.1C706.5,654.2,723.7,684.1,723.8,684z M985.3,464.9
					c7.9,28.9-9,58.7-37.9,66.6s-58.7-9-66.6-37.9s9.1-58.7,37.9-66.6C947.6,419.1,977.4,436,985.3,464.9z M985.5,421.5
					c2.2-5.6-45.1-130.8-45.1-130.8c65.8,0.2,108.1,40.6,108.1,40.6c70,53.6,63.7,141.1,63.7,141.1
					C1061.5,439.3,985.4,421.5,985.5,421.5z M843.1,635.3c0,0,82.1-79.9,99-82.1l17.5-4.9c0,0,75.7,6.3,123.8,25.2
					c0,0-20.2,65.9-128.3,81.5C955.1,655,905.3,667.8,843.1,635.3z M757.2,409c0,0,26.6-62.3,78.3-89.4c0,0,7,79.7,24.1,129.9
					c0,0-60.2,49-91,109.9C768.6,559.4,724.6,463.2,757.2,409z"
                    />
                  </g>
                </g>
                <g>
                  <path
                    id="_x3C_Compound_Path_id_x3D__x22_eyeLayout_x22__x3E_"
                    className="st5"
                    d="M0,1080V0h1922.5v1080H0z M469.7,505
				C282.3,656.7,220.3,810,213.8,827.4l-25.2,58.3h56.2h0.3c40.6-15,150.7-17.1,289.7-19.8c230.7-4.4,546.6-10.6,703.4-85.2
				c164.6-59,273.3-213.7,335.7-333c67.1-129.5,96.1-246.4,96.4-247.4l0.3-2h-2c-49.4-2.3-98.8-3.7-146.2-3.7
				C968.9,194.6,644.5,363.3,469.7,505z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default Sharingan;
