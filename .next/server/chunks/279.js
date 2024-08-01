"use strict";
exports.id = 279;
exports.ids = [279];
exports.modules = {

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ network_statistics)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "styled-breakpoints"
var external_styled_breakpoints_ = __webpack_require__(6170);
;// CONCATENATED MODULE: ./components/network-statistics/Statistic.tsx



function Statistic(props) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                children: props.header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Value, {
                children: props.value
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Statistic_Object, {
                children: props.object
            })
        ]
    }));
}
const Header = external_styled_components_default().span.withConfig({
    componentId: "sc-cf00cb1f-0"
})`
  font-weight: medium;
  color: rgba(58, 54, 48, 0.65);
`;
const Value = external_styled_components_default().span.withConfig({
    componentId: "sc-cf00cb1f-1"
})`
  font-family: "Eveleth";
  font-size: 44px;
`;
const Statistic_Object = external_styled_components_default().span.withConfig({
    componentId: "sc-cf00cb1f-2"
})`
  font-weight: bold;
`;
const Container = external_styled_components_default().div.withConfig({
    componentId: "sc-cf00cb1f-3"
})`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-transform: uppercase;
  ${Header} {
    margin-bottom: 40px;
  }

  ${Value} {
    margin-bottom: 5px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    align-items: center;
  }
`;
/* harmony default export */ const network_statistics_Statistic = (external_styled_components_default()(Statistic).withConfig({
    componentId: "sc-cf00cb1f-4"
})``);

;// CONCATENATED MODULE: ./components/network-statistics/index.tsx




function NetworkStatistics(props) {
    if (true) {
        return null; //Disabled temporarily
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(network_statistics_Container, {
        className: props.className,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Notice, {
                children: "Did you know our network"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StatisticsContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics_Statistic, {
                        header: "employs over",
                        value: "2,900",
                        object: "members of staff"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics_Statistic, {
                        header: "owns over",
                        value: "312",
                        object: "fleet vehicles"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics_Statistic, {
                        header: "makes over",
                        value: "120,000",
                        object: "monthly deliveries"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics_Statistic, {
                        header: "plans over",
                        value: "10,000",
                        object: "monthly routes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(network_statistics_Statistic, {
                        header: "drives over",
                        value: "40,000",
                        object: "miles a month"
                    })
                ]
            })
        ]
    }));
}
const Notice = external_styled_components_default().span.withConfig({
    componentId: "sc-f5957209-0"
})`
  font-family: "Eveleth";
  font-size: 26px;
  text-align:center ;

  ${(0,external_styled_breakpoints_.down)("md")} {
    font-size: 20px;
  }
`;
const StatisticsContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-f5957209-1"
})`
  display: flex;
  gap: 100px;
  white-space: nowrap;
  max-width: 100%;
  overflow: scroll;
  align-items: center;
  align-content: center;

  ::-webkit-scrollbar {
    display: none;
  }

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding-left: 28%;
    height: 100%;
    max-width: 100%;
  }
`;
const network_statistics_Container = external_styled_components_default().div.withConfig({
    componentId: "sc-f5957209-2"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;

  background: #feba30;
  padding: 90px 0px 120px 0px;

  ${(0,external_styled_breakpoints_.down)("md")} {
    padding: 100px 0px;
    gap: 50px;
  }

  ${(0,external_styled_breakpoints_.down)("xs")} {
    padding: 50px 72px;
  }
`;
/* harmony default export */ const network_statistics = (external_styled_components_default()(NetworkStatistics).withConfig({
    componentId: "sc-f5957209-3"
})``);


/***/ })

};
;