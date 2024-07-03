import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="mx-auto px-4 sm:px-6 mt-10">
        {Array.from({ length: 20 }).map((_, idx) => (
            <li
            key={idx}
            className="MuiListItem-root MuiListItem-gutters MuiListItem-divider sc-guhxjM kLylVR css-iicyhe animate-pulse mt-2"
            aria-label="Loading placeholder"
          >
            <div className="sc-bYpRZF ymler km-listitem--large">
              <div tabIndex={0} role="link" className="sc-bqOYya camFgS">
                <div className="sc-eFyDpN HYEkl">
                  <div className="sc-crHHJw fMoFkq">
                    <div className="sc-dEFUer gWnLJD">
                      <div className="sc-jvBtAx bjbJWW skeleton-image"></div>
                    </div>
                  </div>
                  <div className="sc-ettago hUiTnd">
                    <div className="sc-blmEgr sc-fGrmBj iVVdBa doCOYX skeleton-text skeleton-title"></div>
                    <span className="sc-fLseNd sc-dmcoYd gArHzz dlSNJK">
                      <span className="skeleton-text skeleton-subtext"></span>·
                      <span className="skeleton-text skeleton-subtext"></span>
                    </span>
                    <span className="sc-fLseNd sc-dmcoYd gArHzz dlSNJK">
                      <span className="skeleton-text skeleton-subtext"></span>·
                      <span className="skeleton-text skeleton-subtext"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="sc-gHjVMF ehLAgn"
                style={{
                  display: "flex",
                  height: "100%",
                  width: "90px",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="sc-fZZVMt cIcFaH">
                  <button className="sc-iPFWtD sc-gkTIco iENlny kcILdS" disabled>
                    <i className="rmwc-icon rmwc-icon--ligature google-symbols sc-iBdnpw dgOjli notranslate">
                      arrow_drop_up
                    </i>
                  </button>
                  <span className="sc-bBkKde sc-cSrxju czZTlm KlTsa skeleton-text skeleton-votes"></span>
                </div>
              </div>
            </div>
          </li>
        ))}
      
    </div>
  );
};

export default Loading;
