"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 8969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9008);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7028);




const Header = (props)=>{
    const { title  } = props;
    const { dark , _  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_head__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "initial-scale=1.0, width=device-width"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "theme-color",
                content: !dark ? '#ffffff' : '#000000'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Developer. Designer. Tech Enthusiast."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: "knp soda website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: " I'm a software developer from Phitsanulok Thailand. 🔥"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:site",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:creator",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "google-site-verification",
                content: "6zN_DV-uihM3ghNKdbtKIDTZXlcdQv9WFH5BHz8wnyE"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title !== null ? title : 'kannapong Aiamtip'
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 5442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$n": () => (/* binding */ nav),
/* harmony export */   "_$": () => (/* binding */ landing),
/* harmony export */   "jZ": () => (/* binding */ about),
/* harmony export */   "aP": () => (/* binding */ techstack),
/* harmony export */   "ns": () => (/* binding */ contactInfo),
/* harmony export */   "ZU": () => (/* binding */ personalProjectsInfo),
/* harmony export */   "w0": () => (/* binding */ groupProjectsInfo),
/* harmony export */   "lV": () => (/* binding */ myteamInfo),
/* harmony export */   "H4": () => (/* binding */ workInfo)
/* harmony export */ });
const nav = {
    logo: 'Peerapon_Chaijittiprasert',
    links: [
        {
            text: 'PROJECT',
            to: '/projects'
        },
        {
            text: 'WORK',
            to: '/work'
        },
        {
            text: 'MyTeam',
            to: '/myteam'
        },
        {
            text: 'CONTACT',
            to: '/contact'
        },
        {
            text: 'Web Portfolio',
            to: "https://captainrockp1.wixsite.com/my-site"
        }
    ]
};
const landing = {
    img: {
        url: 'https://media.licdn.com/dms/image/D5603AQHkEb6fkHt28A/profile-displayphoto-shrink_800_800/0/1679029164676?e=1686787200&v=beta&t=6MUfE4fCx15Dsn_ElFvjQeextt_w-Y9LBPTxwbwrjEo',
        alt: 'Peerapon Chaijittiprasert'
    },
    text: [
        'Hi !',
        "I'm",
        'Peerapon Chaijittiprasert.',
        "I'm a"
    ],
    btnText: 'Get in Touch'
};
const about = [
    "This website was created by Mr. Peerapon Chaijittiprasert (Captain)🌟🌟",
    '',
    "🔥 I am a student from Naresuan University who codes for fun. I have been in coding since 2019 and I'm a software developer from Phitsanulok Thailand. 🔥",
    '',
    '🌈 I enjoy developing simple and beautiful application to solve complex problems. When I am not coding, watching movies or reading books for relaxing.',
    ''
];
const techstack = [
    {
        img: '/assets/stack/kotlin.svg',
        name: 'Android'
    },
    {
        img: '/assets/stack/fastapi.svg',
        name: 'FastAPI'
    },
    {
        img: '/assets/stack/python.svg',
        name: 'Python'
    },
    {
        img: '/assets/stack/react.svg',
        name: 'React'
    },
    {
        img: '/assets/stack/vue.svg',
        name: 'Vue'
    },
    {
        img: '/assets/stack/nextjs.svg',
        name: 'Next JS'
    },
    {
        img: '/assets/stack/nodejs.svg',
        name: 'Node'
    }, 
];
const contactInfo = {
    heading: [
        'Get in ',
        'Touch'
    ],
    primary: [
        {
            img: '/assets/contact/Telegram.svg',
            link: 'https://t.me/Captainrockp1',
            name: 'Telegram'
        },
        {
            img: '/assets/contact/email.svg',
            link: 'mailto:Captainrockp1@gmail.com',
            name: 'Mail'
        }, 
    ],
    social: [
        {
            img: '/assets/contact/Github.svg',
            link: 'https://github.com/Captainrock1',
            name: 'GitHub'
        },
        {
            img: '/assets/contact/fb.svg',
            link: 'https://www.facebook.com/chaijittiprasert/',
            name: 'Facebook'
        },
        {
            img: '/assets/contact/Instagram.svg',
            link: 'https://www.instagram.com/captainrockp1',
            name: 'Instagram'
        },
        {
            img: '/assets/contact/Twitter.svg',
            link: 'https://twitter.com/Captainrockp1',
            name: 'Twitter'
        },
        {
            img: '/assets/contact/LinkedIN.svg',
            link: 'https://www.linkedin.com/in/peerapon-chaijittiprasert-991348252',
            name: 'LinkedIN'
        }, 
    ]
};
/*export const resume = {
  url: '',
  btn: 'DOWNLOAD RESUME',
};*/ const personalProjectsInfo = [
    {
        title: 'web_etkd',
        subtitle: 'Web Application for Exchanging and Trading Knowledge Documents.',
        img: 'assets/projects/WebETKD.jpg',
        redirect: '',
        github: 'https://github.com/Captainrock1/Final_Project',
        link: 'https://webapp-etkd.cyclic.app/'
    },
    {
        title: 'resource_capacity_plan',
        subtitle: 'Web Application - Resource Capacity Plan for IBM Manage Service Project',
        img: 'assets/projects/resource_capacity_plan.jpg',
        redirect: '',
        github: 'https://github.com/Captainrock1/RCP-Project',
        link: 'https://drive.google.com/file/d/1ENUHKITTS4T8Invp23jrot3OLp75HIEf/view?usp=sharing'
    },
    {
        title: 'crypto_currency',
        subtitle: 'Calculating cryptocurrency taxes (personal income tax) using a function in Java programming language',
        img: 'assets/projects/cryptotax.jpg',
        redirect: '',
        github: 'https://github.com/Captainrock1/CryptoTaxTest',
        link: 'https://www.itax.in.th/pedia/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%93%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%9B%E0%B9%82%E0%B8%97-%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%94%E0%B8%B2/?fbclid=IwAR1s81IDDnSyrFKoP0lzLFKa7ScrPvLD1yTwIJtNgZeUX66-3Ku1Q3eneqI'
    }, 
];
const groupProjectsInfo = [
    {
        title: 'Hotel Management System',
        subtitle: 'A website named The Nextgen Hotel, developed by me and my Internet Programming group members, using PHP.',
        img: 'assets/projects/WebETKD.jpg',
        redirect: '',
        github: 'https://github.com/Captainrock1/IP_project',
        link: 'http://web-etkd.infinityfreeapp.com/IP_project'
    }, 
];
const myteamInfo = [
    {
        name: 'Kanaphong Aiamtip',
        nickname: 'Nick Name Soda',
        penname: 'Pen Name Sea_taley',
        img: 'assets/soda.jpg',
        website: '',
        github: 'https://github.com/KanapongAiamtip',
        fb: 'https://www.facebook.com/profile.php?id=100006123256688',
        ig: 'https://www.instagram.com/_______knp___krit/'
    },
    {
        name: 'Nutdanai Wongveeradachakajohn',
        nickname: 'Nick Name Aten',
        penname: 'Pen Name GodDuckBoy',
        img: 'assets/Aten.jpg',
        website: '',
        github: 'https://github.com/GodDuckBoy',
        fb: 'https://www.facebook.com/profile.php?id=100002694698578',
        ig: 'https://www.instagram.com/godduckboy/'
    }, 
];
const workInfo = [
    {
        title: 'IBM Thailand',
        url: 'https://www.ibm.com/planetwide/th/',
        img: 'assets/work/ibm.jpg',
        imgDark: 'assets/work/ibm.jpg',
        duration: '13 Jun 2022 -30 Sep 2022',
        role: 'Application developer (Intern)',
        about: [
            'Developed and deployed a Node.js-based web application named "Web Application - Resource Capacity Plan for IBM Manage Service Project" for internal use.',
            'Assisted in developing a report using JasperReports to convert the format and appearance of Crystal Reports.',
            'Designed a flowchart to support the NSIPS system.',
            'Find and fix Calendar issues in JSP file.',
            'Studied Java Spring Boot framework courses to support and contribute to application development in the MT9XX MF Decom project.', 
        ]
    },
    {
        title: 'Computer Science Information Technology Naresuan University',
        url: 'https://csit.nu.ac.th/',
        img: 'assets/work/csit.jpg',
        imgDark: 'assets/work/csit.jpg',
        duration: '',
        role: 'Teacher assistant',
        about: [
            'Teacher assistant Teaching programming Object Oriented Programming 2/2022',
            'Teacher assistant Teaching programming Numerical Methods 2/2022',
            'Teacher assistant Teaching programming Object Oriented Programming 2/2021', 
        ]
    }, 
];


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8969);
/* harmony import */ var _lib_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5442);





const NotFound = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dark:bg-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " flex h-screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "m-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "items-center justify-center text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mx-auto flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-3xl font-bold text-black dark:text-white",
                                    children: [
                                        _lib_content__WEBPACK_IMPORTED_MODULE_4__/* .nav.logo */ .$n.logo,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "rounded-full bg-blue h-2 w-2 inline-block"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "md:text-4xl text-lg font-bold text-blue",
                                    children: "404"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-base md:text-3xl dark:text-white",
                                    children: "The page you're looking for does not exist."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-lightblue dark:bg-blue px-5 md:px-10 py-2 md:py-3 mt-10 rounded-lg md:text-lg text-sm text-blue dark:text-white font-medium capitalize hover:bg-blue hover:text-white transition-colors duration-400 focus:outline-none",
                                        children: "HOME"
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 5656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7028);




const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__/* .ThemeProvider */ .f, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 4208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static async getInitialProps(ctx) {
        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
            (function() {
              var storageKey = 'dark';
              var classNameDark = 'dark';
              var classNameLight = 'light';
              var d = document.querySelector('html');
              function setClassOnDocumentBody(dark) {
                d.classList.add(dark ? classNameDark : classNameLight);
                d.classList.remove(dark ? classNameLight : classNameDark);
              }
              var localStorageTheme = null;
              try {
                localStorageTheme = localStorage.getItem(storageKey);
              } catch (err) {}
              var localStorageExists = localStorageTheme !== null;
              if (localStorageExists) {
                localStorageTheme = JSON.parse(localStorageTheme);
              }
              if (localStorageExists) {
                setClassOnDocumentBody(localStorageTheme);
              } else {
                var isDarkMode = d.classList.contains(classNameDark);
                localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
              }
            })();
          `
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 7028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);


const defaultState = {
    dark: false,
    toggleDark: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(defaultState);
const ThemeProvider = ({ children  })=>{
    const { 0: dark , 1: setDark  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const lsDark = localStorage.getItem('dark');
        if (lsDark !== null) {
            setDark(JSON.parse(lsDark));
        }
    }, []);
    const toggleDark = ()=>{
        const d = document.documentElement;
        const themes = [
            'light',
            'dark'
        ];
        if (dark) {
            d.classList.remove(...themes);
            d.classList.add('light');
        } else {
            d.setAttribute('class', 'dark');
        }
        localStorage.setItem('dark', JSON.stringify(!dark));
        setDark(!dark);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            dark,
            toggleDark
        },
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);



/***/ }),

/***/ 7020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/kdMK_fLP0sgwVXM_u0Iy1/_buildManifest.js","static/kdMK_fLP0sgwVXM_u0Iy1/_ssgManifest.js","static/kdMK_fLP0sgwVXM_u0Iy1/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/05d954cf-320e7c51742a56cf.js","static/chunks/465-f1a2bf8921a54a40.js","static/chunks/pages/index-175b94ab60b05b02.js"],"/404":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/pages/404-2ccfcb3f08b1ad19.js"],"/_app":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/css/405f006a6c66a1df.css","static/chunks/pages/_app-df7d35742debc96a.js"],"/_error":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/pages/_error-2280fa386d040b66.js"],"/contact":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/05d954cf-320e7c51742a56cf.js","static/chunks/465-f1a2bf8921a54a40.js","static/chunks/pages/contact-8d00935d2166ca20.js"],"/myteam":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/05d954cf-320e7c51742a56cf.js","static/chunks/465-f1a2bf8921a54a40.js","static/chunks/pages/myteam-02310a0a8ca34a1f.js"],"/projects":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/05d954cf-320e7c51742a56cf.js","static/chunks/465-f1a2bf8921a54a40.js","static/chunks/pages/projects-70a64299448c9992.js"],"/work":["static/chunks/webpack-69bfa6990bb9e155.js","static/chunks/framework-e70c6273bfe3f237.js","static/chunks/main-01df828e572375b9.js","static/chunks/05d954cf-320e7c51742a56cf.js","static/chunks/465-f1a2bf8921a54a40.js","static/chunks/pages/work-91538c4195eedd4f.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 3978:
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ 9450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;